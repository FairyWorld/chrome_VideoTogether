// ==UserScript==
// @name         Video Together 一起看视频
// @namespace    http://vt.panghair.com
// @version      0.1
// @description  Watch video together 一起看视频
// @author       maggch@outlook.com
// @match        *://*/*
// @icon         https://cdn.jsdelivr.net/gh/maggch97/VideoTogether/icon/favicon-32x32.png
// @downloadURL  https://raw.githubusercontent.com/maggch97/VideoTogether/main/source/js/extension.js
// @updateURL    https://raw.githubusercontent.com/maggch97/VideoTogether/main/source/js/extension.js
// @grant        none
// ==/UserScript==

(function () {
    let wrapper = document.createElement("div");
    wrapper.innerHTML = `{{{ {"user": "./html/loading.html"} }}}`
    document.getElementsByTagName('body')[0].appendChild(wrapper);
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://cdn.jsdelivr.net/gh/maggch97/VideoTogether@latest/source/js/vt.js';
    document.getElementsByTagName('body')[0].appendChild(script);
})();