
const allSections = document.querySelectorAll("section");
const submitBtn = document.querySelector("button")
const nameInput = document.querySelector("#nameInput")
const emailInput = document.querySelector("#emailInput")
const commentInput = document.querySelector("#commentInput")

  // this Function will add a li for each section
allSections.forEach((section) => {
   const navItem = document.createElement("li");
   navItem.innerHTML = `<a href="#${section.id}" class="menu__link">${section.dataset.nav}</a>`;
   document.querySelector("#navbar__list").appendChild(navItem);
})
      // creates the comments link
 const commentsLink = document.createElement("li")
 commentsLink.innerHTML = `<a href="#comments-section" class="menu__link">Comments</a>`
 document.querySelector("#navbar__list").appendChild(commentsLink)
 

  //this function when DOM is Fully Loaded will add an event listener to all the anchor tags
document.addEventListener("DOMContentLoaded" , () => {
  const links = document.querySelectorAll("a")
  // this function will add an event listener to all the anchor tags
  links.forEach(link => {
    //this function for smooth scrolling
    link.addEventListener("click" , (e) => {
      e.preventDefault(); // prevenging the default behavior of the anchor
      document.querySelector(link.getAttribute("href")).scrollIntoView({behavior: "smooth"});
    })
  })
}) 

// this Function will show the section when the section is in the view port
document.addEventListener("scroll" ,() => {
  const viewPortHeight = window.innerHeight;

  allSections.forEach(section => {
    const sectionPositionTop = section.getBoundingClientRect().top;
    // checking if the section is in the view port and adding the classes
    if (sectionPositionTop >= 0 && sectionPositionTop < viewPortHeight) {
        section.classList.add("show");
        section.classList.add("active");
    } else {
        section.classList.remove("show");
        section.classList.remove("active");  
    }
});
})


submitBtn.addEventListener("click" , (e) => {
 e.preventDefault(); // Prevent the form submission
 let isValid = true;
//  checking if the inputs are not empty
  if(nameInput.value == "" || commentInput.value == "" ){
    alert("please fill all the inputs")
    isValid = false;
  }
    // checking if the email is not empty
  if (emailInput.value === "") {
    alert("Please enter an email address");
    isValid = false;
    // checking if the email is valid and contains @ and not at the first index
} else if (!emailInput.value.includes('@') || emailInput.value.indexOf('@') === 0) {
    alert("Please enter a valid email");
    isValid = false;
} else {
   isValid = true;
}

if(isValid){
  // Create a new comment div
  const newDiv = document.createElement("div");
  newDiv.className = "comment";
  newDiv.innerHTML = `<h2>${nameInput.value}</h2>
  <h3>${emailInput.value}</h3>
  <p>${commentInput.value}</p>`
  // Append the new comment to the comment section
  document.querySelector(".comments-container").appendChild(newDiv)

// Clear the form inputs
  nameInput.value = "";
  emailInput.value = "";
  commentInput.value = "";
}

})