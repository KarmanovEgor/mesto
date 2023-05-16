import Popup from "./popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitFn) {
    super(popupSelector);
    this._submitFn = submitFn;
    this._form = this._popup.querySelector(".popup__form");
    this._inputs = this._form.querySelectorAll(".popup__element");
  }
  getInputValues() {
    const values = Object.fromEntries(new FormData(this._form));
    return values
    // this._values = {};
    // this._inputs.forEach((input) => {
    //   // в values на каждой итерации создаем свойства input.name
    //   this._values[input.name] = input.value;
    // });
    // return this._values;
  }
  setInputsValue(objUser) {
    this._inputs.forEach((input) => {
      input.value = objUser[input.name];
    });
  }
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", this._submitFn);
  }
  close() {
    super.close();
    this._form.reset();
  }
}
