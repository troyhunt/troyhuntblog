// Replace SVG with PNG if not supported
if (!Modernizr.svg) {
  var images = $('img[src$=".svg"]');
  images.each(function (i) {
    $(this).attr('src', $(this).attr('src').replace('.svg', '.png'));
  });
}

// Don't put links under images
$('img').parent('a').addClass('imageLink');

// Disqus (breaks for old browsers - sorry ludites, no comments for you!)
var disqus_shortname = 'troyhunt';
if (!$.browser.msie || parseInt($.browser.version, 10) > 8) {
  (function () {
    var dsq = document.createElement('script');
    dsq.type = 'text/javascript';
    dsq.async = true;
    dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
  })();
}

// Disqus comment count
(function () {
  var s = document.createElement('script'); s.async = true;
  s.type = 'text/javascript';
  s.src = 'http://' + disqus_shortname + '.disqus.com/count.js';
  (document.getElementsByTagName('HEAD')[0] || document.getElementsByTagName('BODY')[0]).appendChild(s);
}());

// Google Analytics
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-10949399-1']);
_gaq.push(['_trackPageview']);
(function () {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

// Twitter follow button
!function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (!d.getElementById(id)) {
    js = d.createElement(s);
    js.id = id; js.src = "//platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);
  }
}(document, "script", "twitter-wjs");