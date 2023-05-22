import './styles.css';
import Logo from './pizzalogo.svg'; 
import Hero from './pizza.jpg'; 
import peperoniPizza from './peperoniPizza.jpg'; 
import pineapplePizza from './pineapplePizza.jpg'; 
import mushroomPizza from './mushroomPizza.jpg'; 
import billProfile from './billProfile.jpg'; 
import elonProfile from './elonProfile.jpg'; 

let navPosition ='main';

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

function menu(){
  const contentDiv = document.getElementById('content');

  const menuTitleDiv = document.createElement('div');
  menuTitleDiv.classList.add('menuTitle');
  contentDiv.appendChild(menuTitleDiv);

  const titleH1 = document.createElement('h1');
  titleH1.textContent ='Check out our Menu:';
  menuTitleDiv.appendChild(titleH1);

  const menuDiv = document.createElement('div');
  menuDiv.classList.add('menu');
  contentDiv.appendChild(menuDiv);

  // item1
  const menuItem1 = document.createElement('div');
  menuItem1.classList.add('menuItem');
  menuDiv.appendChild(menuItem1);

  const titleItem1 = document.createElement('h2');
  titleItem1.textContent ='Peperonni Pizza:';
  menuItem1.appendChild(titleItem1);

  const peperoni = new Image();
  peperoni.src = peperoniPizza;
  peperoni.classList.add('menuImg')
  menuItem1.appendChild(peperoni);

  const paragraphItem1 = document.createElement('p');
  paragraphItem1.textContent ='Lorem ipsum dolor sit amet, consectetur adipisicing Impedit.';
  menuItem1.appendChild(paragraphItem1);

  // item2
  const menuItem2 = document.createElement('div');
  menuItem2.classList.add('menuItem');
  menuDiv.appendChild(menuItem2);

  const titleItem2 = document.createElement('h2');
  titleItem2.textContent ='Pineapple Pizza:';
  menuItem2.appendChild(titleItem2);

  const pineapple = new Image();
  pineapple.src = pineapplePizza;
  pineapple.classList.add('menuImg')
  menuItem2.appendChild(pineapple);

  const paragraphItem2 = document.createElement('p');
  paragraphItem2.textContent ='Lorem ipsum dolor sit amet, consectetur adipisicing Impedit.';
  menuItem2.appendChild(paragraphItem2);

    // item3
    const menuItem3 = document.createElement('div');
    menuItem3.classList.add('menuItem');
    menuDiv.appendChild(menuItem3);
  
    const titleItem3 = document.createElement('h2');
    titleItem3.textContent ='Mushroom Pizza:';
    menuItem3.appendChild(titleItem3);
  
    const mushroom = new Image();
    mushroom.src = mushroomPizza;
    mushroom.classList.add('menuImg')
    menuItem3.appendChild(mushroom);
  
    const paragraphItem3 = document.createElement('p');
    paragraphItem3.textContent ='Lorem ipsum dolor sit amet, consectetur adipisicing Impedit.';
    menuItem3.appendChild(paragraphItem3);
}

function contact(){
  const contentDiv = document.getElementById('content');

  const contactTitleDiv = document.createElement('div');
  contactTitleDiv.classList.add('contactTitle');
  contentDiv.appendChild(contactTitleDiv);

  const titleH1 = document.createElement('h1');
  titleH1.textContent ='Who do you need to contact?:';
  contactTitleDiv.appendChild(titleH1);

  const contactsDiv = document.createElement('div');
  contactsDiv.classList.add('contacts');
  contentDiv.appendChild(contactsDiv);

  // contact1
  const contactItem1 = document.createElement('div');
  contactItem1.classList.add('contactItem');
  contactsDiv.appendChild(contactItem1);

  const titleContact1 = document.createElement('h2');
  titleContact1.textContent ='CEO:';
  contactItem1.appendChild(titleContact1);

  const elon = new Image();
  elon.src = elonProfile;
  elon.classList.add('menuImg')
  contactItem1.appendChild(elon);

  const paragraphContact1 = document.createElement('p');
  paragraphContact1.textContent ='Lorem ipsum dolor sit amet, consectetur adipisicing Impedit.';
  contactItem1.appendChild(paragraphContact1);

  // contact2
  const contactItem2 = document.createElement('div');
  contactItem2.classList.add('contactItem');
  contactsDiv.appendChild(contactItem2);

  const titleContact2 = document.createElement('h2');
  titleContact2.textContent ='CTO:';
  contactItem2.appendChild(titleContact2);

  const bill = new Image();
  bill.src = billProfile;
  bill.classList.add('menuImg')
  contactItem2.appendChild(bill);

  const paragraphContact2 = document.createElement('p');
  paragraphContact2.textContent ='Lorem ipsum dolor sit amet, consectetur adipisicing Impedit.';
  contactItem2.appendChild(paragraphContact2);
}


function updateDisplay(){
  const contentDiv = document.getElementById('content');
  contentDiv.innerHTML = '';
  header();  

  switch (navPosition) {
    case 'main':  main()
    break;  
    case 'menu':  menu()
    break;  
    case 'contact':  contact()
    break;  
  }
}

updateDisplay()

