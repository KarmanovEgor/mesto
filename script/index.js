// Находим форму в DOM
const formElement = document.querySelector(".popup");


// Находим поля формы в DOM
const nameInput = formElement.querySelector("#name");
const jobInput = formElement.querySelector("#job");
const popupCloseButtonElement = formElement.querySelector(".popup__close");
const popupOpenButtonElement = document.querySelector(".profile__button-edit");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const popupForm = formElement.querySelector(".popup__form");



function addPopupVisibility () {
nameInput.value = profileTitle.textContent;
jobInput.value = profileSubtitle.textContent;
  formElement.classList.add('popup_opened');
}
function closePopupVisibility () {
  formElement.classList.remove('popup_opened');
}


// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit (evt) {
    evt.preventDefault();
profileTitle.textContent = nameInput.value;
profileSubtitle.textContent = jobInput.value;
closePopupVisibility();
  }


// // Прикрепляем обработчик к форме:
// // он будет следить за событием “submit” - «отправка»
 popupForm.addEventListener('submit', handleFormSubmit);
 popupOpenButtonElement.addEventListener('click', addPopupVisibility);
 popupCloseButtonElement.addEventListener('click', closePopupVisibility);

