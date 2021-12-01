"use strict";
        var $ = function(id) {
            return document.getElementById(id);
        };

var calculateFV = function(investment, rate, years){
    var futureVal = investment;
    for(var i =1; i<=years;i++){
        futureVal = futureVal + (futureVal*rate/100);
    }
    futureVal = futureVal.toFixed(2);
    futureVal = parseInt(futureVal);
    return futureVal;
};

var processEntries = function(){
    var investment = parseFloat($("investment").value);
    var rate = parseFloat($("annual_rate").value);
    var years = parseInt($("years").value);
    var isValid = true;

    if(investment <= 0 || investment > 100000){
        $("investment_error").firstChild.nodeValue = "Investment invalid.";
        isValid= false;
    }
    else{
        $("investment_error").firstChild.nodeValue = "";
    }

    if(rate <= 0 || rate > 15){
        $("rate_error").firstChild.nodeValue = "Rate invalid.";
        isValid= false;
    }
    else{
        $("rate_error").firstChild.nodeValue = "";
    }

    if(years <= 0 || years > 50){
        $("years_error").firstChild.nodeValue = "Years invalid.";
        isValid= false;
    }
    else{
        $("years_error").firstChild.nodeValue = "";
    }


    if(isValid = true){
    $("future_value").value = calculateFV(investment, rate, years);
    }
    
};

window.onload = function() {
    $("calculate").onclick = processEntries;
    $("investment").focus();
};

