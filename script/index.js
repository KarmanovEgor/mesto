// -------Popup редактирования профиля------------------
const formElement = document.querySelector(".popup");
const formElementEdit = document.querySelector(".popup__edit");
const nameInput = formElement.querySelector("#name");
const jobInput = formElement.querySelector("#job");
const popupCloseButtonEditElement = formElement.querySelector(".popup__close");
const popupOpenButtonElement = document.querySelector(".profile__button-edit");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const popupFormEdit = formElement.querySelector(".popup__form-edit");


// Popup ---- общая функция открытия
const openPopup = function (namePopup) {
  namePopup.classList.add('popup_opened');
  console.log(openPopup);
}
// Popup ---- общая функция закрытия
const closePopup = function (namePopup) {
  namePopup.classList.remove('popup_opened');
}
// Popup редактирования ---- функция открытия и закрытия
function openPopupEdit () {
nameInput.value = profileTitle.textContent;
jobInput.value = profileSubtitle.textContent;
openPopup(formElementEdit);
}
function closePopupEdit () {
  closePopup(formElementEdit);
}

function handleFormSubmit (evt) {
    evt.preventDefault();
profileTitle.textContent = nameInput.value;
profileSubtitle.textContent = jobInput.value;
  closePopup(formElementEdit);
  }



 popupFormEdit.addEventListener('submit', handleFormSubmit);
 popupOpenButtonElement.addEventListener('click', openPopupEdit);
 popupCloseButtonEditElement.addEventListener('click', closePopupEdit);




// -------Popup добавления карточки------------------

const formElementAdd = document.querySelector(".popup__add-form");
const namePlaceInput = formElementAdd.querySelector("#namecard");
const srcPlaceInput = formElementAdd.querySelector("#src");
const popupOpenOpenAddElement = document.querySelector(".profile__button-add");
const popupFormAdd = formElementAdd.querySelector(".popup__form-add");
const nameCardInput = formElementAdd.querySelector("#namecard");
const srcInput = formElementAdd.querySelector("#src");
const popupCloseButtonAddElement = formElementAdd.querySelector (".popup__close")

// Popup добавления карточки ---- функция открытия и закрытия
function openPopupAdd () {

  openPopup(formElementAdd);
  }
  function closePopupAdd () {
    closePopup(formElementAdd);
  }

  // function handleFormSubmit (evt) {
  //     evt.preventDefault();
  //     closePopupAdd(formElementAdd);
  //   }
  //   popupFormAdd.addEventListener('submit', handleFormSubmit);
    popupOpenOpenAddElement.addEventListener('click', openPopupAdd);
    popupCloseButtonAddElement.addEventListener('click', closePopupAdd);
