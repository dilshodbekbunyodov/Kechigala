$('.slick-carousel2').slick({
    infinite: true,
    slidesToShow: 4, // Shows a three slides at a time
    slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
    arrows: true, // Adds arrows to sides of slider
    dots: false, // Adds the dots on the bottom
    autoplay: true,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 650,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});


$('.slick-carousel1').slick({
    infinite: true,
    slidesToShow: 3, // Shows a three slides at a time
    slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
    arrows: true, // Adds arrows to sides of slider
    dots: false, // Adds the dots on the bottom
    autoplay: true,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 650,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});


function showSection(section) {
    // Hide all sections
    $(".section").removeClass("active");

    // Show selected section
    $("#section-" + section).addClass("active");

    // Update active navbar item
    $(".navbar a").removeClass("active");
    $(".navbar a[href='#" + section + "']").addClass("active");
}

// Read section parameter from URL and display corresponding section
var section = getParameterByName("section");
if (section) {
    showSection(section);
} else {
    // If page reloaded or loaded for the first time, show the first section by default
    var firstSection = $(".section:first-child");
    var firstSectionId = firstSection.attr("id");
    showSection(firstSectionId.substring("section-".length));
}

// Add event listener for navbar links
$(".navbar a").on("click", function (event) {
    event.preventDefault();
    var section = $(this).attr("href").substring(1);
    showSection(section);

    // Add query parameter to URL
    history.pushState({}, document.title, "?section=" + section);
});

// Function to get query parameter by name
function getParameterByName(name) {
    var url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
    var results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}



// Add event listener for scrolling to top
$(".navbar a").on("click", function (event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});






//navbar


window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.navbar');


    if (window.pageYOffset > 90) {
        navbar.classList.add('fixed');
    } else {
        navbar.classList.remove('fixed');
    }


    if (window.innerWidth <= 550) { // check window width
        if (window.pageYOffset > 70) {
            navbar.classList.add('fixed');
        } else {
            navbar.classList.remove('fixed');
        }

    }

});




const navbarr = document.querySelector('.navbar');
const footer = document.querySelector('#offer');

function hideHeader() {
    navbarr.style.transform = 'translateY(-100%)';
}

function showHeader() {
    navbarr.style.transform = 'translateY(0)';
}

window.addEventListener('scroll', function () {
    if (window.innerWidth <= 900) { // check window width
        if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight - footer.offsetHeight + 0) {
            hideHeader();
        } else {
            showHeader();
        }
    }
});



