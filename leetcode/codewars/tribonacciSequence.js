// Well met with Fibonacci bigger brother, AKA Tribonacci.

// As the name may already reveal, it works basically like a Fibonacci,
//  but summing the last 3(instead of 2) numbers of the sequence to generate the next.

function tribonacci(signature, n) {
  const tri = [];

  for (let i = 0; i < n; i++) {
    if (i < 3) {
      tri.push(signature[i]);
      continue;
    }

    tri.push(tri[i - 1] + tri[i - 2] + tri[i - 3]);
  }

  return tri;
}
