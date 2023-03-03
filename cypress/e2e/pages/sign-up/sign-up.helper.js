import { signUpElements } from "./sign-up.elements";

export class signUpHelper {

    static insertUsername(username) {
        signUpElements.elements.username.type(username);
    }

    static insertPassword(password) {
      signUpElements.elements.password.click();
        signUpElements.elements.password.type(password);
    }

    static clickOnSignUpButton() {
        signUpElements.elements.signUpButton.click();
    }
}