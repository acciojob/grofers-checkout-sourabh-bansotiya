
const totalPriceElement = document.createElement("div");
totalPriceElement.id = "ans";
totalPriceElement.textContent = ""; 


document.body.appendChild(totalPriceElement);

const getSumBtn = document.createElement("button");
getSumBtn.textContent = "Get Total Price";

document.body.appendChild(getSumBtn);

const getSum = () => {
    let sum = 0;
    const prices = document.querySelectorAll('.price');
    
    prices.forEach(price => {
        sum += parseInt(price.textContent);
    });

    totalPriceElement.textContent = "Total Price: Rs " + sum;
};

getSumBtn.addEventListener("click", getSum);
