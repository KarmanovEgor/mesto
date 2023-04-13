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
  resetErrorOpenForm(popupFormEdit)
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

const cards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

// -------Popup добавления карточки------------------

const popupAddCard = document.querySelector(".popup_add-form");
const namePlaceInput = popupAddCard.querySelector("#namecard");
const srcPlaceInput = popupAddCard.querySelector("#src");
const popupOpenAddButton = document.querySelector(".profile__button-add");
const popupFormAdd = popupAddCard.querySelector(".popup__form-add");
const popupOpenAddButtonElement = popupAddCard.querySelector(".popup__close");
const elementSection = document.querySelector(".element");
const nameCardInput = popupAddCard.querySelector("#namecard");
const srcInput = popupAddCard.querySelector("#src");
const popupImgForm = document.querySelector(".popup_img-form");
const popupImg = popupImgForm.querySelector(".popup__image");
const popupImgClose = popupImgForm.querySelector(".popup__close");
const popupImgCaption = popupImgForm.querySelector(".popup__figurecaption-img");
const newCard = document.querySelector(".element__cards").content;
const popupAddInputList = popupAddCard.querySelectorAll('.popup__element');
const popupAddButtn = popupAddCard.querySelector('.popup__btn');

//функция лайка, удаления карточки, открытия popup с изображением
function addListeners(likes, trash, img, card) {
  likes.addEventListener("click", (evt) =>
    evt.target.classList.toggle("element__like-btn_active")
  );
  trash.addEventListener("click", (evt) =>
    evt.target.closest(".element__card").remove()
  );
  img.addEventListener("click", () => {
    popupImg.src = card.link;
    popupImg.alt = card.name;
    popupImgCaption.textContent = card.name;
    openPopup(popupImgForm);
  });
}
// Создание карточки

function createCard(card) {
  const cardElement = newCard.cloneNode(true);
  const deleteButton = cardElement.querySelector(".element__trash-btn");
  const likeBtnElement = cardElement.querySelector(".element__like-btn");
  const fotoElement = cardElement.querySelector(".element__foto");
  fotoElement.src = card.link;
  fotoElement.alt = card.name;
  const cardName = (cardElement.querySelector(".element__name").textContent =
    card.name);

  addListeners(likeBtnElement, deleteButton, fotoElement, card);
  return cardElement;
}
// перебор массива cards и добавление карточки в разметку
cards.forEach((el) => {
  const card = createCard(el);
  elementSection.append(card);
});

// Popup добавления карточки ---- функция открытия
function openPopupAdd() {
  openPopup(popupAddCard);
  popupFormAdd.reset();
  resetErrorOpenForm(popupFormAdd);


}
function closePopupAdd() {
  closePopup(popupAddCard);
}

// функция ввода данных в попап и добавления карточки
function handleFormAdd(evt) {
  evt.preventDefault();
  const popupAddCard = evt.target;
  const card = { name: nameCardInput.value, link: srcInput.value };
    elementSection.prepend(createCard(card));
    closePopupAdd();
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
