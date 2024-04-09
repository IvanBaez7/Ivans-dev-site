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

// for the window resize to make sure that bars icon returns to normal AND nav links will remain in proper spot upon screen expansion
window.addEventListener('resize', function () {
  if (window.innerWidth >= 800) {
    navMenu.classList.remove('display');
    barsIcon.style.display = 'inline';
    crossIcon.style.display = 'none';
  }
});

window.addEventListener('resize', function () {
  if (window.innerWidth >= 800) {
    navMenu.classList.remove('display');
  }
});

// Function to find a user by email and password
function findUser(email, password) {
  return profiles.find(
    (profile) => profile.email === email && profile.password === password
  );
}

// Function to handle the form submission
function handleSubmit(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the values from the form inputs
  const email = document.querySelector('.email').value;
  const password = document.querySelector('#password').value;

  // Find the user in the profiles data
  const user = findUser(email, password);
  const errorMessage = document.getElementById('error-message');
  if (user) {
    // If user is found, log them in and redirect to home page
    console.log('Login successful!');
    window.location.href = 'home.html';
  } else {
    // If user is not found, display an error message
    errorMessage.textContent = 'Invalid email or password!';
    // You can display an error message on the page here
  }
}

// Add event listener to the form submit button
document.querySelector('form').addEventListener('submit', handleSubmit);

// Function to handle login
function handleLogin(email, password) {
  // Check if email and password are valid
  const user = findUser(email, password);

  if (user) {
    // If user is found, set item in localStorage to indicate user is logged in
    localStorage.setItem('loggedIn', 'true');
    localStorage.setItem('loggedInUser', email);
    // Redirect user to home page
    window.location.href = 'home.html';
  } else {
    // If user is not found, display an error message
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = 'Invalid email or password!';
  }
}

// Function to handle logout
function handleLogout() {
  // Remove item from localStorage to indicate user is logged out
  localStorage.removeItem('loggedIn');

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

// Add event listener to the form submit button (login)
document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the values from the form inputs
  const email = document.querySelector('.email').value;
  const password = document.querySelector('#password').value;

  // Call the handleLogin function
  handleLogin(email, password);
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

// copyright

const currentYear = new Date().getFullYear();

const footer = document.getElementById('footer');

footer.innerHTML = `Copyright ${currentYear}`;
