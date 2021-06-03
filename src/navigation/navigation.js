import {
  previewHtml,
  previewCss,
  previewJs,
  result,
  PREVIEW_HTML_CLASS,
  PREVIEW_CSS_CLASS,
  PREVIEW_JS_CLASS,
  RESULT_CLASS,
} from '../constants';

const PREVIEWS_CLASS = '.previews';

const previewsWrapper = document.querySelector(PREVIEWS_CLASS);

function toggleHtmlPreview() {
  const HTML_BUTTON = '.js-navigation__button--html';
  const htmlButton = document.querySelector(HTML_BUTTON);

  htmlButton.addEventListener('click', (event) => {
    event.currentTarget.classList.toggle('active');
    handleAriaPressedState(htmlButton);
    removeActiveClasses(PREVIEW_HTML_CLASS, event);
    previewHtml.classList.toggle('active');

    if (!previewsWrapper.classList.contains('active')) {
      previewsWrapper.classList.add('active');
      result.classList.remove('active');
    }
  });
}

function toggleCssPreview() {
  const CSS_BUTTON = '.js-navigation__button--css';
  const cssButton = document.querySelector(CSS_BUTTON);

  cssButton.addEventListener('click', (event) => {
    event.currentTarget.classList.toggle('active');
    handleAriaPressedState(cssButton);
    removeActiveClasses(PREVIEW_CSS_CLASS, event);
    previewCss.classList.toggle('active');

    if (!previewsWrapper.classList.contains('active')) {
      previewsWrapper.classList.add('active');
      result.classList.remove('active');
    }
  });
}

function toggleJsPreview() {
  const JS_BUTTON = '.js-navigation__button--js';
  const jsButton = document.querySelector(JS_BUTTON);

  jsButton.addEventListener('click', (event) => {
    event.currentTarget.classList.toggle('active');
    handleAriaPressedState(jsButton);
    removeActiveClasses(PREVIEW_JS_CLASS, event);
    previewJs.classList.toggle('active');

    if (!previewsWrapper.classList.contains('active')) {
      previewsWrapper.classList.add('active');
      result.classList.remove('active');
    }
  });
}

function toggleResult() {
  const RESULT_BUTTON = '.js-navigation__button--result';
  const resultButton = document.querySelector(RESULT_BUTTON);

  resultButton.addEventListener('click', (event) => {
    event.currentTarget.classList.toggle('active');
    handleAriaPressedState(resultButton);
    removeActiveClasses(RESULT_CLASS, event);

    if (!result.classList.contains('active')) {
      result.classList.add('active');
      previewsWrapper.classList.remove('active');
    }
  });
}

function handleAriaPressedState(currentButton) {
  const buttonNodes = document.querySelectorAll('.navigation__button');
  const isPressed = Boolean(
    currentButton.getAttribute('aria-pressed') === 'true'
  );
  currentButton.setAttribute('aria-pressed', !isPressed);

  [...buttonNodes].map((button) => {
    if (currentButton !== button) {
      button.setAttribute('aria-pressed', false);
    }
  });
}

function removeActiveClasses(currentPreview, buttonEvent) {
  const previewNodes = document.querySelectorAll('.preview');
  const buttonNodes = document.querySelectorAll('.navigation__button');
  [...previewNodes].map((preview) => {
    if (!preview.classList.contains(currentPreview.substring(1))) {
      preview.classList.remove('active');
    }

    if (!result.classList.contains(currentPreview.substring(1))) {
      result.classList.remove('active');
    }
  });

  [...buttonNodes].map((button) => {
    if (buttonEvent.currentTarget !== button) {
      button.classList.remove('active');
    }
  });
}

export function initNavigation() {
  toggleHtmlPreview();
  toggleCssPreview();
  toggleJsPreview();
  toggleResult();
}
