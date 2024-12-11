const binaryInput = document.getElementById("binaryInput");
const convertButton = document.getElementById("convertButton");
const resultDisplay = document.getElementById("result");

convertButton.addEventListener("click", () => {
	const binaryValue = binaryInput.value.trim();
	if (isValidBinary(binaryValue)) {
		const decimalValue = binaryToDecimal(binaryValue);
        resultDisplay.textContent = `Decimal Value: ${decimalValue}`;
	} else {
        resultDisplay.textContent = 'Please enter a valid binary number (only 0s and 1s).';
    }
});

function isValidBinary(binary) {
	return /^[01]+$/.test(binary);
}

function binaryToDecimal(binary) {
	return binary
		.split("")
		.reverse()
		.reduce((acc, bit, index) => {
			return acc + parseInt(bit, 10) * Math.pow(2, index);
		}, 0);
}

binaryInput.addEventListener("input", () => {
    resultDisplay.textContent = "";
})