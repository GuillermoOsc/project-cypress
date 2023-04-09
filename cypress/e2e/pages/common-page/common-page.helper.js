import { CommonPageConstants } from "./common-page.constants";
import { CommonPageElements } from "./common-page.elements";

export class CommonPageHelper {
    static navigateToTheApp(){
        cy.visit(CommonPageConstants.appUrl);
    }

    static clickOnSignUpOption(){
        CommonPageElements.topMenu.singUp.click();
    }

    static clickOnLoginOption(){
        CommonPageElements.topMenu.login.click();
    }


    static verifySignedUser(username){
        CommonPageElements.topMenu.nameOfUser.should("contain", `Welcome ${username}`);
    }

    static clickOnHomePage(){
        CommonPageElements.topMenu.home.click(); 
    }

    static generateRandomString = (length = 10) => {
        let result = "";
        const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
        const charactersLenght = characters.length;
        let counter = 0;
  
        while (counter < length) {
          result += characters.charAt(Math.floor(Math.random() * charactersLenght));
          counter += 1;
        }
        return result;
      };

}