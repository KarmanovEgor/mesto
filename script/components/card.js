export default class Card {
  constructor(card, templateEl, openImgPopup) {
    this._card = card;
    this._link = card.link;
    this._name = card.title;
    this._templateEl = templateEl;
    this._openImgPopup = openImgPopup;
    this._cardElement = document
      .querySelector(this._templateEl)
      .content.querySelector(".element__card")
      .cloneNode(true);
    this._deleteButton = this._cardElement.querySelector(".element__trash-btn");
    this._likeBtnElement =
      this._cardElement.querySelector(".element__like-btn");
    this._fotoElement = this._cardElement.querySelector(".element__foto");

  }

  _setEventListener() {
    this._likeBtnElement.addEventListener("click", (evt) =>
      evt.target.classList.toggle("element__like-btn_active")
    );
    this._deleteButton.addEventListener("click", () => {
      this._cardElement.remove();
      this._cardElement = null;
    });
    this._fotoElement.addEventListener("click", () =>
      this._openImgPopup(this._card)
    );
  }

  createCard() {
    this._fotoElement.src = this._link;
    this._fotoElement.alt = this._name;
    this._cardName = this._cardElement.querySelector(
      ".element__name"
    ).textContent = this._name;
    this._setEventListener();
    return this._cardElement;
  }
}
