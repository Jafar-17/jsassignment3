
function vowel_count(str1)
{
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  
  for(var x = 0; x < str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}
console.log(vowel_count("hello"));
console.log(vowel_count("the fire box"));

function fizzBuzz(num){
    for(let i=1; i <= num; i++){
        if(i % 3 === 0){
          console.log("Fizz")
        }
        else if(i% 5 === 0){
          console.log("Buzz")
        }
        else if(i % 5 === 0 && i % 3 === 0){
          console.log("FizzBuzz")
        } 
        else {
          console.log(i)
        }
    }
}
fizzBuzz(10,15); 
