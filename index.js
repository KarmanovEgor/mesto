import cards from "./script/utils/const.js";
import Card from "./script/components/card.js";
import formValidate from "./script/components/FormValidator.js";
import PopupWithImage from "./script/components/PopupWithImage.js";
import Section from "./script/components/Section.js";
import UserInfo from "./script/components/UserInfo.js";
import PopupWithForm from "./script/components/PopupWithForm.js";

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
const popupProfileSelector = ".popup_edit";
const config = {
  prfileNameSelector: "#name",
  profileJob: "#job"
}

const userInfo = new UserInfo(config);


// Popup редактирования ---- функция открытия


function openPopupEdit() {

  formEditValid.resetErrorOpenForm();
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
  // openPopup(profilePopup);

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
const templateEl = "#element__cards"
const popupAddInputList = popupAddCard.querySelectorAll('.popup__element');
const popupAddButtn = popupAddCard.querySelector('.popup__btn');

const elSection = ".element";


const popupImageSelector = '.popup_img-form'
 const popupImage = new PopupWithImage(popupImageSelector);
 popupImage.setEventListeners()


// Создание новой карточки

const section = new Section({
  items: cards,
  renderer: (el) => {
    const card = new Card(el, templateEl, popupImage.open);
    const cardObject = card.createCard();
    return cardObject;
  }
}, elSection)
section.addCardArray()

// Экземплярs для форм и валидация
const formEditValid = new formValidate(validConfig, popupFormEdit);
formEditValid.enableValidation();
const formAddValid = new formValidate(validConfig, popupFormAdd);
formAddValid.enableValidation();

// Popup добавления карточки ---- функция открытия
function openPopupAdd() {
  popupFormAdd.reset();
  formAddValid.resetErrorOpenForm();
  // openPopup(popupAddCard);
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

// popupList.forEach((popup) => {
//   popup.addEventListener("mousedown", (evt) => {
//     if (evt.target.classList.contains("popup_opened")) {
//       closePopup(popup);
//     }
//     if (evt.target.classList.contains("popup__close")) {
//       closePopup(popup);
//     }
//   });
// });

