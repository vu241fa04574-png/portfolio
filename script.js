
function toggleMenu() {

    const menu = document.querySelector(".nav-links");

    menu.classList.toggle("active");

}

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        document
            .querySelector(".nav-links")
            .classList.remove("active");

    });

});


function showProjectMessage() {

    alert(
        "Smart Travel and Booking Platform\n\n" +
        "Built using HTML, CSS and JavaScript."
    );

}



const contactForm =
    document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("email").value;

    const message =
        document.getElementById("message").value;


    if (
        name.trim() === "" ||
        email.trim() === "" ||
        message.trim() === ""
    ) {

        alert("Please fill in all the fields.");

        return;
    }


    alert(
        "Thank you, " +
        name +
        "! Your message has been received."
    );


    contactForm.reset();

});


window.addEventListener("scroll", function() {

    const navbar =
        document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 3px 15px rgba(0,0,0,0.15)";

    } else {

        navbar.style.boxShadow =
            "0 2px 10px rgba(0,0,0,0.08)";

    }

});