const textInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
textInput.addEventListener('keyup', () => {
  memeText.innerText = textInput.value;
});

const memeInsert = document.getElementById('meme-insert');
memeInsert.addEventListener('input', () => {
  const imagePath = URL.createObjectURL(memeInsert.files[0]);
  const imageElement = document.getElementById('meme-image');
  imageElement.src = imagePath;
});

const styleButtons = document.getElementById('button-container').children;
const memeImageContainer = document.getElementById('meme-image-container');

function applyBorderStyle(element) {
  const cssObj = window.getComputedStyle(element, null);
  const bgColor = cssObj.getPropertyValue('background-color');
  switch (element.id) {
  case 'fire':
    memeImageContainer.style.border = `3px dashed ${bgColor}`;
    break;
  case 'water':
    memeImageContainer.style.border = `5px double ${bgColor}`;
    break;
  case 'earth':
    memeImageContainer.style.border = `6px groove ${bgColor}`;
    break;
  default:
    break;
  }
}

for (let index = 0; index < styleButtons.length; index += 1) {
  styleButtons[index].addEventListener('click', (event) => {
    applyBorderStyle(event.target);
  });
}

const miniatures = document.getElementById('miniature-container').children;

for (let index = 0; index < miniatures.length; index += 1) {
  miniatures[index].addEventListener('click', (event) => {
    const imageElement = document.getElementById('meme-image');
    imageElement.src = event.target.src;
  });
}
