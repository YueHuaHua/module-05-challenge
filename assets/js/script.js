// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  
  // Variable to store length of password from user input
  let length = parseInt(
    prompt("How many characters would you like your password to contain?")
  )
  
  // Conditioning
  if(isNaN(length) === true){
    alert(`Password length must be provided as number`);
    return;
  }
    
  if(length < 10 || length > 64){
    alert(`Password length must be between 10 and 64 characters`);
    return;
  }

  // Selecting character type options
  let hasSpecialCharacters = confirm(
    "Click OK to confirm including special characters"
  )

  let hasNumericCharacters = confirm(
    "Click OK to confirm including numeric characters"
  )

  let hasLowerCasedCharacters = confirm(
    "Click OK to confirm including lowercase characters"
  )

  let hasUpperCasedCharacters = confirm(
    "Click OK to confirm including uppercase characters"
  )
  
  // Exception
  if(hasLowerCasedCharacters === false &&
    hasUpperCasedCharacters === false &&
    hasNumericCharacters === false &&
    hasSpecialCharacters === false){
      alert(`Must select at least one character type`);
      return;
    }
  
  let passwordOptions = {
    length : length,
    hasLowerCasedCharacters: hasLowerCasedCharacters,
    hasUpperCasedCharacters: hasUpperCasedCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasSpecialCharacters: hasSpecialCharacters
  }

    console.log(passwordOptions);

    return passwordOptions;
}

// Function for getting a random element from an array
function getRandom(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length)
  let randomElement = arr[randomIndex];

  return randomElement;
}

// Function to generate password with user input
function generatePassword() {
  try {
    // Create a new variable to store a value from getPasswordOptions function
    let options = getPasswordOptions();

    // Create new arrays to store obtained characters
    let result = [];
    let possibleCharacter = [];
    let guaranteedCharacter = [];

    // Adding lowercased characters if lowercased option is selected
    if(options.hasLowerCasedCharacters){
      possibleCharacter = possibleCharacter.concat(lowerCasedCharacters)
      guaranteedCharacter.push(getRandom(lowerCasedCharacters))
    }
    
    // Adding uppercased characters if uppercased option is selected
    if(options.hasUpperCasedCharacters){
      possibleCharacter = possibleCharacter.concat(upperCasedCharacters)
      guaranteedCharacter.push(getRandom(upperCasedCharacters))
    }

    // Adding numeric characters if numeric characters option is selected
    if(options.hasNumericCharacters){
      possibleCharacter = possibleCharacter.concat(numericCharacters)
      guaranteedCharacter.push(getRandom(numericCharacters))
    }

    // Adding special characters if special characters option is selected
    if(options.hasSpecialCharacters){
      possibleCharacter = possibleCharacter.concat(specialCharacters)
      guaranteedCharacter.push(getRandom(specialCharacters))
    }

    // Generating and Inserting characters into result array based on the password length input
    for(let i = 0; i < options.length; i++){
      var generatedPassword = getRandom(possibleCharacter);

      result.push(generatedPassword);    
    }

    console.log(result);

    // Converting array values into a string
    return result.join("");
  }
  catch(err){
    console.log("Incorrect Input :(");
    return;
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);