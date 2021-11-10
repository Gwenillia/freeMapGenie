function injectCode(src) {
  const script = document.createElement('script');
  script.src = src;
  script.onload = function() {
    console.log("You should buy it to support mapgenie ! But yeah, you're temporary a pro 😅");
    this.remove();
  };
  document.body.appendChild(script);
}


injectCode(chrome.runtime.getURL('/get_pro.js'));
