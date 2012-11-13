$(document).ready(function () {
  if (!Modernizr.svg) {
    var images = $('img[src$=".svg"]');
    images.each(function (i) {
      $(this).attr('src', $(this).attr('src').replace('.svg', '.png'));
    });
  }
});

$('img').parent('a').addClass('imageLink');