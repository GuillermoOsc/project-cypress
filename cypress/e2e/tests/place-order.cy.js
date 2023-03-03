import { CommonPageHelper } from "../pages/common-page/common-page.helpers";
import { loginHelper } from "../pages/login/login.helpers";
import { signUpConstants } from "../pages/sign-up/sign-up.constants";
import { signUpHelper } from "../pages/sign-up/sign-up.helper";

describe('Place order', ()=> {
    it("Place order with newly created user account", ()=> {
        const username = CommonPageHelper.generateRandomString();
        const password = CommonPageHelper.generateRandomString();

        CommonPageHelper.navigateToTheApp();
        CommonPageHelper.clickOnSignUpOption();
        signUpHelper.insertUsername(username);
        signUpHelper.insertPassword(password);
        signUpHelper.clickOnSignUpButton();

        CommonPageHelper.clickOnLoginOption();
        loginHelper.insertUserName(username)
        loginHelper.insertPassword(password)
        loginHelper.clickOnLoginButton();

        cy.wait(2000)
    } )
})