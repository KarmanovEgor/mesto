import Popup from "./popup.js";

export default class PopupDelCard extends Popup {
  constructor(popupSelector, submitFunction) {
    super(popupSelector);
    this._submitFunction = submitFunction;
    this._form = this._popup.querySelector('.popup__form')

  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitFunction({element: this._element, cardId: this._cardId});
    });
  }
  open = ({element, cardId}) => {
    super.open();
    this._element = element;
    this._cardId = cardId
  };
}
