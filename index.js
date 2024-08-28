document.querySelectorAll('.seats input[type="checkbox"]').forEach(checkbox => {
  checkbox.addEventListener('change', updateReservationDetails);
});

function updateReservationDetails() {
  const selectedSeats = [];
  document.querySelectorAll('.seats input[type="checkbox"]:checked').forEach(checkbox => {
      selectedSeats.push(checkbox.id);
  });

  document.getElementById('selected-seats-count').textContent = selectedSeats.length;
  document.getElementById('seat-numbers').textContent = selectedSeats.join(', ');
  document.getElementById('ticket-price').textContent = selectedSeats.length * 1750;
}

function confirmReservation() {
  alert('Reservation confirmed!');
}
