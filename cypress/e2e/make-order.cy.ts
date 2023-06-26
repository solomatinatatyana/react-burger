import {endPoints, NORMA_API} from "../../src/utils/burger-api";
import {bun, bun2, main, sauce} from "../../src/utils/constants/mock-data";

describe('запускаем приложение', function () {
  beforeEach(() => {
    cy.visit('');
    cy.intercept('GET', `${NORMA_API}${endPoints.ingredients}`,
      { statusCode: 200, body: {success: true, data: [bun, bun2, main, sauce]} });
    // задержка 1 сек., эмулирующая задержку при получении ответа от сервера
    cy.intercept('POST', `${NORMA_API}${endPoints.login}`, {delay: 1000, fixture: "user.json"}).as('login');
    cy.intercept('POST', `${NORMA_API}${endPoints.orders}`, {delay: 1000, fixture: "order.json"}).as('order');
    cy.intercept('POST', `${NORMA_API}${endPoints.logout}`, {delay: 1000, fixture: "logout.json"}).as('logout');
  })

  it('аутентификация пользователя и заказ бургера', function () {

    cy.get('h1').should('exist').and('contain', 'Соберите бургер');

    cy.get('[data-test-id=profile]').should('exist').click();

    cy.get('span').should('exist').and('contain', 'Вход');
    cy.get('[type="email"]').should('exist');
    cy.get('[type="password"]').should('exist');
    cy.get('[type="submit"]').should('exist').and('contain', 'Войти');

    cy.get('input[type="email"]').focus();
    cy.get('[type="password"]').focus();
    //cy.get('[type="email"]').type('react_test@mail.ru').should('have.value', 'react_test@mail.ru');
    //cy.get('[type="password"]').type('react_test').should('have.value', 'react_test');
    cy.get('[type="submit"]').contains('Войти').click();

    cy.wait('@login').setCookie('accessToken', 'Bearer 123456789').setCookie('refreshToken', 'asffsr542324');

    cy.get(`#${bun._id}`).should('exist');
    cy.get(`#${bun2._id}`).should('exist');
    cy.get(`#${sauce._id}`).should('exist');
    cy.get(`#${main._id}`).should('exist');

    cy.get(`#${bun._id}`).trigger('dragstart');
    cy.get('[data-test-id=bunTopTarget]').trigger('drop');

    cy.get(`#${bun2._id}`).trigger('dragstart');
    cy.get('[data-test-id=bunBottomTarget]').trigger('drop');

    cy.get(`#${sauce._id}`).trigger('dragstart');
    cy.get('[data-test-id=bunIngredientTarget]').trigger('drop');

    cy.get(`#${main._id}`).scrollIntoView().should('be.visible')
    cy.get(`#${main._id}`).trigger('dragstart');
    cy.get('[data-test-id=bunIngredientTarget]').trigger('drop');

    cy.get(`[data-test-id=buttonCheckoutOrder]`).should('exist').and('contain', 'Оформить заказ').click();
    cy.wait('@order').get(`[data-test-id=orderId]`).should('exist').and('contain', '567899');

    cy.get('body').type('{esc}')
    cy.get('h1').should('exist').and('contain', 'Соберите бургер');

    cy.get('[data-test-id=profile]').should('exist').click();

    cy.get('#logout').should('exist').click();
  })

});

export { }
