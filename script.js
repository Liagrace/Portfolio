


$(document).ready(function () {
  $('.responsive').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    autoPlay: true,
    arrows: true,
    centerMode: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]

  });
});

/* Form Validation */

function validation ( ){
  const name = document.getElementById("name").value;
  const subject = document.getElementById("subject").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const error_message = document.getElementById("error_message");
  let text;

  error_message.style.padding = "10px";

  if (name.length < 5) {
    text = "Please Enter Valid Name";
    error_message.innerHTML = text;
    return false;
  }

  if (subject.length < 10) {
    text = "Please Enter Correct Subject";
    error_message.innerHTML = text;
    return false;
  }

  if (isNaN(phone) || phone.length != 10) {
    text = "Please Enter Valid Phone Number";
    error_message.innerHTML = text;
    return false;
  }

  if (email.indexOf("@") == -1 || email.length < 6) {
    text = "Please Enter Valid Email";
    error_message.innerHTML = text;
    return false;
  }

  if(message.length <= 20){
    text = "Please Enter More Than 20 Characters";
    error_message.innerHTML = text;
    return false;
  }
  alert("Form Submitted Successfully!")
  return true;
}
