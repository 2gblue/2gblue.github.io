// Get the buttons by their IDs
var hostButton = document.getElementById("host");
var hostAFKButton = document.getElementById("hostAFK");
var hostWeakButton = document.getElementById("hostWeak");
var firepowerButton = document.getElementById("firepower");
var executeButton = document.getElementById("execute");

// Add event listeners for the click event on the toggle buttons
hostButton.addEventListener("click", toggleButton.bind(null, "主"));
hostAFKButton.addEventListener("click", toggleButton.bind(null, "放置"));
hostWeakButton.addEventListener("click", toggleButton.bind(null, "主弱"));
firepowerButton.addEventListener("click", toggleButton.bind(null, "火力"));
executeButton.addEventListener("click", toggleButton.bind(null, "@10"));

function toggleButton(text) {
  var outputTextField = document.getElementById("outputTextField");
  var button = event.target;

  if (!button.classList.contains("active")) {
    // Add the text to the output text field
    outputTextField.value += text;
    // Add a class to mark the button as active
    button.classList.add("active");
    // Add a data attribute to store the text for later reference
    button.dataset.text = text;
  } else {
    // Remove the text from the output text field
    outputTextField.value = outputTextField.value.replace(
      button.dataset.text,
      ""
    );
    // Remove the class to mark the button as inactive
    button.classList.remove("active");
    // Remove the data attribute
    button.removeAttribute("data-text");
  }
}

var buttonValueMap = {
  Fire: "火",
  Water: "水",
  Earth: "土",
  Wind: "風",
  Light: "光",
  Dark: "闇",
};

// Get all buttons with class "miscButton"
var miscButtons = document.getElementsByClassName("miscButton");

// Loop through all miscButtons and add click and contextmenu event listeners
for (var i = 0; i < miscButtons.length; i++) {
  miscButtons[i].addEventListener("click", function (event) {
    // Get the text content of the clicked button
    var buttonText = event.target.textContent;
    // Get the corresponding value from the buttonValueMap
    var buttonValue = buttonValueMap[buttonText];
    // Append the buttonValue to the outputTextField value
    outputTextField.value += buttonValue;
  });

  miscButtons[i].addEventListener("contextmenu", function (event) {
    // Prevent the default contextmenu behavior
    event.preventDefault();
    // Get the text content of the right-clicked button
    var buttonText = event.target.textContent;
    // Get the corresponding value from the buttonValueMap
    var buttonValue = buttonValueMap[buttonText];
    // Append "@" before the buttonValue to the outputTextField value
    outputTextField.value += "@" + buttonValue;
  });
}

// Get the raid times input element
var raidTimesInput = document.getElementById("raidTimes");
var belowRankInput = document.getElementById("belowRank");
var aboveRankInput = document.getElementById("aboveRank");
var personInput = document.getElementById("person");
var trainsInput = document.getElementById("trains");

var previousRaidTimes = "";
raidTimesInput.addEventListener("input", function () {
  var raidTimes = raidTimesInput.value;
  var currentText = outputTextField.value;

  if (currentText.includes("回")) {
    // Replace the previous aboveRank value with the new aboveRank value
    outputTextField.value = currentText.replace(
      previousRaidTimes + " 回",
      raidTimes + " 回"
    );
  } else {
    outputTextField.value = currentText + " " + raidTimes + " 回";
  }

  // Update the previousAboveRank variable with the new aboveRank value
  previousRaidTimes = raidTimes;
});

var previousBelowRank = "";
belowRankInput.addEventListener("input", function () {
  var belowRank = belowRankInput.value;
  var currentText = outputTextField.value;

  if (currentText.includes("↓")) {
    // Replace the previous belowRank value with the new belowRank value
    outputTextField.value = currentText.replace(
      previousBelowRank + " ↓",
      belowRank + " ↓"
    );
  } else {
    outputTextField.value = currentText + " " + belowRank + " ↓";
  }

  // Update the previousBelowRank variable with the new belowRank value
  previousBelowRank = belowRank;
});

var previousAboveRank = "";
aboveRankInput.addEventListener("input", function () {
  var aboveRank = aboveRankInput.value;
  var currentText = outputTextField.value;

  if (currentText.includes("↑")) {
    // Replace the previous aboveRank value with the new aboveRank value
    outputTextField.value = currentText.replace(
      previousAboveRank + " ↑",
      aboveRank + " ↑"
    );
  } else {
    outputTextField.value = currentText + " " + aboveRank + " ↑";
  }

  // Update the previousAboveRank variable with the new aboveRank value
  previousAboveRank = aboveRank;
});

var previousPerson = "";
personInput.addEventListener("input", function () {
  var person = personInput.value;
  var currentText = outputTextField.value;

  if (currentText.includes("人")) {
    // Replace the previous aboveRank value with the new aboveRank value
    outputTextField.value = currentText.replace(
      previousPerson + " 人",
      person + " 人"
    );
  } else {
    outputTextField.value = currentText + " " + person + " 人";
  }

  // Update the previousAboveRank variable with the new aboveRank value
  previousPerson = person;
});

var previousTrains = "";
trainsInput.addEventListener("input", function () {
  var trains = trainsInput.value;
  var currentText = outputTextField.value;

  if (currentText.includes("連")) {
    // Replace the previous trains value with the new trains value
    outputTextField.value = currentText.replace(
      previousTrains + " 連",
      trains + " 連"
    );
  } else {
    outputTextField.value = currentText + " " + trains + " 連";
  }

  // Update the previousTrains variable with the new trains value
  previousTrains = trains;
});

function updateOutputTextFieldWithLuciZ() {
  var outputTextField = document.getElementById("outputTextField");
  outputTextField.value += "スパルシ";
}

function updateOutputTextFieldWithHexa() {
  var outputTextField = document.getElementById("outputTextField");
  outputTextField.value += "天元";
}

function updateOutputTextFieldWithSBHL() {
  var outputTextField = document.getElementById("outputTextField");
  outputTextField.value += "スパバハ";
}

function updateOutputTextFieldWithMugen() {
  var outputTextField = document.getElementById("outputTextField");
  outputTextField.value += "ムゲン";
}

function updateOutputTextFieldWithDiaspora() {
  var outputTextField = document.getElementById("outputTextField");
  outputTextField.value += "ディアスポラ";
}

function updateOutputTextFieldWithSiegfried() {
  var outputTextField = document.getElementById("outputTextField");
  outputTextField.value += "ジーク";
}

function updateOutputTextFieldWithAgastia() {
  var outputTextField = document.getElementById("outputTextField");
  outputTextField.value += "アガスティア";
}

function updateOutputTextFieldWithSeofon() {
  var outputTextField = document.getElementById("outputTextField");
  outputTextField.value += "シエテ";
}

function updateOutputTextFieldWithCosmos() {
  var outputTextField = document.getElementById("outputTextField");
  outputTextField.value += "コスモス";
}

function updateOutputTextFieldWithFaaHL() {
  var outputTextField = document.getElementById("outputTextField");
  outputTextField.value += "ルシファー";
}

function updateOutputTextFieldWithBubz() {
  var outputTextField = document.getElementById("outputTextField");
  outputTextField.value += "バブ";
}

function updateOutputTextFieldWithBelial() {
  var outputTextField = document.getElementById("outputTextField");
  outputTextField.value += "ベリアル";
}

function updateOutputTextFieldWithPBHL() {
  var outputTextField = document.getElementById("outputTextField");
  outputTextField.value += "プロトバハムート";
}

function updateOutputTextFieldWithAkasha() {
  var outputTextField = document.getElementById("outputTextField");
  outputTextField.value += "アーカーシャ";
}

function updateOutputTextFieldWithGOHL() {
  var outputTextField = document.getElementById("outputTextField");
  outputTextField.value += "ジ・オーダー・グランデ";
}

function updateOutputTextFieldWithUBHL() {
  var outputTextField = document.getElementById("outputTextField");
  outputTextField.value += "アルティメットバハ";
}

function updateOutputTextFieldWithWilnas() {
  var outputTextField = document.getElementById("outputTextField");
  outputTextField.value += "ウィルナス";
}

function updateOutputTextFieldWithWamdus() {
  var outputTextField = document.getElementById("outputTextField");
  outputTextField.value += "ワムデュス";
}

function updateOutputTextFieldWithGalleon() {
  var outputTextField = document.getElementById("outputTextField");
  outputTextField.value += "ガレヲン";
}

function updateOutputTextFieldWithEwiyar() {
  var outputTextField = document.getElementById("outputTextField");
  outputTextField.value += "イーウィヤ";
}

function updateOutputTextFieldWithLuwoh() {
  var outputTextField = document.getElementById("outputTextField");
  outputTextField.value += "ル・オー";
}

function updateOutputTextFieldWithFediel() {
  var outputTextField = document.getElementById("outputTextField");
  outputTextField.value += "フェディエル";
}

function updateOutputTextFieldWithTiamal() {
  var outputTextField = document.getElementById("outputTextField");
  outputTextField.value += "ティアマト・マリス";
}

function updateOutputTextFieldWithLevimal() {
  var outputTextField = document.getElementById("outputTextField");
  outputTextField.value += "リヴァイアサン・マリス";
}

function updateOutputTextFieldWithPhronesis() {
  var outputTextField = document.getElementById("outputTextField");
  outputTextField.value += "フロネシス";
}

function updateOutputTextFieldWithLumimal() {
  var outputTextField = document.getElementById("outputTextField");
  outputTextField.value += "シュヴァリエ・マリス";
}

function updateOutputTextFieldWithAnima() {
  var outputTextField = document.getElementById("outputTextField");
  outputTextField.value += "アニマ";
}

function updateOutputTextFieldWithLVoid() {
  var outputTextField = document.getElementById("outputTextField");
  outputTextField.value += "レギオン･ヴォイド";
}

function updateOutputTextFieldWithAtum() {
  var outputTextField = document.getElementById("outputTextField");
  outputTextField.value += "アトゥム";
}

function updateOutputTextFieldWithTefnut() {
  var outputTextField = document.getElementById("outputTextField");
  outputTextField.value += "テフヌト";
}

function updateOutputTextFieldWithBennu() {
  var outputTextField = document.getElementById("outputTextField");
  outputTextField.value += "ベンヌ";
}

function updateOutputTextFieldWithRa() {
  var outputTextField = document.getElementById("outputTextField");
  outputTextField.value += "ラー";
}

function updateOutputTextFieldWithHorus() {
  var outputTextField = document.getElementById("outputTextField");
  outputTextField.value += "ホルス";
}

function updateOutputTextFieldWithOsiris() {
  var outputTextField = document.getElementById("outputTextField");
  outputTextField.value += "オシリス";
}

function updateOutputTextFieldWithHLQL() {
  var outputTextField = document.getElementById("outputTextField");
  outputTextField.value += "黄龍・黒麒麟";
}

function updateOutputTextFieldWithFourPrimarchs() {
  var outputTextField = document.getElementById("outputTextField");
  outputTextField.value += "四大天司ＨＬ";
}

function updateOutputTextFieldWithLindwurm() {
  var outputTextField = document.getElementById("outputTextField");
  outputTextField.value += "リンドヴルム";
}

function updateOutputTextFieldWithUBN() {
  var outputTextField = document.getElementById("outputTextField");
  outputTextField.value += "アルティメットバハ";
}

function updateOutputTextFieldWithHL() {
  var outputTextField = document.getElementById("outputTextField");
  outputTextField.value += "黄龍";
}

function updateOutputTextFieldWithQL() {
  var outputTextField = document.getElementById("outputTextField");
  outputTextField.value += "黒麒麟";
}

function updateOutputTextFieldWithBerserker() {
  var outputTextField = document.getElementById("outputTextField");
  outputTextField.value += "ベルセルク";
}

function updateOutputTextFieldWithLuchador() {
  var outputTextField = document.getElementById("outputTextField");
  outputTextField.value += "レスラー";
}

function updateOutputTextFieldWithRobinHood() {
  var outputTextField = document.getElementById("outputTextField");
  outputTextField.value += "ロビンフッド";
}

function updateOutputTextFieldWithNighthound() {
  var outputTextField = document.getElementById("outputTextField");
  outputTextField.value += "ハウンドドッグ";
}

function updateOutputTextFieldWithRelicBuster() {
  var outputTextField = document.getElementById("outputTextField");
  outputTextField.value += "レリバ";
}

function updateOutputTextFieldWithYamato() {
  var outputTextField = document.getElementById("outputTextField");
  outputTextField.value += "ヤマト";
}

function updateOutputTextFieldWithViking() {
  var outputTextField = document.getElementById("outputTextField");
  outputTextField.value += "ヴァイキング";
}

function updateOutputTextFieldWithPaladin() {
  var outputTextField = document.getElementById("outputTextField");
  outputTextField.value += "パラディン";
}

function updateOutputTextFieldWithIatromantis() {
  var outputTextField = document.getElementById("outputTextField");
  outputTextField.value += "パナケイア";
}

function updateOutputTextFieldWithManadiver() {
  var outputTextField = document.getElementById("outputTextField");
  outputTextField.value += "マナダイバー";
}

function updateOutputTextFieldWithKengo() {
  var outputTextField = document.getElementById("outputTextField");
  outputTextField.value += "剣豪";
}

function updateOutputTextFieldWithRisingForce() {
  var outputTextField = document.getElementById("outputTextField");
  outputTextField.value += "ライフォ";
}

// Define an array of element IDs and corresponding event handler functions
var elementIds = [
  { id: "lucizero", handler: updateOutputTextFieldWithLuciZ },
  { id: "hexa", handler: updateOutputTextFieldWithHexa },
  { id: "superUltimateBahamut", handler: updateOutputTextFieldWithSBHL },
  { id: "mugen", handler: updateOutputTextFieldWithMugen },
  { id: "diaspora", handler: updateOutputTextFieldWithDiaspora },
  { id: "siegfried", handler: updateOutputTextFieldWithSiegfried },
  { id: "agastia", handler: updateOutputTextFieldWithAgastia },
  { id: "seofon", handler: updateOutputTextFieldWithSeofon },
  { id: "cosmos", handler: updateOutputTextFieldWithCosmos },
  { id: "faasanHL", handler: updateOutputTextFieldWithFaaHL },
  { id: "bubz", handler: updateOutputTextFieldWithBubz },
  { id: "belial", handler: updateOutputTextFieldWithBelial },
  { id: "pbhl", handler: updateOutputTextFieldWithPBHL },
  { id: "akasha", handler: updateOutputTextFieldWithAkasha },
  { id: "gohl", handler: updateOutputTextFieldWithGOHL },
  { id: "ubhl", handler: updateOutputTextFieldWithUBHL },
  { id: "wilnas", handler: updateOutputTextFieldWithWilnas },
  { id: "wamdus", handler: updateOutputTextFieldWithWamdus },
  { id: "galleon", handler: updateOutputTextFieldWithGalleon },
  { id: "ewiyar", handler: updateOutputTextFieldWithEwiyar },
  { id: "luwoh", handler: updateOutputTextFieldWithLuwoh },
  { id: "fediel", handler: updateOutputTextFieldWithFediel },
  { id: "tiamal", handler: updateOutputTextFieldWithTiamal },
  { id: "levimal", handler: updateOutputTextFieldWithLevimal },
  { id: "phronesis", handler: updateOutputTextFieldWithPhronesis },
  { id: "lumimal", handler: updateOutputTextFieldWithLumimal },
  { id: "anima", handler: updateOutputTextFieldWithAnima },
  { id: "lvoid", handler: updateOutputTextFieldWithLVoid },
  { id: "atum", handler: updateOutputTextFieldWithAtum },
  { id: "tefnut", handler: updateOutputTextFieldWithTefnut },
  { id: "bennu", handler: updateOutputTextFieldWithBennu },
  { id: "ra", handler: updateOutputTextFieldWithRa },
  { id: "horus", handler: updateOutputTextFieldWithHorus },
  { id: "osiris", handler: updateOutputTextFieldWithOsiris },
  { id: "hlql", handler: updateOutputTextFieldWithHLQL },
  { id: "fourprimarchs", handler: updateOutputTextFieldWithFourPrimarchs },
  { id: "lindwurm", handler: updateOutputTextFieldWithLindwurm },
  { id: "ubn", handler: updateOutputTextFieldWithUBN },
  { id: "hl", handler: updateOutputTextFieldWithHL },
  { id: "ql", handler: updateOutputTextFieldWithQL },
  { id: "berserker", handler: updateOutputTextFieldWithBerserker },
  { id: "luchador", handler: updateOutputTextFieldWithLuchador },
  { id: "robinhood", handler: updateOutputTextFieldWithRobinHood },
  { id: "nighthound", handler: updateOutputTextFieldWithNighthound },
  { id: "relicbuster", handler: updateOutputTextFieldWithRelicBuster },
  { id: "yamato", handler: updateOutputTextFieldWithYamato },
  { id: "viking", handler: updateOutputTextFieldWithViking },
  { id: "paladin", handler: updateOutputTextFieldWithPaladin },
  { id: "iatro", handler: updateOutputTextFieldWithIatromantis },
  { id: "manadiver", handler: updateOutputTextFieldWithManadiver },
  { id: "kengo", handler: updateOutputTextFieldWithKengo },
  { id: "risingforce", handler: updateOutputTextFieldWithRisingForce },
];

// Loop through the array and add click event listeners to the respective elements
for (var i = 0; i < elementIds.length; i++) {
  var element = document.getElementById(elementIds[i].id);
  element.addEventListener("click", elementIds[i].handler);
}
