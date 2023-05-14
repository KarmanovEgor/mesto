import Popup from "./popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelectoer){

    super(popupSelectoer);
    this._popupImage = this._popup.querySelector('.popup__image');
    this._imagePopupCaption = this._popup.querySelector('.popup__figurecaption-img');
  }
  open = (card) => {

    this._popupImage.src = card.link;
    this._popupImage.alt = card.name;
    this._imagePopupCaption.textContnent = card.name;
    super.open()
  }
}
