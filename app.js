const sum = (a, b) => {
    return a + b;
};

const oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87,
}

function fromEuroToDollar(euros) {
    const dollars = euros * oneEuroIs.USD;
    return parseFloat(dollars.toFixed(2));
}

function fromDollarToYen(dollars) {
    const euros = dollars / oneEuroIs.USD;
    const yen = euros * oneEuroIS.JPY;
    return parseFloat(yen.toFixed(2));
}

function fromYenToPound(yen) {
    const euros = yen / oneEuroIs.JPY;
    const pounds = euros * oneEuroIs.GBP;
    return parseFloat(pounds.toFixed(2));
}

module.exports = {
    sum,
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound,
    oneEuroIs
};
