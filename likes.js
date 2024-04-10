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

// Function to make YouTube videos enter fullscreen mode
function enableFullscreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}

// Add event listeners to all YouTube iframes
const youtubeVideos = document.querySelectorAll('iframe[src*="youtube.com"]');
youtubeVideos.forEach((video) => {
  video.addEventListener('click', () => {
    enableFullscreen(video);
  });
});

// Get year for footer
// Get the current year
var currentYear = new Date().getFullYear();

document.getElementById('year').textContent = currentYear;
