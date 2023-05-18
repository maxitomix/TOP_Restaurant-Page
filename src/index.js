import './styles.css';
import Logo from './pizzalogo.svg'; 

// function test() {
  //     const testMessage = 'Its working -TEST-';
  //     console.log(testMessage);
  
  //     return testMessage;
  // };

// document.body.appendChild(test());  

function header(){
  const contentDiv = document.getElementById('content');

  const headerDiv = document.createElement('div');
  headerDiv.classList.add('header');
  contentDiv.appendChild(headerDiv);

  const navDiv = document.createElement('div');
  navDiv.classList.add('nav');
  contentDiv.appendChild(navDiv);

  const logoDiv = document.createElement('div');
  logoDiv.classList.add('logo');
  navDiv.appendChild(logoDiv);

  const logo = new Image();
  logo.src = Logo;
  logoDiv.appendChild(logo);

}

document.body.appendChild(header());  





