function handleLinkClick(url) {
  window.location.href = url;
}

document.addEventListener("DOMContentLoaded", function () {
  var animatedText = document.getElementById("animatedText");
  var textContent = animatedText.textContent;
  animatedText.textContent = "";

  var currentIndex = 0;

  function animateText() {
    if (currentIndex >= textContent.length) {
      currentIndex = 0;
    }

    animatedText.textContent += textContent[currentIndex];
    currentIndex++;

    if (currentIndex <= textContent.length) {
      setTimeout(animateText, 100);
    }
  }

  animateText();
});
