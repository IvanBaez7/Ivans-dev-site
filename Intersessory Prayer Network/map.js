// create map
const map = L.map('map', {
  zoomControl: false,
  scrollWheelZoom: false,
}).setView([35, 0], 2);

// Set maximum bounds for the map
// const maxBounds = L.latLngBounds([-90, -180], [90, 180]);
// map.setMaxBounds(maxBounds);

import config from './config.prod.js';

// Add the tile layer to the map using the configured API URL and key
L.tileLayer(
  `${config.apiUrl}apikey=${config.apiKey}`, // Include the apiKey as a query parameter
  {
    attribution:
      'Tiles by <a href="http://www.thunderforest.com/">Thunderforest</a> | Data by <a href="http://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>',
  }
).addTo(map);

// Add labels for continents
const continentLabels = {
  Africa: [17, 13],
  Asia: [40, 80],
  Europe: [52, 10],
  'North America': [50, -110],
  Russia: [60, 100],
  'Middle East': [36, 39],
  Oceania: [-23, 126],
  'South America': [-7, -65],
};

// popups for each continent
Object.keys(continentLabels).forEach((continentName) => {
  const continentCenter = continentLabels[continentName];
  const label = L.marker(continentCenter, {
    icon: L.divIcon({
      className: 'continent-label',
      html: continentName,
    }),
  }).addTo(map);

  // Popup for North America
  if (continentName === 'North America') {
    const popupContent = `
  <div class="NA-tab">
    <p class="NA-feed">
      <img src="joshua.jpeg" alt="joshua" id="map-img" /><span class="name">
        Joshua
      </span>
      : Lord I pray that the states turn toward your face, that our leaders
      would walk in your ways and bless your name. Amen 🙏🏼
    </p>
    <textarea
      name=""
      id=""
      cols="30"
      rows="7"
      placeholder="Lord I pray for..."
    ></textarea>
    <p class="NA-data">0 people praying for North America</p>
    <button class="praying-hands">🙏</button>
    <button id="send" class="send">Intercede</button>
  </div>`;
    const popup = L.popup({
      autoPan: true,
      keepInView: true,
      anchor: [0, -10],
    }).setContent(popupContent);

    label.on('click', function () {
      popup.setLatLng(label.getLatLng()).openOn(map);

      // Select the praying hands button
      const prayingHandsButton = document.querySelector('.praying-hands');

      // Select the paragraph element displaying the number of people praying
      const prayingCounter = document.querySelector('.NA-data');

      // Initial number of people praying
      let numberOfPrayers = 0;

      // Add event listener to the praying hands button
      prayingHandsButton.addEventListener('click', function () {
        // Increment the number of people praying
        numberOfPrayers++;

        // Update the text content of the paragraph element based on the number of prayers
        if (numberOfPrayers >= 1000000) {
          // Convert to millions
          prayingCounter.textContent = `${(numberOfPrayers / 1000000).toFixed(
            1
          )}m people praying for North America`;
        } else if (numberOfPrayers >= 1000) {
          // Convert to thousands
          prayingCounter.textContent = `${(numberOfPrayers / 1000).toFixed(
            1
          )}k people praying for North America`;
        } else {
          // Display the number directly
          prayingCounter.textContent = `${numberOfPrayers} people praying for North America`;
        }
      });

      // Select the Intercede button
      const intercedeButton = document.getElementById('send');

      // Add event listener to the Intercede button
      intercedeButton.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent form submission

        // Select the textarea
        const textarea = document.querySelector('textarea');

        // Get the message from the textarea
        const message = textarea.value;

        // Select the feed element
        const feedElement = document.querySelector('.NA-feed');

        // Clear the existing content in the feed
        feedElement.innerHTML = '';

        // Create a new paragraph element to display the message
        const messageElement = document.createElement('p');
        messageElement.textContent = message;

        // Append the message element to the feed
        feedElement.appendChild(messageElement);

        // Clear the textarea after submitting
        textarea.value = '';
      });
    });
  }

  // Popup for  South America
  else if (continentName === 'South America') {
    const popupContent = `
      <div class="SA-tab">
        <p class="SA-feed">
          <img src="crae.jpeg" alt="crae" id="map-img" /><span class="name">Crae</span>: 
          Lord I pray that South America turns toward your face, that our leaders would walk 
          in your ways and bless your name. Amen 🙏🏼
        </p>
        <textarea
          name=""
          id=""
          cols="30"
          rows="7"
          placeholder="Lord I pray for..."
        ></textarea>
        <p class="SA-data">0 people praying for South America</p>
        <button class="praying-hands">🙏</button>
        <button id="send" class="send">Intercede</button>
      </div>`;
    const popup = L.popup({
      autoPan: true,
      keepInView: true,
      anchor: [0, -10],
    }).setContent(popupContent);

    label.on('click', function () {
      popup.setLatLng(label.getLatLng()).openOn(map);

      // Select the praying hands button
      const prayingHandsButton = document.querySelector('.praying-hands');

      // Select the paragraph element displaying the number of people praying
      const prayingCounter = document.querySelector('.SA-data');

      // Initial number of people praying
      let numberOfPrayers = 0;

      // Add event listener to the praying hands button
      prayingHandsButton.addEventListener('click', function () {
        // Increment the number of people praying
        numberOfPrayers++;

        // Update the text content of the paragraph element based on the number of prayers
        if (numberOfPrayers >= 1000000) {
          // Convert to millions
          prayingCounter.textContent = `${(numberOfPrayers / 1000000).toFixed(
            1
          )}m people praying for South America`;
        } else if (numberOfPrayers >= 1000) {
          // Convert to thousands
          prayingCounter.textContent = `${(numberOfPrayers / 1000).toFixed(
            1
          )}k people praying for South America`;
        } else {
          // Display the number directly
          prayingCounter.textContent = `${numberOfPrayers} people praying for South America`;
        }
      });

      // Select the Intercede button
      const intercedeButton = document.getElementById('send');

      // Add event listener to the Intercede button
      intercedeButton.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent form submission

        // Select the textarea
        const textarea = document.querySelector('textarea');

        // Get the message from the textarea
        const message = textarea.value;

        // Select the feed element
        const feedElement = document.querySelector('.SA-feed');

        // Clear the existing content in the feed
        feedElement.innerHTML = '';

        // Create a new paragraph element to display the message
        const messageElement = document.createElement('p');
        messageElement.textContent = message;

        // Append the message element to the feed
        feedElement.appendChild(messageElement);

        // Clear the textarea after submitting
        textarea.value = '';
      });
    });
  }
  //  Popup for Europe
  else if (continentName === 'Europe') {
    const popupContent = `
      <div class="E-tab">
        <p class="E-feed">
          <img src="peggy.jpeg" alt="peggy" id="map-img" /><span class="name"
            >Peggy</span
          >: Lord I pray that the E.U. turns toward your face, that our leaders
          would walk in your ways and bless your name. Amen 🙏🏼
        </p>
        <textarea
          name=""
          id=""
          cols="30"
          rows="7"
          placeholder="Lord I pray for..."
        ></textarea>
        <p class="E-data">0 people praying for Europe</p>
        <button class="praying-hands">🙏</button>
        <button id="send" class="send">Intercede</button>
      </div>`;
    const popup = L.popup({
      autoPan: true,
      keepInView: true,
      anchor: [0, -10],
    }).setContent(popupContent);

    label.on('click', function () {
      popup.setLatLng(label.getLatLng()).openOn(map);

      // Select the praying hands button
      const prayingHandsButton = document.querySelector('.praying-hands');

      // Select the paragraph element displaying the number of people praying
      const prayingCounter = document.querySelector('.E-data');

      // Initial number of people praying
      let numberOfPrayers = 0;

      // Add event listener to the praying hands button
      prayingHandsButton.addEventListener('click', function () {
        // Increment the number of people praying
        numberOfPrayers++;

        // Update the text content of the paragraph element based on the number of prayers
        if (numberOfPrayers >= 1000000) {
          // Convert to millions
          prayingCounter.textContent = `${(numberOfPrayers / 1000000).toFixed(
            1
          )}m people praying for Europe`;
        } else if (numberOfPrayers >= 1000) {
          // Convert to thousands
          prayingCounter.textContent = `${(numberOfPrayers / 1000).toFixed(
            1
          )}k people praying for Europe`;
        } else {
          // Display the number directly
          prayingCounter.textContent = `${numberOfPrayers} people praying for Europe`;
        }
      });
      // Select the Intercede button
      const intercedeButton = document.getElementById('send');

      // Add event listener to the Intercede button
      intercedeButton.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent form submission

        // Select the textarea
        const textarea = document.querySelector('textarea');

        // Get the message from the textarea
        const message = textarea.value;

        // Select the feed element
        const feedElement = document.querySelector('.E-feed');

        // Clear the existing content in the feed
        feedElement.innerHTML = '';

        // Create a new paragraph element to display the message
        const messageElement = document.createElement('p');
        messageElement.textContent = message;

        // Append the message element to the feed
        feedElement.appendChild(messageElement);

        // Clear the textarea after submitting
        textarea.value = '';
      });
    });
  }
  // Popup for Africa
  else if (continentName === 'Africa') {
    const popupContent = `
     <div class="A-tab">
        <p class="A-feed">
          <img src="menilik.png" alt="menilik" id="map-img" /><span class="name"
            >Menilik</span
          >: Lord I pray that Africa turns united toward your face, that our
          leaders would walk in your ways and bless your name. Amen 🙏🏿
        </p>
        <textarea
          name=""
          id=""
          cols="30"
          rows="7"
          placeholder="Lord I pray for..."
        ></textarea>
        <p class="A-data">0 people praying for Africa</p>
        <button class="praying-hands">🙏</button>
        <button id="send" class="send">Intercede</button>
      </div>`;
    const popup = L.popup({
      autoPan: true,
      keepInView: true,
      anchor: [0, -10],
    }).setContent(popupContent);

    label.on('click', function () {
      popup.setLatLng(label.getLatLng()).openOn(map);

      // Select the praying hands button
      const prayingHandsButton = document.querySelector('.praying-hands');

      // Select the paragraph element displaying the number of people praying
      const prayingCounter = document.querySelector('.A-data');

      // Initial number of people praying
      let numberOfPrayers = 0;

      // Add event listener to the praying hands button
      prayingHandsButton.addEventListener('click', function () {
        // Increment the number of people praying
        numberOfPrayers++;

        // Update the text content of the paragraph element based on the number of prayers
        if (numberOfPrayers >= 1000000) {
          // Convert to millions
          prayingCounter.textContent = `${(numberOfPrayers / 1000000).toFixed(
            1
          )}m people praying for Africa`;
        } else if (numberOfPrayers >= 1000) {
          // Convert to thousands
          prayingCounter.textContent = `${(numberOfPrayers / 1000).toFixed(
            1
          )}k people praying for Africa`;
        } else {
          // Display the number directly
          prayingCounter.textContent = `${numberOfPrayers} people praying for Africa`;
        }
      });
      // Select the Intercede button
      const intercedeButton = document.getElementById('send');

      // Add event listener to the Intercede button
      intercedeButton.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent form submission

        // Select the textarea
        const textarea = document.querySelector('textarea');

        // Get the message from the textarea
        const message = textarea.value;

        // Select the feed element
        const feedElement = document.querySelector('.A-feed');

        // Clear the existing content in the feed
        feedElement.innerHTML = '';

        // Create a new paragraph element to display the message
        const messageElement = document.createElement('p');
        messageElement.textContent = message;

        // Append the message element to the feed
        feedElement.appendChild(messageElement);

        // Clear the textarea after submitting
        textarea.value = '';
      });
    });
  }
  // Popup for the Middle East
  else if (continentName === 'Middle East') {
    const popupContent = `
     <div class="ME-tab">
        <p class="ME-feed">
          <img src="aaron.jpeg" alt="moses" id="map-img" /><span class="name"
            >Aaron</span
          >: Lord I pray that you bless your people Israel, that our leaders would
          walk in your ways and bless your name. Amen 🤲🏽
        </p>
        <textarea
          name=""
          id=""
          cols="30"
          rows="7"
          placeholder="Lord I pray for..."
        ></textarea>
        <p class="ME-data">0 people praying for the Middle East</p>
        <button class="praying-hands">🙏</button>
        <button id="send" class="send">Intercede</button>
      </div>`;
    const popup = L.popup({
      autoPan: true,
      keepInView: true,
      anchor: [0, -10],
    }).setContent(popupContent);

    label.on('click', function () {
      popup.setLatLng(label.getLatLng()).openOn(map);

      // Select the praying hands button
      const prayingHandsButton = document.querySelector('.praying-hands');

      // Select the paragraph element displaying the number of people praying
      const prayingCounter = document.querySelector('.ME-data');

      // Initial number of people praying
      let numberOfPrayers = 0;

      // Add event listener to the praying hands button
      prayingHandsButton.addEventListener('click', function () {
        // Increment the number of people praying
        numberOfPrayers++;

        // Update the text content of the paragraph element based on the number of prayers
        if (numberOfPrayers >= 1000000) {
          // Convert to millions
          prayingCounter.textContent = `${(numberOfPrayers / 1000000).toFixed(
            1
          )}m people praying for the Middle East`;
        } else if (numberOfPrayers >= 1000) {
          // Convert to thousands
          prayingCounter.textContent = `${(numberOfPrayers / 1000).toFixed(
            1
          )}k people praying for the Middle East`;
        } else {
          // Display the number directly
          prayingCounter.textContent = `${numberOfPrayers} people praying for the Middle East`;
        }
      });
      // Select the Intercede button
      const intercedeButton = document.getElementById('send');

      // Add event listener to the Intercede button
      intercedeButton.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent form submission

        // Select the textarea
        const textarea = document.querySelector('textarea');

        // Get the message from the textarea
        const message = textarea.value;

        // Select the feed element
        const feedElement = document.querySelector('.ME-feed');

        // Clear the existing content in the feed
        feedElement.innerHTML = '';

        // Create a new paragraph element to display the message
        const messageElement = document.createElement('p');
        messageElement.textContent = message;

        // Append the message element to the feed
        feedElement.appendChild(messageElement);

        // Clear the textarea after submitting
        textarea.value = '';
      });
    });
  }
  // Popup for Asia
  else if (continentName === 'Asia') {
    const popupContent = `
     <div class="AS-tab">
        <p class="AS-feed">
          <img src="chen.avif" alt="chen" id="map-img" /><span class="name"
            >Chen</span
          >: Lord I pray that China turns toward your face, that our leaders
          would walk in your ways and bless your name. Amen 🙏🏻
        </p>
        <textarea
          name=""
          id=""
          cols="30"
          rows="7"
          placeholder="Lord I pray for..."
        ></textarea>
        <p class="AS-data">0 people praying for Asia</p>
        <button class="praying-hands">🙏</button>
        <button id="send" class="send">Intercede</button>
      </div>`;
    const popup = L.popup({
      autoPan: true,
      keepInView: true,
      anchor: [0, -10],
    }).setContent(popupContent);

    label.on('click', function () {
      popup.setLatLng(label.getLatLng()).openOn(map);

      // Select the praying hands button
      const prayingHandsButton = document.querySelector('.praying-hands');

      // Select the paragraph element displaying the number of people praying
      const prayingCounter = document.querySelector('.AS-data');

      // Initial number of people praying
      let numberOfPrayers = 0;

      // Add event listener to the praying hands button
      prayingHandsButton.addEventListener('click', function () {
        // Increment the number of people praying
        numberOfPrayers++;

        // Update the text content of the paragraph element based on the number of prayers
        if (numberOfPrayers >= 1000000) {
          // Convert to millions
          prayingCounter.textContent = `${(numberOfPrayers / 1000000).toFixed(
            1
          )}m people praying for Asia`;
        } else if (numberOfPrayers >= 1000) {
          // Convert to thousands
          prayingCounter.textContent = `${(numberOfPrayers / 1000).toFixed(
            1
          )}k people praying for Asia`;
        } else {
          // Display the number directly
          prayingCounter.textContent = `${numberOfPrayers} people praying for Asia`;
        }
      });
      // Select the Intercede button
      const intercedeButton = document.getElementById('send');

      // Add event listener to the Intercede button
      intercedeButton.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent form submission

        // Select the textarea
        const textarea = document.querySelector('textarea');

        // Get the message from the textarea
        const message = textarea.value;

        // Select the feed element
        const feedElement = document.querySelector('.AS-feed');

        // Clear the existing content in the feed
        feedElement.innerHTML = '';

        // Create a new paragraph element to display the message
        const messageElement = document.createElement('p');
        messageElement.textContent = message;

        // Append the message element to the feed
        feedElement.appendChild(messageElement);

        // Clear the textarea after submitting
        textarea.value = '';
      });
    });
  }
  // Popup for Russia
  else if (continentName === 'Russia') {
    const popupContent = `
     <div class="R-tab">
        <p class="R-feed">
          <img src="vlad.jpeg" alt="moses" id="map-img" /><span class="name"
            >Vlad</span
          >: Lord I pray that Ukraine and Russia find peace, that their leaders
          would walk in your ways and bless your name. Amen 🙏🏼
        </p>
        <textarea
          name=""
          id=""
          cols="30"
          rows="7"
          placeholder="Lord I pray for..."
        ></textarea>
        <p class="R-data">0 people praying for Russia</p>
        <button class="praying-hands">🙏</button>
        <button id="send" class="send">Intercede</button>
      </div>`;
    const popup = L.popup({
      autoPan: true,
      keepInView: true,
      anchor: [0, -10],
    }).setContent(popupContent);

    label.on('click', function () {
      popup.setLatLng(label.getLatLng()).openOn(map);

      // Select the praying hands button
      const prayingHandsButton = document.querySelector('.praying-hands');

      // Select the paragraph element displaying the number of people praying
      const prayingCounter = document.querySelector('.R-data');

      // Initial number of people praying
      let numberOfPrayers = 0;

      // Add event listener to the praying hands button
      prayingHandsButton.addEventListener('click', function () {
        // Increment the number of people praying
        numberOfPrayers++;

        // Update the text content of the paragraph element based on the number of prayers
        if (numberOfPrayers >= 1000000) {
          // Convert to millions
          prayingCounter.textContent = `${(numberOfPrayers / 1000000).toFixed(
            1
          )}m people praying for Russia`;
        } else if (numberOfPrayers >= 1000) {
          // Convert to thousands
          prayingCounter.textContent = `${(numberOfPrayers / 1000).toFixed(
            1
          )}k people praying for Russia`;
        } else {
          // Display the number directly
          prayingCounter.textContent = `${numberOfPrayers} people praying for Russia`;
        }
      });
      // Select the Intercede button
      const intercedeButton = document.getElementById('send');

      // Add event listener to the Intercede button
      intercedeButton.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent form submission

        // Select the textarea
        const textarea = document.querySelector('textarea');

        // Get the message from the textarea
        const message = textarea.value;

        // Select the feed element
        const feedElement = document.querySelector('.R-feed');

        // Clear the existing content in the feed
        feedElement.innerHTML = '';

        // Create a new paragraph element to display the message
        const messageElement = document.createElement('p');
        messageElement.textContent = message;

        // Append the message element to the feed
        feedElement.appendChild(messageElement);

        // Clear the textarea after submitting
        textarea.value = '';
      });
    });
  }
  // Popup for Oceania
  else if (continentName === 'Oceania') {
    const popupContent = `
     <div class="O-tab">
        <p class="O-feed">
          <img src="Default_pfp.svg.png" alt="teena" id="map-img" /><span
            class="name"
            >Teena</span
          >: Lord I pray that Austrailia turns toward your face, that our
          leaders would walk in your ways and bless your name. Amen 🙏🏿
        </p>
        <textarea
          name=""
          id=""
          cols="30"
          rows="7"
          placeholder="Lord I pray for..."
        ></textarea>
        <p class="O-data">0 people praying for Oceania</p>
        <button class="praying-hands">🙏</button>
        <button id="send" class="send">Intercede</button>
      </div>`;
    const popup = L.popup({
      autoPan: true,
      keepInView: true,
      anchor: [0, -10],
    }).setContent(popupContent);

    label.on('click', function () {
      popup.setLatLng(label.getLatLng()).openOn(map);

      // Select the praying hands button
      const prayingHandsButton = document.querySelector('.praying-hands');

      // Select the paragraph element displaying the number of people praying
      const prayingCounter = document.querySelector('.O-data');

      // Initial number of people praying
      let numberOfPrayers = 0;

      // Add event listener to the praying hands button
      prayingHandsButton.addEventListener('click', function () {
        // Increment the number of people praying
        numberOfPrayers++;

        // Update the text content of the paragraph element based on the number of prayers
        if (numberOfPrayers >= 1000000) {
          // Convert to millions
          prayingCounter.textContent = `${(numberOfPrayers / 1000000).toFixed(
            1
          )}m people praying for Oceania`;
        } else if (numberOfPrayers >= 1000) {
          // Convert to thousands
          prayingCounter.textContent = `${(numberOfPrayers / 1000).toFixed(
            1
          )}k people praying for Oceania`;
        } else {
          // Display the number directly
          prayingCounter.textContent = `${numberOfPrayers} people praying for Oceania`;
        }
      });
      // Select the Intercede button
      const intercedeButton = document.getElementById('send');

      // Add event listener to the Intercede button
      intercedeButton.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent form submission

        // Select the textarea
        const textarea = document.querySelector('textarea');

        // Get the message from the textarea
        const message = textarea.value;

        // Select the feed element
        const feedElement = document.querySelector('.O-feed');

        // Clear the existing content in the feed
        feedElement.innerHTML = '';

        // Create a new paragraph element to display the message
        const messageElement = document.createElement('p');
        messageElement.textContent = message;

        // Append the message element to the feed
        feedElement.appendChild(messageElement);

        // Clear the textarea after submitting
        textarea.value = '';
      });
    });
  }
});
const isLoggedIn = localStorage.getItem('loggedIn');
