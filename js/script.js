// Collapsable Navigation

$(document).ready(function() {
  $(".toggle-nav").click(function(e) {
    $(this).toggleClass("active");
    $(".menu ul").toggleClass("active");

    e.preventDefault();
  });
});

// Image Slideshow

var slideIndex = 0;
showSlides(slideIndex);

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 5000);
}

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

// Quick Overview
$(document).ready(function() {
  $(document)
    .on("mouseenter", ".items", function() {
      $(this)
        .find(":button")
        .show();
    })
    .on("mouseleave", ".items", function() {
      $(this)
        .find(":button")
        .hide();
    });
});

// Get the modal
var modal1 = document.getElementById("modalOverview1");
var modal2 = document.getElementById("modalOverview2");
var modal3 = document.getElementById("modalOverview3");
var modal4 = document.getElementById("modalOverview4");

// Get the button that opens the modal
var btn1 = document.getElementById("quickOverview1");
var btn2 = document.getElementById("quickOverview2");
var btn3 = document.getElementById("quickOverview3");
var btn4 = document.getElementById("quickOverview4");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close1")[0];
var span2 = document.getElementsByClassName("close2")[0];
var span3 = document.getElementsByClassName("close3")[0];
var span4 = document.getElementsByClassName("close4")[0];

// When the user clicks the button, open the modal
btn1.onclick = function() {
  modal1.style.display = "block";
};

btn2.onclick = function() {
  modal2.style.display = "block";
};

btn3.onclick = function() {
  modal3.style.display = "block";
};

btn4.onclick = function() {
  modal4.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
};

span2.onclick = function() {
  modal2.style.display = "none";
};

span3.onclick = function() {
  modal3.style.display = "none";
};

span4.onclick = function() {
  modal4.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  } else if (event.target == modal2) {
    modal2.style.display = "none";
  } else if (event.taget == modal3) {
    modal3.style.display = "none";
  } else if (event.target == modal4) {
    modal4.style.display = "none";
  }
};
