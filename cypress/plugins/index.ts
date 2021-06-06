import { readSync } from 'clipboardy';

module.exports = (on) => {
  on('task', {
    getClipboard() {
      return readSync();
    },
  });
};
