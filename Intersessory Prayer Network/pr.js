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

// Function to generate random values between min and max
function getRandomValue(min, max) {
  return Math.random() * (max - min) + min;
}

// Get input
const nameInput = document.getElementById('name');
// Get textarea
const messageInput = document.querySelector('.text');
// Get the button for creating a new sticky note
const submitButton = document.querySelector('.submit');
// Get the .pr-board element
const prBoard = document.querySelector('.pr-board');

// Add event listener to the button
submitButton.addEventListener('click', function (event) {
  console.log('Button clicked'); // Check if the button click event is being triggered

  // Get the values from input and textarea

  const name = nameInput.value; // Retrieve the value of name input
  console.log('Name:', name); // Check the value of the name input
  const message = messageInput.value;
  console.log('Message:', message);
  // Prevent the default form submission behavior
  event.preventDefault();

  // Create a new sticky note element
  const newSticky = document.createElement('div');
  newSticky.classList.add('sticky');

  // Get dimensions of the .pr-board element
  const boardRect = prBoard.getBoundingClientRect();
  const boardWidth = boardRect.width;
  const boardHeight = boardRect.height;

  // Set a random position for the sticky note within the .pr-board element
  const randomX = Math.random() * (boardWidth - 200);
  note;
  const randomY = Math.random() * (boardHeight - 200);
  note;
  newSticky.style.left = randomX + 'px';
  newSticky.style.top = randomY + 'px';

  // Inner HTML of sticky note
  newSticky.innerHTML = `
            <span class="name">${name}</span>
            <p class="sticky-prayer">${message}</p>
            <button class="grab-prayer">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
                    <path fill="currentColor" d="M3.085 2A1.5 1.5 0 0 1 4.5 1h2a1.5 1.5 0 0 1 1.415 1H8a2 2 0 0 1 2 2v2.31c.169-.034.36-.06.563-.06c.352 0 .762.079 1.13.346c.371.27.645.694.792 1.283a.5.5 0 0 1-.288.58a8.04 8.04 0 0 0-3.62 3.033C8.047 12.311 7.138 13 6.057 13H4.236A2.5 2.5 0 0 1 2 11.618l-.63-1.26A3.5 3.5 0 0 1 1 8.791V4a2 2 0 0 1 2-2zM5 2h-.5a.5.5 0 0 0-.5.5v4a.5.5 0 1 1-1 0V3a1 1 0 0 0-1 1v4.792c0 .388.09.77.264 1.118l.63 1.26a1.5 1.5 0 0 0 1.342.83h1.822c.642 0 1.273-.422 1.678-1.05a9.014 9.014 0 0 1 3.64-3.214a.914.914 0 0 0-.272-.332a.899.899 0 0 0-.541-.154c-.212 0-.424.048-.59.101a2.326 2.326 0 0 0-.24.092l-.01.004l-.001.001A.5.5 0 0 1 9 7V4a1 1 0 0 0-1-1v3.5a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5H6v4.5a.5.5 0 0 1-1 0zm6 14a4.994 4.994 0 0 1-4.078-2.106a3.77 3.77 0 0 0 .96-.388a4 4 0 1 0 5.613-5.633a1.503 1.503 0 0 0-.04-.237a3.494 3.494 0 0 0-.592-1.277A5.002 5.002 0 0 1 11 16m2.5-5.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-.553 1.974a.5.5 0 1 0-.894-.448c-.124.247-.372.432-.696.558c-.322.125-.66.166-.857.166a.5.5 0 0 0 0 1a3.55 3.55 0 0 0 1.218-.234c.45-.174.953-.49 1.23-1.042"/>
                </svg>
            </button>
        `;

  // Append the new sticky note to the .pr-board
  prBoard.appendChild(newSticky);

  // Clear input and textarea after creating sticky note
  nameInput.value = '';
  messageInput.value = '';

  // Add event listener to the grabPrayer button on the new sticky note
  newSticky
    .querySelector('.grab-prayer')
    .addEventListener('click', handleGrabPrayer);
});

// Get all grabPrayer buttons
const grabPrayerButtons = document.querySelectorAll('.grab-prayer');

// Function to handle the click event on grabPrayer buttons
function handleGrabPrayer(event) {
  console.log('Grab Prayer button clicked'); // Check if the grabPrayer button click event is being triggered

  // Retrieve name and message from the clicked sticky note
  const sticky = event.target.closest('.sticky');
  const name = sticky.querySelector('.name').textContent;
  const message = sticky.querySelector('.sticky-prayer').textContent;

  // Store name and message in local storage
  const stickyData = JSON.parse(localStorage.getItem('stickies')) || [];
  stickyData.push({ name, message });
  localStorage.setItem('stickies', JSON.stringify(stickyData));

  // Remove the clicked sticky note from the DOM
  sticky.remove();

  // Log local storage data
  console.log('Stored data:', JSON.parse(localStorage.getItem('stickies')));
}

// Add event listener to .pr-board to delegate the click event to grabPrayer buttons
prBoard.addEventListener('click', function (event) {
  if (event.target.classList.contains('grab-prayer')) {
    handleGrabPrayer(event);
  }
});

// Also, add event listeners to existing grabPrayer buttons
grabPrayerButtons.forEach((button) => {
  button.addEventListener('click', handleGrabPrayer);
});

// Get the width and height of the .pr-board element
const boardWidth = prBoard.offsetWidth;
const boardHeight = prBoard.offsetHeight;

// Get all sticky note elements
const stickyNotes = document.querySelectorAll('.sticky');

// Loop through each sticky note and position it randomly within the .pr-board
stickyNotes.forEach((sticky) => {
  const randomLeft = getRandomValue(0, boardWidth - sticky.offsetWidth);
  const randomTop = getRandomValue(0, boardHeight - sticky.offsetHeight);
  sticky.style.left = `${randomLeft}px`;
  sticky.style.top = `${randomTop}px`;
});

// copyright

const currentYear = new Date().getFullYear();

const footer = document.getElementById('footer');

footer.innerHTML = `Copyright ${currentYear}`;
