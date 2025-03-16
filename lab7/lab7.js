// Declaration goes here
var TAX_RATE = 0.2;
var BASE_SALARY = 3000;
var bonus = 300;

// totalComp = BASE_SALARY - (BASE_SALARY * TAX_RATE) + bonus;

// Task 1 Test Cases



const employees = [
    { name: "Alice Smith", baseSalary: 3000, bonus: 300 },
    { name: "Bob Steward", baseSalary: 3500, bonus: 500 },
    { name: "Charlie Manning", baseSalary: 4000, bonus: 700 }
    ];
    
    const allSalary = employees.map(employee => employee.baseSalary);
    const allBonus = employees.map(employee => employee.bonus);
    const average = arr => arr.reduce((sum, value) => sum + value, 0) / arr.length;
    
    const avgSalary = average(allSalary);
    const avgBonus = average(allBonus);
    
    const employee = employees.find(emp => emp.name.startsWith("Alice"));
    
    if (employee) {
        const firstName = employee.name.split(" ")[0];
        const totalComp = employee.baseSalary - (employee.baseSalary * TAX_RATE) + employee.bonus;

    const formatToCurrency = amount => `$${amount.toLocaleString()}`;

    const formattedCompensation = formatToCurrency(totalComp);

     console.log(`Hello, ${firstName}! Your total compensation is ${formattedCompensation}.`);
     
        console.log("Tax Rate:", TAX_RATE, "Type:", typeof TAX_RATE);
    console.log("Base Salary:", BASE_SALARY, "Type:", typeof BASE_SALARY);
    console.log("Bonus:", bonus, "Type:", typeof bonus);
    console.log("Total Compensation:", totalComp, "Type:", typeof totalComp);
    }
    
 

function formatToCurrency(amount) {
    let isNegative = false;
    if (amount < 0) {
        isNegative = true;
        amount = -amount;
    }
    // Convert the number to a string.
    var result = amount.toString();

    // Separate integer and fractional parts.
    part = result.split('.');
    varnumber = part[0];
    decimal = part[1];

    let every = 3;
    if(part.length > every){
        for(let i=part.length-every; i >= 0; i-=every){
            if(i!==0){ part = part.slice(0,i) + "," + part.slice(i);}
        }
    }

    result = part[1] ? part + "." + part[1] : part;
    // Format the integer part: insert a comma every three digits from the right.
    // Build the result string by adding a dollar sign.
    // the final result should be stored in a variable called "result"
    return result;
}

  

// Task 2 Test Cases (do not remove)
console.log(formatToCurrency(5000));         // Expected output: "$5,000"
console.log(formatToCurrency(123456789));      // Expected output: "$123,456,789"
console.log(formatToCurrency(1234.56));        // Expected output: "$1,234.56"
console.log(formatToCurrency(-9876543));       // Expected output: "-$9,876,543"
