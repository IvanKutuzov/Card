import {
  htmlTemplateDentist,
  htmlTemplateTherapist,
  htmlTemplateCardiologist,
} from "../constants/htmlVisitTemplates.js";

export class CreateVisitForm {
  constructor() {
    this.form = document.createElement("form");
    this.selectDoctor = document.createElement("select");
    this.selectDoctorLabel = document.createElement("label");
    this.formWrapper = document.createElement("div");
    this.selectOption = `
        <option value="Select">Select</option>
        <option value="Cardiologist">Cardiologist</option>
        <option value="Dentist">Dentist</option>
        <option value="Therapist">Therapist</option>
        `;
    this.mappedTemplates = {
      Select: "",
      Cardiologist: htmlTemplateCardiologist,
      Dentist: htmlTemplateDentist,
      Therapist: htmlTemplateTherapist,
    };
  }

  createElements() {
    this.selectDoctorLabel.append("Select a doctor");
    this.selectDoctorLabel.append(this.selectDoctor);
    this.selectDoctor.innerHTML = this.selectOption;
    this.form.classList.add("modal__content-wrapper-createVisit-form");
    this.formWrapper.classList.add(
      "modal__content-wrapper-createVisit-form-content"
    );
    this.form.append(this.selectDoctorLabel);
    this.selectDoctor.addEventListener(
      "change",
      this.selectOnChange.bind(this)
    );
    this.form.append(this.formWrapper);
  }

  getSelectDoctor() {
    return this.selectDoctor.value;
  }

  selectOnChange() {
    this.formWrapper.innerHTML = this.mappedTemplates[this.selectDoctor.value];
  }

  render() {
    this.selectDoctorLabel.innerHTML = "";
    this.formWrapper.innerHTML = "";
    this.createElements();
    return this.form;
  }

  getFormValues() {
    const values = {
      doctor: `${this.getSelectDoctor()}`,
      status: "open",
    };

    this.formWrapper.querySelectorAll("label input").forEach(({ name, value }) => {
      values[name] = value;
    });

    const selectUrgency = this.formWrapper.querySelector("label select");
    values[selectUrgency.name] = selectUrgency.value;

    this.formWrapper.querySelectorAll("label textarea").forEach(({ name, value }) => {
      values[name] = value;
    })

    return values;
  }
}
