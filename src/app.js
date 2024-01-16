var chocolates = [
  'green',
  'green',
  'green',
  'silver',
  'blue',
  'crimson',
  'purple',
  'red',
  'crimson',
  'purple',
  'purple',
  'green',
  'pink',
  'blue',
  'red',
  'silver',
  'crimson',
  'purple',
  'silver',
  'silver',
  'red',
  'green',
  'red',
  'silver',
  'pink',
  'crimson',
  'purple',
  'green',
  'red',
  'silver',
  'crimson',
  'pink',
  'silver',
  'blue',
  'pink',
  'crimson',
  'crimson',
  'crimson',
  'red',
  'purple',
  'purple',
  'green',
  'pink',
  'blue',
  'red',
  'crimson',
  'silver',
  'purple',
  'purple',
  'purple',
  'red',
  'purple',
  'red',
  'blue',
  'silver',
  'green',
  'crimson',
  'silver',
  'blue',
  'crimson',
  'purple',
  'green',
  'pink',
  'green',
  'red',
  'silver',
  'crimson',
  'blue',
  'green',
  'red',
  'red',
  'pink',
  'blue',
  'silver',
  'pink',
  'crimson',
  'purple',
  'green',
  'red',
  'blue',
  'red',
  'purple',
  'silver',
  'blue',
  'pink',
  'silver',
  'crimson',
  'silver',
  'blue',
  'purple',
  'purple',
  'green',
  'blue',
  'blue',
  'red',
  'red',
  'silver',
  'purple',
  'silver',
  'crimson',
];

// x and y ==> can take any of the values from the below list-
// [ green, red, purple, blue, crimson, silver, pink ]
// z ==> can take a number from 0<=a<=100

//Progression 1: Add z chocolates of x color

function addChocolates(chocolates,color, count){

  if(count<=0){
    return "Number cannot be zero/negative"
  }
  for(let i=0;i<count;i++){
    chocolates.unshift(color);
  }
  // console.log(chocolates)
  // return chocolates;

}

//Progression 2: Remove z chocolates from the top the dispenser

function removeChocolates(chocolates,number){
  if(number<=0){
    return "Number cannot be zero/negative"
  }
  if(number>chocolates.length){
    return "Insufficient chocolates in the dispenser"
  }
  let removdEleArr=[];
  for(i=0;i<number;i++){
    let removedEle=chocolates.shift();
    removdEleArr.push(removedEle);
  }
  return removdEleArr;
}

//Progression 3: Dispense z chocolates

  function dispenseChocolates(chocolates,number){
    if(number<=0){
      return "Number cannot be zero/negative"
    }
    if(number>chocolates.length){
      return "Insufficient chocolates in the dispenser"
    }
    let dispensedArr=[]
    for(i=0;i<number;i++){
      dispensedArr.push(chocolates.pop())
    }
    return dispensedArr;
  }

//Progression 4: Dispense z chocolates of x color

function dispenseChocolatesOfColor(chocolates, number, color) {
  if (number <= 0) {
    return 'Number cannot be zero/negative';
  }
  const colorChocolates = chocolates.filter(choco => choco === color);
  if (number > colorChocolates.length) {
    return 'Insufficient chocolates in the dispenser';
  }
  const NewArray = colorChocolates.slice(-number);
  chocolates = chocolates.filter(chocolate => chocolate !== color || NewArray.indexOf(chocolate) === -1);
  return NewArray;
  }

//Progression 5: Display z chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]

function noOfChocolates(chocolates){
  let value={};

  chocolates.forEach((ele)=>{
    let key=ele;
    if(value[key]==undefined){
      value[key]=1;
    }
    else{
      value[key]++;
    }
  })
  let Arr=[];
  for(let key in value){
    Arr.push(value[key])
  }
  return Arr;
}

//Progression 6: Sort chocolates based on count in each color. Return array of colors

function sortChocolateBasedOnCount(chocolates) {
  const chocolateCounts = {};

  chocolates.forEach((chocolate) => {
    chocolateCounts[chocolate] = (chocolateCounts[chocolate] || 0) + 1;
  });

  const sortedChocolates = chocolates.slice().sort((a, b) => chocolateCounts[b] - chocolateCounts[a]);

  console.log(sortedChocolates);
  return sortedChocolates;
}

//Progression 7: Change z chocolates of x color to y color

function changeChocolateColor(chocolates,number, color, finalColor){

  if(number<=0){
    return 'Number cannot be zero/negative'
  }
  if(color==finalColor){
    return "Can't replace the same chocolates"
  }
  let arr=[];
let count=0;
for(let i=0;i<chocolates.length;i++){
  if(count==number){
    break;
  }
  if(chocolates[i]==color){
    arr.push(finalColor)
  }else{
    arr.push(chocolates[i])
  }
}
return arr;
}

//Progression 8: Change all chocolates of x color to y color and return [countOfChangedColor, chocolates]

function changeChocolateColorAllOfxCount(chocolates,color, finalColor){
  let chocoArray=chocolates.map((i)=>{
   if(i==color){
     return finalColor;
   }else{
     return i;
   }
 });

 let countOfChangedColor=0;
 chocoArray.forEach((i)=>{
   if(i==finalColor){
     countOfChangedColor++;
   }
 });

 console.log([countOfChangedColor, chocoArray])

//  return [countOfChangedColor, chocoArray];

 return color == finalColor
 ? "Can't replace the same chocolates"
 : 
 [countOfChangedColor, chocoArray] 
}

//Challenge 1: Remove one chocolate of x color from the top

//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed


