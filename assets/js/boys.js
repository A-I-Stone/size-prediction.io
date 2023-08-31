const heightDataBoys = {
	"2 years": [84.4, 85.7, 86.9, 88.5, 91.1, 94.3, 95.9, 96.9, 98.6],
	"3 years": [91.2, 93.2, 94.3, 96.0, 99.2, 102.1, 103.7, 104.9, null],
	"4 years": [97.2, 100.2, 101.1, 102.5, 105.4, 108.9, 111.2, 112.1, 114.5],
	"5 years": [102.7, 105.4, 106.5, 108.8, 112.4, 116.3, 118.6, 120.2, 122.6],
	"6 years": [109.6, 111.5, 112.7, 114.7, 118.0, 121.8, 125.8, 126.9, 128.4],
	"7 years": [116.5, 118.2, 120.2, 122.3, 126.1, 129.8, 132.3, 134.3, 136.4],
	"8 years": [121.2, 124.2, 125.9, 127.8, 131.8, 136.4, 139.0, 141.5, 143.5],
	"9 years": [122.6, 125.7, 128.3, 131.0, 136.4, 140.3, 142.1, 144.4, null],
	"10 years": [130.7, 132.2, 134.7, 137.4, 141.1, 146.3, 148.4, 149.7, 151.7],
	"11 years": [136.3, 139.7, 141.1, 143.3, 148.3, 153.7, 157.5, 159.6, 162.9],
	"12 years": [140.3, 141.4, 145.3, 148.1, 153.9, 159.0, 163.8, 166.7, 169.4],
	"13 years": [149.4, 151.7, 153.2, 157.0, 163.6, 167.6, 170.2, 171.6, 172.8],
	"14 years": [154.8, 156.5, 158.3, 163.0, 170.0, 175.3, 178.5, 179.5, null],
	"15 years": [160.1, 161.8, 163.6, 167.3, 172.7, 176.4, 180.0, 181.6, null],
	"16 years": [160.1, 163.2, 164.2, 167.4, 172.6, 179.5, 182.4, 184.9, 185.8],
	"17 years": [163.7, 167.4, 168.6, 170.2, 174.9, 179.8, 181.5, 184.9, 187.2],
	"18 years": [163.9, 166.7, 168.3, 170.9, 175.5, 179.8, 180.9, 182.1, null],
	"19 years": [162.7, 165.0, 168.3, 170.8, 176.1, 179.4, 181.9, 183.9, null],
};

const weightDataBoys = {
	"2 years": [42.4, 44.3, 45.0, 46.2, 48.7, 50.9, 52.5, 53.4, 54.6],
	"3 years": [45.3, 46.1, 46.4, 48.0, 50.0, 52.5, 54.2, 55.3, 60.7],
	"4 years": [47.1, 48.2, 49.2, 49.9, 52.3, 54.8, 57.4, 59.7, 62.2],
	"5 years": [48.3, 49.1, 49.9, 51.5, 53.9, 56.6, 58.2, 61.6, 68.3],
	"6 years": [49.0, 50.2, 51.0, 52.1, 55.6, 58.9, 62.2, 68.0, 71.5],
	"7 years": [50.9, 51.7, 53.0, 54.0, 58.0, 63.3, 68.6, 72.5, 75.2],
	"8 years": [52.2, 53.5, 54.6, 56.3, 59.9, 67.6, 73.2, 77.4, 82.5],
	"9 years": [54.7, 55.4, 56.5, 58.6, 62.5, 72.5, 80.5, 85.3, 89.0],
	"10 years": [55.8, 57.1, 57.5, 60.7, 67.7, 77.1, 82.9, 88.8, 92.2],
	"11 years": [55.3, 58.1, 59.2, 61.0, 69.1, 84.8, 90.6, 94.2, 97.7],
	"12 years": [59.1, 59.4, 61.1, 63.2, 69.1, 79.3, 90.4, 93.6, 95.9],
	"13 years": [61.5, 63.2, 64.3, 66.9, 73.4, 93.5, 100.0, 105.6, null],
	"14 years": [64.3, 65.3, 66.4, 69.1, 74.2, 88.7, 101.2, 104.5, 107.5],
	"15 years": [64.1, 65.9, 68.3, 70.6, 79.0, 95.0, 106.5, 110.1, 121.9],
	"16 years": [66.7, 69.2, 70.6, 73.4, 78.4, 85.7, 92.3, 98.6, 107.9],
	"17 years": [66.4, 67.7, 70.1, 73.4, 79.8, 94.2, 104.8, 109.7, 122.5],
	"18 years": [67.2, 69.5, 71.1, 72.8, 79.6, 92.1, 101.8, 109.5, 121.8],
	"19 years": [69.7, 72.2, 75.4, 78.7, 85.5, 99.5, 103.9, 108.7, 120.0],
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
	const waistSize = Number(document.getElementById("waistSize").value);

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

	if (fit === "unknown") {
		document.getElementById(
			"sizeOutput"
		).innerHTML = `No data available for age ${age}.`;
		document.getElementById("fitOutput").innerHTML = "";
	} else {
		document.getElementById(
			"sizeOutput"
		).innerHTML = `Recommended size: ${size}`;
		document.getElementById("fitOutput").innerHTML = `Recommended fit: ${fit}`;
	}

	// Log the percentiles
	console.log(`Height Percentile: ${heightPercentile}%`);
	console.log(`Weight Percentile: ${weightPercentile}%`);
}
