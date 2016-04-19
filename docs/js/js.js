// Don't bother showing the cookie notice if the user is blocking cookies.
if (navigator.cookieEnabled) {
  window.cookieconsent_options = {"message":"This website, like many others, uses cookies.","dismiss":"OK","learnMore":"More info","link":"//www.aliterate.org/about/privacy/","theme":"dark-bottom"};

  var js = document.createElement("script");

  js.type = "text/javascript";
  js.src = "//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/1.0.9/cookieconsent.min.js";

  document.body.appendChild(js);
}
