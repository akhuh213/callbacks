function greeting(name, callback) {
    let sentence = 'Hello, myname is ' + name + '';

    let otherSentece = callback();
    
    return sentence + otherSentence;
}



function anotherGreeting() {
    let sentence = 'I forgot my last name';
    
    return sentence;
}

let myName = 'Alice';
console.log(greeting(myName, anotherGreeting));


