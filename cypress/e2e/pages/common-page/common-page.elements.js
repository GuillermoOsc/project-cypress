export class CommonPageElements {
    static get topMenu(){
        return{
            get singUp() {
                return cy.get('a[data-target="#signInModal"]');
            },

            get login() {
                return cy.get('a[data-target="#logInModal"]');
            } 
        };
    }
}