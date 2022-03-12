import { Cardiologist } from "../classes/VisitCardiologist.js";
import { Dentist } from "../classes/VisitDentist.js";
import { Therapist } from "../classes/VisitTherapist.js";
import { getAllCard } from "./instances.js";

export function renderAllCards() {
  getAllCard().then(({ status, data }) => {
    if (status === 200) {
      data.forEach((element) => {
        switch (element.doctor) {
          case "Cardiologist":
            document
              .querySelector(".main__container")
              .append(new Cardiologist(element).render());
            break;
          case "Dentist":
            document
              .querySelector(".main__container")
              .append(new Dentist(element).render());
            break;
          case "Therapist":
            document
              .querySelector(".main__container")
              .append(new Therapist(element).render());
            break;
        }
      });
    } else {
      console.log("Error from server");
    }
  });
}
