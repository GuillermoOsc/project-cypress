import { homeElements } from "./home.elements";

export class homeHelper {
    static clickOnProductName(productName){
        homeElements.elements.productLink(productName).clik();
    }
}