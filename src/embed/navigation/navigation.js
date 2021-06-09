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
const PREVIEW_CLASS = '.preview';
const ACTIVE_CLASS = 'active';

const previewsWrapper = document.querySelector(PREVIEWS_CLASS);

function toggleHtmlPreview() {
  const HTML_BUTTON = '.js-navigation__button--html';
  const htmlButton = document.querySelector(HTML_BUTTON);

  htmlButton.addEventListener('click', (event) => {
    event.currentTarget.classList.toggle(ACTIVE_CLASS);
    handleAriaPressedState(htmlButton);
    removeActiveClasses(PREVIEW_HTML_CLASS, event);
    previewHtml.classList.toggle(ACTIVE_CLASS);

    if (!previewsWrapper.classList.contains(ACTIVE_CLASS)) {
      previewsWrapper.classList.add(ACTIVE_CLASS);
    }

    handleEmptyState();
  });
}

function toggleCssPreview() {
  const CSS_BUTTON = '.js-navigation__button--css';
  const cssButton = document.querySelector(CSS_BUTTON);

  cssButton.addEventListener('click', (event) => {
    event.currentTarget.classList.toggle(ACTIVE_CLASS);
    handleAriaPressedState(cssButton);
    removeActiveClasses(PREVIEW_CSS_CLASS, event);
    previewCss.classList.toggle(ACTIVE_CLASS);

    if (!previewsWrapper.classList.contains(ACTIVE_CLASS)) {
      previewsWrapper.classList.add(ACTIVE_CLASS);
    }

    handleEmptyState();
  });
}

function toggleJsPreview() {
  const JS_BUTTON = '.js-navigation__button--js';
  const jsButton = document.querySelector(JS_BUTTON);

  jsButton.addEventListener('click', (event) => {
    event.currentTarget.classList.toggle(ACTIVE_CLASS);
    handleAriaPressedState(jsButton);
    removeActiveClasses(PREVIEW_JS_CLASS, event);
    previewJs.classList.toggle(ACTIVE_CLASS);

    if (!previewsWrapper.classList.contains(ACTIVE_CLASS)) {
      previewsWrapper.classList.add(ACTIVE_CLASS);
    }

    handleEmptyState();
  });
}

function toggleResult() {
  const RESULT_BUTTON = '.js-navigation__button--result';
  const resultButton = document.querySelector(RESULT_BUTTON);

  resultButton.addEventListener('click', (event) => {
    event.currentTarget.classList.toggle(ACTIVE_CLASS);
    handleAriaPressedState(resultButton);
    removeActiveClasses(RESULT_CLASS, event);
    result.classList.toggle(ACTIVE_CLASS);

    if (!previewsWrapper.classList.contains(ACTIVE_CLASS)) {
      previewsWrapper.classList.add(ACTIVE_CLASS);
    }

    handleEmptyState();
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

function handleEmptyState() {
  const EMPTY_VIEW_CLASS = '.empty-view';
  const emptyView = document.querySelector(EMPTY_VIEW_CLASS);
  const previewActiveNodes = document.querySelectorAll(
    `${PREVIEW_CLASS}.${ACTIVE_CLASS}`
  );
  const isEmptyViewHidden = Boolean(
    emptyView.getAttribute('aria-hidden') === 'true'
  );

  if (previewActiveNodes.length === 0 && isEmptyViewHidden) {
    emptyView.setAttribute('aria-hidden', false);
  } else {
    emptyView.setAttribute('aria-hidden', true);
  }
}

function removeActiveClasses(currentPreview, buttonEvent) {
  const previewNodes = document.querySelectorAll(PREVIEW_CLASS);
  const buttonNodes = document.querySelectorAll('.navigation__button');
  [...previewNodes].map((preview) => {
    if (!preview.classList.contains(currentPreview.substring(1))) {
      preview.classList.remove(ACTIVE_CLASS);
    }
  });

  [...buttonNodes].map((button) => {
    if (buttonEvent.currentTarget !== button) {
      button.classList.remove(ACTIVE_CLASS);
    }
  });
}

export function initNavigation() {
  toggleHtmlPreview();
  toggleCssPreview();
  toggleJsPreview();
  toggleResult();
}
