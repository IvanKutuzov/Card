import {CreateVisitForm} from "./CreateVisitForm.js";

export class EditVisitForm extends CreateVisitForm {
    constructor(values) {
        super();
        const {
            id ,status, title, description, urgency,
            patientName, doctor, bloodPressure, bodyMassIndex,
            cardiovascularDiseaseHistory, age, dateOfLastVisit
        } = values;
        this.id = id;
        this.title = title;
        this.description = description;
        this.patientName = patientName;
        this.status = status;
        this.urgency = urgency;
        this.doctor = doctor
        this.element = null;
        this.bloodPressure = bloodPressure;
        this.bodyMassIndex = bodyMassIndex;
        this.cardiovascularDiseaseHistory = cardiovascularDiseaseHistory;
        this.age = age;
        this.dateOfLastVisit = dateOfLastVisit;
    }

    createElements() {
        super.createElements();

        this.formWrapper.innerHTML = this.mappedTemplates[this.doctor];
        this.selectDoctor.value = `${this.doctor}`;

        this.formWrapper.querySelectorAll("label input")
            .forEach((element) => {
                switch (element.name) {
                    case "title":
                        element.value = `${this.title}`
                        break;
                    case "patientName":
                        element.value = `${this.patientName}`
                        break;
                }
            });

        this.formWrapper.querySelector("#description").value = `${this.description}`;
        this.formWrapper.querySelector("label select").value = `${this.urgency}`;

        switch (this.doctor) {
            case "Cardiologist":
                this.formWrapper.querySelectorAll("label input")
                    .forEach((element) => {
                        switch (element.name) {
                            case "bloodPressure":
                                element.value = `${this.bloodPressure}`
                                break;
                            case "bodyMassIndex":
                                element.value = `${this.bodyMassIndex}`
                                break;
                            case "age":
                                element.value = `${this.age}`
                                break;
                        }
                    });
                this.formWrapper.querySelector("#cardiovascularDiseaseHistory").value = `${this.cardiovascularDiseaseHistory}`;
            break;

            case "Dentist":
                this.formWrapper.querySelectorAll("label input")
                    .forEach((element) => {
                        if (element.name === "dateOfLastVisit") {
                            element.value = `${this.dateOfLastVisit}`;
                        }
                    })
            break;

            case "Therapist":
                this.formWrapper.querySelectorAll("label input")
                    .forEach((element) => {
                        if (element.name === "age") {
                            element.value = `${this.age}`;
                        }
                    })
            break;
        }

        this.statusLabel = document.createElement("label");
        this.statusSelect = document.createElement("select");
        this.statusLine = document.createElement("br");
        this.statusSelect.name = "status";
        this.statusLabel.append("Status");
        this.statusLabel.append(this.statusLine);
        this.statusLabel.append(this.statusSelect);
        this.statusOption = `
          <option value="open">open</option>
          <option value="done">done</option>
          `;
        this.statusSelect.innerHTML = this.statusOption
        this.formWrapper.append(this.statusLabel);
        this.statusSelect.value = `${this.status}`;
        this.statusSelect.id = "status";

    }

    getSelectDoctor() {
        return super.getSelectDoctor();
    }

    selectOnChange() {
        return super.selectOnChange();
    }

    render() {
        return super.render();
    }

    getFormValues() {
        const result = super.getFormValues();
        const selectUrgency = this.formWrapper.querySelector("#status");
        result[selectUrgency.name] = selectUrgency.value;
        result["id"] = this.id;
        return result;
    }
}