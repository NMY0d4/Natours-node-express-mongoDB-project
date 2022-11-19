/* eslint-disable */

export const hideAlert = () => {
  const el = document.querySelector('.alert');
  if (el) el.remove();
};

// type is 'success or 'error"
export const showAlert = (type, msg) => {
  hideAlert();
  const time = type === 'success' ? 3000 : 10000;
  const markup = `<div class="alert alert--${type}">${msg}</div>`;
  document.querySelector('body').insertAdjacentHTML('afterbegin', markup);
  window.setTimeout(hideAlert, time);
};
