function validateForm(){
    var name= document.getElementById("name").value;
    var user= document.getElementById("user").value;
    var email= document.getElementById("email").value;

    if(name == ""){
        alert("CAMPO ONLIGATORIO");
        return false;
    }
    if(user == ""){
        alert("CAMPO ONLIGATORIO");
        return false;
    }
    if(email == ""){
        alert("CAMPO ONLIGATORIO");
        return false;
    }
    else if(!email.includes("@")){
        alert("DEBE PONER EL @");
        return false;
    }
return true;
}

function showData() {
    var peopleList;
    if(localStorage.getItem("peopleList")== null){
        peopleList = [];
    }
    else{
        peopleList = JSON.parse(localStorage.getItem("peopleList"))
    }

    var html = "";
    peopleList.forEach(function (element, index){
       html += "<tr>";
       html += "<td>" + element.name + "</td>";
       html += "<td>" + element.user + "</td>";
       html += "<td>" + element.email + "</td>";
       html += '<td><button onclick="deleteData(' + index + ')" class="btn btn-danger">Delete</button></td>'
    });
}