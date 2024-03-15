


//21, 21  kartacen trvac tveric meci arjeqe ev poqri

function theHighestandtheLowestValue(numbers) {
    let min = numbers[0];
    let max = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }

        if (numbers[i] > max) {
            max = numbers[i];
        }
    }

    console.log(`The min  is ${min}`);
    console.log(`The max is ${max}`)
}

theHighestandtheLowestValue([75, 68, 142]);


// 23 ete trvac tveric gone meke havasar e meki , apa kartacen true , hakarak depqum false;


function ifequaltoone(a, b, c) {

    if (a === 1) {
        return true
    } else if (b === 1) {
        return true
    } else if (c === 1) {
        return true
    } else {
        return false;
    }
};

console.log( `if equal to one  ${ifequaltoone(6, 8, 6)}`)

//24  ete trvac tveric chisht erkuse havasar en erkusi ,apa artacel true ,hakarak depqum false;


function ifequaltotwo(g, d, x) {

    if (g === 2 && d === 2) {
        return true
    } else if (d === 2 && x === 2) {
        return true
    } else if (x === 2 && g === 2) {
        return true
    } else {
        return false
    }

}


console.log(`if equal to two, ${ifequaltotwo(2, 1, 2)}`)

//25  ete aydpisi erkarutyun unecox hatvacnerov hnaravor e karucel erankyuni  apa kartacen  "y = 1", hakarak depqum "y = 2";


function triangle(a, b, c) {
    if (a + b > c && a + c > b && b + c > a) {
        return "y = 1"
    } else {
        return "y = 2"
    }
}

console.log(`if it is a triangle return ${triangle(5, 6, 7)}`);




//26 kartacen  mek ete trvac tveric gone meeke zuyg e , aylapes erku


function magilooperator(v, l, j) {
    if (v % 2 === 0) {
        return 1
    } else if (l % 2 === 0) {
        return 1
    } else if (j % 2 === 0) {
        return 1
    } else {
        return 2
    }
}

console.log(`if the one of this number is  even return ${magilooperator(2, 1, 1)}`);





//27  kartacen true ete ete trvac tvere tvabanakan progressia en kazum , hakarak depqum false;

function arithmeticprogression(numbers, n) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] + (numbers[i] + n)) {
            return true;
        } else {
            return false;
        }
    }
}

console.log(arithmeticprogression([2, 4]));



//28  

function geometricprogression(numbers, n) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] * n) {
            return true
        }
        else {
            return false;
        }
    }
}


console.log(geometricprogression([5, 6]));





//29 trvac tvere kartacen achman kargi hajordakanutyamb






// 30









//31 and 32

function theHighestValueAndanotheristheLowest(numbers) {
    let min = numbers[0];
    let max = numbers[0]

    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i]
        }

        if (numbers[i] > max) {
            max = numbers[i]
        }
    }


    console.log(`The min  is ${min}`);
    console.log(`The max is ${max}`)


}

theHighestValueAndanotheristheLowest([1,6,7,8]) 



//33 kartacen true ete trvac tveric gone meke havasar e meki , aylapes false;

function ifoneofthisisone(a, b, c, d) {

    if (a === 1) {
        return true
    } else if (b === 1) {
        return true
    } else if (c === 1) {
        return true
    } else if (d === 1)
        return true
    else {
        return false;
    }
};

console.log(` it is  ${ifoneofthisisone(1, 2, 3, 4)}`)

//34 ete trvac tveric erku gumare havasar e myus erkusi gumarin apa kartacen true , hakarak depqum false;

function ifabsumcdequal(a, b, c, d) {
    if (a + b === c + d) {
        return true
    } else if (a + c === b + d) {
        return true
    } else if( a + d === c + b ){
        return true
    } else{
        return false;
    }
     

}


console.log(`it is ${ifabsumcdequal(4, 4, 3, 5)}`)

//35 ete trvac tveric meke havasar e myus ereq tveri gumarin apa artacel true hakarak depqum false
function ifaequaltosumbgd(a, b, g, d) {
    if (a === b + g + d) {
        return true;
    } else if(b === a +g + d){
        return true;
    } else if (g === a + b + d){
        return true;
    } else if(d === a + b + g){
        return true;
    } else{
        return false;
    }
}

console.log(`it is ${ifaequaltosumbgd(4, 1, 1, 2)}`);

//36 ete trvac tveric gone erkuse kent en apa kartacen mek hakarak depqum erku


function ifodd(a, b, c, d) {
    if (a % 2 !== 0 && b % 2 !== 0) {
        return 1
    } else if (b % 2 !== 0) {
        return 1
    } else if (c % 2 !== 0) {
        return 1
    } else if (d % 2 !== 0) {
        return 1
    } else {
        return 2
    }
}

console.log(`it is odd or not ,the result is  ${ifodd(7, 18, 18, 18)}`)


//37 


function arithmeticprogression1() {
    const numbers = [1, 2, 3, 4];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] + 2) {
            return true;
        } else {
            return false;
        }
    }
}

console.log(arithmeticprogression1());



//38 

function geometricprogression1() {
    const numbers = [1, 2, 3, 4];
    if (numbers[i] * 2) {
        return true;
    } else {
        return false;
    }
}


console.log(geometricprogression1());



//39


function norm(n) {
    let sum = 1;
    for (i = 0; i < n; i++) {
        if (n % i === 0) {
            sum = sum * i;
        }
    }
    return sum;
}


console.log(norm(80));

//40





//51  

function eranishtiv() {
    let t = true;
    if (851 === 800 + 50) {
        return t;
    } else {
        return !t;
    }
}

console.log(eranishtiv());


//52 

function ernaishtvitv() {

    let t = true;
    if (851 === (8 === 5 === 1)) {
        return t;
    } else {
        return !t
    }
}

console.log(ernaishtvitv());


//53

function eranishtivv() {
    if (851 > k) {
        851 / (8 + 5 + 1)
    } else {
        (8 + 5 + 1) / 851
    }

}


//54 

function tiv() {

}









//56 

function hicunvec() {
    if (800 > 10) {
        return (8 + 1 + 5) / 815;
    }
    else return 815
}

console.log(hicunvec());




//57 

function eranishtivemeca() {
    if (815 > 300) {
        return 10 / 2
    } else {
        return 800 / 10
    }

}

console.log(eranishtivemeca());



//58 


function simvol() {
    let f;
    if (8 + 1 < 5) {
        f = 'b';
    } else {
        f = 'a';
    }
    return f;
}

console.log(simvol());