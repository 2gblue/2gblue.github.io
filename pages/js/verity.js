function selectTier(tier, identifier) {
  var dropdownButtonId = "dropdownMenuButton" + identifier.substring(4); // Extracting the number from the identifier
  var selectedTier = tier;
  document.getElementById(dropdownButtonId).innerText = selectedTier;

  // Set the value of the corresponding radio button to the selected tier
  document.getElementById(identifier).value = selectedTier;
}

function updateSum(sumType) {
  var main1Checked = document.getElementById("main1").checked;
  var main2Checked = document.getElementById("main2").checked;
  var friend1Checked = document.getElementById("friend1").checked;
  var friend2Checked = document.getElementById("friend2").checked;

  var selectedTier;

  if (friend1Checked || friend2Checked) {
    // If either friend1 or friend2 is checked, update friendSum with the selectedTier
    selectedTier = document.getElementById(
      "dropdownMenuButton" + (friend1Checked ? "1" : "2")
    ).innerText;
    document.getElementById("friendSum").innerText = selectedTier;
  }

  if (main1Checked || main2Checked) {
    // If either main1 or main2 is checked, update mainSum with the selectedTier
    selectedTier = document.getElementById(
      "dropdownMenuButton" + (main1Checked ? "1" : "2")
    ).innerText;
    document.getElementById(sumType).innerText = selectedTier;
  } else {
    // If neither main1 nor main2 is checked, reset mainSum to 0
    document.getElementById(sumType).innerText = "0";
  }
}

function selectDragonTier(tier) {
  var selectedTier = tier;
  document.getElementById("dropdownMenuButtonDragon").innerText = selectedTier;

  // Set the value of the checkbox to the selected tier
  document.getElementById("dragonCheckbox").value = selectedTier;

  // Update the corresponding <td> element
  updateDragon(document.getElementById("dragonCheckbox").checked);
}

function updateDragon(isChecked) {
  var selectedTier = isChecked
    ? document.getElementById("dragonCheckbox").value
    : "0";
  document.getElementById("sixDragon").innerText = selectedTier;
}

function selectBacklineTier(tier) {
  var selectedTier = tier;
  document.getElementById("dropdownMenuButtonBackline").innerText =
    selectedTier;

  // Set the value of the checkbox to the selected tier
  document.getElementById("backlineCheckbox").value = selectedTier;

  // Update the corresponding <td> element
  updateBackline(document.getElementById("backlineCheckbox").checked);
}

function updateBackline(isChecked) {
  var selectedTier = isChecked
    ? document.getElementById("backlineCheckbox").value
    : "0";
  document.getElementById("backline").innerText = selectedTier;
}

function selectExaltoTier(tier) {
  var selectedTier = tier;
  document.getElementById("exaltoDropdown").innerText = selectedTier + "%";
  updateExalto();
}

function updateExalto() {
  var selectedTier = parseInt(
    document.getElementById("exaltoDropdown").innerText
  );
  var quantity = parseInt(document.getElementById("exaltoQuantity").value);
  if (isNaN(quantity) || quantity <= 0) {
    quantity = 0;
  }
  var newValue = selectedTier * quantity;
  document.getElementById("exalto").innerText = newValue;
}
function selectSkillLevel(percentage, type) {
  var dropdownMenuButtonId =
    "dropdownMenuButton" + type.charAt(0).toUpperCase() + type.slice(1);
  document.getElementById(dropdownMenuButtonId).innerText = percentage + "%";

  document
    .getElementById(dropdownMenuButtonId)
    .setAttribute("data-percentage", parseFloat(percentage));

  // Call the function to update the total crit
  updateTotalCrit();
}

function updateTotalCrit() {
  // Get the selected percentage and quantity for each weapon type
  var smallPercentage =
    parseFloat(
      document
        .getElementById("dropdownMenuButtonSmall")
        .getAttribute("data-percentage")
    ) || 0;
  var mediumPercentage =
    parseFloat(
      document
        .getElementById("dropdownMenuButtonMedium")
        .getAttribute("data-percentage")
    ) || 0;
  var bigPercentage =
    parseFloat(
      document
        .getElementById("dropdownMenuButtonBig")
        .getAttribute("data-percentage")
    ) || 0;
  var bigIIPercentage =
    parseFloat(
      document
        .getElementById("dropdownMenuButtonBigII")
        .getAttribute("data-percentage")
    ) || 0;

  var smallQuantity =
    parseInt(document.getElementById("smallQuantity").value) || 0;
  var mediumQuantity =
    parseInt(document.getElementById("mediumQuantity").value) || 0;
  var bigQuantity = parseInt(document.getElementById("bigQuantity").value) || 0;
  var bigIIQuantity =
    parseInt(document.getElementById("bigIIQuantity").value) || 0;

  smallQuantity = Math.max(0, smallQuantity);
  mediumQuantity = Math.max(0, mediumQuantity);
  bigQuantity = Math.max(0, bigQuantity);
  bigIIQuantity = Math.max(0, bigIIQuantity);

  // Calculate the total crit for all weapon types
  var totalCrit =
    smallPercentage * smallQuantity +
    mediumPercentage * mediumQuantity +
    bigPercentage * bigQuantity +
    bigIIPercentage * bigIIQuantity;

  // Update the total crit value in the corresponding table cell
  document.getElementById("totalCrit").innerText = totalCrit;
}

function calculateGridCrit() {
  var mainSum = parseFloat(document.getElementById("mainSum").innerText) || 0;
  var friendSum =
    parseFloat(document.getElementById("friendSum").innerText) || 0;
  var sixDragon =
    parseFloat(document.getElementById("sixDragon").innerText) || 0;
  var backline = parseFloat(document.getElementById("backline").innerText) || 0;
  var exalto = parseFloat(document.getElementById("exalto").innerText) || 0;
  var totalCrit =
    parseFloat(document.getElementById("totalCrit").innerText) || 0;

  var gridCrit =
    ((100 + mainSum + friendSum + sixDragon + backline + exalto) / 100) *
    totalCrit;

  // Update the gridCrit value in the corresponding table cell
  document.getElementById("gridCrit").innerText = gridCrit.toFixed(2); // Round to 2 decimal places
}
