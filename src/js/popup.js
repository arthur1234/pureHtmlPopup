
import {generateElements} from "./generateElement";

export default class Popup {
  constructor(title, text) {
    this.title = title;
    this.text = text;
    this.date = new Date();
  }

  initPopup = () => {
    this.callPopup.addEventListener("click", this.popupEvent);
  };

  popupEvent = () => {
    generateElements.generatePopup();
    const popup = this.popupElement;
    popup.children[0].innerHTML = this.uppercaseTitle;
    popup.children[1].innerHTML = this.text;
    popup.classList.toggle("show");

  };

  toString() {
    return JSON.stringify({
      title: this.title,
      date: this.date.toJSON(),
      img: this.text
    }, null, 2)
  }

  get callPopup() {
    let el = document.getElementById("open-popup-btn");
    return el;
  }

  get popupElement() {
    let el = document.getElementById("simplePopup");
    return el;
  }

  get uppercaseTitle() {
    let value = this.title.toUpperCase();
    return value;
  }
}






