export class LoginForm {
    constructor() {
        this.loginContainer = document.createElement("form");
        this.labelLogin = document.createElement("label");
        this.inputLogin = document.createElement("input");
        this.labelPassword = document.createElement("label");
        this.inputPassword = document.createElement("input");
    }

    createElement() {
        this.loginContainer.classList.add("modal__content-wrapper-signIn");

        this.inputLogin.type = "login";
        this.inputLogin.placeholder = "Enter email";
        this.inputPassword.type = 'password';
        this.inputPassword.placeholder = "Enter password";

        this.labelLogin.innerHTML = "Email <br>";
        this.labelPassword.innerHTML = "Password <br>";

        this.labelLogin.append(this.inputLogin);
        this.labelPassword.append(this.inputPassword);

        this.loginContainer.append(this.labelLogin);
        this.loginContainer.append(this.labelPassword);
    }

    render() {
        this.createElement();
        return this.loginContainer;
    }

    getInputsValues() {
        return {
            email: `${this.inputLogin.value}`,
            password:`${this.inputPassword.value}`
        }
    }
}