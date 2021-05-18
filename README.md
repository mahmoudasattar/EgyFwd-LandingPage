# EgyFwd-LandingPage
Landing Page Project of Udacity EgyFWD professional Track

Hello Gents,

This is Mahmoud Abdelsattar, i hope this File shows the effort and descripes briefly the criteria of my work.

Procedures:
- First of all i started by downloading the default files from GitHub,
- I started by adding a forth Section to my HTML file and updating its classes and heading
- after that i started updating the JS code
  - NAV LIST CREATION:
    - created the List items using a for loop, but it is dynamic as as much as i add sections the lists are added
    - linked the list items text to the headers of the sections so that whatever the header is, it copies it.
    - made sure to append the list items to a fragment for once instead of looping the repainting and structuring
    - Changed some CSS so that the navigation panel looks a bit better and more professional
    - i also made the list items to scroll to the section when clicked, through calling the headers Parent elemenets
  - ACTIVE SECTIONS HIGHLIGHTINg:
    - i created an event listener that checks the position of the section relative to the top of the page, and the one near the 
       will update its class list to be active, and remove this class when away from Top
  - NAV LIST ACTIVE:
    - after that i linked the class of the navigation list item to the class of the section itself, that means whenever the 
      section has an active class it is directly updated in the list item too, and vice versa.
  - SCROLL TO THE TOP BUTTON:
    - i created a button with display:none CSS code, that will only show up when wee scroll 200px from the top
    - also added an eventlistener to it that Scroll to (0,0) once clicked
    - added some CSS styling to it.
  - COLLAPSIBLE SECTIONS:
    - last but not least i have added Event listener to the Sections that add a class with display:none to all Paragraphes when clicked
    - also when sections are clicked it's min-Height changes to 30vh from 80vh.


     Thanks very much for your efforts.
