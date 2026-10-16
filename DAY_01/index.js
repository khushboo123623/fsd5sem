console.log(a);
var a = 2;
console.log(typeof(a));

a = "abc";
console.log(typeof(a));

let b = 10;
console.log(typeof(b));

b = "abc";
console.log(typeof(b));

let c = 2;
console.log(typeof(c));

{
    let c = "2";
    c = 2 + "2";
    console.log(c);
}

console.log(c);
console.log(typeof(c));

var d = 2;
console.log(typeof(d));

{
    var d = "2";
    d = 2 + "2";
    console.log(d);
}

console.log(d);
console.log(typeof(d));

const greet = () => {
    console.log("Hello Gaurav");
};

greet();