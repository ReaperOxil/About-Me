var title = "Hello World! My name is Davi";
var wordlist = title.split("");
var timer
console.log(wordlist)
function Typer(){
   
    if(wordlist.length > 0){
        document.getElementById("title").innerHTML += wordlist.shift();
        console.log(wordlist)
    } else {
        clearTimeout(timer);
        return false
    }
    timer = setTimeout('Typer()',70)
    console.log(wordlist)
}

Typer()
