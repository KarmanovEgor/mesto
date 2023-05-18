import Popup from "./popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelectoer){

    super(popupSelectoer);
    this._popupImage = this._popup.querySelector('.popup__image');
    this._imagePopupCaption = this._popup.querySelector('.popup__figurecaption-img');
  }
  open = (card) => {

    this._popupImage.src = card.link;
    this._popupImage.alt = card.title;
    this._imagePopupCaption.textContent = card.title;
    super.open()
  }
}
