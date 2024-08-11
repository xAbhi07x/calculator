class calculator{
    constructor(){
        this.result = 0;
    }

    add(Number){
        if(isNaN(Number)){
            throw new error("Invavlid Input");
        }
        this.result += Number;
    }

    subtract(Number){
        if(isNaN(Number)){
            throw new error("Invalid Input");
        }
        this.result -= Number;
    }

    Multiply(Number){
        if(isNaN(Number)){
            throw new error("Invalid Input");
        }
        this.result *= Number;
    }

    Divide(Number){
        if(isNaN(Number) || Number===0){
            throw new error("Invalid Invalid Invalid");
        }
        this.result /= Number;
    }

    getResult(){
        return this.result;
    }

    clear(){
        this.result = 0;
    }

    calculate(expression){
        const cleanedExpression = expression.replace(/\s+/g, "");
        const validCharsRegex = /[0-9+\-\*\/\(\).]/;


        for(let i = 0; i<cleanedExpression.length(); i++){
            if(!validCharsRegex.test(cleanedExpression)){
                throw new error("Invalid Expression");
            }
        }

        try{
            this.result = eval(cleanedExpression);
        }catch(error){
            throw new error("Invalid expression");
        }
    }
}

module.exports = calculator;