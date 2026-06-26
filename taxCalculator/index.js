// STEP 1: GET GROSS SALARY
let grossSalary = null;

while (true) {
  let input = prompt("Enter your gross salary (KES):");
  if (!isNaN(input)) {
    input = Number(input);
  }
  if (input > 0) {
    grossSalary = input;
    break;
  } else {
    alert("Enter a number greater than zero");
  }
}

// STEP 2: NSSF 
let nssfTier1 = 0;
let nssfTier2 = 0;

if (grossSalary <= 9000) {
  nssfTier1 = grossSalary * 0.06;
  nssfTier2 = 0;
} else {
  nssfTier1 = 9000 * 0.06;                        // 540
  nssfTier2 = (grossSalary - 9000) * 0.06;
}

const totalNSSF = nssfTier1 + nssfTier2;

// STEP 3: TAXABLE INCOME 
const taxableIncome = grossSalary - totalNSSF;

//  STEP 4: PAYE 
const bracket1 = 24000;
const bracket2 = 32333;
const bracket3 = 500000;
const bracket4 = 800000;

const band1 = bracket1 * 0.10;                    // 2,400
const band2 = (bracket2 - bracket1) * 0.25;       // 2,083
const band3 = (bracket3 - bracket2) * 0.30;       // 140,300
const band4 = (bracket4 - bracket3) * 0.325;      // 97,500

let grossPAYE = 0;

if (taxableIncome <= 24000) {
  grossPAYE = taxableIncome * 0.10;
} else if (taxableIncome <= 32333) {
  grossPAYE = band1 + (taxableIncome - bracket1) * 0.25;
} else if (taxableIncome <= 500000) {
  grossPAYE = band1 + band2 + (taxableIncome - bracket2) * 0.30;
} else if (taxableIncome <= 800000) {
  grossPAYE = band1 + band2 + band3 + (taxableIncome - bracket3) * 0.325;
} else {
  grossPAYE = band1 + band2 + band3 + band4 + (taxableIncome - bracket4) * 0.35;
}

const personalRelief = 2400;
let paye = grossPAYE - personalRelief;
if (paye < 0) paye = 0;                           // paye can never be negative

// STEP 5: SHIF & HOUSING LEVY
const shif = grossSalary * 0.0275;                // 2.75% of gross
const housingLevy = grossSalary * 0.015;          // 1.5% of gross

// STEP 6: TOTALS 
const totalDeductions = totalNSSF + paye + shif + housingLevy;
const netPay = grossSalary - totalDeductions;

// STEP 7: OUTPUT 
alert(`
 KENYA PAYSLIP 

Gross Salary:       KES ${grossSalary.toLocaleString()}

NSSF
NSSF Tier I:        KES (${nssfTier1.toLocaleString()})
NSSF Tier II:       KES (${nssfTier2.toLocaleString()})
Total NSSF:         KES (${totalNSSF.toLocaleString()})

Taxable Income:     KES ${taxableIncome.toLocaleString()}

PAYE 
Gross PAYE Tax:     KES ${grossPAYE.toLocaleString()}
Personal Relief:    KES (${personalRelief.toLocaleString()})
PAYE Payable:       KES ${paye.toLocaleString()}

OTHER DEDUCTIONS 
SHIF (2.75%):       KES ${shif.toLocaleString()}
Housing Levy (1.5%):KES ${housingLevy.toLocaleString()}


Total Deductions:   KES ${totalDeductions.toLocaleString()}
NET PAY:            KES ${netPay.toLocaleString()}

`);