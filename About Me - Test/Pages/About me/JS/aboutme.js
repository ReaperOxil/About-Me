var text1=document.getElementById("subtext1")
var text2=document.getElementById("subtext2")


function Translation(){
    if (text1.innerHTML === "I was born in 2005, I studied in CERC, and DHS, having also made a course in fullture for backend and frontend."){
        text1.innerHTML = " Eu nasci em 2005, estudei no CERC, e DHS, tambem fiz um curso na Fullture para backend e frontend."
    }else{
        text1.innerHTML = "I was born in 2005, I studied in CERC, and DHS, having also made a course in fullture for backend and frontend."
    }
    if (text2.innerHTML === "The languages I know are Python, which I studied in DHS, and JavaScript, in which I learned in fullture, however, my strenght point is python"){
        text2.innerHTML = "As linguas que eu aprendi são Python, ao qual estudei em DHS, e JavaScript, ao qual eu aprendi na fullture, porem, meu ponto forte é Python";
    }else{
        text2.innerHTML = "The languages I know are Python, which I studied in DHS, and JavaScript, in which I learned in fullture, however, my strenght point is python"
    }
}

