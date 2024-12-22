const once = (func, context) => {
    var result;
    return function(...arguments){
        if(func){
            result = func.apply(context || this, arguments);
            func = null;
        }
        return result;
    }
};

const hello = (name) => {conspole.log(`Hello ${name}`)};

hello("Sonu Choudhary");
hello("Sonu Choudhary");
hello("Sonu Choudhary");
hello("Sonu Choudhary");