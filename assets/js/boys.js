const heightDataBoys = {'2 years': [11.6, 33, 33.3, 33.8, 34.7, 35.7, 36.6, 37.5, 38.1, 38.5],
 '3 years': [16.5, 35.9, 36.3, 36.8, 37.8, 38.8, 39.9, 40.9, 41.5, 41.9],
 '4 years': [21.3, 38.3, 38.7, 39.3, 40.4, 41.6, 42.7, 43.8, 44.4, 44.8],
 '5 years': [26, 40.5, 41, 41.7, 42.9, 44.2, 45.4, 46.6, 47.3, 47.7],
 '6 years': [30.7, 42.8, 43.3, 44.1, 45.3, 46.7, 48.1, 49.3, 50.1, 50.6],
 '7 years': [35.4, 45.1, 45.6, 46.4, 47.7, 49.2, 50.6, 52, 52.8, 53.4],
 '8 years': [40.2, 47.2, 47.7, 48.5, 49.9, 51.5, 53.1, 54.5, 55.4, 56],
 '9 years': [44.9, 49, 49.5, 50.4, 51.9, 53.6, 55.3, 56.9, 57.8, 58.4],
 '10 years': [49.6, 50.6, 51.2, 52.2, 53.7, 55.5, 57.4, 59, 60, 60.7],
 '11 years': [54.3, 52.3, 53, 54, 55.7, 57.6, 59.5, 61.3, 62.3, 63],
 '12 years': [59.1, 54.5, 55.1, 56.2, 58, 60, 62.1, 63.9, 65.1, 65.8],
 '13 years': [63.8, 57, 57.8, 58.9, 60.9, 63, 65.1, 67, 68.1, 68.9],
 '14 years': [68.5, 59.6, 60.4, 61.7, 63.6, 65.8, 67.9, 69.7, 70.8, 71.4],
 '15 years': [73.2, 61.7, 62.5, 63.7, 65.6, 67.7, 69.7, 71.4, 72.4, 73.1],
 '16 years': [78, 63, 63.8, 64.9, 66.7, 68.7, 70.6, 72.3, 73.3, 74],
 '17 years': [82.7, 63.7, 64.4, 65.5, 67.3, 69.2, 71.1, 72.8, 73.8, 74.4],
 '18 years': [87.4, 64.1, 64.8, 65.8, 67.5, 69.5, 71.3, 73, 74, 74.7],
 '19 years': [92.1, 64.3, 64.9, 66, 67.7, 69.6, 71.5, 73.2, 74.2, 74.8],
 '20 years': [94.5, 64.3, 65, 66, 67.7, 69.6, 71.5, 73.2, 74.2, 74.9]
}

const weightDataBoys = {
	"2 years": [42.4, 44.3, 45, 46.2, 48.7, 50.9, 52.5, 53.4, 54.6],
	"3 years": [45.3, 46.1, 46.4, 48, 50, 52.5, 54.2, 55.3, 60.7],
	"4 years": [47.1, 48.2, 49.2, 49.9, 52.3, 54.8, 57.4, 59.7, 62.2],
	"5 years": [48.3, 49.1, 49.9, 51.5, 53.9, 56.6, 58.2, 61.6, 68.3],
	"6 years": [49, 50.2, 51, 52.1, 55.6, 58.9, 62.2, 68, 71.5],
	"7 years": [50.9, 51.7, 53, 54, 58, 63.3, 68.6, 72.5, 75.2],
	"8 years": [52.2, 53.5, 54.6, 56.3, 59.9, 67.6, 73.2, 77.4, 82.5],
	"9 years": [54.7, 55.4, 56.5, 58.6, 62.5, 72.5, 80.5, 85.3, 89],
	"10 years": [55.8, 57.1, 57.5, 60.7, 67.7, 77.1, 82.9, 88.8, 92.2],
	"11 years": [55.3, 58.1, 59.2, 61, 69.1, 84.8, 90.6, 94.2, 97.7],
	"12 years": [59.1, 59.4, 61.1, 63.2, 69.1, 79.3, 90.4, 93.6, 95.9],
	"13 years": [61.5, 63.2, 64.3, 66.9, 73.4, 93.5, 100, 105.6, null],
	"14 years": [64.3, 65.3, 66.4, 69.1, 74.2, 88.7, 101.2, 104.5, 107.5],
	"15 years": [64.1, 65.9, 68.3, 70.6, 79, 95, 106.5, 110.1, 121.9],
	"16 years": [66.7, 69.2, 70.6, 73.4, 78.4, 85.7, 92.3, 98.6, 107.9],
	"17 years": [66.4, 67.7, 70.1, 73.4, 79.8, 94.2, 104.8, 109.7, 122.5],
	"18 years": [67.2, 69.5, 71.1, 72.8, 79.6, 92.1, 101.8, 109.5, 121.8],
	"19 years": [69.7, 72.2, 75.4, 78.7, 85.5, 99.5, 103.9, 108.7, 120],
};

function calculateShirtSizeForBoys(
	heightFeet,
	heightInches,
	weight,
	age,
	waistSize
) {
	if (waistSize < 4) return 4;
	else if (waistSize > 22) return "Please check men's sizes.";
	else if (waistSize >= 4 && waistSize <= 10) return 1;
	else return Math.ceil(waistSize / 2) * 2; // Round up to the nearest even number
}

function calculateFitForBoys(heightFeet, heightInches, weight, age) {
	const heightCm = (heightFeet * 12 + heightInches) * 2.54;
	const ageKey = age + " years";

	// Check if the age-based percentiles exist
	if (!heightDataBoys[ageKey] || !weightDataBoys[ageKey]) {
		console.error(`No data available for age ${age}`);
		return {
			fit: "unknown",
			heightPercentile: "unknown",
			weightPercentile: "unknown",
		};
	}

	const percentilesHeight = heightDataBoys[ageKey];
	const percentilesWeight = weightDataBoys[ageKey];

	const heightPercentile = findPercentile(heightCm, percentilesHeight);
	const weightPercentile = findPercentile(weight, percentilesWeight);

	const averagePercentile = (heightPercentile + weightPercentile) / 2;

	let fit;
	if (averagePercentile <= 25) fit = "extra slim";
	else if (averagePercentile <= 50) fit = "slim";
	else if (averagePercentile <= 75) fit = "classic";
	else if (averagePercentile <= 85) fit = "traditional";
	else fit = "husky";

	return { fit, heightPercentile, weightPercentile };
}

function findPercentile(value, percentiles) {
	const breakpoints = [5, 10, 15, 25, 50, 75, 85, 90, 95];
	for (let i = 0; i < percentiles.length; i++) {
		if (value <= percentiles[i]) {
			return breakpoints[i];
		}
	}
	return 95;
}

function calculateSizeAndFit() {
	const heightFeet = Number(document.getElementById("heightFeet").value);
	const heightInches = Number(document.getElementById("heightInches").value);
	const weight = Number(document.getElementById("weight").value);
	const age = Number(document.getElementById("age").value);
	const waistSize = Number(document.getElementById("waist").value); // Changed 'waistSize' to 'waist'

	const size = calculateShirtSizeForBoys(
		heightFeet,
		heightInches,
		weight,
		age,
		waistSize
	);

	const { fit, heightPercentile, weightPercentile } = calculateFitForBoys(
		heightFeet,
		heightInches,
		weight,
		age
	);

	const resultContainer = document.querySelector(
		".measurement-modal-result-container"
	);
	const loadingContainer = document.querySelector(
		".measurement-modal-loading-container"
	);
	const formContainer = document.querySelector(
		".measurement-modal-form-container"
	);

	// Hide the form and show the loading container
	formContainer.classList.add("hidden");
	loadingContainer.classList.remove("hidden");

	// Simulate loading time (e.g., 2 seconds) and then show the results
	setTimeout(() => {
		loadingContainer.classList.add("hidden");
		resultContainer.classList.remove("hidden");

		const sizeOutput = document.querySelector(".measurement-modal-result");
		if (fit === "unknown") {
			sizeOutput.innerHTML = `No data available for age ${age}.`;
		} else {
			sizeOutput.innerHTML = `${size} ${fit}`;
		}

		// Log the percentiles
		console.log(`Height Percentile: ${heightPercentile}%`);
		console.log(`Weight Percentile: ${weightPercentile}%`);
	}, 2000); // 2 seconds
}
