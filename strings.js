function CheckInput()
{

    var firstName = document.getElementById("fname").value; // creates a string based on user input
    var LastName = document.getElementById("lname").value;// creates a string based on user input
    var Name = firstName +  " " + LastName; // combines fname and lname to one string
    var len = Name.length; //checks the strings length
    var number = document.getElementById("number").value;// creates a string based on user input
    var reg = number.replace(/[^0-9]/g, "");// replace any non number to an empty string (ie, remove it)
    var len2 = reg.length;//checks the strings length
    if (len >20) //if name is over 20 letters it is invalid
    {
        document.getElementById("loginStatus").innerHTML = "Invalid name length";
    }
    else if (len2 == 10 ) //if number is 10 characters it is valid
    {
        document.getElementById("loginStatus").innerHTML =" Valid login!!!";
    }
    else
    {
        document.getElementById("loginStatus").innerHTML = "Invalid phone number";
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
function nav()
{
    location.replace("nav.html");
}
