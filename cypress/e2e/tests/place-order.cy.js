import { CommonPageHelper } from "../pages/common-page/common-page.helper";
import { loginHelper } from "../pages/login/login.helper";
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
        CommonPageHelper.verifySignedUser(username);

        cy.wait(5000)
    } )
})