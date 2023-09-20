document.getElementById("genderToggle").addEventListener("change", function () {
	let genderLabel = document.getElementById("genderLabel");
	if (this.checked) {
		genderLabel.innerText = "Boys'";
	} else {
		genderLabel.innerText = "Men's";
	}
});

console.log(document.getElementById("heightFeet"));
console.log(document.getElementById("heightInches"));
function calculateSizeAndFitBasedOnSelection() {
	// const selection = document.getElementById("genderSelection").value;
	const selection = document.getElementById("genderToggle").checked
		? "boys"
		: "mens";
	console.log("Selection is:", selection);
	if (selection === "boys") {
		fetch("./assets/js/boys.json")
			.then((response) => response.json())
			.then((data) => {
				sizeData = data;
				calculateSizeAndFit();
			})
			.catch((error) => {
				console.error(
					"There was an error fetching the JSON data for boys:",
					error
				);
			});
		return; // This will stop the function here if selection is "boys"
	} else {
		console.log("Calculating for men...");
		fetch("./assets/js/mens.json")
			.then((response) => response.json())
			.then((data) => {
				sizeData = data;
				calculateCollarSize();
				calculateBMIFit();
			})
			.catch((error) => {
				console.error(
					"There was an error fetching the JSON data for men:",
					error
				);
			});
		formContainer.classList.add("hidden");
		loadingContainer.classList.remove("hidden");
		document.querySelector(".measurement-modal-submit").disabled = true;

		setTimeout(function () {
			populateTable(roundedCollarSize);

			loadingContainer.classList.add("hidden");
			resultContainer.classList.remove("hidden");
			document.querySelector(
				".measurement-modal-result"
			).textContent = `${roundedCollarSize} ${fitValue}`;
			let recommendationElement = document.querySelector(
				".measurement-modal-recommendation"
			);
			if (recommendationElement) {
				recommendationElement.textContent = recommendation;
			}
			document
				.querySelector(".measurement-modal-restart")
				.addEventListener("click", resetSizeMeasurementModal);
		}, 3000);
	}
}
document
	.querySelector(".measurement-modal-restart")
	.addEventListener("click", function () {
		const resultContainer = document.querySelector(
			".measurement-modal-result-container"
		);
		const formContainer = document.querySelector(
			".measurement-modal-form-container"
		);

		// Hide the result container
		resultContainer.classList.add("hidden");

		// Show the form container
		formContainer.classList.remove("hidden");

		// Optional: Reset the form fields
		const form = document.getElementById("shirtSizeForm");
		form.reset();
	});
