var millimeter =
document.getElementById('millimeter');
var centimeter =
document.getElementById('centimeter');

millimeter.addEventListener('input', function(){
	let m = this.value;
	let c = m*0.1; 
	centimeter.value = c;
});

centimeter.addEventListener('input', function(){
	let m = this.value;
	let c = m/0.1; 
	if (!Number.isInteger) {
		c = c.toFixed(2);
	};

	millimeter.value = m;
});
