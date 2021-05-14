// Price calculation function
const calcPrice = ({ price, currency }) => {
    // get the currency chage value.
    var toMultiplyWith = 1;
    if (currency == "ngn") {
        toMultiplyWith = 480;
    }
    console.log(price * toMultiplyWith);
    return price * toMultiplyWith;
};

var theSwitch = document.getElementById("swith");
theSwitch.onchange = () => {
    let currency = document.getElementById("currency").value;
    let thePrice = document.getElementById("premuimPrice").innerHTML;
    console.log(currency);
    if (currency == "ngn") {
        if (thePrice == 75 * 480) {
            thePrice = calcPrice({
                price: 100,
                currency,
            });
        } else if (thePrice == 100 * 480) {
            thePrice = calcPrice({
                price: 75,
                currency,
            });
        }
    } else if ((currency = "usd")) {
        if (thePrice == 75) {
            thePrice = 100;
        } else if (thePrice == 100) {
            thePrice = 75;
        } else if (thePrice == 75 * 480) {
            thePrice = calcPrice({
                price: 75,
                currency: currency,
            });
        } else if (thePrice == 100 * 480) {
            thePrice = calcPrice({
                price: 100,
                currency: currency,
            });
        }
    }
    document.getElementById("premuimPrice").innerHTML = thePrice;
};

const currencySwitch = document.getElementById("currency");
currencySwitch.addEventListener("change", (e) => {
    let currency = document.getElementById("currency").value;
    let thePrice = document.getElementById("premuimPrice").innerHTML;

    if (currency == "ngn") {
        $(".curr").html("&#8358");
        if (thePrice == 75 * 480) {
            console.log(thePrice);
            thePrice = calcPrice({
                price: 75,
                currency: currency,
            });
        } else if (thePrice == 100 * 480) {
            thePrice = calcPrice({
                price: 100,
                currency: currency,
            });
        }
        document.getElementById("premuimPrice").innerHTML = thePrice * 480;
    } else {
        $(".curr").html("$");
        if (thePrice == 75) {
            thePrice = 100;
        } else if (thePrice == 100) {
            thePrice = 75;
        } else if (thePrice == 75 * 480) {
            thePrice = calcPrice({
                price: 75,
                currency: currency,
            });
        } else if (thePrice == 100 * 480) {
            thePrice = calcPrice({
                price: 100,
                currency: currency,
            });
        }
        document.getElementById("premuimPrice").innerHTML = thePrice;
    }
});