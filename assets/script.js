const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"<p>Impressions tous formats <span>en boutique et en ligne</span></p>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"<p>Tirages haute définition grand format <span>pour vos bureaux et events</span></p>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"<p>Grand choix de couleurs <span>de CMJN aux pantones</span></p>"
	},
	{
		"image":"slide4.png",
		"tagLine":"<p>Autocollants <span>avec découpe laser sur mesure</span></p>"
	}
]


let slideIndex = 0;

function showSlides() {
	const currentSlide = slides[slideIndex];

	var imgElement = document.querySelector('#banner .banner-img');
	var pElement = document.querySelector('.tagLine');

	imgElement.src = `./assets/images/slideshow/${currentSlide.image}`;
	pElement.innerHTML = currentSlide.tagLine
   


  // Supprimer la classe 'dot_selected' de tous les dots
	for (let dot of dots) {
		dot.classList.remove('dot_selected');
	}
 
	// Ajouter la classe 'dot_selected' au dot correspondant à l'image actuelle
	dots[slideIndex].classList.add('dot_selected');
}

function changeSlides(n) {
  slideIndex += n;

  if (slideIndex >= slides.length) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }

  showSlides();
 
}

document.querySelector(".arrow_left").addEventListener("click", () => changeSlides(-1));
document.querySelector(".arrow_right").addEventListener("click", () => changeSlides(+1));



// ont ajoute des dot en fonction du nombre de la slides.lenght
let dotsContainer = document.querySelector('.dots');
dotsContainer.innerHTML = "";
for (i = 0; i < slides.length; i++) {
	let newDot = document.createElement("span");
	newDot.className = "dot";
	dotsContainer.appendChild(newDot);
}




let dots = document.querySelectorAll('.dot');
 
for (let i = 0; i < dots.length; i++) {
	dots[i].addEventListener("click", function () {
		changeSlides(i - slideIndex);
	});
}

showSlides();

