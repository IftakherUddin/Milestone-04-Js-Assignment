// Problem 1: Let’s play a mind game
function myMindGame(num) {
    const multiplyNum = num * 3; 
    const addNum = multiplyNum + 10;
    const divisionNum = addNum/2;
    const restTotalNum =  divisionNum - 5;
    return restTotalNum;
    }


/*
1. The 'num' parameter will multiply 3 with your given argument.
2. After that the function will add 10 with the multiplication result 
3. Then the function will divide the addition result with 2 
4. Form the number the function will minus 5 
5. Finally it will return the  total residue number.
*/


// Problem 2: Finding even or odd

function evenOdd(text) {
    if (text.length % 2 === 0) {
      return 'even';
    } 
    else {
      return 'odd';
    }
  }
  
  /*
  The function will check the  arguments (String) length and if it is an even number  the output will 'even'. Otherwise output will  : 'odd'. 
   */


  // Problem 3: Is Less or Greater than seven
  
  function isLGSeven(number) {
   const minusNum = number - 7;
   if (minusNum < 7 ) {
      return minusNum;
   }

   else if (minusNum >= 7){
       return  minusNum * 2;
   }

   return minusNum; 

  }


// Problem 4: Finding Bad data

function findingBadData(data) {
let  amount = 0; 
for (let i = 0;  i  < data.length ; i++)
if (data[i] < 0 ) {
    amount++;
}


    return amount;

}

/*
The function will return the amount of negative number elements  of from the argument (Array)
If all of the numbers are positive/ greater than zero ,  zero will be the output.

*/




// Problem 5: Convert your gems into diamond 

function  gemsToDiamond(num1, num2, num3) {

    firstFriendsDiamondPower   = 21;
    secondFriendsDiamondPower  = 32;
    thirdFriendsDiamondPower   = 43;
    
    firstFriendsTotalDiamonds   =  num1 * firstFriendsDiamondPower;
    secondFriendsTotalDiamonds  = num2 * secondFriendsDiamondPower;
    thirdFriendsTotalDiamonds   = num3 * thirdFriendsDiamondPower;
    
    const totalDiamonds = firstFriendsTotalDiamonds + secondFriendsTotalDiamonds + thirdFriendsTotalDiamonds;
    
    const conditionAmount = 1000 * 2; 
    
    if (totalDiamonds < conditionAmount)  {
      const restAmount =  totalDiamonds - 2000;
    }
    
    return totalDiamonds; 
    
    
    }
    

/*
  In this function there is three  parameter option for input three amount o number. The function will multiply the number how much gems have each friends. Then add total diamonds each friends have. We have a condition that, if the sum of all diamonds greater  than 
  1000 x 2  / 2000 , then it will minus 2000 form total diamonds. Finally The function will return total diamonds . 
*/