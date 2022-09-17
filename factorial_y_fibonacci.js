//  Factorial ************************************************************
const factorial = (n) => {
    if (n>=1)
    {
        return n*factorial(n-1);
    }
    else
    {
        return 1;
    }
}

console.log("-------------------------------------------------------------")

console.log("factorial = ",factorial(5));


// Fibonacci *************************************************************
const fibo = (n) => {
    if (n>1) {
       return fibo(n-1) + fibo(n-2);    
    }
    else {
        return n;
    }
}

// Serie fibo 0 1 1 2 3 5 8 13 21 34 55 89 144
console.log("-------------------------------------------------------------")
for (let i=0; i<=12;i++) {
    console.log(`fibo(${i}) = ${fibo(i)}`);
}

console.log("-------------------------------------------------------------")
