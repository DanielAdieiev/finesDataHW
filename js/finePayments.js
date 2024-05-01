"use strict";

let fineNumber = document.getElementById("fineNumber");
let passport = document.getElementById("passport");
let creditCardNumber = document.getElementById("creditCardNumber");
let cvv = document.getElementById("cvv");
let amount = document.getElementById("amount");
let buttonSubmit = document.getElementById("payFine");

let DB = data.finesData;

buttonSubmit.addEventListener('click',payFine);
function payFine(fineNumber, amount, passport, creditCardNumber, cvv) {
    let fineFoundByNumber = finesData.find(fine => fine.номер === fineNumber.value);
    let indexFoundByNumber = finesData.findIndex(fine => fine.номер === fineNumber.value);
    if (!fineFoundByNumber) {
        alert ("Номер не співпадає");
        return;
    }
    if (fineFoundByNumber.сума !== parseInt(amount.value)){
        alert ("Сума не співпадає");
        return;
    }
    if (!/^[А-ЩЬЮЯЇІЄҐ]{2}\d{6}$/i.test(passport.value)) {
        alert ("Не вірний паспортний номер");
        return;
    }
    if (!/^\d{16}$/.test(creditCardNumber.value)) {
        alert ("Не вірна кредитна картка");
        return;
    }
    if (!/^\d{3}$/.test(cvv.value)) {
        alert ("Не вірний cvv");
        return;
    }
        alert ("Штраф сплачено");
        finesData.splice(indexFoundByNumber, 1);
    };

        