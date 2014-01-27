(function ($) {
  $.fn.pageScraper = function(options) {
  	var defaults = {
      element: '#link_display'
    },
    settings = $.extend({}, defaults, options)

    this.each(function() {
    	var href = $(this).attr('href')
      var innerText = $(this).text()

      $(settings.element).append(innerText + ' ' + href + '<br>')
    })
  }
}(jQuery))