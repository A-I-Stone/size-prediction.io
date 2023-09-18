// const sizeData = {};
let currentWaistSize;

const heightDataBoys = {
    '2 years': [38.5, 38.1, 37.5, 36.6, 35.7, 34.7, 33.8, 33.3, 33, 11.6],
    '3 years': [41.9, 41.5, 40.9, 39.9, 38.8, 37.8, 36.8, 36.3, 35.9, 16.5],
    '4 years': [44.8, 44.4, 43.8, 42.7, 41.6, 40.4, 39.3, 38.7, 38.3, 21.3],
    '5 years': [47.7, 47.3, 46.6, 45.4, 44.2, 42.9, 41.7, 41, 40.5, 26],
    '6 years': [50.6, 50.1, 49.3, 48.1, 46.7, 45.3, 44.1, 43.3, 42.8, 30.7],
    '7 years': [53.4, 52.8, 52, 50.6, 49.2, 47.7, 46.4, 45.6, 45.1, 35.4],
    '8 years': [56, 55.4, 54.5, 53.1, 51.5, 49.9, 48.5, 47.7, 47.2, 40.2],
    '9 years': [58.4, 57.8, 56.9, 55.3, 53.6, 51.9, 50.4, 49.5, 49, 44.9],
    '10 years': [60.7, 60, 59, 57.4, 55.5, 53.7, 52.2, 51.2, 50.6, 49.6],
    '11 years': [63, 62.3, 61.3, 59.5, 57.6, 55.7, 54, 53, 52.3, 54.3],
    '12 years': [65.8, 65.1, 63.9, 62.1, 60, 58, 56.2, 55.1, 54.5, 59.1],
    '13 years': [68.9, 68.1, 67, 65.1, 63, 60.9, 58.9, 57.8, 57, 63.8],
    '14 years': [71.4, 70.8, 69.7, 67.9, 65.8, 63.6, 61.7, 60.4, 59.6, 68.5],
    '15 years': [73.1, 72.4, 71.4, 69.7, 67.7, 65.6, 63.7, 62.5, 61.7, 73.2],
    '16 years': [74, 73.3, 72.3, 70.6, 68.7, 66.7, 64.9, 63.8, 63, 78],
    '17 years': [74.4, 73.8, 72.8, 71.1, 69.2, 67.3, 65.5, 64.4, 63.7, 82.7],
    '18 years': [74.7, 74, 73, 71.3, 69.5, 67.5, 65.8, 64.8, 64.1, 87.4],
    '19 years': [74.8, 74.2, 73.2, 71.5, 69.6, 67.7, 66, 64.9, 64.3, 92.1],
    '20 years': [74.9, 74.2, 73.2, 71.5, 69.6, 67.7, 66, 65, 64.3, 94.5]
}

const weightDataBoys = {
    '2 years': [35.7, 34.2, 31.9, 29.6, 27.5, 25.8, 24.9, 24.3, 29.5],
    '3 years': [41.3, 39.4, 36.4, 33.6, 31.2, 29.2, 28.2, 27.5, 42],
    '4 years': [47.9, 45.4, 41.6, 38.1, 35.2, 32.9, 31.6, 30.9, 54],
    '5 years': [55.3, 52.0, 47.4, 43.1, 39.5, 36.7, 35.3, 34.4, 66],
    '6 years': [63.4, 59.2, 53.4, 48.2, 44.0, 40.8, 39.1, 38.1, 78],
    '7 years': [72.4, 67.1, 59.8, 53.6, 48.7, 45.1, 43.2, 42.1, 90],
    '8 years': [82.8, 76.0, 67.1, 59.7, 53.9, 49.7, 47.6, 46.3, 102],
    '9 years': [94.7, 86.3, 75.5, 66.6, 59.7, 54.8, 52.3, 50.8, 114],
    '10 years': [108.1, 98.2, 85.4, 74.7, 66.5, 60.5, 57.5, 55.7, 126],
    '11 years': [122.6, 111.5, 96.6, 84.1, 74.3, 67.2, 63.6, 61.4, 138],
    '12 years': [137.6, 125.5, 109.1, 94.8, 83.5, 75.2, 70.9, 68.4, 150],
    '13 years': [152.4, 139.8, 122.1, 106.5, 93.9, 84.5, 79.7, 76.7, 162],
    '14 years': [166.6, 153.4, 134.9, 118.3, 104.8, 94.7, 89.4, 86.2, 174],
    '15 years': [179.5, 165.8, 146.6, 129.4, 115.3, 104.8, 99.3, 95.9, 186],
    '16 years': [190.6, 176.2, 156.2, 138.5, 124.3, 113.6, 108.0, 104.7, 198],
    '17 years': [199.3, 184.2, 163.5, 145.4, 131.0, 120.3, 114.6, 111.3, 210],
    '18 years': [205.1, 189.8, 168.7, 150.4, 135.7, 124.8, 119.1, 115.6, 222],
    '19 years': [209.0, 193.8, 172.8, 154.1, 139.1, 127.8, 121.9, 118.3, 234],
    '20 years': [211.0, 195.8, 174.6, 155.6, 140.3, 128.8, 122.7, 119.1, 240]
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
	else if (waistSize >= 4 && waistSize <= 10) return waistSize;
	else return Math.ceil(waistSize / 2) * 2; // Round up to the nearest even number
}

function calculateFitForBoys(heightFeet, heightInches, weight, age) {
	const heightIn = heightFeet * 12 + heightInches;
	const ageKey = age + " years";

	console.log("heightIn",heightIn,"ageKey",ageKey);

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

	const heightPercentile = findPercentile(heightIn, percentilesHeight);
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
    const breakpoints = [95, 90, 85, 75, 50, 25, 15, 10, 5]; // Adjusted order
    for (let i = 0; i < percentiles.length; i++) {
        if (value >= percentiles[i]) {
            return breakpoints[i];
        }
    }
    return 5;
}

function calculateSizeAndFit() {
    	console.log("calculateSizeAndFit called.");		
	const heightFeet = Number(document.getElementById("heightFeet").value);
	const heightInches = Number(document.getElementById("heightInches").value);
	const weight = Number(document.getElementById("weight").value);
	const age = Number(document.getElementById("age").value);
	const waistSize = Number(document.getElementById("waist").value); // Changed 'waistSize' to 'waist'
	console.log(`Height (feet): ${heightFeet}, Height (inches): ${heightInches}, Weight: ${weight}, Age: ${age}, Waist Size: ${waistSize}`);

	const size = calculateShirtSizeForBoys(
		heightFeet,
		heightInches,
		weight,
		age,
		waistSize
	);

	console.log(`Calculated Shirt Size: ${size}`);

	currentWaistSize = size;

	const { fit, heightPercentile, weightPercentile } = calculateFitForBoys(
		heightFeet,
		heightInches,
		weight,
		age
	);
	console.log(`Fit: ${fit}, Height Percentile: ${heightPercentile}%, Weight Percentile: ${weightPercentile}%`);


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
    console.log("populateTableForBoys called with size:", size);
    const tableHeader = document.querySelector(".measurement-table thead");
    const tableBody = document.querySelector(".measurement-table tbody");

    tableHeader.innerHTML = "";
    tableBody.innerHTML = "";

    const nextSize = size + getNextIncrement(size);  // Calculate the next size

    const currentFits = ["super slim", "extra slim", "slim", "classic", "traditional", "husky"];

    // Generate the table header dynamically
    let headerHTML = '<tr><th>Measurement</th>';

    for (let currentSize of [size, nextSize]) {
        headerHTML += `<th colspan="${currentFits.length}">${currentSize}</th>`;
    }
    headerHTML += "</tr>";

    // Generate the subheader for fit types
    let subHeaderHTML = '<tr><td></td>';
    for (let _ of [size, nextSize]) {
        for (let fit of currentFits) {
            subHeaderHTML += `<th>${fit.charAt(0).toUpperCase() + fit.slice(1)}</th>`;
        }
    }
    subHeaderHTML += "</tr>";

    tableHeader.innerHTML = headerHTML + subHeaderHTML;

    const measurements = ["Collar", "Chest", "Waist", "Sleeve"];

    for (let measurement of measurements) {
        let row = `<tr><td>${measurement}</td>`;
        for (let currentSize of [size, nextSize]) {
            for (let fit of currentFits) {
                row += `<td>${sizeData[currentSize][fit][measurement] || "N/A"}</td>`;
            }
        }
        row += "</tr>";
        tableBody.innerHTML += row;
    }

    document.querySelector(".current-collar-size").innerText = `Size: ${size} and ${nextSize}`;	
}


const MIN_WAIST_SIZE_BOYS = 4;
const MAX_WAIST_SIZE_BOYS = 22;

function waistSizeToKey(size) {
    console.log("waistSizeToKey called with size:", size);	
    return size.toString();
}

function getNextIncrement(currentSize) {
    return currentSize < 10 ? 1 : 2;
}

function getPrevDecrement(currentSize) {
    return currentSize <= 10 ? 1 : 2;
}

function hasNextsizeData(currentSize) {
    console.log("hasNextsizeData called with currentSize:", currentSize);
    return currentSize + getNextIncrement(currentSize) <= MAX_WAIST_SIZE_BOYS;
}

function hasPrevsizeData(currentSize) {
    console.log("hasPrevsizeData called with currentSize:", currentSize);	
    return currentSize - getPrevDecrement(currentSize) >= MIN_WAIST_SIZE_BOYS;
}

document.querySelector(".prev-size").addEventListener("click", function () {
    console.log("Prev size button clicked.");
    if (hasPrevsizeData(currentWaistSize)) {
        currentWaistSize -= getPrevDecrement(currentWaistSize);
        console.log(`Setting currentWaistSize to: ${currentWaistSize}`);
        populateTableForBoys(currentWaistSize);
    }

    // Update button states
    document.querySelector(".prev-size").disabled =
        !hasPrevsizeData(currentWaistSize);
    document.querySelector(".next-size").disabled =
        !hasNextsizeData(currentWaistSize);
});

document.querySelector(".next-size").addEventListener("click", function () {
    console.log("Next size button clicked.");
    if (hasNextsizeData(currentWaistSize)) {
        currentWaistSize += getNextIncrement(currentWaistSize);
        console.log(`Setting currentWaistSize to: ${currentWaistSize}`);
        populateTableForBoys(currentWaistSize);
    }

    // Update button states
    document.querySelector(".prev-size").disabled =
        !hasPrevsizeData(currentWaistSize);
    document.querySelector(".next-size").disabled =
        !hasNextsizeData(currentWaistSize);
});
