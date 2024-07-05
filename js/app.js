
const allSections = document.querySelectorAll("section");
const submitBtn = document.querySelector("button")
const nameInput = document.querySelector("#nameInput")
const emailInput = document.querySelector("#emailInput")
const commentInput = document.querySelector("#commentInput")

allSections.forEach((section) => {
   const navItem = document.createElement("li");
   navItem.innerHTML = `<a href="#${section.id}" class="menu__link">${section.dataset.nav}</a>`;
   document.querySelector("#navbar__list").appendChild(navItem);
})
 const commentsLink = document.createElement("li")
 commentsLink.innerHTML = `<a href="#comments-section" class="menu__link">Comments</a>`
 document.querySelector("#navbar__list").appendChild(commentsLink)
  //* smooth scroling 
document.addEventListener("DOMContentLoaded" , () => {
  const links = document.querySelectorAll("a")
  links.forEach(link => {
    link.addEventListener("click" , (e) => {
      e.preventDefault();
      document.querySelector(link.getAttribute("href")).scrollIntoView({behavior: "smooth"});
    })
  })
}) 


document.addEventListener("scroll" ,() => {
  const viewPortHeight = window.innerHeight;

  allSections.forEach(section => {
    const sectionPositionTop = section.getBoundingClientRect().top;
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
 e.preventDefault();
 let isValid = true;
  if(nameInput.value == "" || commentInput.value == "" ){
    alert("please fill all the inputs")
    isValid = false;
  }

  if (emailInput.value === "") {
    alert("Please enter an email address");
    isValid = false;
} else if (!emailInput.value.includes('@') || emailInput.value.indexOf('@') === 0) {
    alert("Please enter a valid email");
    isValid = false;
} else {
   isValid = true;
}

if(isValid){
  const newDiv = document.createElement("div");
  newDiv.className = "comment";
  newDiv.innerHTML = `<h2>${nameInput.value}</h2>
  <h3>${emailInput.value}</h3>
  <p>${commentInput.value}</p>`
  document.querySelector(".comments-container").appendChild(newDiv)


  nameInput.value = "";
  emailInput.value = "";
  commentInput.value = "";
}

})