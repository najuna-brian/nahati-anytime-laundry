document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId.startsWith('#')) {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = targetId;
    }
  });
});

const navbar = document.querySelector('.navbar');
const stickyOffset = navbar.offsetTop;

window.addEventListener('scroll', () => {
  if (window.pageYOffset >= stickyOffset) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});

const bookingForm = document.querySelector('.booking-form');
if (bookingForm) {
  bookingForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputs = this.querySelectorAll('input[required], select[required]');
    let isValid = true;

    inputs.forEach(input => {
      if (!input.value) {
        isValid = false;
        input.style.borderColor = '#ff4d4d';
        input.placeholder = 'This field is required';
      } else {
        input.style.borderColor = '#1a7c80';
      }
    });

    const weightInput = this.querySelector('input[name="Weight (Kg)"]');
    if (weightInput && (parseFloat(weightInput.value) <= 0 || isNaN(parseFloat(weightInput.value)))) {
      isValid = false;
      weightInput.style.borderColor = '#ff4d4d';
      weightInput.value = '';
      weightInput.placeholder = 'Enter a valid weight';
    }

    if (isValid) {
      const formData = new FormData(this);
      const data = Object.fromEntries(formData);

      // Submit to Netlify
      fetch('/', {
        method: 'POST',
        body: new URLSearchParams(formData).toString(),
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      })
      .then(() => {
        const confirmation = document.createElement('div');
        confirmation.className = 'confirmation-popup';
        confirmation.innerHTML = `
          <div class="popup-content">
            <h3>Booking Confirmed!</h3>
            <p>Woohoo, ${data['Full Name']}! Your laundry pickup is scheduled for ${data['Pickup Date']} at ${data['Pickup Time']}.</p>
            <p>We'll give you a shout at ${data['Phone Number']} to confirm everything. Thanks for trusting Nahati!</p>
            <button onclick="this.parentElement.parentElement.remove()">Close</button>
          </div>
        `;
        document.body.appendChild(confirmation);
        this.reset();
      })
      .catch(error => {
        const errorPopup = document.createElement('div');
        errorPopup.className = 'confirmation-popup';
        errorPopup.innerHTML = `
          <div class="popup-content">
            <h3>Oops, Something Went Wrong!</h3>
            <p>Sorry, we hit a snag submitting your booking. Please try again or WhatsApp us at 0200 981 445!</p>
            <button onclick="this.parentElement.parentElement.remove()">Close</button>
          </div>
        `;
        document.body.appendChild(errorPopup);
        console.error('Form submission error:', error);
      });
    }
  });
}

document.querySelectorAll('.whatsapp-cta').forEach(button => {
  button.addEventListener('click', () => {
    button.style.backgroundColor = '#1ebe57';
    setTimeout(() => {
      button.style.backgroundColor = '#25d366';
    }, 200);
  });
});