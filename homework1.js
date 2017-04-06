


function binStrToDec (str){

console.log("исх строка = " + str);
x=parseInt(str, 2); //перевод строки в двоич. число
console.log("проверка двоич. числа встроенной функцией = " + x);

let dec = 0;
let k = 1; // вес разряда
let i = 0;
notbinary: for (i = str.length - 1; i >= 0; i--) {
    switch(str[i]) {
        case '0': 
            k *= 2;
            break;
        case '1': 
            dec += k; 
            k *= 2;
            break;
        default:
        dec = undefined;
        break notbinary;    

    }
}
return dec;
}   
console.log("конвертация строки из дв. числа в дес. = " + binStrToDec("1001011"));

