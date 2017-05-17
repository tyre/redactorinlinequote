if (!RedactorPlugins) var RedactorPlugins = {};

RedactorPlugins.inlineQuote = function() {
  return {
    init: function() {
      var button = this.button.add('inline-quote', '“‘’”');
      this.button.addDropdown(button, {
        point1: { title: "“Double quote”", func: this.inlineQuote.formatDouble },
        point2: { title: "‘Single quote’", func: this.inlineQuote.formatSingle },
        point3: { title: "<em>remove</em>", func: this.inlineQuote.removeFormatting }
      });
    },
    removeFormatting: function() {
      var parent = this.selection.parent();
      if (parent && parent.tagName == "Q") {
        var quoteTag = $(parent).eq(0);
        var quoteText = quoteTag.html();
        var newText = quoteText.substr(1, quoteText.length - 2);
        var newParentHtml = quoteTag.parent().html().replace(quoteTag[0].outerHTML, newText);
        quoteTag.parent().html(newParentHtml);
      }
    },
    formatDouble: function() {
      if (this.selection.is()) {
        var html = this.selection.html();
        this.selection.replace("<q>“" + html + "”</q>");
      }
    },
    formatSingle:function(formatFunc) {
      if (this.selection.is()) {
        var html = this.selection.html();
        this.selection.replace("<q>‘" + html + "’</q>");
      }
    }
  };
};
