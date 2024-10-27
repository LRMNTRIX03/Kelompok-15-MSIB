
const backend = [
    {
      "title": "Pengenalan Back-End",
      "image": "./Assets/pengback.png",
      "materials": 3,
      "rating": 4.6,
      "reviews": 6,
      "price": "Gratis"
    },
    {
      "title": "Pengenalan Node.js",
      "image": "./Assets/node.png",
      "materials": 4,
      "rating": 4.6,
      "reviews": 6,
      "price": "Gratis"
    },
    {
      "title": "Pengembangan PHP untuk Back-End",
      "image": "./Assets/php.png",
      "materials": 5,
      "rating": 4.6,
      "reviews": 6,
      "price": "Gratis"
    },
    {
      "title": "Pengenalan SQL",
      "image": "./Assets/pengsql.png",
      "materials": 6,
      "rating": 4.6,
      "reviews": 6,
      "price": "Gratis"
    },
    {
      "title": "Pengenalan MySQL",
      "image": "./Assets/mysql.png",
      "materials": 3,
      "rating": 4.6,
      "reviews": 6,
      "price": "Gratis"
    },
    {
      "title": "Manipulasi Data SQL (CRUD)",
      "image": "./Assets/crud.png",
      "materials": 3,
      "rating": 4.6,
      "reviews": 6,
      "price": "Gratis"
    }
  ]

// Animasi Card
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {

        
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateZ(100px) scale(1.05)';
            card.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.3)';
            card.style.transition = 'transform 0.5s, box-shadow 0.5s';
        });
        
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateZ(0px) scale(1)';
            card.style.boxShadow = 'none';
            card.style.transition = 'transform 0.5s, box-shadow 0.5s';
        });
    });
});

// Pencarian 
$(document).ready(function() {
    $("#search-class").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $(".card").filter(function() {
            $(this).toggle($(this).find(".card-title").text().toLowerCase().indexOf(value) > -1);
        });

    });

    const courseContainer = $('.row.mt-4');

  $.each(backend, function(index, course) {
    const courseCard = `
      <div class="col-md-4 mb-3">
        <div class="card">
          <img src="${course.image}" class="card-img-top" alt="kategori Kelas">
          <div class="card-body">
            <h5 class="card-title">${course.title}</h5>
            <p class="card-text"><i class="fas fa-file-alt text-primary"></i> ${course.materials} Materi</p>
            <p class="card-text"><i class="fas fa-star text-warning"></i> ${course.rating} (${course.reviews} Ulasan)</p>
            <p class="card-text text-danger font-weight-bold">${course.price}</p>
          </div>
          <div class="card-footer d-flex justify-content-end">
            <i class="far fa-heart text-muted"></i>
          </div>
        </div>
      </div>
    `;

    courseContainer.append(courseCard);
  });
});