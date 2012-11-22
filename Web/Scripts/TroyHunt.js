// Replace SVG with PNG if not supported
$(document).ready(function () {
  if (!Modernizr.svg) {
    var images = $('img[src$=".svg"]');
    images.each(function (i) {
      $(this).attr('src', $(this).attr('src').replace('.svg', '.png'));
    });
  }
});

// Don't put links underimages
$('img').parent('a').addClass('imageLink');

// Disqus
var disqus_shortname = 'troyhunt';
(function () {
  var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
  dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
  (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
})();

// Google Analytics
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-10949399-1']);
_gaq.push(['_trackPageview']);
(function () {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();