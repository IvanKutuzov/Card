export const loginAndPasswordValidations = ({email, password}, element) => {
    const regExpEmail = /^[0-9a-zA-Z\.]+@[0-9a-zA-Z\.]+\.[0-9a-zA-Z]{2,}$/g;
    const regExpPassword = /\d{5}/;

    const emailResult = regExpEmail.test(email);
    const passwordResult = regExpPassword.test(password);

    if (!emailResult || !passwordResult) {
        element.style.display = "block";
        return false;
    } else {
        element.style.display = "none";
        return true;
    }
}