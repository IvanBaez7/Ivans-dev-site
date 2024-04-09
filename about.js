const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

// icons

const gitHub = document.querySelector('.fab.fa-github');
const linkedIn = document.querySelector('.fab.fa-linkedin');

// sidebar
toggleBtn.addEventListener('click', function () {
  sidebar.classList.toggle('show-sidebar');
  if (sidebar.classList.contains('show-sidebar')) {
    sidebar.style.boxShadow = 'var(--light-shadow)';
  } else {
    sidebar.style.boxShadow = 'none';
  }
});

closeBtn.addEventListener('click', function () {
  sidebar.classList.remove('show-sidebar');
  sidebar.style.boxShadow = 'none';
});

// Event listener for GitHub
gitHub.addEventListener('click', function (e) {
  event.preventDefault();
  window.open('https://github.com/IvanBaez7', '_blank');
});

// Event listener for LinkedIn
linkedIn.addEventListener('click', function (e) {
  event.preventDefault();
  window.open('https://www.linkedin.com/in/ivan-baez-594732302/', '_blank');
});

// Get all icon elements and corresponding icon name display elements for skills1
const icons1 = document.querySelectorAll('.icon1');
const iconName1 = document.getElementById('iconName1');

// Get all icon elements and corresponding icon name display elements for skills2
const icons2 = document.querySelectorAll('.icon2');
const iconName2 = document.getElementById('iconName2');

// Function to handle icon mouseover
function handleIconMouseOver(icon, iconName) {
  const name = icon.getAttribute('data-name');
  iconName.textContent = name;
  iconName.style.display = 'block'; // Show the icon name

  // Position the icon name directly below the hovered icon
  const iconRect = icon.getBoundingClientRect();

  // Calculate the position relative to the viewport
  const topPosition = iconRect.bottom + 10; // 10px offset from icon's bottom
  const leftPosition =
    iconRect.left + iconRect.width / 2 - iconName.offsetWidth / 2;

  // Set the fixed position based on viewport coordinates
  iconName.style.position = 'fixed';
  iconName.style.top = `${topPosition}px`;
  iconName.style.left = `${leftPosition}px`;
}

// Function to handle icon mouseout
function handleIconMouseOut(iconName) {
  iconName.style.display = 'none'; // Hide the icon name on mouseout
}

// Add event listeners to icons in the first set (skills1)
icons1.forEach((icon) => {
  icon.addEventListener('mouseover', () => {
    handleIconMouseOver(icon, iconName1);
  });

  icon.addEventListener('mouseout', () => {
    handleIconMouseOut(iconName1);
  });
});

// Add event listeners to icons in the second set (skills2)
icons2.forEach((icon) => {
  icon.addEventListener('mouseover', () => {
    handleIconMouseOver(icon, iconName2);
  });

  icon.addEventListener('mouseout', () => {
    handleIconMouseOut(iconName2);
  });
});

// Add window scroll event listener to handle position adjustments on scroll
window.addEventListener('scroll', () => {
  // Re-calculate icon name positions on scroll (if visible)
  if (iconName1.style.display === 'block') {
    const icon = document.querySelector('.icon1:hover');
    if (icon) {
      handleIconMouseOver(icon, iconName1);
    } else {
      iconName1.style.display = 'none'; // Hide icon name if corresponding icon is not hovered
    }
  }

  if (iconName2.style.display === 'block') {
    const icon = document.querySelector('.icon2:hover');
    if (icon) {
      handleIconMouseOver(icon, iconName2);
    } else {
      iconName2.style.display = 'none'; // Hide icon name if corresponding icon is not hovered
    }
  }
});

// Footer scroll function
window.addEventListener('scroll', function () {
  var footer = document.getElementById('page-footer');
  var scrollPosition = window.innerHeight + window.scrollY;
  var bodyHeight = document.body.offsetHeight;

  if (scrollPosition >= bodyHeight) {
    footer.style.display = 'block';
  } else {
    footer.style.display = 'none';
  }
});

// Get year for footer
// Get the current year
var currentYear = new Date().getFullYear();

document.getElementById('year').textContent = currentYear;
