export default class Card {
  constructor(card, templateEl, openImgPopup, popupDelCardsOpen, checkLike) {
    this._link = card.link;
    this._name = card.name;
    this._templateEl = templateEl;
    this._openImgPopup = openImgPopup;
    this._myId = card.myId;
    this._cardId = card._id;
    this._like = card.likes;
    this._checkLike = checkLike;
    this._likeQuantity = card.likes.length;
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
    this._counterLike = this._cardElement.querySelector(
      ".element__like-counter"
    );
  }

  _setEventListener() {
    this._likeBtnElement.addEventListener("click", () =>
      this._checkLike(this._cardId, this._likeBtnElement)
    );
    this._deleteButton.addEventListener("click", () => {
      this._popupDelCardsOpen({ element: this, cardId: this._cardId });
    });
    this._fotoElement.addEventListener("click", () =>
      this._openImgPopup({ link: this._link, title: this._name })
    );
  }
  _changeVisabilityDelBtn() {
    if (this._myId === this._ownerId) {
      this._deleteButton.classList.remove("element__trash-btn_hidden");
      console.log();
    } else {
      this._deleteButton.classList.add("element__trash-btn_hidden");
    }
  }
  _checkStatusLike() {
    this._like.forEach((el) => {
      if (el._id === this._myId) {
        this._likeBtnElement.classList.add("element__like-btn_active")
        return;
      }
      this._counterLike.textContent = this._likeQuantity;
    });
  }
  toggleLike(like) {
    this._likeBtnElement.classList.toggle("element__like-btn_active");
    this._counterLike.textContent = like.length;
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
    this._checkStatusLike();
    this._changeVisabilityDelBtn();
    this._setEventListener();
    return this._cardElement;
  }
}
