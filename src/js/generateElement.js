export  class generateElements {
  static generatePopup() {
    let overlay = document.createElement("dev");
    let container = document.createElement("dev");
    let content = document.createElement('dev');
    let title = document.createElement('dev');
    let close = document.createElement('dev');
    let text = document.createElement('dev');

    this.setAttributes(container, {"class": "popup", "id": "popup"});
    this.setAttributes(overlay, {"id": "overlay"});
    this.setAttributes(content, {"class": "popup-text", "id": "simplePopup"});
    this.setAttributes(title, {"class": "title"});
    this.setAttributes(close, {"class": "close", "id": "closePopup"});
    this.setAttributes(text, {"class": "text"});

    title.appendChild(close);
    content.append(title,text);
    container.appendChild(content);
    document.body.append(container,overlay);
  }

  static setAttributes(el, attrs) {
    for (let key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }
}
