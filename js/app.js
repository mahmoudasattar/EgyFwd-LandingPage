/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/
/**
 * Define Global Variables
 * 
*/
const mainNavList = document.querySelector('#navbar__list');
const navFragment = document.createDocumentFragment();
const secs =document.querySelectorAll('section');
const hdrs = document.querySelectorAll('h2');
/**
 * End Global Variables
*/

/**
 * Build the Nav
*/

// Create list items that has the same name as the section headers:
hdrs.forEach(function(hdr){
	const mainNavListItem = document.createElement('li');
	const hdrtxt = hdr.textContent;
	mainNavListItem.textContent = hdrtxt;
	navFragment.appendChild(mainNavListItem);
	mainNavListItem.classList.add("mainNavItem");

	// Create Event that scroll to the Section through calling the parent of the header,
	mainNavListItem.addEventListener('click',function(){
		hdr.parentElement.scrollIntoView({behavior: 'smooth'})
	})
})
mainNavList.appendChild(navFragment);

/**
 * End Build the Nav
*/

/**
 * Main Functions and Events
*/

// Add class 'active' to section when near top of viewport:
window.addEventListener('scroll',function(){
	secs.forEach(function(sec){
		(sec.getBoundingClientRect().top>-250 && sec.getBoundingClientRect().top<=500)?
		sec.classList.add('your-active-class'):
		sec.classList.remove('your-active-class');
	})
});
//linking the Navigation List item with the text of the header or the active section:
window.addEventListener('scroll',function(){
	const listItems = document.querySelectorAll('.mainNavItem');
	const activeHdrTxt = document.querySelector('.your-active-class').querySelector('h2').innerText;	
	listItems.forEach(function(item){
		item.textContent === activeHdrTxt?
		item.classList.add('activeLi'):
		item.classList.remove('activeLi');
	})
});

// Creatt "Scroll to Top" Button Element
const tB = document.createElement('button');
tB.innerText = "Scroll To Top";
document.body.appendChild(tB);

// Scroll to top when clicked
tB.addEventListener('click',function(){scrollTo({top:0, behavior:'smooth'})});

// Change button class to active after scrolling 200px from top
window.addEventListener('scroll',function(){if(document.body.getBoundingClientRect().top<-200){
	tB.classList.add('activeButton')
	}
	else{tB.classList.remove('activeButton')
	}
});

//Make Sections Collapsible
secs.forEach(function(sec){
	const Ps = sec.querySelectorAll('div>p');
	sec.addEventListener('click',function(){
		sec.classList.toggle('hiddenSec');
		Ps.forEach(function(p){
			p.classList.toggle('hiddenP');
		})
	})

})

/**
 * End of Main Functions and Events
*/



