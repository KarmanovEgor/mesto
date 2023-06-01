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
const popupProfile = new PopupWithForm(popupProfileSelector, (data) => {
  api.setUserInfo(data)
  .then(res => {userInfo.setUserInfo({profilename: res.name, job: res.about, avatar: res.avatar})
  popupProfile.close();
})
  .catch((error => console.error(`Ошибка при редактировании профиля ${error}`)))
  .finally(() => popupProfile.resetTextBtn())
});
const popupDelCards = new PopupDelCard(popupDelSel, ({element, cardId}) => {
api.deleteCard(cardId)
.then(()=> {
  element.deleteCard()
  popupDelCards.close();
})
.catch((error => console.error(`Ошибка при удалении карточки ${error}`)))
.finally()

});

// функция ввода данных в попап и добавления карточки
function creatNewCard(cardData) {
  const cardElem = new Card(
    cardData,
    templateEl,
    popupImage.open,
    popupDelCards.open,
    (cardId, elLike) => {
    if (elLike.classList.contains('element__like-btn_active')){
      api.deleteLike(cardId)
      .then (res => {
        console.log(res)
        cardElem.toggleLike(res.likes);
      })
      .catch((error => console.error(`Ошибка при удалении лайка ${error}`)))
    } else {
        api.addLike(cardId)
        .then(res => {
          console.log(res)
          cardElem.toggleLike(res.likes)
        })
        .catch((error => console.error(`Ошибка при добавлении лайка ${error}`)))
      }
    });
  return cardElem.createCard();
}
// Создаю экземпляр класса для формы добавления карточек с сабмитом
const popupAddCards = new PopupWithForm(cardAddPopup, (data) => {
 api.addCard(data)
  .then((resCard) => {
    console.log(userInfo.getId())
    resCard.myId = userInfo.getId()
    section.addItem(creatNewCard(resCard))
    popupAddCards.close()
  })
  .catch((error => console.error(`Ошибка при создании карточки ${error}`)))
  .finally(() => popupAddCards.resetTextBtn())
});

const popapAvaEdit = new PopupWithForm(popupSelectAva, (data) => {
  api.setUserAva(data)
  .then(res => {userInfo.setUserInfo({profilename: res.name, job: res.about, avatar: res.avatar})
  popapAvaEdit.close()
})
  .catch((error => console.error(`Ошибка при редактировании аватара ${error}`)))
  .finally(() => popapAvaEdit.resetTextBtn())
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

Promise.all([api.getInfo(), api.getCards()])
.then(([resInfo, resCards]) => {
resCards.forEach(element => element.myId = resInfo._id)
userInfo.setUserInfo({profilename: resInfo.name, job: resInfo.about, avatar: resInfo.avatar});
userInfo.setId(resInfo._id )
section.addCardArray(resCards);

})
.catch((error => console.error(`Ошибка  ${error}`)))
const section = new Section(
  {
    items: [],
    renderer: creatNewCard,
  },
  elSection
);
