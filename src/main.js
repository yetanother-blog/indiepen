import 'prismjs';
import 'prismjs/plugins/file-highlight/prism-file-highlight.js';
import 'prismjs/themes/prism.css';

const params = new URLSearchParams(document.location.search.substring(1));
const decodedUrl = params.get("url");
const url = decodeURIComponent(decodedUrl);

const iframe = document.querySelector('.result');
const previewHtml = document.querySelector('.preview-html');
const previewCss = document.querySelector('.preview-css');
const previewJs = document.querySelector('.preview-js');

iframe.src = url;
previewHtml.dataset.src = `${url}/index.html`;
previewCss.dataset.src = `${url}/styles.css`;
previewJs.dataset.src = `${url}/main.js`;