document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Optionally, get form data
    const name = document.getElementById('fullname').value;
    const doctor = document.getElementById('doctor').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    // Validate (basic)
    if (!name || !doctor || !date || !time) {
      alert("Please fill all required fields.");
      return;
    }

    // Simulate saving, then redirect
    setTimeout(() => {
      window.location.href = "success.html";
    }, 500);
  });
});
