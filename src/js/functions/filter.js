import debounce from "../utils/debounce.js";

export function filterFields() {
  const filters = document.forms.filters;
  const filtersPu = document.filters.elements.purpose;
  const filtersS = document.filters.elements.status;
  const filtersPr = document.filters.elements.priority;

  filtersPu.addEventListener("input", debounce(getCriteria, 1000));
  filtersS.addEventListener("change", debounce(getCriteria, 1000));
  filtersPr.addEventListener("change", debounce(getCriteria, 1000));

  const commentValidation = ({ target }) => {
    const regExp = /<.*>/g;
    const newValue = target.value.replace(regExp, "");
    target.value = newValue;
  };
  filtersPu.addEventListener("blur", commentValidation);

  function getCriteria() {
    let searchCriteriaObj = {};
    Object.keys(filters.elements).forEach((key) => {
      let element = filters.elements[key];
      if (element.type !== "submit") {
        searchCriteriaObj[element.name] = element.value;
      }
    });
    doFilter(searchCriteriaObj);
  }

  function render(arr) {
    const all = document.querySelectorAll(".main__container-card");
    for (let elm of all) {
      elm.style.display = "none";
    }
    arr.forEach((e) => (e.style.display = "flex"));
  }

  function doFilter(criteriaObj) {
    const collection = document.getElementsByClassName("main__container-card");

    let result = Array.from(collection)
      .filter((item) => {
        if (
          item
            .querySelector(".visit__title")
            .innerHTML.toUpperCase()
            .includes(criteriaObj.purpose.toUpperCase()) ||
          item
            .querySelector(".visit__description")
            .innerHTML.toUpperCase()
            .includes(criteriaObj.purpose.toUpperCase())
        ) {
          return item;
        }
      })
      .filter((item) => {
        if (
          item
            .querySelector(".visit__status")
            .innerHTML.toUpperCase()
            .includes(criteriaObj.status.toUpperCase()) ||
          criteriaObj.status === "all"
        ) {
          return item;
        }
      })
      .filter((item) => {
        if (
          item
            .querySelector(".visit__priority")
            .innerHTML.toUpperCase()
            .includes(criteriaObj.priority.toUpperCase()) ||
          criteriaObj.priority === "all"
        ) {
          return item;
        }
      });
    render(result);
  }
}
