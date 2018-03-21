const rot13 = str =>
  str
    .split('')
    .map(ch => {
      if (/[A-M]/.test(ch)) {
        return String.fromCharCode(ch.charCodeAt(0) + 13);
      } else if (/[N-Z]/.test(ch)) {
        return String.fromCharCode(ch.charCodeAt(0) - 13);
      } else {
        return ch;
      }
    })
    .join('');
