import 'prismjs';
import { result, jsButton, htmlButton, cssButton } from './constants';
import { initNavigation } from './navigation/navigation';

async function fetchSourceFile({ url, source, codeElement, buttonElement }) {
  const result = await fetch(`${url}/${source}`);
  if (result.ok) {
    const sourceCode = await result.text();
    codeElement.textContent = sourceCode;
    buttonElement.removeAttribute('hidden');
  }
}

export async function initSandbox() {
  const htmlCodeElement = document.querySelector('.language-html');
  const cssCodeElement = document.querySelector('.language-css');
  const jsCodeElement = document.querySelector('.language-js');

  const params = new URLSearchParams(document.location.search.substring(1));
  const decodedUrl = params.get('url');
  const url = decodeURIComponent(decodedUrl);

  await fetchSourceFile({
    url,
    source: 'index.html',
    codeElement: htmlCodeElement,
    buttonElement: htmlButton,
  });
  await fetchSourceFile({
    url,
    source: 'styles.css',
    codeElement: cssCodeElement,
    buttonElement: cssButton,
  });
  await fetchSourceFile({
    url,
    source: 'main.js',
    codeElement: jsCodeElement,
    buttonElement: jsButton,
  });

  Prism.highlightAll();

  result.src = url;
}

initNavigation();
(async () => {
  try {
    await initSandbox();
  } catch (error) {
    console.error(`Whoops, something went wrong here ¯\_(ツ)_/¯: `, error);
  }
})();
