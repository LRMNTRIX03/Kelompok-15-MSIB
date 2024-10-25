$(document).ready(function () {
  // animasi card hover
  $(".card").hover(
    function () {
      $(this).css({
        transform: "translateZ(100px) scale(1.05)",
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
        transition: "transform 0.5s, box-shadow 0.5s",
      });
    },
    function () {
      $(this).css({
        transform: "translateZ(0px) scale(1)",
        boxShadow: "none",
        transition: "transform 0.5s, box-shadow 0.5s",
      });
    }
  );

  // Toggle animasi card
  $(".card").on("click", function () {
    const desc = $(this).find(".card-desc");
    const arrow = $(this).find(".card-arrow");

    // Toggle the clicked card's description and arrow
    if (!desc.is(":visible")) {
      // Close other cards
      $(".card-desc").slideUp();
      $(".card-arrow").css("transform", "rotate(0deg)");

      // Open the clicked card
      desc.stop(true, true).slideDown();
      arrow.css("transform", "rotate(180deg)");
    } else {
      // If clicked card is already open, close it
      desc.stop(true, true).slideUp();
      arrow.css("transform", "rotate(0deg)");
    }
  });

  // hero animasi
  $("#hero-img").hover(
    function () {
      $(this).css({
        transform: "scale(1.1)",
        transition: "0.5s",
      });
    },
    function () {
      $(this).css({
        transform: "scale(1)",
        transition: "0.5s",
      });
    }
  );

  // scroll ke atas otomatis saat mencapai ukuran tertentu
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $("#scrollTopBtn").fadeIn();
    } else {
      $("#scrollTopBtn").fadeOut();
    }
  });

  $("#scrollTopBtn").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "smooth");
    return false;
  });

  // hilangkan nav saat scroll bawah
  let prevScrollPos = $(window).scrollTop();
  const navbar = $(".navbar");

  $(window).on("scroll", function () {
    const currentScrollPos = $(window).scrollTop();

    if (prevScrollPos > currentScrollPos) {
      navbar.css("top", "0").fadeIn();
    } else {
      navbar.css("top", "0px").fadeOut();
    }

    prevScrollPos = currentScrollPos;
  });

  // Carousel auto-play settings
  $("#carouselExampleCaptions").carousel({
    interval: 3000, // geser setiap n detik
    ride: "carousel", //efek smooth
  });

  $("#btn-selengkapnya").click(function () {
    window.location.href = "materi.html";
  });
  $("#card-materi").click(function () {
    window.location.href = "materi.html";
  });

  $(".fe").dblclick(function () {
    window.location.href = "kategori_front.html";
  });

  $(".be").dblclick(function () {
    window.location.href = "kategori_back.html";
  });

  //marqui
  // let duration = 15000; // 15 seconds
  // $(".marquee-content").css("animation-duration", duration + "ms");

  // // Dynamically adjusting animation speed
  // const marquee = document.querySelector(".marquee");
  // marquee.addEventListener("mouseleave", () => {
  //   document.querySelector(".marquee-content").style.animationPlayState =
  //     "running";
  // });
});
const marquee = document.querySelector(".marquee");
const marqueeContent = document.querySelector(".marquee-content");
let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;

function handleMouseMove(e) {
  if (!isDragging) return;
  const currentPosition = e.clientX;
  const diff = currentPosition - startPos;
  currentTranslate = prevTranslate + diff;
  marqueeContent.style.transform = `translateX(${currentTranslate}px)`;
}

marquee.addEventListener("mousedown", (e) => {
  isDragging = true;
  startPos = e.clientX;
  marquee.classList.add("grabbing");
});

window.addEventListener("mousemove", handleMouseMove);

window.addEventListener("mouseup", () => {
  isDragging = false;
  prevTranslate = currentTranslate;
  marquee.classList.remove("grabbing");
});
