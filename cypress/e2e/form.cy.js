describe('Reservations Form', () => {
  beforeEach(() => {
    cy.fixture('reservations.json').as('reservationsData');
    cy.intercept('GET', 'http://localhost:3001/api/v1/reservations', 
      { fixture: 'reservations.json' });
    cy.visit('http://localhost:3000/');
  });

  it('Should display a value when data is input', () => {
    const userInput = {
      name: 'Brian',
      date: '01/20',
      time: '7:30',
      guest: 4
    };

    cy.get('input[name=name]').type(userInput.name)
      .should('have.value', userInput.name);
    cy.get('input[name=date]').type(userInput.date)
      .should('have.value', userInput.date);
    cy.get('input[name=time]').type(userInput.time)
      .should('have.value', userInput.time);
    cy.get('input[name=guest]').type(userInput.guest)
      .should('have.value', userInput.guest.toString());
  });

  it('Should allow user to input data and submit it to the page', () => {
    const newReservation = { name: 'Ashlee', date: '02/13', time: '6:00', number: "2" };
    cy.intercept('POST', 'http://localhost:3001/api/v1/reservations', (req) => {
      expect(req.body).to.include(newReservation);
      req.reply({ body: { ...newReservation, id: 3 }, statusCode: 201 });
    });

    cy.get('input[name=name]').type(newReservation.name);
    cy.get('input[name=date]').type(newReservation.date);
    cy.get('input[name=time]').type(newReservation.time);
    cy.get('input[name=guest]').type(newReservation.number);
    cy.get('.formButton').click();
    cy.wait(1000);
    cy.get('.reservations').children().eq(2)
  });

  it('Should display a new card with that user\'s input', () => {
    const thirdReservation = this.reservationsData[2];
    cy.get('.reservations').children().eq(2)
      .should('contain', thirdReservation.name)
      .and('contain', thirdReservation.date)
      .and('contain', thirdReservation.time)
      .and('contain', `Number of guests: ${thirdReservation.number}`);
  });
});