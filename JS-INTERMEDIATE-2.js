//Method to find fibonacci number 
function fibonacci(n){
    if(n==0){
        return 0;
    }
    
    if(n == 1){
        return 1;
    }
    
    return fibonacci(n-1)+ fibonacci(n-2);
}

//printing the function result
console.log(fibonacci(6)); //output 8
console.log(fibonacci(5)); //output 5
console.log(fibonacci(16)); //output 987