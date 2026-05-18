
//Navbar section here

window.addEventListener('scroll', function () {
    const navbar = document.getElementById('header');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else
        navbar.classList.remove('scrolled');
});


//Menu section here
function openMenu(evt, menuName) {
    var i, tabcontent, tablinks;

    // 1. Hide all tab content
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tabcontent[i].classList.remove("active");
    }

    // 2. Remove "active" class from all buttons
    tablinks = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // 3. Show the current tab, and add an "active" class to the button
    var targetTab = document.getElementById(menuName);
    if (targetTab) {
        targetTab.style.display = "block";
        // Timeout allows the display:block to register before animation starts
        setTimeout(function () {
            targetTab.classList.add("active");
        }, 10);
    }

    evt.currentTarget.classList.add("active");
}

//read more button
document.getElementById('about-toggle-btn').addEventListener('click', function () {
    const moreText = document.getElementById('about-more-text');
    const toggleBtn = document.getElementById('about-toggle-btn');

    // Toggle the class on the hidden paragraph
    moreText.classList.toggle('expanded');

    // Swap the button label depending on state
    if (moreText.classList.contains('expanded')) {
        toggleBtn.textContent = 'Read Less';
    } else {
        toggleBtn.textContent = 'Read More';
    }
}); function checkAboutTextOverflow() {
    const paragraph = document.getElementById('about-paragraph');
    const toggleBtn = document.getElementById('about-toggle-btn');

    if (paragraph.scrollHeight > paragraph.clientHeight) {
        toggleBtn.style.display = 'inline-block'; 
    } else {
        toggleBtn.style.display = 'none'; 
    }
}

// Run the check as soon as the page loads
window.addEventListener('DOMContentLoaded', checkAboutTextOverflow);
// Optional: Run on window resize to ensure responsive accuracy
window.addEventListener('resize', checkAboutTextOverflow);

// Toggle Action
document.getElementById('about-toggle-btn').addEventListener('click', function () {
    const paragraph = document.getElementById('about-paragraph');
    const toggleBtn = document.getElementById('about-toggle-btn');

    paragraph.classList.toggle('expanded');

    if (paragraph.classList.contains('expanded')) {
        toggleBtn.textContent = 'Read Less';
    } else {
        toggleBtn.textContent = 'Read More';
    }
});



//Reservation section  here
const bookingForm = document.getElementById('booking-form');
if (bookingForm) {
    bookingForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Collect data
        const formData = {
            name: document.getElementById('name').value,
            date: document.getElementById('date').value,
            guests: document.getElementById('guests').value
        };

        // Log for debugging
        console.log("Reservation Received:", formData);

        // Update UI with Success Message
        const container = document.querySelector('.reservation-container');
        container.innerHTML = `
            <div class="text-center py-5 animate__animated animate__fadeIn">
                <h2 style="color: #27ae60;">✔ Reservation Confirmed</h2>
                <p class="lead">Thank you, <strong>${formData.name}</strong>!</p>
                <p>We've reserved a table for ${formData.guests} guests on ${formData.date}.</p>
                <button onclick="location.reload()" class="btn btn-outline-dark mt-3">Book Another Table</button>
            </div>
        `;
    });
}






//back to top
window.onscroll = function () {
    const btn = document.getElementById("back-to-up");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btn.classList.remove("d-none");
    } else {
        btn.classList.add("d-none");
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}











