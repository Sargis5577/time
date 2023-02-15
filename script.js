let contentTime = document.querySelector(".content-box-2");
let spanCircle = document.querySelector(".span-circle");
let spanCircle2 = document.querySelector(".two");
let spanCircle3 = document.querySelector(".three");
let spanCircle4 = document.querySelector(".four");

console.log(spanCircle3);
console.log(spanCircle4)


function time(){
	contentTime.innerHTML = ""
	let date = new Date();
	let hourse = date.getHours();
	let minutes = date.getMinutes();
	let second = date.getSeconds();
	if(hourse < 10){
		hourse = "0" + hourse
	}
	if(minutes < 10){
		minutes = "0" + minutes
	}
	if(second < 10){
		second = "0" + second
	}
	contentTime.innerHTML += hourse + " "  + minutes + " " + second;
	spanCircle.classList.toggle("span-circle-hide")
	spanCircle2.classList.toggle("two-hide")
	spanCircle3.classList.toggle("three-hide")
	spanCircle4.classList.toggle("four-hide")
	
};
setInterval(time,1000)

