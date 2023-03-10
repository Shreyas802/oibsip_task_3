const convertBtn = document.getElementById('convert-btn');
convertBtn.addEventListener('click', () => {
	const conversionType = document.querySelector('input[name="conversion"]:checked').value;
	const temperature = document.getElementById('temperature').value;
	let result;
	if (conversionType === 'celsius') {
		result = (temperature * 9/5) + 32;
	} else {
		result = (temperature - 32) * 5/9;
	}
	document.getElementById('result').textContent = result.toFixed(2);
});