//sass
import 'normalize.css'
import './sass/style.sass'
//js
import './js/main'
//img
import './js/files'
//react
import React from 'react'
import {render} from 'react-dom'

import App from './components/App.jsx'

render(<App />, document.getElementById('app'))