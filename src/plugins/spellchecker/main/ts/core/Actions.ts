/**
 * Actions.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2017 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

import Tools from 'tinymce/core/api/util/Tools';
import URI from 'tinymce/core/api/util/URI';
import XHR from 'tinymce/core/api/util/XHR';
import Events from '../api/Events';
import Settings from '../api/Settings';
import DomTextMatcher from './DomTextMatcher';

const getTextMatcher = function (editor, textMatcherState) {
  if (!textMatcherState.get()) {
    const textMatcher = DomTextMatcher(editor.getBody(), editor);
    textMatcherState.set(textMatcher);
  }

  return textMatcherState.get();
};

const isEmpty = function (obj) {
  for (const _ in obj) {
    return false;
  }

  return true;
};

const defaultSpellcheckCallback = function (editor, pluginUrl, currentLanguageState) {
  return function (method, text, doneCallback, errorCallback) {
    const data = { method, lang: currentLanguageState.get() };
    let postData = '';

    data[method === 'addToDictionary' ? 'word' : 'text'] = text;

    Tools.each(data, function (value, key) {
      if (postData) {
        postData += '&';
      }

      postData += key + '=' + encodeURIComponent(value);
    });

    XHR.send({
      url: new URI(pluginUrl).toAbsolute(Settings.getRpcUrl(editor)),
      type: 'post',
      content_type: 'application/x-www-form-urlencoded',
      data: postData,
      success (result) {
        result = JSON.parse(result);

        if (!result) {
          const message = editor.translate('Server response wasn\'t proper JSON.');
          errorCallback(message);
        } else if (result.error) {
          errorCallback(result.error);
        } else {
          doneCallback(result);
        }
      },
      error () {
        const message = editor.translate('The spelling service was not found: (') +
          Settings.getRpcUrl(editor) +
          editor.translate(')');
        errorCallback(message);
      }
    });
  };
};

const sendRpcCall = function (editor, pluginUrl, currentLanguageState, name, data, successCallback, errorCallback?) {
  const userSpellcheckCallback = Settings.getSpellcheckerCallback(editor);
  const spellCheckCallback = userSpellcheckCallback ? userSpellcheckCallback : defaultSpellcheckCallback(editor, pluginUrl, currentLanguageState);
  spellCheckCallback.call(editor.plugins.spellchecker, name, data, successCallback, errorCallback);
};

const spellcheck = function (editor, pluginUrl, startedState, textMatcherState, lastSuggestionsState, currentLanguageState) {
  if (finish(editor, startedState, textMatcherState)) {
    return;
  }

  const errorCallback = function (message) {
    editor.notificationManager.open({ text: message, type: 'error' });
    editor.setProgressState(false);
    finish(editor, startedState, textMatcherState);
  };

  const successCallback = function (data) {
    markErrors(editor, startedState, textMatcherState, lastSuggestionsState, data);
  };

  editor.setProgressState(true);
  sendRpcCall(editor, pluginUrl, currentLanguageState, 'spellcheck', getTextMatcher(editor, textMatcherState).text, successCallback, errorCallback);
  editor.focus();
};

const checkIfFinished = function (editor, startedState, textMatcherState) {
  if (!editor.dom.select('span.mce-spellchecker-word').length) {
    finish(editor, startedState, textMatcherState);
  }
};

const addToDictionary = function (editor, pluginUrl, startedState, textMatcherState, word, spans) {
  editor.setProgressState(true);

  sendRpcCall(editor, pluginUrl, 'addToDictionary', word, function () {
    editor.setProgressState(false);
    editor.dom.remove(spans, true);
    checkIfFinished(editor, startedState, textMatcherState);
  }, function (message) {
    editor.notificationManager.open({ text: message, type: 'error' });
    editor.setProgressState(false);
  });
};

const ignoreWord = function (editor, startedState, textMatcherState, word, spans, all?) {
  editor.selection.collapse();

  if (all) {
    Tools.each(editor.dom.select('span.mce-spellchecker-word'), function (span) {
      if (span.getAttribute('data-mce-word') === word) {
        editor.dom.remove(span, true);
      }
    });
  } else {
    editor.dom.remove(spans, true);
  }

  checkIfFinished(editor, startedState, textMatcherState);
};

const finish = function (editor, startedState, textMatcherState) {
  getTextMatcher(editor, textMatcherState).reset();
  textMatcherState.set(null);

  if (startedState.get()) {
    startedState.set(false);
    Events.fireSpellcheckEnd(editor);
    return true;
  }
};

const getElmIndex = function (elm) {
  const value = elm.getAttribute('data-mce-index');

  if (typeof value === 'number') {
    return '' + value;
  }

  return value;
};

const findSpansByIndex = function (editor, index) {
  let nodes;
  const spans = [];

  nodes = Tools.toArray(editor.getBody().getElementsByTagName('span'));
  if (nodes.length) {
    for (let i = 0; i < nodes.length; i++) {
      const nodeIndex = getElmIndex(nodes[i]);

      if (nodeIndex === null || !nodeIndex.length) {
        continue;
      }

      if (nodeIndex === index.toString()) {
        spans.push(nodes[i]);
      }
    }
  }

  return spans;
};

const markErrors = function (editor, startedState, textMatcherState, lastSuggestionsState, data) {
  let suggestions, hasDictionarySupport;

  if (data.words) {
    hasDictionarySupport = !!data.dictionary;
    suggestions = data.words;
  } else {
    // Fallback to old format
    suggestions = data;
  }

  editor.setProgressState(false);

  if (isEmpty(suggestions)) {
    const message = editor.translate('No misspellings found.');
    editor.notificationManager.open({ text: message, type: 'info' });
    startedState.set(false);
    return;
  }

  lastSuggestionsState.set({
    suggestions,
    hasDictionarySupport
  });

  getTextMatcher(editor, textMatcherState).find(Settings.getSpellcheckerWordcharPattern(editor)).filter(function (match) {
    return !!suggestions[match.text];
  }).wrap(function (match) {
    return editor.dom.create('span', {
      'class': 'mce-spellchecker-word',
      'data-mce-bogus': 1,
      'data-mce-word': match.text
    });
  });

  startedState.set(true);
  Events.fireSpellcheckStart(editor);
};

export default {
  spellcheck,
  checkIfFinished,
  addToDictionary,
  ignoreWord,
  findSpansByIndex,
  getElmIndex,
  markErrors
};