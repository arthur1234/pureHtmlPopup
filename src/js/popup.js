export default class Popup {
  constructor(title, text) {
    this.title = title;
    this.text = text;
    this.date = new Date();
  }


  initPopup = () => {
    generateElements.generatePopup();
    this.callPopup.addEventListener("click", this.popupEvent);
  };

  popupEvent = () => {

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


class generateElements {
  static generatePopup() {
    let container = document.createElement("dev");
    let content = document.createElement('dev');
    let title = document.createElement('dev');
    let text = document.createElement('dev');

    this.setAttributes(container, {"class": "popup"});
    this.setAttributes(content, {"class": "popup-text", "id": "simplePopup"});
    this.setAttributes(title, {"class": "title"});
    this.setAttributes(text, {"class": "text"});

    content.innerHTML += title.outerHTML + text.outerHTML;
    container.appendChild(content);
    document.body.appendChild(container);
  }

  static setAttributes(el, attrs) {
    for (let key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }
}



