export class Visit {
  constructor(id, status, title, description, urgency, patientName, doctor) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.patientName = patientName;
    this.status = status;
    this.urgency = urgency;
    this.doctor = doctor;
    this.element = null;
    this.contentCardWrapper = null;
    this.buttonsWrapper = null;
    this.deleteButton = null;
    this.editButton = null;
    this.contentWrapperMainInfo = null;
    this.contentWrapperAdditionalInfo = null;
    this.buttonShowMore = null;
  }

  createElement() {
    this.element = document.createElement("div");
    this.contentCardWrapper = document.createElement("div");
    this.buttonsWrapper = document.createElement("div");
    this.deleteButton = document.createElement("button");
    this.editButton = document.createElement("button");
    this.contentWrapperMainInfo = document.createElement("div");
    this.contentWrapperAdditionalInfo = document.createElement("div");
    this.buttonShowMore = document.createElement("button");

    this.element.setAttribute("id", `${this.id}`);
    this.element.classList.add("main__container-card");
    this.buttonsWrapper.classList.add("main__container-card-buttonsWrapper");
    this.contentCardWrapper.classList.add("main__container-card-content");
    this.contentWrapperMainInfo.className =
      "main__container-card-content-mainInfo";
    this.contentWrapperAdditionalInfo.className =
      "main__container-card-content-additionalInfo";
    this.contentWrapperAdditionalInfo.style.display = "none";
    this.buttonShowMore.classList.add("visit__showmore");
    this.buttonShowMore.innerText = "Show more";
    this.deleteButton.innerText = "delete";
    this.editButton.innerText = "edit";
    this.buttonsWrapper.append(this.deleteButton);
    this.buttonsWrapper.append(this.editButton);
    this.element.append(this.buttonsWrapper);
    this.contentCardWrapper.append(this.contentWrapperMainInfo);
    this.contentCardWrapper.append(this.contentWrapperAdditionalInfo);
    this.element.append(this.contentCardWrapper);
    this.contentCardWrapper.append(this.buttonShowMore);
    this.contentWrapperMainInfo.insertAdjacentHTML(
      "beforeend",
      `
                    <div>
                       <p>Patient's full name:</p>
                       <p>${this.patientName}</p>
                    </div>
                    <div>
                       <p>Doctor:</p>
                       <p>${this.doctor}</p>
                    </div>`
    );
  }

  render() {
    return this.element;
  }
}
