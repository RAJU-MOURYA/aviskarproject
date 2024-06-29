function myMenuFunction() {
    var i = document.getElementById("navMenu");

    if(i.className === "nav-menu") {
        i.className += " responsive";
    } else {
        i.className = "nav-menu";
    }
   }
 

   var a = document.getElementById("loginBtn");
   var b = document.getElementById("registerBtn");
   var x = document.getElementById("login");
  
   
   var y = document.getElementById("register");

   function login() {
       x.style.left = "4px";
       y.style.right = "-520px";
       a.className += " white-btn";
       b.className = "btn";
       x.style.opacity = 1;
       y.style.opacity = 0;
   }

   function register() {
       x.style.left = "-510px";
       y.style.right = "5px";
       a.className = "btn";
       b.className += " white-btn";
       x.style.opacity = 0;
       y.style.opacity = 1;
   }




   const form = document.querySelector("form");
//     const fullName = document.getElementById("name");
//   const Email = document.getElementById("Email");
//   const phone = document.getElementById("phone");
//    const subject = document.getElementById("subject");
//  const mess = document.getElementById("message");

function sendEmail(){
    // const bodyMessage = `Full Name: ${fullName.value}<br> Email:$
    // {Email.value}<br> Phone Number: ${phone.value}<br> Message: ${mess.value} `;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "projectsolvingman@gmail.com",
        Password : "DCD9AF2894EB857F24711EA889034DF60318",
        To : 'projectsolvingman@gmail.com',
        From : "projectsolvingman@gmail.com",
         Subject : subject.value ,


         Body : "And this is the body"
    }).then(Message => alert(Message)

    //    message => {
    //    if (message=="ok") {
    //         Swal.fire({
    //             title: "Success!",
    //             text: "Message sent successfully!",
    //              icon: "success"
    //            });
    //     }
    //    }
    );
}

// function cheakInputs(){
//     const items = document.querySelectorAll(".item");

//     for(const item of items){
//         if(item.value ==""){
//             item.classList.add("error");
//             item.parentElement.classList.add("error");
//         }
//         item.addEventListener("keyup", () => {
//     if(item.value !=""){

//         item.classList.remove("error");
//         item.parentElement.classList.remove("error");
//     }

//     else{
//         item.classList.add("error");
//         item.parentElement.classList.add("error");
//     }
//         });
//     }
// }
 form.addEventListener("submit",(e) => {
    e.preventDefault();
   sendEmail();
});





