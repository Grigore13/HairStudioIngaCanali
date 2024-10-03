// NavBar code
const nav = document.querySelector(".navMenu");
const toggle = document.querySelector(".navToggle");
toggle.onclick = () =>{
    nav.classList.toggle("showNav");
}

// Here is code for remove NavBar
const navLink = document.querySelectorAll(".navLink");

function linkAction(){
    const navMenu = document.querySelector(".navMenu");
    navMenu.classList.remove("showNav");
}
navLink.forEach(n => n.addEventListener("click", linkAction));

// Change Active color on click

const linkColor = document.querySelectorAll(".navLink");
function colorLink(){
    if(linkColor){
        linkColor.forEach(n => n.classList.remove("active"));
                this.classList.add("active");
    }
}
linkColor.forEach(n => n.addEventListener("click", colorLink));

// Change background color on scroll

window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("scroll", window.scrollY > 0);
});

//Cookies
window.onload = function() {
    // Verication cookies accept or decline requests
    if (!localStorage.getItem('cookiesAccepted')) {
        document.getElementById('cookieBanner').style.display = 'block';
    }
    
    // button "Auswahl akzeptieren"
    document.getElementById('acceptSelectedCookies').onclick = function() {
        var functionalCookies = document.getElementById('functionalCookies').checked;
        var analyticsCookies = document.getElementById('analyticsCookies').checked;
        var marketingCookies = document.getElementById('marketingCookies').checked;

        // Save in localStorage
        var cookiePreferences = {
            functional: functionalCookies,
            analytics: analyticsCookies,
            marketing: marketingCookies
        };

        localStorage.setItem('cookiePreferences', JSON.stringify(cookiePreferences));
        localStorage.setItem('cookiesAccepted', 'true');

        // display none Banner
        document.getElementById('cookieBanner').style.display = 'none';
    };

    // button "Ablehnen"
    document.getElementById('declineCookies').onclick = function() {
        localStorage.setItem('cookiesAccepted', 'false');
        document.getElementById('cookieBanner').style.display = 'none';
    };
};
