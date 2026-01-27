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
  

let dots = slides.length
for (let i = 0 ; i < dots ; i ++)
{
	let CreationDot = document.createElement("div")
	CreationDot.setAttribute("class", "dot")
	CreationDot.setAttribute("id", "dot" + i)
	let parentElement = document.querySelector(".dots")
	parentElement.appendChild(CreationDot)	
}

let numero = 0	
let selected = document.getElementById("dot" + numero)
selected.setAttribute("class", "dot_selected")


 
let arrowLeft = document.querySelector("#banner .arrow_left")
let arrowRight = document.querySelector("#banner .arrow_right")
arrowLeft.addEventListener("click", function changSlide() {
    numero -=1
	if (numero < 0 ) numero = slides.length - 1
	document.querySelector("#banner .banner-img").src = "./assets/images/slideshow/" + slides[numero].image
	document.querySelector("#banner p").innerHTML = slides[numero].tagLine


	for (let i = 0; i < dots; i++) {
		let selected = document.getElementById("dot" + i)
		selected.setAttribute("class", "dot")
}
	let selected = document.getElementById("dot" + numero)
	selected.setAttribute("class", "dot_selected")
})
arrowRight.addEventListener("click", function changSlide() {
    numero +=1
	if (numero > slides.length - 1 ) numero = 0
	document.querySelector("#banner .banner-img").src = "./assets/images/slideshow/" + slides[numero].image
	document.querySelector("#banner p").innerHTML = slides[numero].tagLine

	
	for (let i = 0; i < dots; i++) {
		let selected = document.getElementById("dot" + i)
		selected.setAttribute("class", "dot")
}
	let selected = document.getElementById("dot" + numero)
	selected.setAttribute("class", "dot_selected")
})

