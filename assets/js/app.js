function myFunction(){
  var openit =document.getElementById('collapse');
  openit.classList.toggle('active');
}
function myFunction() {
  var x = document.getElementById("collapse");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

$('.slider-parent').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll:1,
});