import Card from "../script/components/card.js";
import formValidate from "../script/components/FormValidator.js";
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
  CardAddPopup,
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
    renderer: (el) => {
      const card = new Card(el, templateEl, popupImage.open);
      const cardObject = card.createCard();
      return cardObject;
    },
  },
  elSection
);
section.addCardArray();

const popupProfile = new PopupWithForm(popupProfileSelector, (evt) => {
  evt.preventDefault();
  userInfo.setUserInfo(popupProfile.getInputValues());
  popupProfile.close();
});
popupProfile.setEventListeners();
// функция ввода данных в попап и добавления карточки
const popupAddCards = new PopupWithForm(CardAddPopup, (evt) => {
  evt.preventDefault();
  section.addItem(section.renderer(popupAddCards.getInputValues()));
  popupAddCards.close();
});
popupAddCards.setEventListeners();
// Popup редактирования ---- функция открытия

function openPopupEdit() {
  formEditValid.resetErrorOpenForm();
  popupProfile.setInputsValue(userInfo.getUserInfo());
  popupProfile.open();
}

// Экземплярs для форм и валидация
const formEditValid = new formValidate(validConfig, popupFormEdit);
formEditValid.enableValidation();
const formAddValid = new formValidate(validConfig, popupFormAdd);
formAddValid.enableValidation();

// Popup добавления карточки ---- функция открытия
function openPopupAdd() {
  popupFormAdd.reset();
  formAddValid.resetErrorOpenForm();
  popupAddCards.open();
}

profileOpenButton.addEventListener("click", openPopupEdit);
popupOpenAddButton.addEventListener("click", openPopupAdd);
