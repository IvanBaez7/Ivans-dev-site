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
  // Check email
  const loggedInEmail = localStorage.getItem('loggedInUser');

  // Find the user object in the profiles array
  const loggedInUser = profiles.find((user) => user.email === loggedInEmail);

  // Update profile name and picture if user is found
  if (loggedInUser) {
    // Update profile name
    const profileName = document.querySelector('.profile-name');
    profileName.textContent = loggedInUser.firstName;

    // Update profile picture
    const profilePicture = document.querySelector('.profile-picture img');
    profilePicture.src = loggedInUser.profilePicture;
    profilePicture.alt = `${loggedInUser.firstName}'s profile picture`;
  } else {
    console.log('User not found.'); // Handle case where user is not found
  }
});

// Add event listener to the logout link
document.querySelector('.logout-btn').addEventListener('click', handleLogout);

// Function to render stickies from local storage
function renderStickies() {
  // Retrieve stickies data from local storage
  const stickiesData = JSON.parse(localStorage.getItem('stickies')) || [];

  // Get the UL element for stickies
  const ulElement = document.querySelector('.PL');

  // Clear existing stickies from the UL
  ulElement.innerHTML = '';

  if (stickiesData.length === 0) {
    // If the list is empty, display a message
    const emptyMessage = document.createElement('li');
    emptyMessage.textContent = 'Your prayer list is empty.';
    ulElement.appendChild(emptyMessage);
  } else {
    // If there are stickies, render each one
    stickiesData.forEach((sticky) => {
      const { name, message } = sticky;
      const listItem = document.createElement('li');
      listItem.classList.add('items');
      listItem.innerHTML = `
        <span class="prayer-name">${name}: </span>
        <p class="message">${message}</p>
        <button class="done">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
            <path fill="currentColor" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m1.5 0a6.5 6.5 0 1 0 13 0a6.5 6.5 0 0 0-13 0m10.28-1.72l-4.5 4.5a.75.75 0 0 1-1.06 0l-2-2a.751.751 0 0 1 .018-1.042a.751.751 0 0 1 1.042-.018l1.47 1.47l3.97-3.97a.751.751 0 0 1 1.042.018a.751.751 0 0 1 .018 1.042"
            />
          </svg>
        </button>
      `;
      ulElement.appendChild(listItem);
    });
  }
}

// Call the renderStickies function initially to render stickies on page load
renderStickies();

// Function to handle the removal of a sticky item
function removeSticky(event) {
  const stickyItem = event.target.closest('.items');
  if (!stickyItem) return;

  const name = stickyItem
    .querySelector('.prayer-name')
    .textContent.replace(':', '')
    .trim();
  const message = stickyItem.querySelector('.message').textContent.trim();

  const stickiesData = JSON.parse(localStorage.getItem('stickies')) || [];
  const index = stickiesData.findIndex(
    (sticky) => sticky.name === name && sticky.message === message
  );

  if (index !== -1) {
    stickiesData.splice(index, 1);
    localStorage.setItem('stickies', JSON.stringify(stickiesData));
    stickyItem.remove();

    // Re-render the stickies after removal
    renderStickies();
  }
}

document.querySelector('.PL').addEventListener('click', removeSticky);

// Add event listener to the "Done" buttons to handle sticky removal
document.querySelectorAll('.done').forEach((button) => {
  button.addEventListener('click', removeSticky);
});

// Get the edit profile photo button
const editProfilePhotoBtn = document.getElementById('edit-profile-photo-btn');

// Get the modal
const modal = document.getElementById('editProfilePhotoModal');

// Get the close button inside the modal
const closeBtn = modal.querySelector('.close');

// Function to open the modal and hide the edit button
function openModal() {
  modal.style.display = 'block';
  editProfilePhotoBtn.style.display = 'none'; // Hide the edit button
}

// Function to close the modal and show the edit button
function closeModal() {
  modal.style.display = 'none';
  editProfilePhotoBtn.style.display = 'inline'; // Show the edit button
}

// When the user clicks the button, open the modal
editProfilePhotoBtn.addEventListener('click', openModal);

// When the user clicks on <span> (x), close the modal
closeBtn.addEventListener('click', closeModal);

// When the user clicks anywhere outside of the modal content, close it
window.addEventListener('click', function (event) {
  console.log(event.target);
  const clickedElement = event.target;
  const isProfilePicture = clickedElement.classList.contains('profile-picture');
  const isBody = clickedElement === body;

  if (isProfilePicture || isBody) {
    closeModal();
  }

  // Get the upload profile photo button
  const uploadProfilePhotoBtn = document.getElementById(
    'upload-profile-photo-btn'
  );

  // Get the profile photo input element
  const profilePhotoInput = document.getElementById('profile-photo-input');

  // Add event listener to the upload profile photo button
  uploadProfilePhotoBtn.addEventListener('click', function () {
    // Trigger the click event on the profile photo input element
    profilePhotoInput.click();
  });

  // Add event listener to handle the change event on the profile photo input
  profilePhotoInput.addEventListener('change', function (event) {
    // Check if a file is selected
    if (event.target.files.length > 0) {
      // Get the selected file
      const selectedFile = event.target.files[0];

      // Display a message with the selected file name
      console.log('Selected file:', selectedFile.name);

      console.log('Uploading file...');
    } else {
      // No file selected, display an error message or handle it appropriately
      console.error('No file selected.');
    }
  });
});

// copyright

const currentYear = new Date().getFullYear();

const footer = document.getElementById('footer');

footer.innerHTML = `Copyright ${currentYear}`;
