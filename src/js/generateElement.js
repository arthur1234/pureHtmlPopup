export  class generateElements {
  static generatePopup() {
    let container = document.createElement("dev");
    let content = document.createElement('dev');
    let title = document.createElement('dev');
    let text = document.createElement('dev');

    this.setAttributes(container, {"class": "popup"});
    this.setAttributes(content, {"class": "popup-text", "id": "simplePopup"});
    this.setAttributes(title, {"class": "title"});
    this.setAttributes(text, {"class": "text"});

    content.append(title,text);
    container.appendChild(content);
    document.body.appendChild(container);
  }

  static setAttributes(el, attrs) {
    for (let key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }
}
