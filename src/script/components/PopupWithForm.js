import Popup from "./popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitFn) {
    super(popupSelector);
    this._submitFn = submitFn;
    this._form = this._popup.querySelector(".popup__form");
    this._inputs = this._form.querySelectorAll(".popup__element");
  }
  _getInputValues() {
    return Object.fromEntries(new FormData(this._form));
  }
  setInputsValue(objUser) {
    this._inputs.forEach((input) => {
      input.value = objUser[input.name];
    });
  }
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitFn(this._getInputValues());
      this.close();
    });
  }
  close() {
    super.close();
    this._form.reset();
  }
}
