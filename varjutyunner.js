

const numbers = [5,18,30];
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


function etemekehavasaramekin(a,b,c){

if (a === c ){
   return true
} else if (b ===c){
   return true
}else{
    return false
}
};

console.log(etemekehavasaramekin(6,8,6))





function tenanq(g,d,x){
if(g % 2 === 0){
    return 1
}else if( d % 2 ===0){
    return 1
} else if(x % 2 ===0){
    return 1
} else {
    return 2
}

}


console.log(tenanq(2,5,6))


function poqricmec(arr){
 return arr.sort(function(a,b){
    return a -b;
 })
}

let nums = [8,6,7];

let g =  poqricmec(nums);

console.log(g);



function mecicpoqr(arr){
    return arr.sort(function(a,b){
        return b - a;
    });
}


let g1 = mecicpoqr(nums);

console.log(g1)



const numbers1 = [5,18,30,80];
 let min1 = numbers[0];
 let max1 = numbers[0]

for ( i = 0; i < numbers1.length; i++){
    if(numbers1[i] < min1){
       min1 = numbers1[i]
    }

    if(numbers1[i] > max1){
        max1 = numbers1[i]
    }
}


console.log("The min  is "  + min1);
console.log("the max is " + max1)





function etemekehavasaramekin1(a,b,c,d){

    if (a === c ){
       return true
    } else if (b ===c){
       return true
    }else if (c === d){
        return true
    }else{
        return false;
    }
    };
    
    console.log(etemekehavasaramekin1(1,2,3,4))


    function mekigumaremyusinhavasare(a,b,c,d){
        if( a + b === c + d ){
            return true
        }else{
            return false;
        }

    }


    console.log(mekigumaremyusinhavasare(4,4,3,5))


    function etehavasara(a, b, g, d) {
        if (a === b + g + d) {
            return true;
        } else {
            return false;
        }
    }
    
    console.log(etehavasara(4, 1, 1, 2));


    function etekent(a,b,d,c){
     if(a % 2 !==0 ){
        console.log(1)
     }else{
      console.log(2)
     }
    if(b % 2 !==0){
        console.log(1)
     } else{ 
       console.log(2);
     }
     if(d % 2 !==0){
        console.log(1)
     } else{
        console.log(2)
     }
     if(c % 2 !==0 ){
        console.log(1)
     } else{
        console.log(2)
     }
    }
    
    console.log(etekent(18,183,13,4))



    
    function poqricmec(arr){
 return arr.sort(function(a,b){
    return a -b;
 })
}

let nm = [78,68,12,56];

let result =  poqricmec(nm);

console.log(result);



function mecicpoqr(arr){
    return arr.sort(function(a,b){
        return b - a;
    });
}


let result1 = mecicpoqr(nm);

console.log(result1)