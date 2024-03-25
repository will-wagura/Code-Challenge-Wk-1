// Creates a form validation function //
function validateFormNetSalary() {
    let basicSalary = parseFloat(document.getElementById("basic-salary").value);
    let benefits = parseFloat(document.getElementById("benefits").value);
    // Checks if the input field is empty an relays a message //
    if(basicSalary === "" || benefits === "") {
        document.getElementById("error").innerText = "Input values required";
        return false;
    }
    // Checks if the values within the input fields are valid //
    if(isNaN(basicSalary) || isNaN(benefits)) {
        document.getElementById("error").innerText = "Enter valid values";
        return false;
    }
    // Clears any errors within the checks and calls the net salary function to execute //
    document.getElementById("error").innerText = ""
    calculateNetSalary();
    return false;
}
// Creates a function to calculate the net salary //
function calculateNetSalary() {
    let basicSalary = parseFloat(document.getElementById("basic-salary").value);
    let benefits = parseFloat(document.getElementById("benefits").value);

    // Calculate gross income
    let grossIncome = basicSalary + benefits;

    // Calculate NSSF deductions
    let NSSFDeductions = 7000;

    // Calculate NHIF deductions
    let NHIFDeductions = 0
    if(grossIncome < 6000) {
        NHIFDeductions = 150;
    }
    else if(grossIncome >= 6000 && grossIncome < 8000) {
        NHIFDeductions = 300;
    }
    else if(grossIncome >= 8000 && grossIncome < 12000) {
        NHIFDeductions = 400;
    }
    else if(grossIncome >= 12000 && grossIncome < 15000) {
        NHIFDeductions = 500;
    }
    else if(grossIncome >= 15000 && grossIncome < 20000) {
        NHIFDeductions = 600;
    }
    else if(grossIncome >= 20000 && grossIncome < 25000) {
        NHIFDeductions = 750;
    }
    else if(grossIncome >= 25000 && grossIncome < 30000) {
        NHIFDeductions = 850;
    }
    else if(grossIncome >= 30000 && grossIncome < 35000) {
        NHIFDeductions = 900;
    }
    else if(grossIncome >= 35000 && grossIncome < 40000) {
        NHIFDeductions = 950;
    }
    else if(grossIncome >= 40000 && grossIncome < 45000) {
        NHIFDeductions = 1000;
    }
    else if(grossIncome >= 45000 && grossIncome < 50000) {
        NHIFDeductions = 1100;
    }
    else if(grossIncome >= 50000 && grossIncome < 60000) {
        NHIFDeductions = 1200;
    }
    else if(grossIncome >= 60000 && grossIncome < 70000) {
        NHIFDeductions = 1300;
    }
    else if(grossIncome >= 70000 && grossIncome < 80000) {
        NHIFDeductions = 1400;
    }
    else if(grossIncome >= 80000 && grossIncome < 90000) {
        NHIFDeductions = 1500;
    }
    else if(grossIncome >= 90000 && grossIncome < 100000) {
        NHIFDeductions = 1600;
    }
    else {
        NHIFDeductions = 1700;
    }

    // Calculate taxable income
    let taxableIncome = grossIncome - NSSFDeductions - NHIFDeductions;

    // Calculate Tax based on the tax bracket
    if(taxableIncome <= 24000) {
        paye = Math.floor(taxableIncome * 0.1);
    }
    else if(taxableIncome > 24000 && taxableIncome <= 32333) {
        paye = Math.floor(taxableIncome * 0.25);
    }
    else if(taxableIncome > 32333 && taxableIncome <= 500000) {
        paye = Math.floor(taxableIncome * 0.3);
    }
    else if(taxableIncome > 500000 && taxableIncome <= 800000) {
        paye = Math.floor(taxableIncome * 0.325);
    }
    else {
        paye = Math.floor(taxableIncome * 0.35);
    }

    // Calculate net salary
    let netSalary = grossIncome - paye - NHIFDeductions - NSSFDeductions;

    // Output the value of net salary and how much each deduction was
    let results = document.getElementById("salary");
    results.innerHTML = `
    <p>P.A.Y.E is Ksh. ${paye}</p>
    <p>Gross Income is Ksh. ${grossIncome}</p>
    <p>NHIF Deduction is Ksh. ${NHIFDeductions}</p>
    <p>NSSF Deduction is Ksh. ${NSSFDeductions}</p>
    <p>Net Salary is Ksh. ${netSalary}</p>
    `;
}