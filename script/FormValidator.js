export default class formValidate {
  constructor(config, form) {
  this._formSelector = config.formSelector;
  this._inputSelector = config.inputSelector;
  this._submitButtonSelector = config.submitButtonSelector;
  this._inactiveButtonClass = config.inactiveButtonClass;
  this._inputErrorClass = config.inputErrorClass;
  this._textErrorClass = config.textErrorClass;
  this._errorSelectType = config.errorSelectType;
  this._form = form;
  this._btn = form.querySelector(this._submitButtonSelector);
  this._inputElements = form.querySelectorAll(this._inputSelector);
  }
  _hideInputError(){
    this._input.classList.remove(this._inputErrorClass);
    this._currentInputErrorContainer.classList.remove(this._textErrorClass);
  this._currentInputErrorContainer.textContent = "";
  }
  _showInputError(){
 this._input.classList.add(this._inputErrorClass);
 this._currentInputErrorContainer.classList.add(this._textErrorClass);
 this._currentInputErrorContainer.textContent = this._input.validationMessage;
  }
  _disableButton() {
 this._btn.classList.add(this._inactiveButtonClass);
 this._btn.disabled = true;
  }
  _enableButton() {
    this._btn.classList.remove(this._inactiveButtonClass);
    this._btn.disabled = false;
  }
  _hasInvalidInput() {
    return Array.from(this._inputElements).some(input => !input.validity.valid);
  }
  _toggleButtonState(){
    this._hasInvalidInput()
    ? this._disableButton (this._btn)
    : this._enableButton();
};

  _checkInputValidity() {
    this._currentInputErrorContainer = this._form.querySelector(
      `${this._errorSelectType}${this._input.name}`);
      const isValid = this._input.validity.valid;
  if (isValid) {
    this._hideInputError();
  } else {
    this._showInputError();
  }
}
  _setEventListener() {
    this._inputElements.forEach(input => {
      input.addEventListener('input', () => {
        this._input = input;
        this._checkInputValidity()
        this._toggleButtonState()
        console.log(this._inputElements)
      })
    })
  }

  enableValidation() {
    this._setEventListener();
  }
  resetErrorOpenForm(){
  this._inputElements.forEach(input => {
    this._input = input
    this._currentInputErrorContainer = this._form.querySelector(
      `${this._errorSelectType}${this._input.name}`
    );
    if (!input.validity.valid) {
      this._hideInputError()
    }
  })
  this._disableButton();
  }
}
