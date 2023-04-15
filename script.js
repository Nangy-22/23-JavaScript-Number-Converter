// Function to convert Arabic numerals to Roman numerals
function convertToRoman(num) {
  const romanNumeralValues = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let romanNumeral = "";

  for (let key in romanNumeralValues) {
    while (num >= romanNumeralValues[key]) {
      romanNumeral += key;
      num -= romanNumeralValues[key];
    }
  }

  return romanNumeral;
}

// Function to update Roman numerals when button is clicked
function updateRomanNumerals() {
  const num1000 = parseInt(document.getElementById("num-1000").textContent);
  const num900 = parseInt(document.getElementById("num-900").textContent);
  const num500 = parseInt(document.getElementById("num-500").textContent);
  const num400 = parseInt(document.getElementById("num-400").textContent);
  const num100 = parseInt(document.getElementById("num-100").textContent);
  const num90 = parseInt(document.getElementById("num-90").textContent);
  const num50 = parseInt(document.getElementById("num-50").textContent);
  const num40 = parseInt(document.getElementById("num-40").textContent);
  const num10 = parseInt(document.getElementById("num-10").textContent);
  const num9 = parseInt(document.getElementById("num-9").textContent);
  const num5 = parseInt(document.getElementById("num-5").textContent);
  const num4 = parseInt(document.getElementById("num-4").textContent);
  const num1 = parseInt(document.getElementById("num-1").textContent);

  document.getElementById("roman-1000").textContent = convertToRoman(num1000);
  document.getElementById("roman-900").textContent = convertToRoman(num900);
  document.getElementById("roman-500").textContent = convertToRoman(num500);
  document.getElementById("roman-400").textContent = convertToRoman(num400);
  document.getElementById("roman-100").textContent = convertToRoman(num100);
  document.getElementById("roman-90").textContent = convertToRoman(num90);
  document.getElementById("roman-50").textContent = convertToRoman(num50);
  document.getElementById("roman-40").textContent = convertToRoman(num40);
  document.getElementById("roman-10").textContent = convertToRoman(num10);
  document.getElementById("roman-9").textContent = convertToRoman(num9);
  document.getElementById("roman-5").textContent = convertToRoman(num5);
  document.getElementById("roman-4").textContent = convertToRoman(num4);
  document.getElementById("roman-1").textContent = convertToRoman(num1);
}

// Function to reset Roman numerals to empty
function resetFlashCard() {
  document.getElementById("roman-1000").textContent = "";
  document.getElementById("roman-900").textContent = "";
  document.getElementById("roman-500").textContent = "";
  document.getElementById("roman-400").textContent = "";
  document.getElementById("roman-100").textContent = "";
  document.getElementById("roman-90").textContent = "";
  document.getElementById("roman-50").textContent = "";
  document.getElementById("roman-40").textContent = "";
  document.getElementById("roman-10").textContent = "";
  document.getElementById("roman-9").textContent = "";
  document.getElementById("roman-5").textContent = "";
  document.getElementById("roman-4").textContent = "";
  document.getElementById("roman-1").textContent = "";
}

// Add event listeners to buttons
document
  .getElementById("convert-btn")
  .addEventListener("click", updateRomanNumerals);
document.getElementById("reset-btn").addEventListener("click", resetFlashCard);
