export default class Popup {
  constructor(title, text) {
    this.title = title;
    this.text = text;
    this.date = new Date();
  }


  initPopup = () => {

    document.getElementById("popup").addEventListener("click", this.popupEvent);

  };

  popupEvent = () => {

    const popup = document.getElementById("simplePopup");
    popup.innerHTML = this.uppercaseTitle;

    popup.classList.toggle("show");

  };

  toString() {
    return JSON.stringify({
      title: this.title,
      date: this.date.toJSON(),
      img: this.text
    }, null, 2)
  }

  get uppercaseTitle() {
    let value = this.title.toUpperCase();
    console.log(value);
    return value;
  }
}




class Util {
  static id = Date.now();
}

console.log('Util id: ', Util.id);


