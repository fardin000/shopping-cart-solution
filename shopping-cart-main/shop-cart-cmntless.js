function updateProductNumber(product, price, isIncreasing){
    const productInput = document.getElementById(product +'-number');
    let productNumber = productInput.value;

    //handle case   increase-decrease events
    if(isIncreasing == true){
        productNumber = parseInt(productNumber) + 1;
    }
    else if(productNumber > 0){
        productNumber = parseInt(productNumber) - 1;
    }

    //seting value
    productInput.value = productNumber;

    //updating case-total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;

    //calculate subtotal
    calculateTotal();

}

function getInputValue(product){
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal(){
    const phoneTotal = getInputValue('phone') * 1229;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10; // 10 vager 1vag, (.1) diye gun kora jay,(10/100)diye gun;  
    const totalPrice = subTotal + tax;
    
    //upadate on the html sub-total id
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}

 //phone increase-decrease function calling
 document.getElementById('phone-plus').addEventListener ('click', function(){
    updateProductNumber('phone', 1229, true);
})

document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumber('phone', 1229, false);
})


//case inceasing - decreasing fucntion calling
document.getElementById('case-plus').addEventListener('click', function(){
    updateProductNumber('case', 59, true);
});

document.getElementById('case-minus').addEventListener('click', function(){
    updateProductNumber('case', 59, false);
})
