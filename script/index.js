// -------Popup редактирования профиля------------------

const formElement = document.querySelector(".popup");
const popupList = document.querySelectorAll(".popup");
const formElementEdit = document.querySelector(".popup_edit");
const nameInput = formElement.querySelector("#name");
const jobInput = formElement.querySelector("#job");
const popupCloseButtonEditElement = formElement.querySelector(".popup__close");
const popupOpenButtonElement = document.querySelector(".profile__button-edit");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const popupFormEdit = formElement.querySelector(".popup__form-edit");

// Popup ---- общая функция открытия
const openPopup = function (namePopup) {
  namePopup.classList.add("popup_opened");
  document.addEventListener('keydown',closePopupEsc);
};
// Popup ---- общая функция закрытия

const closePopup = function (namePopup) {
  namePopup.classList.remove("popup_opened");
  document.removeEventListener('keydown',closePopupEsc);
};
// функция закрытия попап Esc
const closePopupEsc = function(evt) {
  if (evt.key === 'Escape') {
    const popupVisible = document.querySelector('.popup_opened');
    closePopup(popupVisible)
  }
}
// функция закрытия попап overlay
const closePopupOverlay = function (evt) {
if (evt.target === evt.currentTarget) {
  closePopup(evt.currentTarget);
}
}


// Popup редактирования ---- функция открытия и закрытия

function openPopupEdit() {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
  openPopup(formElementEdit);
}


function handleFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup(formElementEdit);
}

popupFormEdit.addEventListener("submit", handleFormSubmit);
popupOpenButtonElement.addEventListener("click", openPopupEdit);


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

const formElementAdd = document.querySelector(".popup_add-form");
const namePlaceInput = formElementAdd.querySelector("#namecard");
const srcPlaceInput = formElementAdd.querySelector("#src");
const popupOpenOpenAddElement = document.querySelector(".profile__button-add");
const popupFormAdd = formElementAdd.querySelector(".popup__form-add");
const popupCloseButtonAddElement =
  formElementAdd.querySelector(".popup__close");
const elementSection = document.querySelector(".element");
const nameCardInput = formElementAdd.querySelector("#namecard");
const srcInput = formElementAdd.querySelector("#src");
const popupImgForm = document.querySelector(".popup_img-form");
const popupImg = popupImgForm.querySelector(".popup__image");
const popupImgClose = popupImgForm.querySelector(".popup__close");
const popupImgCaption = popupImgForm.querySelector(".popup__figurecaption-img");
const newCard = document.querySelector(".element__cards").content;

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
  const cardNamee = (cardElement.querySelector(".element__name").textContent =
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
  openPopup(formElementAdd);
}
function closePopupAdd() {
  closePopup(formElementAdd);

}


// функция ввода данных в попап и добавления карточки
function handleFormAdd(evt) {
  evt.preventDefault();
  const formElementAdd = evt.target;
  const card = { name: nameCardInput.value, link: srcInput.value };
  nameCardInput.value;
  srcInput.value;
  elementSection.prepend(createCard(card));
  evt.target.reset();
  closePopupAdd();
}
// находим все крестики проекта по универсальному селектору
const closeButtons = document.querySelectorAll('.popup__close');

closeButtons.forEach((button) => {
  // находим 1 раз ближайший к крестику попап
  const popup = button.closest('.popup');
  // устанавливаем обработчик закрытия на крестик
  button.addEventListener('click', () => closePopup(popup));
});

popupFormAdd.addEventListener("submit", handleFormAdd);
popupOpenOpenAddElement.addEventListener("click", openPopupAdd);



popupList.forEach((popup) => { popup.addEventListener('click', closePopupOverlay)

})
