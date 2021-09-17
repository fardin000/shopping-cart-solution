// console.log('I am in a separate file')


// document.getElementById('case-plus').addEventListener('click', function(){
//     // console.log('case plus clicked');
//     const caseInput = document.getElementById('case-number');
//     // const caseNumber = caseInput.value + 1;
//     const caseNumber = caseInput.value;
//     caseInput.value = parseInt(caseNumber) + 1;
//     //  console.log(caseNumber);
//     //1st video ended
// });

// document.getElementById('case-minus').addEventListener('click', function(){
//     const caseInput = document.getElementById('case-number');
//     const caseNumber = caseInput.value;
//     caseInput.value = parseInt(caseNumber) - 1;
// })


////////////////////////////////////////////////////
//////////////////////////////////////////////////////
////////// Id base mehtod ///////////////////////
//////////////////////////////////////////////

function updateProductNumber(product, price, isIncreasing){
    const productInput = document.getElementById(product +'-number');
    // const caseNumber = caseInput.value;
    let productNumber = productInput.value;
    //amra (caseInput.value = caseNumber korci)tai let variable ante holo error fix hisebe

    //handle case   increase-decrease events
    if(isIncreasing == true){
        // caseInput.value = parseInt(caseNumber) + 1;
        productNumber = parseInt(productNumber) + 1;
        //caseNumber update korar jonne ei line ana hoilo
    }
    else if(productNumber > 0){
        // caseInput.value = parseInt(caseNumber) - 1;  
        productNumber = parseInt(productNumber) - 1;
        // caseNumber update korar jonne ei line ana hoilo
    }
    //seting value
    productInput.value = productNumber;


    //updating case-total
    const productTotal = document.getElementById(product + '-total');
    // caseTotal.innerText = caseNumber * 59;
    productTotal.innerText = productNumber * price;

    //calculate subtotal
    calculateTotal();

}
function getInputValue(product){
    // const phoneInput = document.getElementById(product + '-number');
    const productInput = document.getElementById(product + '-number');
    // const phoneNumber = parseInt(phoneInput.value);
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
//
function calculateTotal(){
    // const phoneInput = document.getElementById('phone-number');
    // const phoneNumber = parseInt(phoneInput.value);
    // const PhoneTotal = phoneNumber * 1229;
    const phoneTotal = getInputValue('phone') * 1229;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10; // 10 vager 1vag, (.1) diye gun kora jay,(10/100)diye gun;  
    const totalPrice = subTotal + tax;
    // console.log(subTotal);

    //upadate on the html sub-total id
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}

 //phone increase-decrease function calling
 //vul jaygay bosaicilam , function er moddhe
 document.getElementById('phone-plus').addEventListener ('click', function(){
    // console.log('phone plus clicked');
    updateProductNumber('phone', 1229, true);
})

document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumber('phone', 1229, false);
})


//case inceasing - decreasing fucntion calling
document.getElementById('case-plus').addEventListener('click', function(){
    // // console.log('case plus clicked');
    // const caseInput = document.getElementById('case-number');
    // // const caseNumber = caseInput.value + 1;
    // const caseNumber = caseInput.value;
    // caseInput.value = parseInt(caseNumber) + 1;
    // //  console.log(caseNumber);
    // //1st video ended
    updateProductNumber('case', 59, true);
});

document.getElementById('case-minus').addEventListener('click', function(){
    // const caseInput = document.getElementById('case-number');
    // const caseNumber = caseInput.value;
    // caseInput.value = parseInt(caseNumber) - 1;
    updateProductNumber('case', 59, false);
})


