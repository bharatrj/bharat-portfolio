/**
 * Developed By: Bharat Jograna
 * Created on: 30 Sep 2025
 * Function Component: app to route project
 * Packages detail
    react react-router-dom
    react-redux redux redux-saga axios
    react-intl
    react-bootstrap bootstrap
*/

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppWidget from './components';

const App = () => {
    return (
        <React.Fragment>
            <React.Fragment>
                <BrowserRouter>
                    <React.Fragment>
                        <Routes>
                            <Route path='/*' element={<AppWidget />} />
                        </Routes>
                    </React.Fragment>
                </BrowserRouter>
            </React.Fragment>
        </React.Fragment>
    );
};

export default App;
