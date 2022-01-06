window.addEventListener("load" , function (){

    let config_pay_date   = {
        "locale": "ja"
    }
    flatpickr("[name='pay_date']", config_pay_date);

});

// document.addEventListener('load',function() {

//     let calcResult = eval(document.getElementById('m_income').innerText-document.getElementById('m_spending').innerText);
//     document.getElementById('m_balance').innerText = calcResult;

//     console.log(calcResult)
// });