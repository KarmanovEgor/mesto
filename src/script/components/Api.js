export default class Api {
  constructor(options) {
    this._url = options.baseUrl;
    this._headers = options.headers;
    this._authorization = options.headers.authorization;
  }
  // получаем инфу о пользователе
  getInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: {
        authorization: this._authorization,
      },
    }).then((res) => (res.ok ? res.json() : Promise.reject()));
    /* Возвращаем Promise, с информацией о пользователе. Если запрос не удался, Promise отклоняется.
     */
  }

  // отправляем GET-запрос на сервер для получения списка карточек.
  // Возвращаем Promise, со списком карточек. Если запрос не удался, Promise отклоняется.
  getCards() {
    return fetch(`${this._url}/cards`, {
      headers: {
        authorization: this._authorization,
      },
    }).then((res) => (res.ok ? res.json() : Promise.reject()));
  }

  // отправляем PATCH-запрос на сервер для обновления информации о пользователе.
  //  Возвращаем Promise,с обновленной информацией о пользователе. Если запрос не удался, Promise отклоняется.
  setUserInfo(data) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: data.profilename,
        about: data.job,
      }),
    }).then((res) => (res.ok ? res.json() : Promise.reject()));
  }

  // отправляем PATCH-запрос на сервер для обновления аватара пользователя.
  setUserAva(data) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    }).then((res) => (res.ok ? res.json() : Promise.reject()));
  }

  // отправляем POST-запрос на сервер для добавления новой карточки.
  // Принимаем объект data, содержащий данные новой карточки: ссылку на изображение и название.
  // Возвращаем Promise, с информацией о новой карточке. Если запрос не удался, Promise отклоняется.
  addCard(data) {
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: data.title,
        link: data.link,
      }),
    }).then((res) => (res.ok ? res.json() : Promise.reject()));
  }

  // отправляем PUT-запрос на сервер для добавления лайка карточке.
  // Принимаем идентификатор карточки cardId. Возвращаем Promise,
  addLike(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: {
        authorization: this._authorization,
      },
    }).then((res) => (res.ok ? res.json() : Promise.reject()));
  }

  deleteLike(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: {
        authorization: this._authorization,
      },
    }).then((res) => (res.ok ? res.json() : Promise.reject()));
  }
  deleteCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: "DELETE",
      headers: {
        authorization: this._authorization,
      },
    }).then((res) => (res.ok ? res.json() : Promise.reject()));
  }
}
