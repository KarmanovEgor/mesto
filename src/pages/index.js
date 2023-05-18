import "../pages/index.css";
import Card from "../script/components/card.js";
import FormValidate from "../script/components/FormValidator.js";
import PopupWithImage from "../script/components/PopupWithImage.js";
import Section from "../script/components/Section.js";
import UserInfo from "../script/components/UserInfo.js";
import PopupWithForm from "../script/components/PopupWithForm.js";
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
  config,
  validConfig,
  popupFormAdd,
} from "../script/utils/const.js";

const userInfo = new UserInfo(config);

const popupImage = new PopupWithImage(popupImageSelector);
popupImage.setEventListeners();

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
popupProfile.setEventListeners();
// функция ввода данных в попап и добавления карточки
function creatNewCard(cardData) {
  const cardElem = new Card(cardData, templateEl, popupImage.open);
  return cardElem.createCard();
}
const popupAddCards = new PopupWithForm(cardAddPopup, (domEl) => {
  section.addItem(creatNewCard(domEl));
});
popupAddCards.setEventListeners();
console.log(popupAddCards);
// Popup редактирования ---- функция открытия

function openPopupEdit() {
  formEditValid.resetErrorOpenForm();
  popupProfile.setInputsValue(userInfo.getUserInfo());
  popupProfile.open();
}

// Экземплярs для форм и валидация
const formEditValid = new FormValidate(validConfig, popupFormEdit);
formEditValid.enableValidation();
const formAddValid = new FormValidate(validConfig, popupFormAdd);
formAddValid.enableValidation();

// Popup добавления карточки ---- функция открытия
function openPopupAdd() {
  formAddValid.resetErrorOpenForm();
  popupAddCards.open();
}

profileOpenButton.addEventListener("click", openPopupEdit);
popupOpenAddButton.addEventListener("click", openPopupAdd);
