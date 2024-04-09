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
  {
    id: 0,
    profilePicture: 'Default_pfp.svg.png',
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

// prayer like and praise btn
// Add event listener to the feed container for click events
document.addEventListener('click', function (event) {
  const target = event.target;
  if (target.classList.contains('pray')) {
    handleButtonClick(target, '.praying', 'Prayers');
  } else if (target.classList.contains('thumbs-up')) {
    handleButtonClick(target, '.likes', 'Likes');
  } else if (target.classList.contains('praise-hands')) {
    handleButtonClick(target, '.praise', 'Praise the Lord');
  }
});

function handleButtonClick(btn, counterClass, counterText) {
  const card = btn.closest('.feed-card');
  const counter = card.querySelector(counterClass);
  let count = parseInt(counter.dataset.count) || 0; // Parse or default to 0
  count++;
  updateCounter(counter, count, counterText);
}

function updateCounter(counterElement, count, counterText) {
  if (count >= 1000000) {
    counterElement.textContent = `${(count / 1000000).toFixed(
      1
    )}m ${counterText}`;
  } else if (count >= 1000) {
    counterElement.textContent = `${(count / 1000).toFixed(1)}k ${counterText}`;
  } else {
    counterElement.textContent = `${count} ${counterText}`;
  }
  counterElement.dataset.count = count;
}

// feed txt functionality
document.addEventListener('click', function (event) {
  if (event.target && event.target.matches('.feed-submit')) {
    const feedInput = document.querySelector('.feed-txt');
    const feedContainer = document.querySelector('.praise-feed');

    const message = feedInput.value;

    // Get the user's profile picture and first name
    const profilePicture = getProfilePicture();
    const firstName = getFirstName();

    // Create a new feed card element
    const newFeedCard = document.createElement('fieldset');
    newFeedCard.classList.add('feed-card');

    // Set the inner HTML of the new feed card
    newFeedCard.innerHTML = `
    <img src="${profilePicture}" alt="user-image" class="feed-img" />
    <legend class="user-name">
    <strong><a href="profile.html" id="user-profile-link">${firstName}</a></strong>
    </legend>
    <div class="comment-btn">
    <p class="user-comment">${message}</p>
    <div class="feed-btns">
    <p class="likes">0 Likes</p>
    <button class="thumbs-up">👍</button>
    <p class="praying">0 Prayers</p>
    <button class="pray">🙏</button>
    <p class="praise">0 Praise the Lord</p>
    <button class="praise-hands">🙌</button>
    </div>
    </div>
    `;

    // Get the first existing feed card
    const firstFeedCard = feedContainer.querySelector('.feed-card');

    // Insert the new feed card before the first existing feed card
    feedContainer.insertBefore(newFeedCard, firstFeedCard);

    // Reset the feed input
    feedInput.value = '';
  }
});

function getSignedInProfile() {
  const signedInEmail = localStorage.getItem('loggedInUser');
  if (signedInEmail) {
    // Find the signed-in user's profile in the profiles array based on their email
    const signedInUser = profiles.find(
      (profile) => profile.email === signedInEmail
    );
    return signedInUser ? signedInUser : null;
  } else {
    return null;
  }
}

function getProfilePicture() {
  const signedInProfile = getSignedInProfile();
  if (signedInProfile) {
    // Return user's profile picture URL
    return signedInProfile.profilePicture;
  } else {
    return 'Default_pfp.svg.png';
  }
}

function getFirstName() {
  const signedInProfile = getSignedInProfile(); // Implement this function
  if (signedInProfile) {
    // Return user's first name
    return signedInProfile.firstName;
  } else {
    // Return default name
    return 'Anonymous';
  }
}

// copyright

const currentYear = new Date().getFullYear();

const footer = document.getElementById('footer');

footer.innerHTML = `Copyright ${currentYear}`;

// const prayerBtns = document.querySelectorAll('.pray');
// const likeBtns = document.querySelectorAll('.thumbs-up');
// const praiseBtns = document.querySelectorAll('.praise-hands');

// // what increments
// const prayers = document.querySelectorAll('.praying');
// const likes = document.querySelectorAll('.likes');
// const praise = document.querySelectorAll('.praise');

// // incrementing functionality

// // let likeNum = 0;
// // let praiseNum = 0;

// prayerBtns.forEach((btn, index) => {
//   let prayerNum = 0;

//   btn.addEventListener('click', function () {
//     prayerNum++;

//     const clickedPrayer = prayers[index];

//     if (prayerNum >= 1000000) {
//       clickedPrayer.textContent = `${(prayerNum / 1000000).toFixed(
//         1
//       )}m Prayers`;
//     } else if (prayerNum >= 1000) {
//       clickedPrayer.textContent = `${(prayerNum / 1000).toFixed(1)}k Prayers`;
//     } else {
//       clickedPrayer.textContent = `${prayerNum} Prayers`;
//     }
//   });
// });

// likeBtns.forEach((btn, index) => {
//   let likeNum = 0;

//   btn.addEventListener('click', function () {
//     likeNum++;

//     const clickedLike = likes[index];

//     if (likeNum >= 1000000) {
//       clickedLike.textContent = `${(likeNum / 1000000).toFixed(1)}m Likes`;
//     } else if (likeNum >= 1000) {
//       clickedLike.textContent = `${(likeNum / 1000).toFixed(1)}k Likes`;
//     } else {
//       clickedLike.textContent = `${likeNum} Likes`;
//     }
//   });
// });

// praiseBtns.forEach((btn, index) => {
//   let praiseNum = 0;

//   btn.addEventListener('click', function () {
//     praiseNum++;

//     const clickedPraise = praise[index];
//     if (praiseNum >= 1000000) {
//       clickedPraise.textContent = `${(praiseNum / 1000000).toFixed(
//         1
//       )}m Praise the Lord!`;
//     } else if (praiseNum >= 1000) {
//       clickedPraise.textContent = `${(praiseNum / 1000).toFixed(
//         1
//       )}k Praise the Lord!`;
//     } else {
//       clickedPraise.textContent = `${praiseNum} Praise the Lord!`;
//     }
//   });
// });
