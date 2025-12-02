/**
 * A Template Master Branch Project of BHARAT-JOGRANA{BJ}
 * Made Wih Love ❤️
 * Created By Bharat Jograna
 * Created on: 30 Sep 2025
 * Copyright 2025 All Rights Reserved BHARAT-JOGRANA
 * index component of this project
*/

import React from 'react';
import ReactDOM from 'react-dom/client';

localStorage.setItem('front_access_token', 'BharatRJ');

// wait till token not generated and stored in localstorage
var myTimer = setInterval(renderPage, 100);

function renderPage() {
  var response = localStorage.getItem('front_access_token');
  if (response) {
    clearInterval(myTimer);
    // Dynamically import our main App component, and render it
    const MainApp = require('./App').default;

    ReactDOM.createRoot(document.getElementById('BharatRJ'))
      .render(
        <React.Suspense>
          <MainApp />
        </React.Suspense>
      );
  }
}

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;

    ReactDOM.createRoot(document.getElementById('BharatRJ'))
      .render(
        <React.Suspense>
          <NextApp />
        </React.Suspense>
      );
  });
}
