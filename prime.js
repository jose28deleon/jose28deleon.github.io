// INSERT CSS
var sfic_css = document.createElement('link');
sfic_css.setAttribute('rel', 'stylesheet');
sfic_css.setAttribute('href', 'style.css?now=' + Date.now());
document.head.appendChild(sfic_css);
// INSERT SCRIPT
var sfic_script = document.createElement('script');
sfic_script.setAttribute('src', 'index.js?now=' + Date.now());
document.head.appendChild(sfic_script);