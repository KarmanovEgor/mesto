// Находим форму в DOM
let formElement = document.querySelector(".popup");


// Находим поля формы в DOM
let nameInput = formElement.querySelector("#name");
let jobInput = formElement.querySelector("#job");
const popupCloseButtonElement = formElement.querySelector(".popup__close");
const popupOpenButtonElement = document.querySelector(".profile__button-edit");
const popupSaveButtonElement = formElement.querySelector(".popup__btn-save");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");


const addPopupVisibility = function () {
formElement.classList.add('popup__opened');
}
const removePopupVisibility = function () {
  formElement.classList.remove('popup__opened');
  }



// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
//                                                 // Так мы можем определить свою логику отправки.
//                                                 // О том, как это делать, расскажем позже.

//     // Получите значение полей jobInput и nameInput из свойства value
profileTitle.textContent = nameInput.value;
profileSubtitle.textContent = jobInput.value;
 }

// // Прикрепляем обработчик к форме:
// // он будет следить за событием “submit” - «отправка»
 formElement.addEventListener('submit', handleFormSubmit);
 popupOpenButtonElement.addEventListener('click', addPopupVisibility);
 popupCloseButtonElement.addEventListener('click', removePopupVisibility);
