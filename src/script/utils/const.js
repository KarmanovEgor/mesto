const cards = [
  {
    title: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    title: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    title: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    title: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    title: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    title: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];
const popupAddCard = document.querySelector(".popup_add-form");
const popupFormAdd = popupAddCard.querySelector(".popup__form-add");
const popupAvaEdit = document.querySelector(".popup__form-ava");
const profilePopup = document.querySelector(".popup_edit");
const profileOpenButton = document.querySelector(".profile__button-edit");
const popupFormEdit = profilePopup.querySelector(".popup__form-edit");
const popupOpenAddButton = document.querySelector(".profile__button-add");
const templateEl = "#element__cards"
const cardAddPopup = '.popup_add-form';
const elSection = ".element";
const popupImageSelector = '.popup_img-form'
const popupProfileSelector = ".popup_edit";
const popupSelectAva = ".popup_ava-form";
const btnAvaEdit = document.querySelector(".profile__button-ava");
const popupDelSel = ".popup_delete-form";
const config = {
  profileNameSel: ".profile__title",
  profileJobSel: ".profile__subtitle"
}
const validConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__element",
  submitButtonSelector: ".popup__btn",
  inactiveButtonClass: "popup__btn_disabled",
  inputErrorClass: "popup__element_invalid",
  textErrorClass: "popup__error_visible",
  errorSelectType: ".popup__error_type_",
};
 export {
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
popupAvaEdit
}

