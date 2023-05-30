import Popup from "./popup.js";

export default class PopupDelCard extends Popup {
  constructor(popupSelector, submitFunction) {
    super(popupSelector);
    this._submitFunction = submitFunction;
    console.log(popupSelector);
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitFunction(this._element);
    });
  }
  open = (element) => {
    super.open();
    console.log(element);
    this._element = element;
  };
}
