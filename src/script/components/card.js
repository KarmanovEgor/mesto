export default class Card {
  constructor(card, templateEl, openImgPopup, popupDelCardsOpen) {
    this._link = card.link;
    this._name = card.name;
    this._templateEl = templateEl;
    this._openImgPopup = openImgPopup;
    this._myId = card.myId;
    this._ownerId = card.owner._id;
    this._cardElement = document
      .querySelector(this._templateEl)
      .content.querySelector(".element__card")
      .cloneNode(true);
    this._deleteButton = this._cardElement.querySelector(".element__trash-btn");
    this._likeBtnElement =
      this._cardElement.querySelector(".element__like-btn");
    this._fotoElement = this._cardElement.querySelector(".element__foto");
    this._popupDelCardsOpen = popupDelCardsOpen;
    console.log(this._ownerId);
    console.log(card);
  }

  _setEventListener() {
    this._likeBtnElement.addEventListener("click", (evt) =>
      evt.target.classList.toggle("element__like-btn_active")
    );
    this._deleteButton.addEventListener("click", () => {
      this._popupDelCardsOpen(this);
    });
    this._fotoElement.addEventListener("click", () =>
      this._openImgPopup({ link: this._link, title: this._name })
    );
  }
  _changeVisabilityDelBtn() {
    if (this._myId === this._ownerId) {
      this._deleteButton.style.display = "block";
    } else {
      this._deleteButton.style.display = "none";
    }
  }
  deleteCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }
  createCard() {
    this._fotoElement.src = this._link;
    this._fotoElement.alt = this._name;
    this._cardName = this._cardElement.querySelector(
      ".element__name"
    ).textContent = this._name;
    this._changeVisabilityDelBtn();
    this._setEventListener();
    console.log(this._cardName);
    return this._cardElement;
  }
}
