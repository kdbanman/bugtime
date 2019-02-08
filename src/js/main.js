let sampleTemperature = 0.6;
const bugNameMatcher = /([A-z ]+)\|([A-z ]+)/g;

const commonName = document.getElementById("common-name");
const latinName = document.getElementById("latin-name");
const button = document.getElementById("button");


let getBugName = (sampleTemperature) => {
  let bugNameRaw = sampleNetwork(sampleTemperature).sentence
  let bugNameMatches = bugNameMatcher.exec(bugNameRaw);

  while (bugNameMatches == null || bugNameMatches[1].trim() === "" || bugNameMatches[2].trim() === "") {
    bugNameRaw = sampleNetwork(sampleTemperature).sentence
    bugNameMatches = bugNameMatcher.exec(bugNameRaw);
  }

  return {commonName: bugNameMatches[1].trim(), latinName: bugNameMatches[2].trim()}
}

let populateBugName = (sampleTemperature) => {
  let bugName = getBugName(sampleTemperature);

  commonName.textContent = bugName.commonName;
  latinName.textContent = bugName.latinName;
}

populateBugName(sampleTemperature);

button.onclick = () => {
  populateBugName(sampleTemperature);
}

console.log("Hi.");
console.log("");
console.log("I hope you're having a good day.")
console.log("");
console.log(":-)");