import cards from "./const.js";
import Card from "./card.js";
// -------Popup редактирования профиля------------------

const popupList = document.querySelectorAll(".popup");
const profilePopup = document.querySelector(".popup_edit");
const nameInput = profilePopup.querySelector("#name");
const jobInput = profilePopup.querySelector("#job");
const profileCloseButton = profilePopup.querySelector(".popup__close");
const profileOpenButton = document.querySelector(".profile__button-edit");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const popupFormEdit = profilePopup.querySelector(".popup__form-edit");
const popupProfileBtnEdit = profilePopup.querySelector('.popup__btn');
const popupProfileInputList = profilePopup.querySelectorAll('.popup__element');
const validConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__element",
  submitButtonSelector: ".popup__btn",
  inactiveButtonClass: "popup__btn_disabled",
  inputErrorClass: "popup__element_invalid",
  textErrorClass: "popup__error_visible",
  errorSelectType: ".popup__error_type_",
};
// Popup ---- общая функция открытия
const openPopup = function (namePopup) {
  namePopup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupEsc);
};
// Popup ---- общая функция закрытия

const closePopup = function (namePopup) {
  namePopup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupEsc);
};
// функция закрытия попап Esc
const closePopupEsc = function (evt) {
  if (evt.key === "Escape") {
    const popupVisible = document.querySelector(".popup_opened");
    closePopup(popupVisible);
  }
};

// Popup редактирования ---- функция открытия и закрытия

function openPopupEdit() {
  resetErrorOpenForm(popupFormEdit);
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
  openPopup(profilePopup);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup(profilePopup);
}

popupFormEdit.addEventListener("submit", handleProfileFormSubmit);
profileOpenButton.addEventListener("click", openPopupEdit);




// -------Popup добавления карточки------------------

const popupAddCard = document.querySelector(".popup_add-form");
const namePlaceInput = popupAddCard.querySelector("#namecard");
const srcPlaceInput = popupAddCard.querySelector("#src");
const popupOpenAddButton = document.querySelector(".profile__button-add");
const popupFormAdd = popupAddCard.querySelector(".popup__form-add");
const popupCloseElement = popupAddCard.querySelector(".popup__close");
const elementSection = document.querySelector(".element");
const nameCardInput = popupAddCard.querySelector("#namecard");
const srcInput = popupAddCard.querySelector("#src");
const popupImgForm = document.querySelector(".popup_img-form");
const popupImg = popupImgForm.querySelector(".popup__image");
const popupImgClose = popupImgForm.querySelector(".popup__close");
const popupImgCaption = popupImgForm.querySelector(".popup__figurecaption-img");
// const newCard = document.querySelector(".element__cards").content;
const templateEl = "#element__cards"
const popupAddInputList = popupAddCard.querySelectorAll('.popup__element');
const popupAddButtn = popupAddCard.querySelector('.popup__btn');


function openImgPopup(card) {
  popupImg.src = card.link;
  popupImg.alt = card.name;
  popupImgCaption.textContent = card.name;
  openPopup(popupImgForm);
}


// Создание новой карточки

function createNewCard(el) {
 const card = new Card(el, templateEl, openImgPopup);
 const cardObject = card.createCard();
  return cardObject;
}

//функция добавления карточки
function addCard(box, card) {
  box.prepend(card);
}

// перебор массива cards и добавление карточки в разметку
cards.forEach((el) => {
  addCard(elementSection, createNewCard(el))

});

class formValidate {
  constructor(config, form) {
  this._formSelector = config.formSelector;
  this._inputSelector = config.inputSelector;
  this._submitButtonSelector = config.submitButtonSelector;
  this._inactiveButtonClass = config.inactiveButtonClass;
  this._inputErrorClass = config.inputErrorClass;
  this._textErrorClass = config.textErrorClass;
  this._errorSelectType = config.errorSelectType;
  this._form = form;
  }
  _hideInputError(currentInputErrorContainer, input){
    input.classList.remove(this._inputErrorClass);
  currentInputErrorContainer.textContent = "";
  }
  _showInputError(currentInputErrorContainer, input){
 input.classList.add(this._inputErrorClass);
 currentInputErrorContainer.textContent = input.validationMessage;
  }

  _checkInputValidity(input) {
    const currentInputErrorContainer = this._form.querySelector(
      `${this._errorSelectType}${input.name}`);
      const isValid = input.validity.valid;
  if (isValid) {
    this._hideInputError(currentInputErrorContainer, input);
  } else {
    this._showInputError(currentInputErrorContainer, input);
  }
}
  _setEventListener() {
    this._inputElements.forEach(input => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input)
        // this._toggleButtonState()
        console.log(this._inputElements)
      })
    })
  }

  enableValidation() {
    this._btn = this._form.querySelector(this._submitButtonSelector);
    this._inputElements = this._form.querySelectorAll(this._inputSelector);
    this._setEventListener();


  }
}
// Экземпляр для формы
const formEditValid = new formValidate(validConfig, popupFormEdit);
console.log(formEditValid);
formEditValid.enableValidation()

// Popup добавления карточки ---- функция открытия
function openPopupAdd() {
  openPopup(popupAddCard);
  popupFormAdd.reset();
  resetErrorOpenForm(popupFormAdd);
}

// функция ввода данных в попап и добавления карточки
function handleFormAdd(evt) {
  evt.preventDefault();
  const card = { name: nameCardInput.value, link: srcInput.value };
    addCard(elementSection, createNewCard(card));
    closePopup(popupAddCard);
  }


popupFormAdd.addEventListener("submit", handleFormAdd);
popupOpenAddButton.addEventListener("click", openPopupAdd);

popupList.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup_opened")) {
      closePopup(popup);
    }
    if (evt.target.classList.contains("popup__close")) {
      closePopup(popup);
    }
  });
});
