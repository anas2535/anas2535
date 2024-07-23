let counter = function(phisic, math, science, english, philosophie) {
    let sum = phisic * 7 + math * 7 + science * 5 + english * 5 + philosophie * 4;
    return sum / (7 + 7 + 5 + 5 + 4);
}

function calculateGrade() {
    let phisic = parseFloat(document.getElementById('phisic').value);
    let math = parseFloat(document.getElementById('math').value);
    let science = parseFloat(document.getElementById('science').value);
    let english = parseFloat(document.getElementById('english').value);
    let philosophie = parseFloat(document.getElementById('philosophie').value);

    let result = counter(phisic, math, science, english, philosophie);
    document.getElementById('result').innerText = `Your grade is: ${result.toFixed(2)}`;
}
