
export function getTodaysDate(datePicker) {
	return datePicker.value = new Date().toLocaleString().slice(0, 20);
}


export function getRandomId() {
	return new Date().getTime();
}

export const getTotalSum = (array, prop) => {
	let total = 0;
	for (var i=0; i < array.length; i++) {
		for (var key in array[i]) {
			if (key === prop) {
				total += array[i][key]
			}
		}
	}
	return total
}

export function sortArray(array, fieldName) {
	let sortedArray = [];

	function compare(a, b) {
		if(a[fieldName] < b[fieldName]) {
			return -1;
		}
		if(a[fieldName] > b[fieldName]) {
			return 1;
		}
		return 0; //может быть равно b
	}
	sortedArray = array.sort(compare);
	
	return sortedArray;
}