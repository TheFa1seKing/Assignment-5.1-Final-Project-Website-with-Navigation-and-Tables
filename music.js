function start()
{
    mysound = new sound ("LIVELOVELIE.mp3");
    mysound.play(); // This will make pressing the butten play music
    document.getElementById( "start").disabled = true; // this is to make it so only one butten can be pressed at a time
    document.getElementById("stop").disabled = false;// this is to make it so only one butten can be pressed at a time
}

function stop()
{
    window.location.reload();// This will reload the page
    document.getElementById("start").disabled = false;// this is to make it so only one butten can be pressed at a time
    document.getElementById("stop").disabled = true;// this is to make it so only one butten can be pressed at a time
}
function sound(src)  // This will take the sound file and make it into an element
{
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.play = function() {
        this.sound.play();
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
