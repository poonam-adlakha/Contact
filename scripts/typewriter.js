const TypeWriter = function (
  textElement,
  words,
  waitTime = 3000,
  typeSpeed = 200,
) {
  this.textElement = textElement;
  this.words = words;
  this.text = '';
  this.wordIndex = 0;
  this.waitTime = parseInt(waitTime, 10);
  this.typeSpeed = parseInt(typeSpeed, 10);
  this.type();
  this.isDeleting = false;
  this.isWaiting = null;
};

TypeWriter.prototype.type = function () {
  const current = this.wordIndex % this.words.length;
  const fullText = this.words[current];
  if (this.isDeleting) {
    this.text = fullText.substring(0, this.text.length - 1);
  } else {
    this.text = fullText.substring(0, this.text.length + 1);
  }

  this.textElement.innerHTML = `<span>${this.text}<span class="text-black ${this.isWaiting}">|</span></span>`;

  let typeSpeed = this.typeSpeed;

  if (this.isDeleting) {
    typeSpeed = typeSpeed / 2;
  }

  if (!this.isDeleting && this.text.length === fullText.length - 1) {
    this.isWaiting = 'animate-blink';
  } else {
    this.isWaiting = null;
  }

  if (!this.isDeleting && this.text === fullText) {
    typeSpeed = this.waitTime;
    this.isDeleting = true;
  } else if (this.isDeleting && this.text === '') {
    this.isDeleting = false;
    this.wordIndex++;
    typeSpeed = this.typeSpeed;
  }

  setTimeout(() => this.type(), typeSpeed);
};

document.addEventListener('DOMContentLoaded', () => {
  const textElement = document.querySelector('.typewriter-effect');
  const words = JSON.parse(textElement.getAttribute('data-words'));
  const waitTime = textElement.getAttribute('data-wait');
  const typeSpeed = textElement.getAttribute('data-speed');
  new TypeWriter(textElement, words, waitTime, typeSpeed);
});
