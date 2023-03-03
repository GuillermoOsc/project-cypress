import { loginElements } from "./login.elements";

export class loginHelper {
    static insertUserName(username) {
        loginElements.elements.username.type(username);
    }

    static insertPassword(password) {
        loginElements.elements.password.click();
        loginElements.elements.password.type(password);
    }

    static clickOnLoginButton(){
        loginElements.elements.loginButton.click();
    }
}