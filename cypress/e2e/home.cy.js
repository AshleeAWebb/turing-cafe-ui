describe('Reservations Home Page', () => {
  beforeEach(() => {
    cy.fixture('reservations.json').as('reservationsData');
    cy.intercept('GET', 'http://localhost:3001/api/v1/reservations', 
    { fixture: 'reservations.json' });
    cy.visit('http://localhost:3000/');
  });

  it('Should display the reservations when user first visits the page', () => {
    cy.get('@reservationsData').then((reservationsData) => {
      const firstReservation = reservationsData[0];
      cy.get('.reservations').children().first()
        .should('contain', firstReservation.name)
        .and('contain', firstReservation.date)
        .and('contain', firstReservation.time)
        .and('contain', `Number of guests: ${firstReservation.number}`);

      const secondReservation = reservationsData[1];
      cy.get('.reservations').children().eq(1)
        .should('contain', secondReservation.name)
        .and('contain', secondReservation.date)
        .and('contain', secondReservation.time)
        .and('contain', `Number of guests: ${secondReservation.number}`);
    });
  });
});