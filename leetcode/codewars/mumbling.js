// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// brilliant!
function accumBrilliant(s) {
  return s
    .split("")
    .map((letter, i) => letter.toUpperCase() + letter.toLowerCase().repeat(i))
    .join("-");
}

// brute force
function accum(s) {
  const loops = s.length;
  let str = "";

  for (let i = 0; i < loops; i++) {
    str = `${str}${s[i].toUpperCase()}`;

    for (let y = 0; y < i; y++) {
      str = `${str}${s[i].toLowerCase()}`;
    }

    if (i !== loops - 1) {
      str = `${str}-`;
    }
  }

  return str;
}
