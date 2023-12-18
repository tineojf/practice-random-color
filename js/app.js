const lblColorName = document.querySelector('#txtColorName');
const btnRandomColor = document.querySelector('#btnRandom');

const index = "1234567890ABCDEF";
const indexLength = index.length;

btnRandomColor.addEventListener('click', () => {
  changeBackgroundColor();
});

function randomIndex() {
  return Math.floor(Math.random() * indexLength);
}

function chooseRandomColor() {
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += index[randomIndex()];
  }
  return color;
}

function changeBackgroundColor() {
  lblColorName.textContent = chooseRandomColor();
  document.body.style.backgroundColor = chooseRandomColor();
}

changeBackgroundColor();
