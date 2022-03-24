// Create your own cipher!
// State all logic behind cipher creation
// Using cipher, encrypt the phrase "I love cryptography!"
// Display result
// Using cipher again, decipher the ciphered phrase

// Cipher
// Create a function that takes a string and returns a new string with every letter shifted up by 8 in the alphabet.
// Example:
// cipher("abc") === "ijk"

const cipher = (str) => {
  let newStr = ""
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i)
    if (charCode >= 65 && charCode <= 90) {
      charCode += 8
      if (charCode > 90) {
        charCode -= 26
      }
    }
    newStr += String.fromCharCode(charCode)
  }
  return newStr
}

console.log(cipher("abc"))
