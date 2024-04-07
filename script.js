const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let sum = 0;
  const rupee = document.querySelectorAll('.price');

	rupee.forEach(price => {
		sum += parseInt(price.textContent);
	});
	const table = document.querySelector('table');
	const newRow = table.insertRow(-1);
	const cell = newRow.insertCell(0);
	cell.textContent = "Total Price : Rs" + sum;
};

getSumBtn.addEventListener("click", getSum);

