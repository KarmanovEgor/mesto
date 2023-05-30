import "../pages/index.css";
import Card from "../script/components/card.js";
import FormValidate from "../script/components/FormValidator.js";
import PopupWithImage from "../script/components/PopupWithImage.js";
import Section from "../script/components/Section.js";
import UserInfo from "../script/components/UserInfo.js";
import PopupWithForm from "../script/components/PopupWithForm.js";
import Api from "../script/components/Api";
import PopupDelCard from "../script/components/PopupDelCard.js";
import {
  cards,
  profileOpenButton,
  popupFormEdit,
  popupOpenAddButton,
  templateEl,
  cardAddPopup,
  elSection,
  popupImageSelector,
  popupProfileSelector,
  popupSelectAva,
  btnAvaEdit,
  popupDelSel,
  config,
  validConfig,
  popupFormAdd,
  popupAvaEdit,
} from "../script/utils/const.js";


const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-66",
  headers: {
    authorization: "9a95746f-f7b1-457c-ba4e-3c32c962e5ea",
    "Content-Type": "application/json",
  },
});

const userInfo = new UserInfo(config);
const popupImage = new PopupWithImage(popupImageSelector);
// Создание новой карточки

const section = new Section(
  {
    items: cards,
    renderer: creatNewCard,
  },
  elSection
);
section.addCardArray();

const popupProfile = new PopupWithForm(popupProfileSelector, (data) => {
  userInfo.setUserInfo(data);
});
const popupDelCards = new PopupDelCard(popupDelSel, (element) => {
  element.deleteCard();
  popupDelCards.close();
});

// функция ввода данных в попап и добавления карточки
function creatNewCard(cardData) {
  const cardElem = new Card(
    cardData,
    templateEl,
    popupImage.open,
    popupDelCards.open
  );
  return cardElem.createCard();
}
const popupAddCards = new PopupWithForm(cardAddPopup, (domEl) => {
  section.addItem(creatNewCard(domEl));
});

const popapAvaEdit = new PopupWithForm(popupSelectAva, (data) => {
  document.querySelector(".profile__img").src = data.ava;
});

// Popup редактирования ---- функция открытия

function openPopupEdit() {
  formEditValid.resetErrorOpenForm();
  popupProfile.setInputsValue(userInfo.getUserInfo());
  popupProfile.open();
}
function openPopupAva() {
  formAvaValid.resetErrorOpenForm();
  popapAvaEdit.open();
}
// Popup добавления карточки ---- функция открытия
function openPopupAdd() {
  formAddValid.resetErrorOpenForm();
  popupAddCards.open();
}

// Экземплярs для форм и валидация
const formEditValid = new FormValidate(validConfig, popupFormEdit);
formEditValid.enableValidation();
const formAddValid = new FormValidate(validConfig, popupFormAdd);
formAddValid.enableValidation();
const formAvaValid = new FormValidate(validConfig, popupAvaEdit);
formAvaValid.enableValidation();

popupProfile.setEventListeners();
popupAddCards.setEventListeners();
popapAvaEdit.setEventListeners();
popupImage.setEventListeners();
popupDelCards.setEventListeners();

profileOpenButton.addEventListener("click", openPopupEdit);
popupOpenAddButton.addEventListener("click", openPopupAdd);
btnAvaEdit.addEventListener("click", openPopupAva);
