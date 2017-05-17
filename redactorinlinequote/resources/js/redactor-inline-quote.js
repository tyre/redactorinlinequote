if (!RedactorPlugins) var RedactorPlugins = {};

RedactorPlugins.inlineQuote = function() {
  return {
    init: function() {
      var button = this.button.add('my-button', 'Inline Quote');
      this.button.addCallback(button, this.inlineQuote.show);
    },
    format: function() {
      if (this.selection.is()) {
        var text = this.selection.text();
        this.insert.set("<q>“" + text + "”</q>");
      }
    },
    removeFormat: function() {
      var selectedElement = this.selection.get();
      if (selectedElement.prop("tagName") === "Q") {
        var text = this.selectedElement.innerHtml();
        this.selection.set(text.substr(1, text.length - 1));
      }
    }
  };
};
