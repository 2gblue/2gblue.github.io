var anomalyArray = [
  "Afflicted Dragon Blood x2 <br>Afflicted Shell x2",
  "Afflicted Dire Scale x3",
  "Afflicted Dire Claw+ x2 <br>Afflicted Hardfang x2 <br>Afflicted Shard x2",
  "Afflicted Dire Hardhorn x2 <br>Afflicted Dire Wing+ x2",
  "Afflicted Dire Cortex x2 <br>Afflicted Dire Dragon Blood x2 <br>Afflicted Dire Slogbone x2",
  "Afflicted Dire Hardfang x2 <br>Risen Dragonbone x2",
  "Risen Dragon Thickblood x2 <br>Risen Slogbone x2",
];

var attackArray = [
  "Afflicted Pelt x3",
  "Afflicted Fang x2 <br>Afflicted Fang+ x2",
  "Afflicted Dire Horn+ x2 <br>Afflicted Dire Shell x2 <br>Afflicted Thickhide x2",
  "Afflicted Dire Blood x2 <br>Afflicted Dire Fang+ x2",
];

var affinityArray = [
  "Afflicted Hide+ x2 <br>Afflicted Monster Bone x2",
  "Afflicted Dire Fang x2 <br>Afflicted Dire Wing x2",
  "Risen Dragonbone x3",
];

var elementalArray = [
  "Afflicted Bone x3",
  "Afflicted Monster Hardbone x2 <br>Afflicted Scale x2",
  "Afflicted Carapace x2 <br>Afflicted Claw x2 <br>Afflicted Dire Horn x2",
  "Afflicted Cortex x2 <br>Afflicted Pure Blood x2 <br>Afflicted Slogbone x2",
  "Afflicted Dire Carapace x2 <br>Afflicted Dire Scale+ x2 <br>Afflicted Hardclaw x2",
  "Afflicted Dire Slogbone x3",
  "Risen Dragonbone+ x3",
  "Risen Dragon Pureblood x3",
];

var statusArray = [
  "Afflicted Blood x2 <br>Afflicted Hardbone x2",
  "Afflicted Dire Claw x2 <br>Afflicted Dire Hardbone x2 <br>Afflicted Monster Slogbone x2",
  "Risen Dragonbone x3",
  "Risen Dragon Blood x3",
];

var sharpnessArray = [
  "Afflicted Claw+ x2 <br>Afflicted Scale+ x2",
  "Afflicted Dire Hardclaw x2 <br>Afflicted Dire Shard x2",
  "Afflicted Dire Fellwing x2 <br>Risen Dragonbone x2",
  "Risen Dragon Pureblood x2 <br>Risen Slogbone x2",
];

var shellingArray = [
  "Afflicted Dire Dragon Blood x2 <br>Afflicted Dire Fang+ x2",
  "Afflicted Dire Cortex x2 <br>Afflicted Dire Hardclaw x2",
];

var rampageArray = [
  "Afflicted Dire Bone x3",
  "Afflicted Dire Darkblood x2 <br>Risen Dragonbone+ x2",
];

function anomalySlot(x) {
  var outputText = document.getElementById("anomaly_output");
  outputText.innerHTML = anomalyArray[x - 1];
  var outputTextContainer = document.getElementById("anomaly_output_text");
  outputTextContainer.classList.remove("d-none");
  // Add your logic here to update the text based on the anomaly slot clicked
}

function attackSlot(x) {
  var outputText = document.getElementById("attack_output");
  outputText.innerHTML = attackArray[x - 1];
  var outputTextContainer = document.getElementById("attack_output_text");
  outputTextContainer.classList.remove("d-none");
  // Add your logic here to update the text based on the attack slot clicked
}

function affinitySlot(x) {
  var outputText = document.getElementById("affinity_output");
  outputText.innerHTML = affinityArray[x - 1];
  var outputTextContainer = document.getElementById("affinity_output_text");
  outputTextContainer.classList.remove("d-none");
  // Add your logic here to update the text based on the affinity slot clicked
}

function elementalSlot(x) {
  var outputText = document.getElementById("elemental_output");
  outputText.innerHTML = elementalArray[x - 1];
  var outputTextContainer = document.getElementById("elemental_output_text");
  outputTextContainer.classList.remove("d-none");
  // Add your logic here to update the text based on the elemental slot clicked
}

function statusSlot(x) {
  var outputText = document.getElementById("status_output");
  outputText.innerHTML = statusArray[x - 1];
  var outputTextContainer = document.getElementById("status_output_text");
  outputTextContainer.classList.remove("d-none");
  // Add your logic here to update the text based on the status slot clicked
}

function sharpnessSlot(x) {
  var outputText = document.getElementById("sharpness_output");
  outputText.innerHTML = sharpnessArray[x - 1];
  var outputTextContainer = document.getElementById("sharpness_output_text");
  outputTextContainer.classList.remove("d-none");
  // Add your logic here to update the text based on the sharpness slot clicked
}

function shellingSlot(x) {
  var outputText = document.getElementById("shelling_output");
  outputText.innerHTML = shellingArray[x - 1];
  var outputTextContainer = document.getElementById("shelling_output_text");
  outputTextContainer.classList.remove("d-none");
  // Add your logic here to update the text based on the shelling slot clicked
}

function rampageSlot(x) {
  var outputText = document.getElementById("rampage_output");
  outputText.innerHTML = rampageArray[x - 1];
  var outputTextContainer = document.getElementById("rampage_output_text");
  outputTextContainer.classList.remove("d-none");
  // Add your logic here to update the text based on the rampage slot clicked
}
