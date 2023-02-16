
// for phone plus button
document.getElementById('iphone-plus-btn').addEventListener('click', function(){
    const newNumber = updateNumber(true);
    updateTotalIphonePrice(newNumber);
    //calculate total price
    subtotalCalculation();    
})
// for phone minus button
document.getElementById('iphone-minus-btn').addEventListener('click', function(){
    const newNumber = updateNumber(false);
    updateTotalIphonePrice(newNumber);

    //calculate total price
    subtotalCalculation();
})

// for case plus button
document.getElementById('case-plus-btn').addEventListener('click', function(){
    const newNumber = updateCaseNumber(true);
    updateTotalCasePrice(newNumber);
    //calculate total price
    subtotalCalculation();
    
})

// for case minus button
document.getElementById('case-minus-btn').addEventListener('click', function(){
    const newNumber = updateCaseNumber(false);
    updateTotalCasePrice(newNumber);
    //calculate total price
    subtotalCalculation();
    
})