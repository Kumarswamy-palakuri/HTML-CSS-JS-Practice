function calculateInterest() {
    let principal = document.getElementById('principal').value;
    let rate = document.getElementById('rate').value;
    let years = document.getElementById('years').value;
    let times = document.getElementById('times').value;

    if (principal === "" || rate === "" || years === "" || times === "") {
        alert("Please fill in all fields.");
        return;
    }


    principal = parseFloat(principal);
    rate = parseFloat(rate);
    years = parseFloat(years);
    times = parseFloat(times);

    if (principal <= 0 || rate <= 0 || years <= 0 || times <= 0) {
        alert("Please enter valid positive numbers for all inputs.");
        return;
    }

    let amount = principal * Math.pow((1 + (rate / 100) / times), times * years);


    let result = amount.toFixed(2);

    document.getElementById('result').innerText = result;
}
