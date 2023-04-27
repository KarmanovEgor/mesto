//--------- Объекты для валидации
const validConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__element",
  submitButtonSelector: ".popup__btn",
  inactiveButtonClass: "popup__btn_disabled",
  inputErrorClass: "popup__element_invalid",
  textErrorClass: "popup__error_visible",
  errorSelectType: ".popup__error_type_",
};
const lg = console.log;

const enableValidation = ({ formSelector, ...rest }) => {
  const forms = Array.from(document.querySelectorAll(formSelector));
  forms.forEach((form) => {
    form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    setEventListener(form, rest);
  });
};
const setEventListener = (
  formValidate,
  {
    inputSelector,
    formSelector,
    submitButtonSelector,
    errorSelectType,
    inputErrorClass,
    textErrorClass,
    inactiveButtonClass,
    ...rest
  }
) => {
  const formInputs = Array.from(formValidate.querySelectorAll(inputSelector));
  const formButton = formValidate.querySelector(submitButtonSelector);
  disableButton(formButton, inactiveButtonClass);
  formInputs.forEach((input) => {
    input.addEventListener("input", () => {
      checkInputValidity(
        input,
        errorSelectType,
        inputErrorClass,
        textErrorClass
      );
      toggleButtonState(formInputs, formButton, inactiveButtonClass);
    });
  })
  }
//  checkInputValidity проверяет валидность текущего поля ввода и, если оно невалидно, показывает сообщение об ошибке с помощью функции showInputError.
//  Если поле валидно, то скрывает сообщение об ошибке с помощью функции hideInputError.

const checkInputValidity = (
  input,
  errorSelectType,
  inputErrorClass,
  textErrorClass,
  ...rest
) => {
  const currentInputErrorContainer = document.querySelector(
    `${errorSelectType}${input.name}`
  );
  const isValid = input.validity.valid;
  if (isValid) {
    hideInputError(
      input,
      currentInputErrorContainer,
      inputErrorClass,
      textErrorClass
    );
  } else {
    showInputError(
      input,
      currentInputErrorContainer,
      inputErrorClass,
      textErrorClass
    );
  }
};

const hideInputError = (
  input,
  currentInputErrorContainer,
  inputErrorClass,
  textErrorClass,
  ...rest
) => {
  input.classList.remove(inputErrorClass);
  currentInputErrorContainer.classList.remove(textErrorClass);
  currentInputErrorContainer.textContent = "";
};

const showInputError = (
  input,
  currentInputErrorContainer,
  inputErrorClass,
  textErrorClass,
  ...rest
) => {
  input.classList.add(inputErrorClass);
  currentInputErrorContainer.classList.add(textErrorClass);
  currentInputErrorContainer.textContent = input.validationMessage;
};

const toggleButtonState = (formInputs, formButton, inactiveButtonClass) => {
  // здесь я применил тернарный оператор для разнообразия
  hasInvalidInput(formInputs)
    ? disableButton (formButton, inactiveButtonClass)
    : enableButton(formButton, inactiveButtonClass);
};

const disableButton = (formButton, { inactiveButtonClass }) => {
  formButton.classList.add(inactiveButtonClass);
  formButton.setAttribute("disabled", true);
};

const enableButton = (formButton, { inactiveButtonClass }) => {
  formButton.classList.remove(inactiveButtonClass);
  formButton.removeAttribute("disabled");
};
const hasInvalidInput = (formInputs) => {
  return formInputs.some((input) => !input.validity.valid);
};
// сброс ошибок попапов и деактивация кнопки
const resetErrorOpenForm = (form) => {
  const formButton = form.querySelector(validConfig.submitButtonSelector);
  
  form.querySelectorAll(validConfig.inputSelector).forEach((input) => {
    const currentInputErrorContainer = document.querySelector(
      `${validConfig.errorSelectType}${input.name}`
    );

    if (!input.validity.valid) {
      hideInputError(input, currentInputErrorContainer,  validConfig.inputErrorClass, validConfig.textErrorClass)
    }
    disableButton(formButton, validConfig.inactiveButtonClass);

  })

}



enableValidation(validConfig);


