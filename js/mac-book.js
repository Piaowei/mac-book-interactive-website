function memoryCost(isprice) {
	if (isprice) {
		// const memoryDisplayCost = parseInt(document.getElementById("8gb-amount").innerText);
		document.getElementById("memory-amount").innerText = parseInt(0);

	}
	else {
		document.getElementById("memory-amount").innerText = parseInt(180);

	}

}

// 
function storgeCost(isStorge, anotherStorge) {
	if (isStorge) {
		document.getElementById("storge-amount").innerText = parseInt(180);
	}
	else if (isStorge == false) {
		document.getElementById("storge-amount").innerText = parseInt(100);
	}

	if (isStorge == false && anotherStorge == true) {
		document.getElementById("storge-amount").innerText = parseInt(0);
	}
}

function deleveryCost(delevered) {
	if (delevered) {
		document.getElementById("delevery-amount").innerText = parseInt(0);
	}
	else {
		document.getElementById("delevery-amount").innerText = parseInt(20);
	}
}

function totalPrice() {
	const memoryCost = parseInt(document.getElementById("memory-amount").innerText);
	const storgeCost = parseInt(document.getElementById("storge-amount").innerText);
	const deleveryCost = parseInt(document.getElementById("delevery-amount").innerText);
	let totalPrice = parseInt(1299 + memoryCost + storgeCost + deleveryCost);
	document.getElementById("total-amount").innerText = totalPrice;
	document.getElementById("last-amount").innerText = totalPrice;


}

function cuponPrice() {
	document.getElementById("cupon-input").Value;
	// if (document.getElementById("cupon-input").Value == "stevekaku") {
	// 	const cupon = parseFloat(document.getElementById("last-amount").innerText) / 20;
	document.getElementById("cupon-input").Value = "";
	// }
}


// even handler memory 8gb
// ------------------------

document.getElementById("8gb-memory").addEventListener("click", function () {
	memoryCost(true);
	totalPrice();



})
// even handler memory 16gb

document.getElementById("16gb-memory").addEventListener("click", function () {
	memoryCost(false);
	totalPrice();


})

// -----------
// even handler storge 256gb SSD
document.getElementById("256gb-storge-btn").addEventListener("click", function () {
	storgeCost(false, true);
	totalPrice();
})


// even handler storge 512gb SSD
document.getElementById("512gb-storge-btn").addEventListener("click", function () {
	storgeCost(false);
	totalPrice();
})
// even handler storge 1TB SSD
document.getElementById("1tb-storge-btn").addEventListener("click", function () {
	storgeCost(true);
	totalPrice();

})

// even handler Delevery

document.getElementById("free-delevery-btn").addEventListener("click", function () {
	deleveryCost(true);
	totalPrice();
})
document.getElementById("costly-delevery-btn").addEventListener("click", function () {
	deleveryCost(false);
	totalPrice();
})

document.getElementById("cupon-btn").addEventListener("click", function (event) {
	console.log(document.getElementById("cupon-btn"));
	cuponPrice();
})