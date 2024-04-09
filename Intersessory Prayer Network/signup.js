// database
const profiles = [
  {
    id: 1,
    firstName: 'Moses',
    lastName: 'Avigdor',
    email: 'redsea@gmail.com',
    password: 'ZipporahRocks',
    profilePicture: 'moses.jpeg',
  },
  {
    id: 2,
    firstName: 'Joshua',
    lastName: 'Jericho',
    email: 'jordan@gmail.com',
    password: 'MosesRocks',
    profilePicture: 'joshua.jpeg',
  },
  {
    id: 3,
    firstName: 'Aaron',
    lastName: 'Calf',
    email: 'preist@gmail.com',
    password: 'UrimRocks',
    profilePicture: 'aaron.jpeg',
  },
  {
    id: 4,
    firstName: 'Chen',
    lastName: 'Chen',
    email: 'ChenChen@gmail.com',
    password: 'ChenRocks',
    profilePicture: 'chen.avif',
  },
  {
    id: 5,
    firstName: 'Crae',
    lastName: 'Hernandez',
    email: 'CraeHernandez@gmail.com',
    password: 'CraeRocks',
    profilePicture: 'crae.jpeg',
  },
  {
    id: 6,
    firstName: 'John',
    lastName: 'Love',
    email: 'John316@gmail.com',
    password: 'LoveRocks',
    profilePicture: 'john.jpeg',
  },
  {
    id: 7,
    firstName: 'Menilik',
    lastName: 'Ras',
    email: 'Menilik@gmail.com',
    password: 'JesusRocks',
    profilePicture: 'moses.png',
  },
  {
    id: 8,
    firstName: 'Peggy',
    lastName: 'Holt',
    email: 'PeggyHolt@gmail.com',
    password: 'EuropeRocks',
    profilePicture: 'peggy.jpeg',
  },
  {
    id: 9,
    firstName: 'Teena',
    lastName: 'Utta',
    email: 'TeenaUtta@gmail.com',
    password: 'TeenaRocks',
    profilePicture: 'Default_pfg.svg.png',
  },
  {
    id: 10,
    firstName: 'Vlad',
    lastName: 'Shavchuck',
    email: 'VladShavchuck@gmail.com',
    password: 'VladRocks',
    profilePicture: 'vlad.jpeg',
  },
];
// navbar
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('nav');
const barsIcon = document.querySelector('.fa-bars');
const crossIcon = document.querySelector('.fa-cross');
const navBar = document.querySelector('.nav-bar');
const body = document.querySelector('body');
const navHeight = navBar.offsetHeight;
let isNavBarVisible = true;
let isScrolling;

// Initially hide the cross icon
crossIcon.style.display = 'none';

// Function to hide the nav-bar
function hideNavBar() {
  navBar.style.transform = `translateY(-${navHeight}px)`;
  isNavBarVisible = false;
}

// Function to show the nav-bar
function showNavBar() {
  navBar.style.transform = 'translateY(0)';
  isNavBarVisible = true;
}

// Function to toggle navigation menu and icons
function toggleNav() {
  navMenu.classList.toggle('display');
  if (navMenu.classList.contains('display')) {
    barsIcon.style.display = 'none';
    crossIcon.style.display = 'inline';
    isNavBarVisible = true;
  } else {
    barsIcon.style.display = 'inline';
    crossIcon.style.display = 'none';
    isNavBarVisible = false;
  }
}

function handleWindowResize() {
  // Check if the navigation menu is open (cross icon is visible)
  if (crossIcon.style.display === 'inline') {
    // Close the navigation menu and revert to bars icon
    toggleNav();
  }
}

// Add event listener for window resize event
window.addEventListener('resize', handleWindowResize);

// Toggle navigation menu on button click
navToggle.addEventListener('click', toggleNav);

// Show nav-bar and cancel hiding timer on mouse movement
function handleMouseMove() {
  showNavBar();
  clearTimeout(hideNavBarTimeout);
}

body.addEventListener('mousemove', handleMouseMove);

// Hide nav-bar on scroll down
function handleScroll() {
  window.clearTimeout(isScrolling);
  if (window.scrollY > 0 && isNavBarVisible) {
    hideNavBar();
  }
  isScrolling = setTimeout(function () {
    if (window.scrollY === 0 && !isNavBarVisible) {
      showNavBar();
    }
  }, 100);
}

window.addEventListener('scroll', handleScroll);

// Cancel hiding nav-bar on click
navBar.addEventListener('click', function () {
  clearTimeout(hideNavBarTimeout);
});

// Timeout for hiding nav-bar
let hideNavBarTimeout = setTimeout(hideNavBar, 20000);

// Function to handle logout
function handleLogout() {
  // Remove item from localStorage to indicate user is logged out
  localStorage.removeItem('loggedIn');
  localStorage.removeItem('email'); // Remove email from localStorage
  // Redirect user to login page
  window.location.href = 'login.html';
}

// Check if user is logged in on page load
window.addEventListener('load', function () {
  const isLoggedIn = localStorage.getItem('loggedIn');

  if (isLoggedIn) {
    console.log('User is logged in');
    document.querySelector('.logout-btn').style.display = 'inline';
    document.querySelector('.login-btn').style.display = 'none';
  } else {
    console.log('User is logged out');
    document.querySelector('.logout-btn').style.display = 'none';
    document.querySelector('.login-btn').style.display = 'inline';
  }
});

// Add event listener to the logout link
document.querySelector('.logout-btn').addEventListener('click', handleLogout);

// Function to toggle password visibility
function togglePasswordVisibility() {
  const passwordInput = document.getElementById('password');
  const showPasswordBtn = document.querySelector('.show-password');

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    showPasswordBtn.textContent = 'Hide Password';
  } else {
    passwordInput.type = 'password';
    showPasswordBtn.textContent = 'Show Password';
  }
}

// Add event listener to the show password button
document
  .querySelector('.show-password')
  .addEventListener('click', togglePasswordVisibility);

// ***** upload photo*****
// Get the button that triggers the modal
const openModalBtn = document.getElementById('open-modal-btn');

// Get the modal
const addProfilePhotoModal = document.getElementById('add-modal');

// Add event listener to open the modal when clicking on the button
openModalBtn.addEventListener('click', function (event) {
  // Prevent the default behavior of the button
  event.preventDefault();

  // Display the modal
  addProfilePhotoModal.style.display = 'block';
});

// Function to close the modal
function closeModal() {
  addProfilePhotoModal.style.display = 'none';
}

// Get the close button inside the modal
const closeModalBtn = addProfilePhotoModal.querySelector('.close');

// Add event listener to the close button to close the modal
closeModalBtn.addEventListener('click', closeModal);

// Add event listener to the window object to close the modal when clicking outside of it
window.addEventListener('click', function (event) {
  if (event.target === addProfilePhotoModal) {
    closeModal();
  }
});

// Function to toggle password visibility
function togglePasswordVisibility() {
  const passwordInput = document.getElementById('password');
  const showPasswordBtn = document.querySelector('.show-password');

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    showPasswordBtn.textContent = 'Hide Password';
  } else {
    passwordInput.type = 'password';
    showPasswordBtn.textContent = 'Show Password';
  }
}

// Add event listener to the show password button
document
  .querySelector('.show-password')
  .addEventListener('click', togglePasswordVisibility);

// ******* in progress *********

// Handle form submission
function handleSubmit(event) {
  event.preventDefault(); // Prevent default form submission

  const form = event.target; // Get the form element
  const formData = new FormData(); // Create FormData object

  // Append form fields to FormData object
  formData.append('csrfToken', document.getElementById('csrfToken').value);
  formData.append('first-name', form.elements['first-name'].value);
  formData.append('last-name', form.elements['last-name'].value);
  formData.append('email', form.elements['email'].value);
  formData.append('password', form.elements['password'].value);

  // Check if a profile picture is selected
  const profilePhotoInput = document.getElementById('profile-photo-input');
  if (profilePhotoInput.files.length > 0) {
    // Append profile picture file to FormData object
    formData.append('profile-picture', profilePhotoInput.files[0]);
  }

  // Send POST request to server
  fetch('http://127.0.0.1:8080/ipn.php', {
    method: 'POST',
    body: formData, // Send form data in the request body
  })
    .then((response) => {
      console.log('Response status:', response.status);
    })
    .catch((error) => {
      console.error('Fetch error:', error);
    });
}

// Add event listener to form submit event
document.getElementById('signup-form').addEventListener('submit', handleSubmit);
