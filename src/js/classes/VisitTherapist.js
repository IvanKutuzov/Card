import { Visit } from "./Visit.js";
import { deleteCard } from "../functions/instances.js";
import { Modal } from "./Modal.js";
import { EditVisitForm } from "./EditVisitForm.js";

export class Therapist extends Visit {
  constructor(values) {
    const {
      id,
      status,
      title,
      description,
      urgency,
      patientName,
      age,
      doctor,
    } = values;
    super(id, status, title, description, urgency, patientName, doctor);
    this.age = age;
  }
  createElement() {
    super.createElement();
    this.contentWrapperAdditionalInfo.insertAdjacentHTML(
      "beforeend",
      `
                  <div>
                     <p>Visit purpose:</p>
                     <p class="visit__title">${this.title}</p>
                  </div>
                  <div>
                     <p>Brief description of the visit:</p>
                     <p class="visit__description">${this.description}</p>
                  </div>
                  <div>
                     <p>Urgency:</p>
                     <p class="visit__priority">${this.urgency}</p>
                  </div>                                 
                  <div>
                     <p>Age:</p>
                     <p>${this.age}</p>
                  </div>
                  <div>
                     <p>Status:</p>
                     <p class="visit__status">${this.status}</p>
                  </div>
               `
    );

    try {
      this.buttonShowMore.addEventListener("click", showMoreFunc);
      function showMoreFunc(e) {
        const viewSwitcher = e.target.parentNode.querySelector(
          ".main__container-card-content-additionalInfo"
        );
        const showMore = e.target.parentNode.querySelector(".visit__showmore");
        if (viewSwitcher.style.display === "none") {
          showMore.innerHTML = "show less";
          viewSwitcher.style.display = "block";
        } else {
          showMore.innerHTML = "show more";
          viewSwitcher.style.display = "none";
        }
      }
    } catch (error) {
      console.log(error);
    }

    this.deleteButton.addEventListener("click", async () => {
      if (confirm("Are you sure?")) {
        const { status } = await deleteCard(this.id);
        if (status === 200) {
          this.element.remove();
        }
      }
    });

    this.editButton.addEventListener("click", () => {
      const infoForEdit = {
        status: this.status,
        title: this.title,
        description: this.description,
        urgency: this.urgency,
        patientName: this.patientName,
        doctor: this.doctor,
        id: this.id,
        age: this.age,
      };
      const editForm = new EditVisitForm(infoForEdit);
      new Modal(
        editForm.render(),
        editForm.getFormValues.bind(editForm),
        "update"
      ).render(".main__container");
    });
  }
  render() {
    this.createElement();
    return super.render();
  }
}
