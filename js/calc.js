//Following this tutoiral: https://www.youtube.com/watch?v=qQEYAOPWDzk

// This function firstly grabs the values from the document, then
// calculates them and then finally outputs the result.
function calc() {
  // Grabbing value1 input and converting from a string to a number.
  // "parseInt" converts to a number.
  // ".value" at the end grabs the input from the tag.
  const value1 = parseInt(document.querySelector("#value1").value);

  // Grabbing Value 2 input
  const value2 = parseInt(document.querySelector("#value2").value);

  // Grabbing the Operators (<select> tag)
  const operator = document.querySelector("#operator").value;

  var calculate;

  if (operator == "add") {
    calculate = value1 + value2;
  } else if (operator == "subtract") {
    calculate = value1 - value2;
  } else if (operator == "multiply") {
    calculate = value1 * value2;
  } else if (operator == "divide") {
    calculate = value1 / value2;
  }

  // Reference to the result <div>.
  // The result of the caculation is inputted in to the <div>.
  document.querySelector("#result").innerHTML = calculate;
}
