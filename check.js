function palindrome_check(){  //funtion to check if the string is a palindrome
    var input =document.getElementById("input").value;  //get the value from user input
    var reg = /[^a-zA-Z0-9]/g;  // replace any non word character to an empty string (ie, remove it)
    var string = input.toLowerCase().replace(reg, "");  //converts the string to lowercase letters.
    var reversed = string.split("").reverse().join("");  //splits the string into characters, reverses it, then makes it back into a string
    if (reversed === string){  //checks if the string is a palindrome then produces a result
     document.getElementById("result").innerHTML =  
     " It is a palindrome. ";  
    }  
    else{  
     document.getElementById("result").innerHTML =  
     " It is not a palindrome. ";  
    }  
   }  
   function boards()
{
    location.replace("boards.html");
}
function meme()
{
    location.replace("meme.html");
}
function game()
{
    location.replace("game.html");
}
function check()
{
    location.replace("check.html");
}
function user()
{
    location.replace("strings.html");
}
function move()
{
    location.replace("move.html");
}
function music()
{
    location.replace("music.html");
}
function boards()
{
    location.replace("boards.html");
}
function meme()
{
    location.replace("meme.html");
}
function game()
{
    location.replace("game.html");
}
function check()
{
    location.replace("check.html");
}
function user()
{
    location.replace("strings.html");
}
function move()
{
    location.replace("move.html");
}
function music()
{
    location.replace("music.html");
}
function nav()
{
    location.replace("nav.html");
}
