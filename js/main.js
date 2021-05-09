window.addEventListener("DOMContentLoaded", () => {
  const text = document.querySelector("#text");
  const readBtn = document.querySelector("#readBtn");

  const read = () => {
    readBtn.addEventListener("click", () => {
      if (text.value != null) {
        let Speech = new SpeechSynthesisUtterance();
        let voice = window.speechSynthesis;
        Speech.text = text.value;
        voice.speak(Speech);
      }
    });
  };
  read();
});
