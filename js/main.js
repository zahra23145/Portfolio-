// Handle "Back" buttons to go to previous page
document.querySelectorAll('.back-btn').forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    window.history.back();
  });
});