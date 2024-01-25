
var submitbtn=document.getElementById("submitbtn")
var france=document.getElementsByName("france")
var planet=document.getElementsByName("planet")
var earth=document.getElementsByName("earth")
var resultsection=document.getElementById("resultsection")


submitbtn.addEventListener('click',function(){

    var score=0;

for(i=0;i<france.length;i++){
    if(france[i].checked&&france[i].value==="paris"){
        score+=1
    }
}

for(i=0;i<planet.length;i++){
    if(planet[i].checked&&planet[i].value==="mars"){
        score+=1
    }
}

for(i=0;i<earth.length;i++){
    if(earth[i].checked&&earth[i].value==="blue whale"){
        score+=1
    }
}

    resultsection.textContent=`Score : ${score}`
})

