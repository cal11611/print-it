const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
 

console.log(slides[0].tagLine)
let banner = document.getElementById("banner")
console.log(banner)
let banner2 = document.getElementsByClassName("banner-img")
console.log(banner2)
let banner3 = document.querySelector("#banner .dots")
console.log(banner3)
 

let dots = slides.length
for (let i = 0 ; i < dots ; i ++)
{
	let CreationDot = document.createElement("div")
	CreationDot.setAttribute("class", "dot")
	let parentElement = document.querySelector(".dots")
	parentElement.appendChild(CreationDot)
}

let numero = 0
let arrowLeft = document.querySelector("#banner .arrow_left")
let arrowRight = document.querySelector("#banner .arrow_right")

arrowLeft.addEventListener("click", function changSlide() {
    numero -=1
	if (numero < 0 ) numero = slides.length - 1
	document.querySelector("#banner .banner-img").src = "./assets/images/slideshow/" + slides[numero].image
})

arrowRight.addEventListener("click", function changSlide() {
    numero +=1
	if (numero > slides.length - 1 ) numero = 0
	document.querySelector("#banner .banner-img").src = "./assets/images/slideshow/" + slides[numero].image
})