// the callback function will be passed a boolean, which is true
// if the media query matches and false otherwise
function watchMediaQuery(query, callback) {
  var matcher = window.matchMedia(query);

  function executeCallback(result) {
    if (typeof callback === 'function') {
      callback(result.matches);
    }
  }

  executeCallback(matcher);

  if (typeof matcher.addListener !== 'undefined') {
    matcher.addListener(executeCallback);
  } else {
    window.addEventListener('resize', function watchMediaQueryOnResize() {
      executeCallback(matcher.matches);
    });
  }
}
