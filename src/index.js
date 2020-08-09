// Test import of a JavaScript function, an SVG, and Sass
import { HelloWorld } from './js/HelloWorld'
import WebpackLogo from './images/webpack-logo.svg'
import './styles/index.scss'
import 'bootstrap';

// Create SVG logo node
const logo = document.createElement('img')
logo.className = "logo-webpack"
logo.src = WebpackLogo


function doubleSay (str) {
  return str + ", " + str;
}
function capitalize (str) {
  return str[0].toUpperCase() + str.substring(1);
}
function exclaim (str) {
  return str + '!';
}

let result = "hello"
  |> doubleSay
  |> capitalize
  |> exclaim;

// Create heading node
const greeting = document.createElement('h1')
greeting.textContent = HelloWorld() + ' ' + `${result}`;

// Append SVG and heading nodes to the DOM
const app = document.querySelector('#root')
app.append(logo, greeting)
