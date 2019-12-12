/* Miles Bishop
 * Javascript 11-20
 * Friday, November 8, 2019
 */

function firstLast6(array){
    var first = array.shift();
    var last = array.pop();
    if(first == 6 || last == 6){
        return true;
    }else{
        return false;
    }
}

function has23(array){
    if(array.includes(2) || array.includes(3)){
        return true;
    }else{
        return false;
    }
}

function fix23(array){
    if(array[0] == 2 && array[1] == 3){
        array[1] = 0;
    }
    if(array[1] == 2 && array[2] == 3){
        array[2] = 0;
    }
    return array;
}

function countYZ(string){
    string = string.toLowerCase()
    var yZ = 0;
    for(var i = 0; i < string.length; i++){
        if(string[i] == " " && string[i - 1] == "y" || string[i] == " " && string[i - 1] == "z" ) {
            yZ += 1;
        }
    }
    if(string.endsWith("y") == true || string.endsWith("z") == true){
        yZ += 1;
    }
    return yZ;
}

function endOther(stringOne, stringTwo){
    stringOne = stringOne.toLowerCase();
    stringTwo = stringTwo.toLowerCase();
    if(stringTwo.endsWith(stringOne) == true){
        return true;
    }
    if(stringOne.endsWith(stringTwo) == true) {
        return true;
    }else{
        return false;
    }
}

function starOut(string){
    var newString = "";
    for(var i = 0; i < string.length; i++){
    if(string[i - 1] != "*" && string[i + 1] != "*" && string[i] != "*"){
        newString += string[i];
        }
    }
    return newString;
}

function getSandwich(sandwich){
    var filling = "";
    var breadOne = sandwich.indexOf("bread");
    var breadTwo = sandwich.lastIndexOf("bread");

    var inside = sandwich.substring(breadOne + 5, breadTwo);
    if(breadOne == breadTwo){
        return "";
    }
    filling += inside;
    if(sandwich.includes("bread")){
        return filling;
    }else{
        return "";
    }
    return filling;
}

function canBalance(array){
    var firstsum = 0;
    var secondsum = 0;
    for(var i = 0; i < array.length; i++){
        firstsum += array[i];
        for(var j = i + 1; j < array.length; j++){
            secondsum += array[j];
        }
        if(firstsum == secondsum){
            return true;
        }
        secondsum = 0
    }
    return false;
}

function countClumps(array){
    var clump = 0;
    for(var i = 0; i < array.length; i++){
        if(array[i - 1] == array[i] && array[i + 1] != array[i]){
            clump += 1
        }
    }
    return clump;
}

function evenlySpaced(a, b, c){
    var x = [a, b, c];
    x.sort();
    if(x[1] - x[0] == x[2] - x[1]){
        return true;
    }else{
        return false;
    }
}