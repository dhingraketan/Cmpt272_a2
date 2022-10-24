

var studScores = [];
var studNames = [];
var totalCount = 0;

function init(){
  document.getElementById('fileInput').addEventListener("change", handleFileSelect, false);
}

function handleFileSelect(event){
  const reader = new FileReader()
  reader.onload = handleFileLoad;
  reader.readAsText(event.target.files[0])
}

function handleFileLoad(event){
  var stuInfo = event.target.result;
  var studs = stuInfo.split(/\r?\n/);
  var studLength = Object.keys(studs).length;

  for (var i = 1; i < studLength; i++){
    var splitStud = studs[i].split(',');
    var studName = splitStud[0].trim();
    var studScore = splitStud[1];
    studNames.push(studName);
    studScores.push(studScore);
  }

  totalCount = Object.keys(studScores).length
  document.getElementById("total-stud-count").textContent = totalCount;

}


var maxLB = document.getElementById("max-value");
var aPlusLB = document.getElementById("a-plus-value");
var aLB = document.getElementById("a-value");
var aMinusLB = document.getElementById("a-minus-value");
var bPlusLB = document.getElementById("b-plus-value");
var bLB = document.getElementById("b-value");
var bMinusLB = document.getElementById("b-minus-value");
var cPlusLB = document.getElementById("c-plus-value");
var cLB = document.getElementById("c-value");
var cMinusLB = document.getElementById("c-minus-value");
var dLB = document.getElementById("d-value");
var fLB = document.getElementById("f-value");

maxLB.addEventListener("change", updateBars(), false);
aPlusLB.addEventListener("change", updateBars(), false);
aLB.addEventListener("change", updateBars(), false);
aMinusLB.addEventListener("change", updateBars(), false);
bPlusLB.addEventListener("change", updateBars(), false);
bLB.addEventListener("change", updateBars(), false);
bMinusLB.addEventListener("change", updateBars(), false);
cPlusLB.addEventListener("change", updateBars(), false);
cLB.addEventListener("change", updateBars(), false);
cMinusLB.addEventListener("change", updateBars(), false);
dLB.addEventListener("change", updateBars(), false);
fLB.addEventListener("change", updateBars(), false);

function updateBars(){
  var aPlusStuds = 0;
  var aStuds = 0;
  var aMinusStuds = 0;
  var bPlusStuds = 0;
  var bStuds = 0;
  var bMinusStuds = 0;
  var cPlusStuds = 0;
  var cStuds = 0;
  var cMinusStuds = 0;
  var dStuds = 0;
  var fStuds = 0;

  for(var i = 0; i < totalCount; i++){

    var score = studScores[i];
    if(score >= fLB.value && score < dLB.value){
      fStuds++;
    } else if(score >= dLB.value && score < cMinusLB.value){
      dStuds++;
    } else if(score >= cMinusLB.value && score < cLB.value){
      cMinusStuds++;
    }else if(score >= cLB.value && score < cPlusLB.value){
      cStuds++;
    } else if(score >= cPlusLB.value && score < bMinusLB.value){
      cPlusStuds++;
    } else if(score >= bMinusLB.value && score < bLB.value){
      bMinusStuds++;
    } else if(score >= bLB.value && score < bPlusLB.value){
      bStuds++;
    } else if(score >= bPlusLB.value && score < aMinusLB.value){
      bPlusStuds++;
    } else if(score >= aMinusLB.value && score < aLB.value){
      aMinusStuds++;
    } else if(score >= aLB.value && score < aPlusLB.value){
      aStuds++;
    } else if(score >= aPlusLB.value && score <= maxLB.value){
      aPlusStuds++;
    }
  }

  var px = 20*aPlusStuds;
  document.getElementById("a-plus-bar").style.width = "300px";

}


