const telephoneCheck = str =>
  /^1? ?(\(\d{3}\)|\d{3})[\- ]?\d{3}[\- ]?\d{4}$/.test(str);
