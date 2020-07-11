var a = "3.33";
var b = 0;
console.log(a + b);

// objects of elements
var all_maths = document.getElementById("output1");
var current_operands = document.getElementById("output2");
var clear = document.getElementById("clear");
var square_root = document.getElementById("square-root");
var multiply = document.getElementById("multiply");
var divide = document.getElementById("divide");
var sub = document.getElementById("subtract");
var add = document.getElementById("addition");
var equal = document.getElementById("equal");
var decimal = document.getElementById("decimal");
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var zero = document.getElementById("zero");

//variables
var output1 = "";
var output2 = "";
var op = "";
// ALL function

function clearAllOutputs() {
    output2 = "";
    output1 = "";
    all_maths.innerText = "";
    current_operands.innerText = "";
}

function getAns() {
    output1 = output1 + " " + output2;
    all_maths.innerText = output1;

    var all = output1.split(" ");

    var cur_ans = 0;
    var cur_op = "+";
    for (var i = 0; i < all.length; i++) {
        if (all[i] != "+" && all[i] != "-" && all[i] != "*" && all[i] != "/") {
            if (cur_op == "+") {
                cur_ans = cur_ans + parseFloat(all[i]);
            }
            if (cur_op == "*") {
                cur_ans = cur_ans * parseFloat(all[i]);
            }
            if (cur_op == "/") {
                cur_ans = cur_ans / parseFloat(all[i]);
            }
            if (cur_op == "-") {
                cur_ans = cur_ans - parseFloat(all[i]);
            }
        } else {
            cur_op = all[i];
        }

    }
    all_maths.innerText = "";
    output1 = "";
    output2 = cur_ans;
    current_operands.innerText = cur_ans;
}
function setOutput1() {
    if (output1.length == 0) {
        output1 = output2 + " " + op;
    } else {
        output1 = output1 + " " + output2 + " " + op;
    }
    output2 = "";
    all_maths.innerText = output1;
    current_operands.innerText = "0";


}
function inRange() {
    if (output2.length > 10) {
        return false;
    } else {
        return true;
    }
}
//All Mouse-Event listeners 

clear.addEventListener("click", clearAllOutputs);
equal.addEventListener("click", getAns);
square_root.addEventListener("click", function getSquareRoot() {

    output2 = Math.sqrt(output2);
    current_operands.innerText = output2;

});
multiply.addEventListener("click", function setOperation() { op = "*"; setOutput1(); });
addition.addEventListener("click", function setOperation() { op = "+"; setOutput1(); });
divide.addEventListener("click", function setOperation() { op = "/"; setOutput1(); });
sub.addEventListener("click", function setOperation() { op = "-"; setOutput1(); });
decimal.addEventListener("click", function () {
    if (output2.charAt(output2.length - 1) != ".") {
        output2 = output2 + "."; current_operands.innerText = output2;
    }
});

one.addEventListener("click", function () { if (inRange()) { output2 = output2 + "1"; current_operands.innerText = output2; } });
two.addEventListener("click", function () { if (inRange()) { output2 = output2 + "2"; current_operands.innerText = output2; } });
three.addEventListener("click", function () { if (inRange()) { output2 = output2 + "3"; current_operands.innerText = output2; } });
four.addEventListener("click", function () { if (inRange()) { output2 = output2 + "4"; current_operands.innerText = output2; } });
five.addEventListener("click", function () { if (inRange()) { output2 = output2 + "5"; current_operands.innerText = output2; } });
six.addEventListener("click", function () { if (inRange()) { output2 = output2 + "6"; current_operands.innerText = output2; } });
seven.addEventListener("click", function () { if (inRange()) { output2 = output2 + "7"; current_operands.innerText = output2; } });
eight.addEventListener("click", function () { if (inRange()) { output2 = output2 + "8"; current_operands.innerText = output2; } });
nine.addEventListener("click", function () { if (inRange()) { output2 = output2 + "9"; current_operands.innerText = output2; } });
zero.addEventListener("click", function () { if (inRange()) { output2 = output2 + "0"; current_operands.innerText = output2; } });

// All Keyboard Event Listener

function addDigit(digit) {
    if (inRange()) {
        output2 = output2 + digit; current_operands.innerText = output2;
    }
}
document.addEventListener("keydown", function (Event) {

    var digit = 0;
    if (Event.keyCode >= 48 && Event.keyCode <= 57) {
        digit = Event.keyCode - 48;
        addDigit(digit);
    }
    if (Event.keyCode >= 96 && Event.keyCode <= 105) {
        digit = Event.keyCode - 96;
        addDigit(digit);
    }
    if(Event.keyCode==106){
        op = "*"; setOutput1();
    }
    if(Event.keyCode==107){
        op = "+"; setOutput1();
    }
    if(Event.keyCode==111){
        op = "/"; setOutput1();
    }
    if(Event.keyCode==109){
        op = "-"; setOutput1();
    }
    if(Event.keyCode==110){
    if (output2.charAt(output2.length - 1) != ".") {
        output2 = output2 + "."; current_operands.innerText = output2;
    }}

    if(Event.keyCode==13){
        getAns();
    }
});




