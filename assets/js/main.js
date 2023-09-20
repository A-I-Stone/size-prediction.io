// Toggle gender label based on the checkbox status
document.getElementById("genderToggle").addEventListener("change", function () {
	let genderLabel = document.getElementById("genderLabel");
	if (this.checked) {
		genderLabel.innerText = "Boys'";
	} else {
		genderLabel.innerText = "Men's";
	}
});

// Calculate size and fit based on gender selection
function calculateSizeAndFitBasedOnSelection() {
	const selection = document.getElementById("genderToggle").checked ? "boys" : "mens";

	if (selection === "boys") {
		// Fetch boys' size data
		fetch("./assets/js/boys.json")
			.then((response) => response.json())
			.then((data) => {
				sizeData = data;
				calculateSizeAndFit();
			})
			.catch((error) => {
				console.error("Error fetching boys' JSON data:", error);
			});
	} else {
		// Fetch men's size data
		fetch("./assets/js/mens.json")
			.then((response) => response.json())
			.then((data) => {
				sizeData = data;
				calculateCollarSize();
				calculateBMIFit();
			})
			.catch((error) => {
				console.error("Error fetching men's JSON data:", error);
			});
		
		// Show loading UI and hide form
		formContainer.classList.add("hidden");
		loadingContainer.classList.remove("hidden");
		document.querySelector(".measurement-modal-submit").disabled = true;

		// Display results after a delay
		setTimeout(function () {
			populateTable(roundedCollarSize);
			loadingContainer.classList.add("hidden");
			resultContainer.classList.remove("hidden");
			document.querySelector(".measurement-modal-result").textContent = `${roundedCollarSize} ${fitValue}`;

			let recommendationElement = document.querySelector(".measurement-modal-recommendation");
			if (recommendationElement) {
				recommendationElement.textContent = recommendation;
			}
		}, 3000);
	}
}

// Restart the measurement modal (hide results and show the form)
function resetMeasurementModal() {
    const resultContainer = document.querySelector(".measurement-modal-result-container");
    const formContainer = document.querySelector(".measurement-modal-form-container");

    // Hide result and loading sections, show the form section.
    resultContainer.classList.add("hidden");
    formContainer.classList.remove("hidden");

    // Reset form fields
    const form = document.getElementById("shirtSizeForm");
    form.reset();
}

// Attach the resetMeasurementModal function to the "x" and "Start again" buttons
document.querySelector(".measurement-modal-close").addEventListener("click", resetMeasurementModal);
document.querySelector(".measurement-modal-restart").addEventListener("click", resetMeasurementModal);
