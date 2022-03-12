import { getCookie } from "../utils/cookies.js";
const token = getCookie("Token");
const cardID = "";

/* URLS */
const loginUrl = `/cards/login`;
const createUrl = `/cards`;
const getAllUrl = `/cards`;
let deleteUrl = `/cards/${cardID}`;
let getOneUrl = `/cards/${cardID}`;
let editUrl = `/cards/${cardID}`;

/* CONFIGS */
const tokenConfig = {
  baseURL: "https://ajax.test-danit.com/api/v2",
  headers: { "Content-Type": "application/json" },
};

const createConfig = {
  baseURL: "https://ajax.test-danit.com/api/v2",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
};
const getAllConfig = {
  baseURL: "https://ajax.test-danit.com/api/v2",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
};
const deleteConfig = {
  baseURL: "https://ajax.test-danit.com/api/v2",
  headers: {
    Authorization: `Bearer ${token}`,
  },
};
const getOneConfig = {
  baseURL: "https://ajax.test-danit.com/api/v2",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
};
const editConfig = {
  baseURL: "https://ajax.test-danit.com/api/v2",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
};

/* INSTANCES */
//--------------------------------------GET TOKEN FROM SERVER---------------------------------------------------------------------
/**
 *Function accepts {object} like {email:"example@sample.com", password:"example"} and return Promise
 * @param {object} data
 * @returns {promise}
 */
export const getToken = async (data) => {
  try {
    return await axios
      .post(loginUrl, data, tokenConfig)
      .catch(function (error) {
        if (error.response) {
          return error.response;
        }
      });
  } catch (error) {
    console.log(error);
  }
};

/*example of usage*/
/*
const response = await getToken(loginData).then(({ status, data }) => {
  if (status === 200) {
    setCookie("Token", data, 1); //data - it's a token, third parameter - expiration in days
    return { status, data };
  } else {
    return { status, data };
  }
});
const { status, data } = response;
console.log(status, data);

/*return*/
/*
200 '669b5a7e-9dcc-4078-aa10-0fe1947ca780' OR 401 'Incorrect username or password'
----------------------------------------------END------------------------------------------------------------------------------
*/
//--------------------------------------CREATE CARD ON SERVER------------------------------------------------------------------
/**
 *Function accepts visit data {object} and return Promise
 * @param {string} token
 * @returns {promise}
 */
export const createCard = async (data) => {
  const token = getCookie("Token");
  createConfig.headers.Authorization = `Bearer ${token}`;
  try {
    const resp = await axios
      .post(createUrl, data, createConfig)
      .catch(function (error) {
        if (error.response) {
          return error.response;
        }
      });

    return resp;
  } catch (error) {
    console.log(error);
  }
};

/*example of usage*/
/*
const response = await createCard(createData).then(({ status, data }) => {
  if (status === 200) {
    return { status, data };
  } else {
    return { status, data };
  }
});
const { status, data } = response;
console.log(status, data);
*/

/*return*/
/*
200 OR 501
{
id: 29637
title: "Визит к доктору (любому)"
description: "Плановый визит"
doctor: "Therapist"
patientName: "Прізвищ Ім'я По-батькові"
age: 52
priority: "normal"
status: "open"
lastVisitDate: "22/10/2021"
NBP: {systolic: 120, diastolic: 80}
pastDiseasesOfCardiovascularSystem: "myocardial infarction"
weight: 70
BMI: 56
}
----------------------------------------------END-----------------------------------------------------------------------------
*/
//--------------------------------------GET ALL CARDS FROM SERVER-------------------------------------------------------------
/**
 *Function accepts nothing and return Promise
 * @param {null} null
 * @returns {promise}
 */
export const getAllCard = async () => {
  const token = getCookie("Token");
  getAllConfig.headers.Authorization = `Bearer ${token}`;
  try {
    const resp = await axios
      .get(getAllUrl, getAllConfig)
      .catch(function (error) {
        if (error.response) {
          return error.response;
        }
      });

    return resp;
  } catch (error) {
    console.log(error);
  }
};

/*example of usage*/
/*
const response = await getAllCard().then(({ status, data }) => {
  if (status === 200) {
    return { status, data };
  } else {
    return { status, data };
  }
});
const { status, data } = response;
console.log(status, data);

/*return*/
/*
200
(151) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, ...
/*
-----------------------------------------------END------------------------------------------------------------------------------
*/
//--------------------------------------DELETE ONE CARD FROM SERVER-------------------------------------------------------------
/**
 *Function accepts card ID {string} and return Promise
 * @param {number} cardId
 * @returns {promise}
 */
export const deleteCard = async (cardId) => {
  const token = getCookie("Token");
  createConfig.Authorization = `Bearer ${token}`;
  deleteUrl = `/cards/${cardId}`;
  try {
    const resp = await axios
      .delete(deleteUrl, deleteConfig)
      .catch(function (error) {
        if (error.response) {
          return error.response;
        }
      });

    return resp;
  } catch (error) {
    console.log(error);
  }
};

/*example of usage*/
/*
const response = await deleteCard(cardID).then(({ status, data }) => {
  if (status === 200) {
    return { status, data };
  } else {
    return { status, data };
  }
});
const { status, data } = response;
console.log(status, data);

/*
/*return
200 '' OR 404 'Card not found'
----------------------------------------------END----------------------------------------------------------------------------
*/
//--------------------------------------GET ONE CARD FROM SERVER-------------------------------------------------------------
/**
 *Function accepts card ID {string} and return Promise
 * @param {number} cardId
 * @returns {promise}
 */
export const getOneCard = async (cardId) => {
  const token = getCookie("Token");
  getOneConfig.headers.Authorization = `Bearer ${token}`;
  getOneUrl = `/cards/${cardId}`;
  try {
    const resp = await axios
      .get(getOneUrl, getOneConfig)
      .catch(function (error) {
        if (error.response) {
          return error.response;
        }
      });

    return resp;
  } catch (error) {
    console.log(error);
  }
};

/*example of usage*/
/*
const response = await getOneCard(cardID).then(({ status, data }) => {
  if (status === 200) {
    return { status, data };
  } else {
    return { status, data };
  }
});
const { status, data } = response;
console.log(status, data);

/*
/*return
200
{
id: 29565
title: "Визит к Кардиологу"
description: "запланирован"
doctor: "Cardiologist"
patientName: "Прізвищ Ім'я По-батькові"
age: 23
priority: "low"
status: "open"
BMI: 56
NBP: {systolic: 120, diastolic: 80}
pastDiseasesOfCardiovascularSystem: "myocardial infarction"
weight: 70
}
OR
404 'Card not found'

----------------------------------------------END-----------------------------------------------------------------------
*/
//--------------------------------------EDIT CARD ON SERVER-------------------------------------------------------------
/**
 *Function accepts visit data {object} card ID {string} and return Promise
 * @param {string} token
 * @returns {promise}
 */
export const editCard = async (cardId, data) => {
  const token = getCookie("Token");
  editConfig.headers.Authorization = `Bearer ${token}`;
  editUrl = `/cards/${cardId}`;
  try {
    const resp = await axios
      .put(editUrl, data, editConfig)
      .catch(function (error) {
        if (error.response) {
          return error.response;
        }
      });

    return resp;
  } catch (error) {
    console.log(error);
  }
};

/*example of usage*/
/*
const response = await editCard(cardID, editData).then(({ status, data }) => {
  if (status === 200) {
    return { status, data };
  } else {
    return { status, data };
  }
});
const { status, data } = response;
console.log(status, data);

/*return
200 or 404 'Card not found'

{
  id: 29565
  title: "Визит к доктору (изменено)"
  description: "Плановый визит"
  doctor: "Dentist"
  patientName: "Прізвищ Ім'я По-батькові"
  age: 52
  priority: "normal"
  status: "open"
  lastVisitDate: "22/10/2021"
  NBP: {systolic: 130, diastolic: 75}
  pastDiseasesOfCardiovascularSystem: "myocardial infarction"
  weight: 90
  BMI: 25
}

----------------------------------------------END-----------------------------------------------------------------------
*/

/*
//Видалення всіх карток на сервері - тільки для налагодження

fetch("https://ajax.test-danit.com/api/v2/cards", {
  method: "GET",
  headers: {
    Authorization: `Bearer ${token}`,
  },
})
  .then((response) => response.json())
  .then((response) => {
    console.log("всі картки: ", response);
     delAllCards(response); // для запуска - прибрати коментар.
    console.log("*******************");
    console.log("всі картки видалені ");
    console.log("*******************");
  });

function delAllCards(id) {
  id.forEach(({ id }) => {
    fetch(`https://ajax.test-danit.com/api/v2/cards/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(({ status }) => console.log("deleted card:", status));
  });
}
*/
