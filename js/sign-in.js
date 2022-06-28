let email = document.getElementById(`email`);
let password = document.getElementById(`password`);
let form = document.querySelector(`form`);
let userData = {};


form.addEventListener(`submit`, function(e){
    e.preventDefault();
    postdata();
});


let postdata = async function() {
    let signIn = {
        Email: email.value,
        Password: password.value
    };

    const response = await fetch(`https://qr-atendans.herokuapp.com/logIn`, {
        method: "post",
        body: JSON.stringify(signIn),
        headers: {
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    });

    let res = await response.json();

    if (res.LogedIn == true) {

        if (res.Role == 4) {
            userData = {
                userName: res.Name,
                userEmail: res.Email,
                userRole: res.Role,
                logedIn: res.LogedIn,
                userLevel: res.Level,
                userId: res.ID
            };
            open("../Student/Dashboard/home.html","_self");
        }
        else if (res.Role == 3) {
            userData = {
                userName: res.Name,
                userEmail: res.Email,
                userRole: res.Role,
                logedIn: res.LogedIn,
                userId: res.ID
            };
            open("../Teacher/T-Dashboard/home.html","_self");
        }
        else if (res.Role == 2) {
            userData = {
                userName: res.Name,
                userEmail: res.Email,
                userRole: res.Role,
                logedIn: res.LogedIn,
                userId: res.ID
            };
            open("../Administrations portal/A-Dashboard.html","_self");
        }
        else if (res.Role == 1) {
            userData = {
                userName: res.Name,
                userEmail: res.Email,
                userRole: res.Role,
                logedIn: res.LogedIn,
                userId: res.ID
            };
            open("../Super admin/Super Admin Dahboard.html","_self");
        }
       else {
            document.getElementById("alert").classList.remove("visually-hidden");
        }
    }
    localStorage.clear();
    localStorage.setItem("userData", JSON.stringify(userData));
}