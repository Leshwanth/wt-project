const username = localStorage.getItem("username");

if(username){
    document.getElementById("welcomeText").innerText = "Hello, " + username;
}


function logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("username");

    alert("Logged out successfully!");

    window.location.href = "login.html";
}
