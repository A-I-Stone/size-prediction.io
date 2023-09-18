// const sizeData = {};
let currentWaistSize;

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
	'2 years': [29.5, 24.3, 24.9, 25.8, 27.5, 29.6, 31.9, 34.2, 35.7],
 '3 years': [42, 27.5, 28.2, 29.2, 31.2, 33.6, 36.4, 39.4, 41.3],
 '4 years': [54, 30.9, 31.6, 32.9, 35.2, 38.1, 41.6, 45.4, 47.9],
 '5 years': [66, 34.4, 35.3, 36.7, 39.5, 43.1, 47.4, 52.0, 55.3],
 '6 years': [78, 38.1, 39.1, 40.8, 44.0, 48.2, 53.4, 59.2, 63.4],
 '7 years': [90, 42.1, 43.2, 45.1, 48.7, 53.6, 59.8, 67.1, 72.4],
 '8 years': [102, 46.3, 47.6, 49.7, 53.9, 59.7, 67.1, 76.0, 82.8],
 '9 years': [114, 50.8, 52.3, 54.8, 59.7, 66.6, 75.5, 86.3, 94.7],
 '10 years': [126, 55.7, 57.5, 60.5, 66.5, 74.7, 85.4, 98.2, 108.1],
 '11 years': [138, 61.4, 63.6, 67.2, 74.3, 84.1, 96.6, 111.5, 122.6],
 '12 years': [150, 68.4, 70.9, 75.2, 83.5, 94.8, 109.1, 125.5, 137.6],
 '13 years': [162, 76.7, 79.7, 84.5, 93.9, 106.5, 122.1, 139.8, 152.4],
 '14 years': [174, 86.2, 89.4, 94.7, 104.8, 118.3, 134.9, 153.4, 166.6],
 '15 years': [186, 95.9, 99.3, 104.8, 115.3, 129.4, 146.6, 165.8, 179.5],
 '16 years': [198, 104.7, 108.0, 113.6, 124.3, 138.5, 156.2, 176.2, 190.6],
 '17 years': [210, 111.3, 114.6, 120.3, 131.0, 145.4, 163.5, 184.2, 199.3],
 '18 years': [222, 115.6, 119.1, 124.8, 135.7, 150.4, 168.7, 189.8, 205.1],
 '19 years': [234, 118.3, 121.9, 127.8, 139.1, 154.1, 172.8, 193.8, 209.0],
 '20 years': [240, 119.1, 122.7, 128.8, 140.3, 155.6, 174.6, 195.8, 211.0]
}

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

    populateTableForBoys(size);	
}
function populateTableForBoys(size) {
    const tableHeader = document.querySelector(".measurement-table thead");
    const tableBody = document.querySelector(".measurement-table tbody");

    tableHeader.innerHTML = "";
    tableBody.innerHTML = "";

    const currentFits = Object.keys(sizeData[size] || {});
    const allFits = new Set(currentFits);

    // Generate the table header dynamically
    let headerHTML = '<tr><th>Measurement</th>';

    for (let fit of currentFits) {
        headerHTML += `<th>${fit.charAt(0).toUpperCase() + fit.slice(1)} Fit</th>`;
    }
    headerHTML += "</tr>";
    tableHeader.innerHTML = headerHTML;

    const measurements = [
        "Collar Length (Btn- middle of BHole)",
        "Chest -1'' below armhole-- full",
        "waist - full",
        "single sleeve length for long sleeve"
    ];

    for (let measurement of measurements) {
        let row = `<tr><td>${measurement}</td>`;
        for (let fit of allFits) {
            row += `<td>${sizeData[size][fit][measurement] || "N/A"}</td>`;
        }
        row += "</tr>";
        tableBody.innerHTML += row;
    }
}

const MIN_WAIST_SIZE_BOYS = 4;
const MAX_WAIST_SIZE_BOYS = 22;

function waistSizeToKey(size) {
    return size.toString();
}

function hasNextsizeData(currentSize) {
    return currentSize + 2 <= MAX_WAIST_SIZE_BOYS;
}

function hasPrevsizeData(currentSize) {
    return currentSize - 2 >= MIN_WAIST_SIZE_BOYS;
}

document.querySelector(".prev-size").addEventListener("click", function () {
    if (hasPrevsizeData(currentWaistSize)) {
        currentWaistSize -= 2;
        populateTableForBoys(currentWaistSize);
    }

    // Update button states
    document.querySelector(".prev-size").disabled =
        !hasPrevsizeData(currentWaistSize);
    document.querySelector(".next-size").disabled =
        !hasNextsizeData(currentWaistSize);
});

document.querySelector(".next-size").addEventListener("click", function () {
    if (hasNextsizeData(currentWaistSize)) {
        currentWaistSize += 2;
        populateTableForBoys(currentWaistSize);
    }

    // Update button states
    document.querySelector(".prev-size").disabled =
        !hasPrevsizeData(currentWaistSize);
    document.querySelector(".next-size").disabled =
        !hasNextsizeData(currentWaistSize);
});
