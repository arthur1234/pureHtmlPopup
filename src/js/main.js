import '../css/normalize.css';
import '../css/main.css';

import Popup from "./popup";
import {getData} from "./getdata";


getData('http://localhost:9999/?id=1')
  .then((data) => {

    const popup = new Popup(data.title, data.description);
    popup.initPopup();
  });



