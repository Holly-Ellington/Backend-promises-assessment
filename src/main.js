const { welcome, goodbye, tell } = require("../utils/fortune-teller");

function ask(question) {
  return tell(question).then((response) => [
    `Your question was: ${question}`,
    `Your fortune is: ${response}`,
  ]);
}

function getFortune(question) {
    return tell(question).then((response) => {return [
        `Your question was: ${question}`,
        `Your fortune is: ${response}`,
    ]
  }).catch((error) => {
    return `There was an error: ${error}`;
  });
 
  }

// returns a promise that returns the following array: from instructions 
// Use push to add one element to an array.
// Use concat to merge two arrays.

function fullSession(question) {
  let result = [];
  return welcome()
            .then((welcomeMessage) => {
              result.push(welcomeMessage);
            })
            .then(() => tell(question))
            .then(response => {
              result.push(`Your question was: ${question}`);
              result.push(`Your fortune is: ${response}`);
            }).catch((errorMessage) => {
              result.push(`There was an error: ${errorMessage}`);
            })
            .then(goodbye)
            .then((goodByeMessage) => {
              result.push(goodByeMessage);
              return result;
            })
  
}

module.exports = { getFortune, fullSession };

