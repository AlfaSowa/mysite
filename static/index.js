//scss
import './sass/style.sass'
//js
import './js/header'
import './js/grid'

import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import FrontPage from './components/pages/frontpage/FrontPage.jsx';

ReactDOM.render(<FrontPage />,document.getElementById('root'));