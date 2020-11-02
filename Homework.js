/*1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/
const sum = function(x,y){
    if(x==y){
        return 3 * (x+y); 
    }
    else{
        return x+y;
    }
}
console.log(sum(2,4));
console.log(sum(6,6));
/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/
const check = function(x,y){
    return ((x == 50 || y == 50) || (x + y == 50));
}
console.log(check(50,50));
console.log(check(30,30));
/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/
function remove_character(str, char_pos) 
 {
  part1 = str.substring(0, char_pos);
  part2 = str.substring(char_pos + 1, str.length);
  return (part1 + part2);
 }
 console.log(remove_character("awesome",2));
/*
4)
 Create a function to find the largest of three given integers.
*/
const large = function(x,y,z){
    max_val = 0;
    if (x > y)
    {
      max_val = x;
    } else
    {
      max_val = y;
    }
    if (z > max_val) 
    {
      max_val = z;
    }
    return max_val;
  }
  console.log(large(2,4,6));
/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/
function numbers(x, y) {
    if ((x >= 40 && x <= 60 && y >= 40 && y <= 60) 
        || 
        (x >= 70 && x <= 100 && y >= 70 && y <= 100))
       {
      return true;
       } 
      else 
       {
      return false;
    }
  }
  
  console.log(numbers(44, 56));
/*
6) 
Create a function to create a new string of specified copies (positive number) of a given string.
*/
function string_copies (str, n) 
{
  if (n < 0){
    return false;
  }
  else{
  return str.repeat(n);
  }
}
console.log(string_copies("abhishek", 5));
/*
7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/
const city = function(str){
    if(str.length>=3 && ((str.substring(0,3)=="Los") || (str.substring(0,3)=="New"))){
        return str;
    }
    else{
        return false;
    }
}
console.log(city("Newjersey"));
/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/
const sumofarray = function(nums)
{
  return nums[0] + nums[1] + nums[2];
}

console.log(sumofarray([10, 32, 20])); 
/*
9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/
function contins13(nums) {

    if (nums.includes(1) || nums.includes(3)) {
       return true
    } 
    else
    {
       return false
    }
}

console.log(contins13([1, 5]));  
console.log(contins13([2, 3]));  
console.log(contins13([7, 5])); 

/*
10)
Create a function to test whether an array of integers of length 2 does not contain 1 or a 3*/
const notcontains13 = function(nums){
    if(nums.includes(1) || nums.includes(3)) {
        return false;
    }
    else{
        return true;
    }
}
console.log(notcontains13([2,4]));
console.log(notcontains13([1,5]));


/*11)
Create a function to find the longest string from a given array of strings.*/
/*const longstr = function(str){
    for (i = 0; i <= str.length; i++) {
        if (longstr[i].length() > longstr[i + 1].length()) {
                return (longstr[i]);
            }
        }
        return null;
    }
    console.log(longstr("abcd","elephant","table"));



/*12)
Create a function to find the types of a given angle.
Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    btuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.*/
const typeofangle = function(x){
    let rightangle = 90;
    let straightangle = 180;
    if(x>0 && x<90){
        return Acuteangle;
    }
    else{
        return rightangle;
    }
    if(x>90 && x<180){
      return obtuseangle;
    }
    else{
        return straightangle;
    }
}
console.log(typeofangle(90));
/*13)
Create a function to find the index of the greatest element of a given array of integers
14)
Create a function to get the largest even number from an array of integers.
15)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
16)
Create a function to check from two given integers, whether one is positive and another one is negative.
17)
Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 
18)
Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.
19)
Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:
If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34".
20)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC
*/