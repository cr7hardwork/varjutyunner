


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

console.log(`if equal to one  ${ifequaltoone(6, 8, 6)}`)

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



//28

//29 trvac tvere kartacen achman kargi hajordakanutyamb

function toLowesttoHighest(numbers) {
    for (let i = 0; i < numbers.length + 1; i++) {
        for (let j = 0; j < numbers.length + 1 - i; j++) {
            if (numbers[j] < numbers[j - 1]) {
                let temp = numbers[j];
                numbers[j] = numbers[j - 1];
                numbers[j - 1] = temp;
            }
        }
    }

    return numbers;
};
console.log(`achman kargi ${toLowesttoHighest([44, 5, 85])}`)

// 30  trac tvere kartacen nvazman kargi



function toHighesttoLowest(numbers) {
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = 0; j < numbers.length - 1 - i; j++) {
            if (numbers[j] < numbers[j + 1]) {
                let temp = numbers[j];
                numbers[j] = numbers[j + 1];
                numbers[j - 1] = temp;
            }
        }
    }

    return numbers;
};
console.log(`achman kargi ${toHighesttoLowest([44, 5, 85])}`)






//31 and 32

function theHighestValueAndanotheristheLowest(numbers) {
    let min = numbers[0];
    let max = numbers[0]

    for (let i = 0; i < numbers.length; i++) {
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

theHighestValueAndanotheristheLowest([1, 6, 7, 8])



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
    } else if (a + d === c + b) {
        return true
    } else {
        return false;
    }


}


console.log(`it is ${ifabsumcdequal(4, 4, 3, 5)}`)

//35 ete trvac tveric meke havasar e myus ereq tveri gumarin apa artacel true hakarak depqum false
function ifaequaltosumbgd(a, b, g, d) {
    if (a === b + g + d) {
        return true;
    } else if (b === a + g + d) {
        return true;
    } else if (g === a + b + d) {
        return true;
    } else if (d === a + b + g) {
        return true;
    } else {
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


//38 



//39 trvac tvere est achmankargi

function toLowesttoHighestwithfournumber(numbers) {
    for (let i = 0; i < numbers.length + 1; i++) {
        for (let j = 0; j < numbers.length + 1 - i; j++) {
            if (numbers[j] < numbers[j - 1]) {
                let temp = numbers[j];
                numbers[j] = numbers[j - 1];
                numbers[j - 1] = temp;
            }
        }
    }

    return numbers;
};
console.log(`achman kargi ${toLowesttoHighestwithfournumber([44, 5, 85, 2])}`)



//40 trvac tvere est nvazman

function toHighesttoLowestwithfournumber(numbers) {
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = 0; j < numbers.length - 1 - i; j++) {
            if (numbers[j] < numbers[j + 1]) {
                let temp = numbers[j];
                numbers[j] = numbers[j + 1];
                numbers[j + 1] = temp;
            }
        }
    }
    return numbers
}

console.log(`nvazman qaranish tver ${toHighesttoLowestwithfournumber([485, 1, 6, 856])}`)

/*51   t tramabanakan tipi popoxakanin  veragrel true arjeq , ete eranish tvi miavirneri tvanshane havasar e tasnavorneri ev haryuravorneri  tvanshanneri gumarin , 
hakarak depqum artacel false , artacel t popoxakani arjeqe*/

function ifthreenumberequal(x) {
    let t;
    if (Math.floor(x % 10) === Math.floor((x / 10) % 10) + Math.floor(x / 100) % 10) {
        t = true
    } else {
        t = false;
    }
    return t
}

console.log(`The t is ${ifthreenumberequal(122)}`)




//52  tramabanakan t popoxakanin veragrel ture arjeq , ete eranish tvi tvanshanneri mej kan irar havasar tvanshanner , hakarak depqum false , artacel t popoxakani arjeqe

function iftheyareequal(x) {
    let t;
    if (Math.floor(x % 10) === Math.floor((x / 10) % 10)) {
        t = true;
    } else if (Math.floor(x % 10) === Math.floor(x / 100) % 10) {
        t = true;
    } else if (Math.floor((x / 10) % 10) === Math.floor(x / 100) % 10) {
        t = true;
    } else {
        t = false;
    }

    return t;
}

console.log(`The t is ${iftheyareequal(223)}`);


//53  hashvel ev artacel eranish tvi ev ir tvanshanneri gumari haraberutyan arjeqe ete eranish tvie mece trvac k tvic , hakarak depqum  miavorneri tvanshani ev eranish tvi haraberutyan arjeqe

function dividethreenumber(x, k) {
    if (x > k) {
        return x / (Math.floor(x / 100) % 10 + Math.floor((x / 10) % 10) + Math.floor(x % 10))
    } else {
        return (Math.floor(x / 100) % 10 + Math.floor((x / 10) % 10) + Math.floor(x % 10)) / x
    }

}

console.log(dividethreenumber(111, 222))







//54 hasvhel ev artacel eranish tvi tvanshanneric mecaguyni arjeqe;

function thehighestnumber(x) {
    let mecaguynarjeq = 0;
    if (Math.floor(x / 100) % 10 > mecaguynarjeq) {
        mecaguynarjeq = Math.floor(x / 100) % 10;
    }
    if (Math.floor((x / 10) % 10) > mecaguynarjeq) {
        mecaguynarjeq = Math.floor((x / 10) % 10);
    }
    if (Math.floor(x % 10) > mecaguynarjeq) {
        mecaguynarjeq = Math.floor(x % 10)
    }
    return mecaguynarjeq;
}

console.log(`mecaguyn tvanshane ${thehighestnumber(981)}`);


//55 hasvhel ev artacel eranish tvi tvanshanneric poqraguyni arjeqe

function thelowestnumber(x) {
    let thelowest = Infinity;
    if (Math.floor(x / 100) % 10 < thelowest) {
        thelowest = Math.floor(x / 100) % 10;
    }
    if (Math.floor((x / 10) % 10) < thelowest) {
        thelowest = Math.floor((x / 10) % 10);
    }
    if (Math.floor(x % 10) < thelowest) {
        thelowest = Math.floor(x % 10);
    }
    return thelowest;
}

console.log(`poqraguyn tvanshane ${thelowestnumber(231)}`);







//56  Hasvhel ev artacel eranish tvi tvanshanneri gumari ev eranish tvi haraberutyan arjeqe , ete miavorneri tvanshane mec i tasnavorneri tvanshanic , hakarak depqum artacel eranish tive

function ifitgreat(x) {
    if (Math.floor(x % 10) > Math.floor((x / 10) % 10)) {
        return (Math.floor(x / 100) % 10 + Math.floor((x / 10) % 10) + Math.floor(x % 10)) / x
    } else {
        return x;
    }
}

console.log(ifitgreat(816))





/*57  hashvel ev artacel eranish tvi tasnavorneri ev miavorneri tvanshanneri haraberutyan arjeqe 
ete eranish tive mec e 300 ic, hakarak depqum haryuravorneri ev miavorneri haraberutyan arjeqe , entadrvume vor erjanish tvi miavorneri tvnashane havasar che zroyi*/

function ifitgreatthothreehundred(x) {
    if (x > 300) {
        return (Math.floor((x / 10) % 10)) / Math.floor(x % 10)
    } else {
        return (Math.floor(x / 100) % 10) / Math.floor(x % 10)

    }

}

console.log(ifitgreatthothreehundred(442));



/*58  simvolayin f popoxakanin  veragrel "a " arjeqe ete eranish tvi tasnavorneri 
ev haryuravorneri tvanshanneri gumare poqre e 5 ic hakarak depqum "b" arjeq , artacel f i arjeqe;
*/
function simvol(x) {
    let f;
    if ((Math.floor((x / 10) % 10) + Math.floor((x / 100) % 10)) < 5) {
        f = "a"
    } else {
        f = "b"

    }
    return console.log(`The f is ${f}`);
}

simvol(123)
//59 artacel eranish tvi tvanshannere est achman kargi 


//60



/*61 t tramabanakan tipi popoxakanin veragrel true arjeq ete tvi miavirneri 
ev tasnavorneri tvanshanneri gumare havasar e harjuravorneri ev hazaravornerin tvanshanneri gumarin hakarak depqum false; artacel
t popoxakani arjeqe;
*/

function itistrueif(x) {
    let t;
    if ((Math.floor(x % 10) + Math.floor((x / 10) % 10)) === (Math.floor((x / 100) % 10) + Math.floor((x / 1000) % 10))) {
        t = true;
    } else {
        t = false
    }

    return console.log(`The t is ${t}`)
}

itistrueif(5217);

/* 62 hasvhel artacel qaranish tvi haraberutyan arjeqe miavorneri ev haryuravorneri  tvanshanneri gumarin ete qaranish tive poqr e
5000 ic ,hakarak depqum qaranish tvi  haraberutyan  arjeqe hazaravorneri u tasnavorneri  tvanshanneri gumarin ; entadrvume ir qranish tvi miavorneri ev
haryuravorneri  tvanshanneri gumare havasar che zroi;
*/

function fourthousandth(x) {
    if (x < 5000) {
        return x / (Math.floor(x % 10) + Math.floor((x / 100) % 10))
    } else {
        return x / (Math.floor((x / 1000) % 10) + Math.floor((x / 10) % 10))
    }
}

console.log(`the answere is ${fourthousandth(1234)}`)



// 63 artacel 1 ete qaranish tvi tvanshanneri mej ka 1 tvanshane hakarak depqum  0;

function ifinnumberwehaveone(x) {
    if ((Math.floor(x / 1000) % 10) === 1 || (Math.floor(x / 100) % 10) === 1 || Math.floor(x / 10) % 10 === 1 || Math.floor(x % 10) === 1) {
        return "1"
    } else {
        return "0"
    }
};

console.log(ifinnumberwehaveone(4561));

//64  simvolayin y popoxakan veragrel s arjeqe ete qaranish tvi miavorneri ev tasnavorneri gumare havasar e 5 i hakarak depqum d arjeqe , artacel  y i arjeqe


function returnsord(x) {
    let y;
    if (((Math.floor(x % 10)) + (Math.floor(x / 10) % 10)) === 5) {
        y = "s";
    } else {
        y = "d"
    }

    return y;
}

console.log(`The y is ${returnsord(4551)}`)


//65 artacel y = 12 artahaytutyune ete miavorneri ev tasnavorneri tvanshanneri artadryale havasar e 12 in hakarak depqum y = 0 artahaytutyune;

function ifitistwelve(x) {
    if (((Math.floor(x % 10)) * (Math.floor(x / 10) % 10)) === 12) {
        return "y = 12"
    } else {
        return "y=0";
    }
};

console.log(`The answere is ${ifitistwelve(3362)}`)


//66 artacel "yes" ete qaranish tvi arajin ev verjin tvanshanneri mej ka 4 tvanshane hakarak depqum "no";


function yesorno(x) {
    if (((Math.floor(x / 1000) % 10) && (Math.floor(x % 10))) === 4) {
        return "YES";
    } else {
        return "NO";
    }
}


console.log(`The answere is ${yesorno(4114)}`);


//67 artacel "yes " ete qaranish tive havasar e ir tvanshanneri gumari qarakusun ,hakarak depqum "no";

function qaranishtivehavasaretvanshannerigumariqarakusun(x) {
    if (x === Math.pow((Math.floor(x / 1000) % 10) + (Math.floor(x / 100) % 10) + (Math.floor(x / 10) % 10) + (Math.floor(x) % 10), 2)) {
        return "YES";
    } else {
        return "NO";
    }
}


console.log(`The answere is ${qaranishtivehavasaretvanshannerigumariqarakusun(4444)}`)


/*68 Hashvel ev artacel qaranish tvi miavorneri ev haryurarovneri tvanshanneri
 artadryali arjeqe ete miavorneri tvanshane , mec e tasnavorneri tvanshanic hakarak depqum artacel 1 */

function hasvhelevartacel(x) {
    if ((Math.floor(x % 10)) > (Math.floor(x / 10) % 10)) {
        return (Math.floor(x % 10)) * (Math.floor(x / 100) % 10)
    } else {
        return 1;
    }

}

console.log(`the answere is ${hasvhelevartacel(4823)}`)


//69 y popoxakan veragrel 1 arjeqe , ete qaranish tvi tvanshanneri gumare mec e 20 ic hakarak depqum 0 arjeq , artacel y popoxakani arjeqe


function veragrel(x) {
    let y;
    if (((Math.floor(x / 1000) % 10) + (Math.floor(x / 100) % 10) + (Math.floor(x / 10) % 10) + (Math.floor(x) % 10)) > 20) {
        return y = 1;
    } else {
        return y = 0;
    }


}

console.log(`the y is ${veragrel(9999)}`)



//70 y popoxakanin veragrel 0 arjeq ete qaranish tvi tvanshanneri artadryale mec i 200 ic, hakarak depqum 1 arjeq, artacel y popoxakani arjeqe;


function ifgreatthantwohundred(x) {
    let y;
    if (((Math.floor(x / 1000) % 10) * (Math.floor(x / 100) % 10) * (Math.floor(x / 10) % 10) * (Math.floor(x) % 10)) > 200) {
        return y = 0;
    } else {
        return y = 1;
    }


}
console.log(`the y is ${ifgreatthantwohundred(4444)}`);



//151 tpel bolor ayn bnkanan tveri gumare voronc vra aranc mnacordi bajanvum a trvac n bnakan tive;

function bnkanatvervoroncvrabajanvumenbnakantvie(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        if (n % i === 0) {
            sum = sum + i
        }
    }
    return sum;
}

console.log(`the answere is ${bnkanatvervoroncvrabajanvumenbnakantvie(10)}`)


//152 tpel bolor ayn bnakan tveri artadryale voroc vra arajc mnacordi bajanvume trvac n bnakan tvie;
function tveriartadryal(n) {
    let product = 1;
    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            product *= i;
        }
    }
    return product;
}

console.log(`the answere is ${tveriartadryal(22)}`);


//153 tpel bolor ayn bnakan tveri gumare voronc vra trvac n bnakan tvie bajanelis kmna mnacord 2;


function mnacorderkus(n) {
    let sum = 0;
    for (let i = 1; i < n; i++) {
        if (n % i === 2)
            sum = sum + i
    }


    return sum;

}


console.log(`the answere is ${mnacorderkus(10)}`);





//154 tpel bolor ayn bnakan tveri artadryale voronc vra trvac n bnakan tive bajanelis kmna 3 mnacord


function mnacordereq(n) {
    let product = 1;
    for (let i = 1; i < n; i++) {
        if (n % i === 3)
            product = product * i
    }


    return product;

}


console.log(`the answere is ${mnacordereq(18)}`);



//155  tpel bolor ayn erknish tveri gumare voronq bazmapatik en 3 tvin;


function erknishtverigumare(n) {
    let sum = 0;
    for (let i = 10; i < n; i++) {
        if (i % 3 === 0)
            sum = sum + i;
    }
    return sum;
}

console.log(`the answere is ${erknishtverigumare(22)}`);

//156 tpel bolor ayn erknish tveri artadryale voronq bazmapatik en 3 ev 5 i;


function erknishtviartadryal(n) {
    let product = 1;
    for (let i = 10; i < n; i++) {
        if (i % 3 === 0 && i % 5 === 0)
            product *= i;
    }
    return product;
}

console.log(`the answere is ${erknishtviartadryal(25)}`);


//157 tpel bolro ayn eranish tveri artadryale voronq bazmapatik chen 5 tvin;

function eranishtivebazmapatikche(n) {
    let sum = 0;
    for (let i = 100; i < n; i++) {
        if (i % 5 !== 0) {
            sum = sum + i;
        }
    }
    return sum;
}

console.log(`the answere is ${eranishtivebazmapatikche(111)}`);

//158 tpel bolor ayn eranish tveri artadryale,voronq bazmapatik chen 2 ev 3 tvin;

function eranishtveriartadryal(n) {
    let product = 1;
    for (let i = 100; i < n; i++) {
        if (i % 2 !== 0 && i % 3 !== 0) {
            product *= i;
        }
    }
    return product;
}

console.log(`the answere is ${eranishtveriartadryal(111)}`);


//159 tpel bolor eranish tveri artadryale voronq 3 i bajanelis kmna 1 mnacord is 4 bajanelis 2 mnacord;

function eranishtveriartadryaleereqievchorsi(n) {
    let product = 1;
    for (let i = 100; i < n; i++) {
        if (i % 3 === 1 && i % 4 === 2) {
            product *= i;
        }
    }
    return product;
}

console.log(`the answere is ${eranishtveriartadryaleereqievchorsi(111)}`);


//160  tpel ayn amenapoqr eranish tive vore 16 iv bazmapatkelis darnum a bnakan tvi qarakusi;

function smallestThreeDigitNumber() {
    for (let i = 100; i < 1000; i++) {
       return Math.sqrt(i * 16)
    }
}

console.log(smallestThreeDigitNumber());


//161 tpel ayn amenapoqr qaranish tive vore 26 ov bazmapatkelis darnum e bnakan tvi qarakusi;

function smallestFourDigitNumber() {
    for (let i = 1000; i < 10000; i++) {
        return Math.floor(Math.sqrt(i * 26))
    }
}

console.log(smallestFourDigitNumber());


//162 tpel ayn amenamec qaranish tive vore. 14 ov bazmapatkelis darnum e bnakan tvi qaraksui;

function largestFourDigitNumber(){
    for(let i = 9999 ; i > 1000 ; i--){
        return Math.floor(Math.sqrt(i * 14))
    }
}

console.log(largestFourDigitNumber());

//163 tpel ayn amenamec qaranish tive vore 18 ov bazmapatkelis darnum e  bnakan tvi qarakusi;

function largestFourDigitNumberproductiwth18(){
    for(let i = 9999; i > 1000; i--){
        return Math.floor(Math.sqrt(i * 18));
    }
};

console.log(largestFourDigitNumberproductiwth18())

//164 tpel ayn amenapoqr eranish tive , vori qarakusi armate mec e trvac n bnakan tvic




//165  t tramabanakan tipi popoxakanin veragrel true arjeq ete trvac n bnakan tive 3 in astichan e hakarak depqum false;

function ifthreenumberisdegree(n){
    let t;
    if(Math.cbrt(n) === 3){
        t = true;
    }else{
        t = false;
    }

    return t;
}

console.log(`the answere is ${ifthreenumberisdegree(30)}`)


//166 y popoxakanin veragrel  0 arjeq ete trvac n bnakan tive 4 in astichan che , hakarak depqum 1;

function yiszeroifitnotrue(n) {
    let y;
    if (Math.cbrt(n) !== 4) {
        y = 0;
    } else {
        y = 1;
    }
    return y;
}

console.log(`the answer is ${yiszeroifitnotrue(64)}`);





















