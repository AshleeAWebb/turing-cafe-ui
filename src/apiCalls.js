const fetchReservation = () => {
  return fetch("http://localhost:3001/api/v1/reservations")
  .then(response => response.json())
  .catch(error => {
    console.log(error)
  })
}

  export { fetchReservation}