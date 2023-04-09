export class homeElements{
    static get elements(){
        return{
          productLink(productName){
            return cy.contains('a', productName);
          },
       };          
    }
}