import {generateElements} from "./generateElement";

export default class Popup {
  constructor(title, text) {
    this.title = title;
    this.text = text;
    this.show = false;
  }

  initPopup = () => {
    this.el("open-popup-btn").addEventListener("click", this.popupEvent);
  };

  popupEvent = () => {
    this.show = !this.show;

    if (this.show) {
      // CREATE/OPEN POPUP
      generateElements.generatePopup();
      this.on(this.show);
      this.el("simplePopup").children[0].innerHTML += this.uppercaseTitle;
      this.el("simplePopup").children[1].innerHTML = this.text;
      this.el("simplePopup").classList.toggle("show");
      this.el("closePopup").addEventListener("click", this.popupEvent);
      this.el("overlay").addEventListener("click", this.popupEvent);

    } else {
      // CLOSE POPUP
      this.el("simplePopup").classList.toggle("hide");
      this.on(this.show);
      setTimeout(() => {
        let popupElem = this.el("popup");
        popupElem.parentNode.removeChild(popupElem);
      }, 100);
    }
  };

  on = flag => {
    if (flag) {
      this.el("overlay").style.display = "block";
    } else {
      this.el("overlay").style.display = "none";
    }
  }

  el = id => {
    let el = document.getElementById(id);
    return el;
  }


  get uppercaseTitle() {
    let value = this.title.toUpperCase();
    return value;
  }
}






