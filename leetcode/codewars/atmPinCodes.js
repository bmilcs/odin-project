// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
// If the function is passed a valid PIN string, return true, else return false.

// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

function validatePIN(pin) {
  const isCorrectLength = pin.length === 4 || pin.length === 6;
  if (!isCorrectLength) return false;

  const isAllNumbers = pin.split("").every((char) => char.match(/^[0-9]$/g));
  return isAllNumbers;
}
