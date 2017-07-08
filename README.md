# watch-media-query
Trigger Callback when Media Queries Activate or Deactivate

This function allows you to register a callback that will be triggered whenever the state of its corresponding media query either becomes active or inactive. The callback will be invoked with a single boolean parameter to indicate if the media query is now active or inactive.

For example, to add/remove the "portrait" and "landscape" classes when the orientation changes, you could do the following:

```
function modifyHtmlClass(className, enabled) {
  var html = document.querySelector('html');
  html.classList[enabled ? 'add' : 'remove'](className);
}

watchMediaQuery('(orientation: portrait)', function onPortraitMediaQuery(enabled) {
  modifyHtmlClass('portrait', enabled);
});

watchMediaQuery('(orientation: landscape)', function onLandscapeMediaQuery(enabled) {
  modifyHtmlClass('landscape', enabled);
});
```

This is backwards-compatible with older browsers by instead of adding a `matchMedia` listener simply watching for any window resizing.

For greatest portability, I've only included an ES5 version of the function here.
