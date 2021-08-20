function memoryCost(isprice) {
	if (isprice) {

		// const memoryDisplayCost = parseInt(document.getElementById("8gb-amount").innerText);
		document.getElementById("memory-amount").innerText = parseInt(0);
	}
	else {
		document.getElementById("memory-amount").innerText = parseInt(180);
	}

	// let a = 0;
	// for (i = 0; i >= a; i++) {
	// 	a = a + 1;
	document.getElementById("total-amount").innerText = totalPrice();
	// }



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
	let totalPrice = parseInt(memoryCost + storgeCost + deleveryCost);
	return totalPrice;
	// document.getElementById("total-amount").innerText = totalPrice;
}


// even handler memory 8gb

document.getElementById("8gb-memory").addEventListener("click", function () {
	memoryCost(true);
})
// even handler memory 16gb

document.getElementById("16gb-memory").addEventListener("click", function () {
	memoryCost(false);
})

// -----------
// even handler storge 256gb SSD
document.getElementById("256gb-storge-btn").addEventListener("click", function () {
	storgeCost(false, true);
})


// even handler storge 512gb SSD
document.getElementById("512gb-storge-btn").addEventListener("click", function () {
	storgeCost(false);
})
// even handler storge 1TB SSD
document.getElementById("1tb-storge-btn").addEventListener("click", function () {
	storgeCost(true);

})

// even handler Delevery

document.getElementById("free-delevery-btn").addEventListener("click", function () {
	deleveryCost(true);
})
document.getElementById("costly-delevery-btn").addEventListener("click", function () {
	deleveryCost(false);
})
