function SignIn() {
    p1= document.getElementById("player1_name").value;
    p2= document.getElementById("player2_name").value;
    localStorage.setItem("user1",p1);
    localStorage.setItem("user2",p2);
    window.location="web.html";
 }