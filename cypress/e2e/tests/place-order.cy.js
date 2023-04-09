import { CommonPageHelper } from "../pages/common-page/common-page.helper";
import { homeConstants } from "../pages/home/home.constants";
import { homeHelper } from "../pages/home/home.helper";
import { loginHelper } from "../pages/login/login.helper";
import { signUpConstants } from "../pages/sign-up/sign-up.constants";
import { signUpHelper } from "../pages/sign-up/sign-up.helper";

describe('Place order', ()=> {
    it("Place order with newly created user account", ()=> {
        const username = CommonPageHelper.generateRandomString();
        const password = CommonPageHelper.generateRandomString();
        const productName = homeConstants.testData.productName;
     // The account is created
        CommonPageHelper.navigateToTheApp();
        CommonPageHelper.clickOnSignUpOption();
        signUpHelper.insertUsername(username);
        signUpHelper.insertPassword(password);
        signUpHelper.clickOnSignUpButton();

    // Login    
        CommonPageHelper.clickOnLoginOption();
        loginHelper.insertUserName(username)
        loginHelper.insertPassword(password)
        loginHelper.clickOnLoginButton();
        CommonPageHelper.verifySignedUser(username);

    // Home page and select a product
        CommonPageHelper.clickOnHomePage();
        homeHelper.clickOnProductName(productName);

        cy.wait(5000);
    });
});