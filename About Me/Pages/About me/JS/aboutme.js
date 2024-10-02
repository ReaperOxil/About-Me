function Translation(){
    var x=document.getElementById("subtext1")
    if (x.innerHTML === "I was born in 2005, I studied in CERC, and DHS, having also made a course in fullture for backend and frontend."){
        x.innerHTML = "Eu nasci em 2005, estudei no CERC, e DHS, tambem fiz um curso na Fullture para backend e frontend.";
    }else{
        x.innerHTML = "I was born in 2005, I studied in CERC, and DHS, having also made a course in fullture for backend and frontend."
    }
    var x=document.getElementById("subtext2")
    if (x.innerHTML === "The languages I know are Python, which I studied in DHS, and JavaScript, in which I learned in fullture, however, my strenght point is python"){
        x.innerHTML = "As linguas que eu aprendi são Python, ao qual estudei em DHS, e JavaScript, ao qual eu aprendi na fullture, porem, meu ponto forte é Python";
    }else{
        x.innerHTML = "The languages I know are Python, which I studied in DHS, and JavaScript, in which I learned in fullture, however, my strenght point is python"
    }
}
