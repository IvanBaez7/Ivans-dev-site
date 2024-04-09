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
    // If user is logged in, you might want to update UI or perform other actions
    // For example, show the user's name or avatar
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
