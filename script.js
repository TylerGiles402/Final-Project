var LoginPage = document.body.querySelector(".LoginPage");
var LoginUser = document.body.querySelector(".LoginUser");
var LoginPassword = document.body.querySelector(".LoginPassword");
var SignIn = document.body.querySelector(".SignIn");
var Error = document.body.querySelector(".Error");

var LogOut = document.body.querySelector(".LogOut");
var GradeView = document.body.querySelector(".GradeView");

var OverviewGrades = document.body.querySelector(".OverviewGrades");
var ViewGrades = document.body.querySelector(".ViewGrades");
var AddStudentGrades = document.body.querySelector(".AddStudentGrades");

var AddGrades = document.body.querySelector(".AddGrades");
var AddAGrade = document.body.querySelector(".AddAGarde");
var namesBox = document.body.querySelector(".names");
var gradesBox = document.body.querySelector(".grades");
var messageBox =document.body.querySelector(".message");
var list = [];

OverviewGrades.style.display = "none";
AddGrades.style.display = "none";

function LogInPage(){
  OverviewGrades.style.display = "none";
AddSGrades.style.display = "none";
  LoginPage.style.display = "block";
  
}
function ShowViewGrades(){
  LoginPage.style.display = "none";
  OverviewGrades.style.display = "block";
  AddGrades.style.display = "none";
}
function ShowAddGrades(){
  LoginPage.style.display = "none"
  OverviewGrades.style.display = "none"
  AddGrades.style.display = "block"
}
document.body.querySelector(".LogOut").addEventListener("click",function(){
  LogInPage();
  Error.innerHTML = " "
})
document.body.querySelector(".GradeView").addEventListener("click",function(){
  ShowViewGrades();
})


document.body.querySelector(".SignIn").addEventListener("click",function(){
  if(LoginUser.value == "cool"&& LoginPassword.value == "password"){
    ShowViewGrades();
  }
else if(LoginUser.value == "cool"){
    Error.innerHTML = " "
    document.body.querySelector(".Error").innerHTML = "Incorrect Password"
  }else if(LoginPassword.value == "password"){
    Error.innerHTML= " "
    document.body.querySelector(".Error").innerHTML = "Incorrect Username"
  }else{
     document.body.querySelector(".Error").innerHTML = "Incorrect Username and Password"
  }
})

document.body.querySelector(".AddStudentGrades").addEventListener("click",function(){
  ShowAddGrades()
})

document.body.querySelector(".submit").addEventListener("click",function(){
  messageBox.innerHTML =" ";
  if(namesBox.value.length>=2&&Number(gradesBox.value<=100)&&Number(gradesBox.value>=0)){
    list.push({
      name:namesBox.value,
      grade:gradesBox.value,
    });
    renderList();
    ShowViewGrades()
  }else{
    messageBox.innerHTML = "Invalid Name or Grade"
  }
})

function renderList(){
  document.body.querySelector(".list").innerHTML ="";
  for(var i=0; i<list.length; i++){
    var itmEle = document.createElement("h4");
    itmEle.innerHTML="Name: "+list[i].name + "Grade: "+list[i].grade;
    document.body.querySelector(".list").appendChild(itmEle)
    
  }
}