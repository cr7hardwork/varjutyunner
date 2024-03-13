
 // 21 and 22
function theHighestandtheLowestValue() {
    const numbers = [5, 18, 30];
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

    console.log("The min is " + min);
    console.log("The max is " + max);
}

theHighestandtheLowestValue();


// 23

function ifequaltoone(a,b,c){

if (a === 1 ){
   return true
} else if (b ===1){
   return true
}else if (c ===1){
    return true
} else{
    return false;
}
};

console.log(ifequaltoone(6,8,6))

//24

function ifequaltotwo(g,d,x){

if(g === 2){
    return true
}else if( d === 2){
    return true
} else if(x === 2){
    return true
} else {
    return false
}

}


console.log(ifequaltotwo(2,5,6))

//25


function triangle(a,b,c){
  if(a+b>c && a +c > b && b +c >a){
    return "y = 1"
  }else{
    return "y = 2"
  }
}

console.log(triangle(5,6,7));




//26


function magilooperator(v,l,j){
    if( v % 2 === 0){
        return 1
    }else if( l % 2 ===0){
        return 1
    } else if ( j % 2 ===0 ){
        return 1
    } else{
        return 2
    }
}

console.log(magilooperator(1,1,1));





//27 

function arithmeticprogression() {
    const numbers = [1, 2, 3];
    
    for (let i = 0; i < numbers.length; i++) {
      if(numbers[i] + 2){
        return true ;
      } else {
        return false;
      }
    }
}

arithmeticprogression();



//28 

function geometricprogression(){
    const numbers = [2,3,4];
      for(let i = 0; i<numbers.length; i++){
  if (numbers[i] * 2){
    return true}
    else{
     return false;
    }
  }
  }


console.log(geometricprogression());





//29


function toLowesttoHighest(){

}



 


 // 30









//31 and 32

function theHighestValu1(){

const numbers = [5,18,30,80];
 let min = numbers[0];
 let max = numbers[0]

for ( i = 0; i < numbers.length; i++){
    if(numbers[i] < min){
       min = numbers[i]
    }

    if(numbers[i] > max){
        max = numbers[i]
    }
}


console.log("The min  is "  + min);
console.log("the max is " + max)


}

theHighestValu1();


//33

function ifoneofthisisone(a,b,c,d){

    if (a === 1 ){
       return true
    } else if (b ===1){
       return true
    }else if (c === 1){
        return true
    }else if (d === 1)
        return true 
    else{
        return false;
    }
};
    
    console.log(ifoneofthisisone(1,2,3,4))

    //34

    function ifabsumcdequal(a,b,c,d){
        if( a + b === c + d ){
            return true
        }else{
            return false;
        }

    }


    console.log(ifabsumcdequal(4,4,3,5))

//35
    function ifaequaltosumbgd(a, b, g, d) {
        if (a === b + g + d) {
            return true;
        } else {
            return false;
        }
    }
    
    console.log(ifaequaltosumbgd(4, 1, 1, 2));

//36


    function ifodd(a,b,c,d){
     if(a % 2 !==0 ){
        return 1
     }else if(b % 2 !==0){
        return 1
     } else if(c % 2 !==0) {
        return 1
     } else if(d % 2 !==0 ){
        return 1
     } else{
        return 2
     }
    }
    
 console.log(ifodd(18,18,18,18))


//37 


function arithmeticprogression1() {
    const numbers = [1, 2, 3, 4];
    
    for (let i = 0; i < numbers.length; i++) {
      if(numbers[i] + 2){
        return true ;
      } else {
        return false;
      }
    }
}

console.log(arithmeticprogression1());



//38 

function geometricprogression1(){
    const numbers = [1,2,3,4];
    if(numbers[i] * 2){
        return true ;
      } else {
        return false;
      }
    }


console.log(geometricprogression1());



    //39





    //40





    //51  

    function eranishtiv(){
      let t = true;
        if(851 === 800+50){
          return t ;
        }else{
            return !t;
        }
    }

    console.log(eranishtiv());


    //52 

    function ernaishtvitv(){

  let t = true;
  if(851 === (8 === 5 === 1)){
    return t;
  }else{
    return !t
  }
    }

    console.log(ernaishtvitv());


    //53

    function eranishtivv(){
        if(851 > k){
            851 / (8+5+1)
        }else{
            (8+5+1) /851
        }

    }


    //54 

function tiv(){

}









//56 

function hicunvec(){
 if(800>10){
    return (8+1+5) / 815;
 }
  else return 815
}

console.log(hicunvec());




//57 

function eranishtivemeca(){
    if(815>300){
        return 10/2
    }else{
     return 800/10
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