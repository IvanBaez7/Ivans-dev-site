document.querySelector('.tag').addEventListener('click', function (event) {
  event.preventDefault(); // Prevent default link behavior

  document.querySelector('.tag-left').classList.add('move-left');
  document.querySelector('.tag-right').classList.add('move-right');

  setTimeout(
    function () {
      window.location.href = this.href; // Redirect to home.html after animation
    }.bind(this),
    1000
  );
});
