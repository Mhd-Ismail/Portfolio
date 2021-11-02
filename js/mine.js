
$(document).ready(function () {
    // navbar scroll function to change navbar style
    $(window).scroll(function () {
        let topOffset = $(window).scrollTop();
        if (topOffset > 50) {
            $(".Navbarcolor").css({ "background-color": "white", "transition": "all 0.8s" })
            $(".nav-Link").css({ "color": "black" })
            $(".navbar-toggler").css({ "background-color": "black" })
            $(".navbar-brand").css({ "color": "black" })
        } else {
            $(".Navbarcolor").css({ "background-color": "transparent" })
            $(".nav-Link").css({ "color": "white" })
            $(".navbar-toggler").css({ "background-color": "black" })
            $(".navbar-brand").css({ "color": "white" })
        }
    })

    //    Togglebutton background & navbar background
    $(".navbar-toggler").click(function () {
        if ($("#nav").attr("class").indexOf("bg-white") == -1) {
            $(".navbar-toggler").css({ "background-color": "black" })
            $("#nav").addClass("bg-white");
            $("#nav a").addClass("text-dark");
        } else {
            $(".navbar-toggler").css({ "background-color": "black" })
            $("#nav").removeClass("bg-white");
            $("#nav a").removeClass("text-dark");
        }

    });

    // link the sections with navbar links
    $(".nav-link").click(function () {
        let currentLink = $(this).attr("href");
        let currentOffset = $(currentLink).offset().top;
        $("body,html").animate({ scrollTop: currentOffset }, 1000);
    })

    // arrowdown navigates to about
    $("#arrowDown").click(function () {
        let aboutOffset = $("#about").offset().top;
        let navOuterHeight = $("#navBar").outerHeight(true);
        $("body,html").animate({ scrollTop: (aboutOffset - navOuterHeight) }, 1000);
    })




});



// modal section 
const modalbtn = document.querySelector('.resumeBtn');
const modalbg = document.querySelector('.modal-bg');
var closebtn = document.querySelector('.closebtn');

modalbtn.addEventListener('click', function () {
    modalbg.classList.add('active');
});
closebtn.addEventListener('click', function () {
    modalbg.classList.remove('active');
});
