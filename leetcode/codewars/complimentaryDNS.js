// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G".
// Your function receives one side of the DNA(string, except for Haskell); you need to
// return the other complementary side.DNA strand is never empty or there is no DNA at all(again, except for Haskell).

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

//

function DNAStrand(dna) {
  const pairs = {
    A: "T",
    T: "A",
    G: "C",
    C: "G",
  };

  return dna
    .split("")
    .map((letter) => pairs[letter])
    .join("");
}

// ugly

function DNAStrand(dna) {
  return dna
    .split("")
    .map((letter) => {
      if (letter === "A") return "T";
      if (letter === "T") return "A";
      if (letter === "G") return "C";
      if (letter === "C") return "G";
    })
    .join("");
}
