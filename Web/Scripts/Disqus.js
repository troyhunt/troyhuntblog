// Disqus (breaks for old browsers - sorry ludites, no comments for you!)
var disqus_shortname = 'troyhunt';
if (!$.browser.msie || parseInt($.browser.version, 10) > 8) {
  var disqus_url = [location.protocol, '//', location.host, location.pathname].join('');
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