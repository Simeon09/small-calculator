const keys = document.querySelectorAll("button");

keys.forEach((key) => {
  key.addEventListener("click", calculate);
});

function calculate() {
  let buttontext = this.innerText;
  if (buttontext === "C") {
    upperresult.innerText = " ";
    lowerResult.innerText = " ";
    lowerResult.style.animation = '';
    upperresult.style.animation = '';
    return;
  }
  if (buttontext === "DEL") {
    upperresult.textContent = upperresult.textContent.substr(
      0,
      upperresult.textContent.length - 1
    );
    return;
  }
  if (buttontext === "=") {
    lowerResult.innerText = eval(upperresult.innerText);
    lowerResult.style.animation = 'big 0.5s ease-in-out';
    upperresult.style.animation = 'small 0.5s ease-in-out';
    lowerResult.style. animationFillMode ="forwards";
    upperresult.style. animationFillMode ="forwards";
  }
  else {
      upperresult.textContent += buttontext;
      return;
  }
}
