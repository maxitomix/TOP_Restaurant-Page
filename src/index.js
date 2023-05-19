import './styles.css';
import Logo from './pizzalogo.svg'; 
import Hero from './pizza.jpg'; 

let navPosition;

function header(){
  const contentDiv = document.getElementById('content');

  const headerDiv = document.createElement('div');
  headerDiv.classList.add('header');
  contentDiv.appendChild(headerDiv);

  const logoDiv = document.createElement('div');
  logoDiv.classList.add('logo');
  headerDiv.appendChild(logoDiv);

  const logo = new Image();
  logo.src = Logo;
  logoDiv.appendChild(logo);

  const navDiv = document.createElement('div');
  navDiv.classList.add('nav');
  headerDiv.appendChild(navDiv);

  //navigation panel
  const navMain = document.createElement('a');
  navMain.classList.add('navBtn');
  navMain.id = 'navMain';
  navMain.textContent ='Main'
  navDiv.appendChild(navMain);
  if (navPosition === 'main'){
    navMain.classList.add('selected');
  }
  navMain.addEventListener('click', ()=>{
    navPosition = 'main';
    console.log(navPosition);
    updateDisplay()
  });

  const navMenu = document.createElement('a');
  navMenu.classList.add('navBtn');
  navMenu.id = 'navMenu';
  navMenu.textContent ='Menu'
  navDiv.appendChild(navMenu);
  if (navPosition === 'menu'){
    navMenu.classList.add('selected');
  }
  navMenu.addEventListener('click', ()=>{
    navPosition = 'menu';
    console.log(navPosition);
    updateDisplay()
  })

  const navContact = document.createElement('a');
  navContact.classList.add('navBtn');
  navContact.id = 'navContact';
  navContact.textContent ='Contact'
  navDiv.appendChild(navContact);
  if (navPosition === 'contact'){
    navContact.classList.add('selected');
  }
  navContact.addEventListener('click', ()=>{
    navPosition = 'contact';
    console.log(navPosition);
    updateDisplay()
  })
}



function main(){
  const contentDiv = document.getElementById('content');

  const mainDiv = document.createElement('div');
  mainDiv.classList.add('main');
  contentDiv.appendChild(mainDiv);

  const titleH1 = document.createElement('h1');
  titleH1.textContent ='Ninja Pizza';
  mainDiv.appendChild(titleH1);

  const hero = new Image();
  hero.src = Hero;
  hero.classList.add('heroImg')
  mainDiv.appendChild(hero);

  const paragraph = document.createElement('p');
  paragraph.textContent ='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur laboriosam cumque, modi animi ipsum adipisci voluptatibus numquam voluptates iure sed unde eligendi dolorem. Voluptate cum odio praesentium beatae impedit exercitationem, ipsam ex quis dolorem, culpa aut ullam numquam placeat sed unde quisquam incidunt ducimus expedita consequatur perferendis dolorum molestiae nobis libero! Eligendi in minima aliquam. Iusto facilis expedita necessitatibus, iure est dicta aperiam saepe minima labore eveniet soluta nam eligendi quae illum in a! Possimus quia delectus maxime. Impedit.';
  mainDiv.appendChild(paragraph);
}


function updateDisplay(){
  const contentDiv = document.getElementById('content');
  contentDiv.innerHTML = '';
  header();  
  main();  
}

updateDisplay()





