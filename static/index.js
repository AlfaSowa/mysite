//scss
import './sass/style.sass';
//jsx
import React from 'react';
import ReactDOM from 'react-dom';
//components
import Datepicker from "./components/datepicker/Datepicker";
//js
require('./js/header'); //js для header
require('./js/app');
require('./js/sidebar');
require('./js/sw-main-js');
require('./js/slider');
require('./js/Desk');
//datepicker
require('./js/vendor/airdatepicker');
require('./js/datepicker');

ReactDOM.render(<Datepicker />, document.getElementById('sw__datepicker'));