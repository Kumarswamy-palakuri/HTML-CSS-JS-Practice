document.getElementById("btn").addEventListener("click", function() {
	let height_val = document.getElementById('height').value;
	let weight_val = document.getElementById('weight').value;
	let bmi = weight_val / (height_val / 100 * height_val / 100);
	let bmio = (bmi.toFixed(2));

	document.getElementById("result").innerHTML = "Your BMI is " + bmio;
});