const palindrome = str => {
  const chars = str
    .split('')
    .filter(ch => /[a-zA-Z0-9]/.test(ch))
    .map(ch => ch.toLowerCase());
  const reversed = [...chars].reverse();
  return chars.join('') === reversed.join('');
};
