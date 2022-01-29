nameo= localStorage.getItem("name")
function plsload(){
    document.getElementById("pointo").innerHTML="<b style='color: red'>"+"Wellcome "+nameo+"!"+"</b>"
}
function dio(){
    document.getElementById("hodof").style.display = "none";
}
function myFunction(){
    document.getElementById("agag").src="Alarm-Clock Sound!!!.mp3"
    document.getElementById("hodof").style.display = "block";
}