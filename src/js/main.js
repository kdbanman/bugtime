let sampleTemperature = 0.6;

const bugName = document.getElementById("bug-name");
const button = document.getElementById("button");

bugName.textContent = sampleNetwork(sampleTemperature).sentence;

button.onclick = () => {
  bugName.textContent = sampleNetwork(sampleTemperature).sentence;
}

console.log("Hi.  :)")