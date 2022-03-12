import { filterFields } from "./functions/filter.js";
import { Modal } from "./classes/Modal.js";
import { LoginForm } from "./classes/LoginForm.js";
import { CreateVisitForm } from "./classes/CreateVisitForm.js";
import { getCookie } from "./utils/cookies.js";
import { renderAllCards } from "./functions/renderAllCards.js";

filterFields();

const loginForm = new LoginForm();
const visitForm = new CreateVisitForm();
export const headerButton = document.querySelector(".header__button");

if (getCookie("Token") === "") {
  headerButton.innerHTML = "Login";
} else {
  headerButton.innerHTML = "create visit";
  renderAllCards();
}

headerButton.addEventListener("click", trigger);

function trigger() {
  if (getCookie("Token") === "") {
    login();
  } else {
    visit();
  }
}

function login() {
  new Modal(
    loginForm.render(),
    loginForm.getInputsValues.bind(loginForm),
    "Sign-in"
  ).render(".main__container");
}
function visit() {
  new Modal(
    visitForm.render(),
    visitForm.getFormValues.bind(visitForm),
    "Create visit"
  ).render(".main__container");
}

const targetMain = document.querySelector(".main__container");
const configMain = {
  attributes: false,
  childList: true,
  subtree: false,
};
const callbackMain = function (mutationsList) {
  for (let mutation of mutationsList) {
    if (mutation.type === "childList") {
      const warning = document.querySelector(".main__no-visits");
      if (warning.nextElementSibling !== null) {
        warning.style.display = "none";
      } else {
        warning.style.display = "block";
      }
    }
  }
};
const observerMain = new MutationObserver(callbackMain);
observerMain.observe(targetMain, configMain);
const targetButton = document.querySelector(".header__button");

const configButton = {
  attributes: true,
  childList: false,
  subtree: false,
};
const callbackButton = function (mutationsList) {
  for (let mutation of mutationsList) {
    if (mutation.type === "attributes") {
      renderAllCards();
    }
  }
};
const observerButton = new MutationObserver(callbackButton);
observerButton.observe(targetButton, configButton);
