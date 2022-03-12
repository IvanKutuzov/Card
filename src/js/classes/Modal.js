import { getToken, createCard, editCard } from "../functions/instances.js";
import { setCookie } from "../utils/cookies.js";
import { headerButton } from "../index.js";
import { loginAndPasswordValidations } from "../functions/validations.js";
import { Cardiologist } from "./VisitCardiologist.js";
import { Dentist } from "./VisitDentist.js";
import { Therapist } from "./VisitTherapist.js";

export class Modal {
  constructor(element, onSubmitAction, confirmButtonValue) {
    this.onSubmitAction = onSubmitAction;
    this.element = element;
    this.container = document.createElement("div");
    this.background = document.createElement("div");
    this.mainContainer = document.createElement("div");
    this.closeButton = document.createElement("button");
    this.contentWrapper = document.createElement("div");
    this.buttonWrapper = document.createElement("div");
    this.confirmButton = document.createElement("button");
    this.confirmButtonValue = confirmButtonValue;
    this.errorWrapper = document.createElement("div");
    this.errorMessage = document.createElement("p");
  }

  createElements() {
    this.container.classList.add("modal");
    this.background.classList.add("modal__background");
    this.mainContainer.classList.add("modal__main-container");
    this.closeButton.classList.add("modal__close");
    this.contentWrapper.classList.add("modal__content-wrapper");
    this.buttonWrapper.classList.add("modal__button-wrapper");
    this.confirmButton.classList.add("modal__confirm-btn");
    this.errorWrapper.classList.add("modal__error");

    this.mainContainer.append(this.closeButton);
    this.mainContainer.append(this.contentWrapper);
    this.mainContainer.append(this.buttonWrapper);
    this.buttonWrapper.append(this.confirmButton);
    this.contentWrapper.append(this.element);
    this.errorWrapper.append(this.errorMessage);
    this.contentWrapper.append(this.errorWrapper);

    this.confirmButton.innerHTML = `${this.confirmButtonValue}`;
    this.errorMessage.innerText = "Incorrect login or password";

    this.container.append(this.mainContainer);
    this.container.append(this.background);

    this.closeButton.addEventListener("click", this.closeMe.bind(this));
    this.background.addEventListener("click", this.closeMe.bind(this));

    this.confirmButton.addEventListener("click", async () => {
      switch (this.confirmButtonValue) {
        case "Sign-in":
          try {
            if (
              loginAndPasswordValidations(
                this.onSubmitAction(),
                this.errorWrapper
              )
            ) {
              const { status, data } = await getToken(this.onSubmitAction());
              if (status === 200) {
                this.errorWrapper.style.display = "none";
                setCookie("Token", data, 1);
                headerButton.innerHTML = "Create visit";
                headerButton.dataset.login = "success";
              } else {
                this.errorWrapper.style.display = "block";
                return;
              }
            } else {
              return;
            }
          } catch (error) {
            console.error(error);
          }
          this.closeMe();
          break;

        case "Create visit":
          try {
            const { status, data } = await createCard(this.onSubmitAction());
            if (status === 200) {
              switch (data.doctor) {
                case "Cardiologist":
                  document
                    .querySelector(".main__container")
                    .append(new Cardiologist(data).render());
                  this.closeMe();
                  break;
                case "Dentist":
                  document
                    .querySelector(".main__container")
                    .append(new Dentist(data).render());
                  this.closeMe();
                  break;
                case "Therapist":
                  document
                    .querySelector(".main__container")
                    .append(new Therapist(data).render());
                  this.closeMe();
                  break;
              }
            }
          } catch (error) {
            console.error(error);
          }
          break;

        case "update":
          try {
            const data = this.onSubmitAction();
            const result = await editCard(data.id, data);
            if (result.status === 200) {
              document.getElementById(`${data.id}`).remove();
              switch (result.data.doctor) {
                case "Cardiologist":
                  document
                    .querySelector(".main__container")
                    .append(new Cardiologist(result.data).render());
                  this.closeMe();
                  break;
                case "Dentist":
                  document
                    .querySelector(".main__container")
                    .append(new Dentist(result.data).render());
                  this.closeMe();
                  break;

                case "Therapist":
                  document
                    .querySelector(".main__container")
                    .append(new Therapist(result.data).render());
                  this.closeMe();
                  break;
              }
            }
          } catch (error) {
            console.error(error);
          }
          break;
      }
    });
  }

  render(selector = "body") {
    this.createElements();
    document.querySelector(selector).append(this.container);
  }

  closeMe() {
    this.container.remove();
  }
}
