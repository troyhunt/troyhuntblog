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
  var disqus_url = [location.protocol, '//', location.host, location.pathname].join('');
  (function () {
    var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
    dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
  })();
}

// Disqus comment count
(function () {
  var s = document.createElement('script'); s.async = true;
  s.type = 'text/javascript';
  s.src = '//' + disqus_shortname + '.disqus.com/count.js';
  (document.getElementsByTagName('HEAD')[0] || document.getElementsByTagName('BODY')[0]).appendChild(s);
}());

// Google Analytics
(function (i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
    (i[r].q = i[r].q || []).push(arguments)
  }, i[r].l = 1 * new Date(); a = s.createElement(o),
  m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-10949399-1', 'auto');
ga('send', 'pageview');

// Twitter follow button
!function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (!d.getElementById(id)) {
    js = d.createElement(s);
    js.id = id; js.src = "//platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);
  }
}(document, "script", "twitter-wjs");

// Developer media ads
function _dmBootstrap(file) {
  var _dma = document.createElement('script');
  _dma.type = 'text/javascript';
  _dma.async = true;
  _dma.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + file;
  (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(_dma);
}
function _dmFollowup(file) { if (typeof DMAds === 'undefined') _dmBootstrap('cdn2.DeveloperMedia.com/a.min.js'); }
(function () { _dmBootstrap('cdn1.DeveloperMedia.com/a.min.js'); setTimeout(_dmFollowup, 2000); })();