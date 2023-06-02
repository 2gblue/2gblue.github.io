function copyToClipboard() {
  var textElement = document.getElementById("convertedText");
  var text = textElement.textContent || textElement.innerText;

  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(text)
      .then(function () {})
      .catch(function (error) {
        console.error("Failed to copy text: ", error);
      });
  } else {
    // Fallback for older browsers
    var textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed"; // Prevent scrolling to bottom
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand("copy");
    } catch (error) {
      console.error("Failed to copy text: ", error);
    } finally {
      document.body.removeChild(textarea);
    }
  }
}
let conversionOption = "/p"; // Default conversion option
let customConversionOption = ""; // Custom conversion option

function toggleConversionOption(option) {
  conversionOption = option;
  convertText();
}

function toggleCustomConversionOption() {
  const customButtonToggle = document.getElementById("customButtonToggle");
  const customButton = document.getElementById("customButton");

  if (customButton.value.trim() !== "") {
    customConversionOption = customButton.value.trim();
    toggleConversionOption(customConversionOption);
    customButtonToggle.innerHTML = "Toggle (" + customConversionOption + ")";
  }
}

function updateCustomConversionOption() {
  const customButton = document.getElementById("customButton");
  const customButtonToggle = document.getElementById("customButtonToggle");

  customConversionOption = customButton.value.trim();
  customButtonToggle.innerHTML = "Toggle (" + customConversionOption + ")";
}

function convertText() {
  const inputText = document.getElementById("inputText").value;
  const convertedText = addLineBreaks(inputText);
  document.getElementById("convertedText").textContent = convertedText;
}

function addLineBreaks(text) {
  const lines = text.split("\n");
  return lines
    .map((line) => {
      if (line.trim() !== "") {
        return `${conversionOption} ${line}`;
      } else {
        return line;
      }
    })
    .join("\n");
}

