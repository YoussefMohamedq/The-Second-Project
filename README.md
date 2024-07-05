# Task 1


i used **forEach()** to loop through All **sections** and for every section creates a new **< li >** and stores it in variable called **newItem**  and it's __innerHtml__  is a anchor tag that contains the 
__section.id__ in __href__ attribute to  ensures  that when the link clicked the window  scrolls to this __section__ with the __specific iD__  and for the __anchor Content__ i used the __section.dataset.nav__ to receive the stored data in the html to be its content at the 




# Task 2

 I added an event listener for the __DOMContentLoaded__ event to ensure that the DOM is fully loaded before attaching click event listeners to all anchor tags i collected all __anchor tags__  by __querySelctorAll__ and i also used __forEach()__ to loop through all links and for every link it add an __EventListener__ that works on __Click__ and when the link __Clicked__ ite prevents the __anchor Default behaviour__ and i used __querySelctor__ to select the __section__ from the __anchor -href-__ attribute and i used __scrollIntoView()__ function to scroll to the section with a smooth effect 

 
 # Task 3

 while i was searching i found __IntersectionObserver Api__ that runs  if a an element is visable to the user but i decided to not use it because i didn't know if can use it in the project instead of  __getBoundingClientRect()__  so i used it

i used an __EventListener__ on the __Scroll__ on the __document__ and i stored the __window.innerHeight__ in a var called __viewPortHeight__ window.innerHeight returns  height of the device's viewport in pixels.  i used __forEach()__ to loop through all the __sections__ and stored the  __section.getBoundingClientRect().top__ in a var called __sectionPositionTop__ and i used if statmens to  ensure that __sectionPositionTop__  is bigger than or equals 0 to be visable only in the view Port becasue __sectionPositionTop__  if it have negative value that means it not in the view port anymore and the second statment to ensure that the section will appear if  __sectionPositionTop__ is smaller than __viewPortHeight__ to ensure that the section will appears only in the view height of the user and if this __Two Statments__ are true will add a class __"show"__ and __"active"__ to the section and remove both if false. 



# Task 4 

i used __EventListener__ on the __submit button__  the first thing I did was call __preventDefault()__ to prevent the __default behavior__ of the submit button, which is to refresh the page after submitting the form. i used simple validation with if statments on __nameInput__ and __CommentTextbox__
to detect if both are not empty.  i also used if statment to validate the email __first statment__ that detects if the __Email Input__ is not empty __second statment__ to check it containes @ or not and not at the first Index after this i created a new div with __document.createElement("div")__ and stored it in a var called __newDiv__ after this i edited the innerHtml to show __the name and email and the comment__ but i found a problem in my code when i click the button without filling the __inputs__ the div creates so i made a var called __isValid__ has a __true__ value and the statments if validate right way that will returns __false__ value and i make the div only creates if the __isValid__ is __true__



# the skills required to complete the project

javaScript

Searching