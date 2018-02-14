(function () {
var code = (function () {
  'use strict';

  var PluginManager = tinymce.util.Tools.resolve('tinymce.PluginManager');

  var DOMUtils = tinymce.util.Tools.resolve('tinymce.dom.DOMUtils');

  var getMinWidth = function (editor) {
    return editor.getParam('code_dialog_width', 600);
  };
  var getMinHeight = function (editor) {
    return editor.getParam('code_dialog_height', Math.min(DOMUtils.DOM.getViewPort().h - 200, 500));
  };
  var $_cf3f2w92jdmdg0i9 = {
    getMinWidth: getMinWidth,
    getMinHeight: getMinHeight
  };

  var setContent = function (editor, html) {
    editor.focus();
    editor.undoManager.transact(function () {
      editor.setContent(html);
    });
    editor.selection.setCursorLocation();
    editor.nodeChanged();
  };
  var getContent = function (editor) {
    return editor.getContent({ source_view: true });
  };
  var $_fo1z6p94jdmdg0ib = {
    setContent: setContent,
    getContent: getContent
  };

  var open = function (editor) {
    var minWidth = $_cf3f2w92jdmdg0i9.getMinWidth(editor);
    var minHeight = $_cf3f2w92jdmdg0i9.getMinHeight(editor);
    var win = editor.windowManager.open({
      title: 'Source code',
      body: {
        type: 'textbox',
        name: 'code',
        multiline: true,
        minWidth: minWidth,
        minHeight: minHeight,
        spellcheck: false,
        style: 'direction: ltr; text-align: left'
      },
      onSubmit: function (e) {
        $_fo1z6p94jdmdg0ib.setContent(editor, e.data.code);
      }
    });
    win.find('#code').value($_fo1z6p94jdmdg0ib.getContent(editor));
  };
  var $_cw5cs791jdmdg0i7 = { open: open };

  var register = function (editor) {
    editor.addCommand('mceCodeEditor', function () {
      $_cw5cs791jdmdg0i7.open(editor);
    });
  };
  var $_6qpdbi90jdmdg0i5 = { register: register };

  var register$1 = function (editor) {
    editor.addButton('code', {
      icon: 'code',
      tooltip: 'Source code',
      onclick: function () {
        $_cw5cs791jdmdg0i7.open(editor);
      }
    });
    editor.addMenuItem('code', {
      icon: 'code',
      text: 'Source code',
      onclick: function () {
        $_cw5cs791jdmdg0i7.open(editor);
      }
    });
  };
  var $_ccyia995jdmdg0ic = { register: register$1 };

  PluginManager.add('code', function (editor) {
    $_6qpdbi90jdmdg0i5.register(editor);
    $_ccyia995jdmdg0ic.register(editor);
    return {};
  });
  function Plugin () {
  }

  return Plugin;

}());
})();
