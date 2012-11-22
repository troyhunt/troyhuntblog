$(document).ready(function () {
  if (!Modernizr.svg) {
    var images = $('img[src$=".svg"]');
    images.each(function (i) {
      $(this).attr('src', $(this).attr('src').replace('.svg', '.png'));
    });
  }
});

$('img').parent('a').addClass('imageLink');

var disqus_shortname = 'troyhunt';
(function () {
  var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
  dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
  (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
})();