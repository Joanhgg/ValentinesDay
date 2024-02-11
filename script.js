function increaseYesButton() {
    var yesButton = document.getElementById("yesButton");
    yesButton.style.fontSize = (parseInt(window.getComputedStyle(yesButton).fontSize) + 20) + "px";
    var extraImage = document.getElementById("extraImage");
    extraImage.style.display = "block";
  }
  
  function showConfirmation() {
    var confirmationContainer = document.getElementById("confirmationContainer");
    confirmationContainer.style.display = "flex";
  
    var mainContainer = document.querySelector(".container");
    mainContainer.style.display = "none";

  }