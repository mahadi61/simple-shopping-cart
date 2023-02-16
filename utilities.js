function updateNumber(isIncrease){
    const inputField = document.getElementById('input-number');
    const inputString = inputField.value;
    const inputNumber = parseInt(inputString);
    let newNumber;
    if(isIncrease === true){
        newNumber = inputNumber + 1;
    }
    else{
            newNumber = inputNumber - 1;
    }
    inputField.value = newNumber;

    return newNumber;
}

function updateTotalIphonePrice(newNumber){
    const newPrice = newNumber * 1219;
    const iphoneTotalPrice = document.getElementById('iphone-price');
    iphoneTotalPrice.innerText = newPrice;
}
// case price
function updateCaseNumber(isIncrease){
    const inputField = document.getElementById('case-input-number');
    const inputString = inputField.value;
    const inputNumber = parseInt(inputString);
    let newNumber;
    if(isIncrease === true){
        newNumber = inputNumber + 1;
    }
    else{
            newNumber = inputNumber - 1;
    }
    inputField.value = newNumber;

    return newNumber;
}
function updateTotalCasePrice(newNumber){
    const newPrice = newNumber * 59;
    const caseTotalPrice = document.getElementById('case-total-price');
    caseTotalPrice.innerText = newPrice;
}

//calculate total price

function getTextElementById(elementId){
    const element = document.getElementById(elementId);
    const elementString = element.innerText;
    const elementValue = parseInt(elementString);
    return elementValue;
}
function setTextElementValueById(elementId, value){
    const subtotalElement = document.getElementById(elementId);
    subtotalElement.innerText = value;
}

function subtotalCalculation(){
    // calculate subtotal
    const totalPhonePrice = getTextElementById('iphone-price');
    const currentCaseTotal = getTextElementById('case-total-price');
    
    const currentSubtotal = totalPhonePrice + currentCaseTotal;
    setTextElementValueById('subtotal', currentSubtotal);

    // calculate tax
    // const taxAmount = Math.floor(currentSubtotal * 0.1);
    const taxAmountString = (currentSubtotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementValueById('tax', taxAmount)
    // calculate total final amount
    const totalFinal = currentSubtotal + taxAmount;
    setTextElementValueById('final-total', totalFinal);

}