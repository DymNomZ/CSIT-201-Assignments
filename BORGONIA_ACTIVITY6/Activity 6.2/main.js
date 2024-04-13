const radiusValue = document.getElementById('radius');
const areaValue = document.getElementById('area');
const circumferenceValue = document.getElementById('circumference');
const calculateButton = document.getElementById('calculate');

calculateButton.addEventListener('click', () => {
  const radius = parseFloat(radiusValue.value);
  if (isNaN(radius) || radius <= 0) {
    alert('Please enter a valid number for the radius.');
    return;
  }
  const area = Math.PI * Math.pow(radius, 2);
  const circumference = 2 * Math.PI * radius;
  areaValue.value = area.toFixed(2);
  circumferenceValue.value = circumference.toFixed(2);
});