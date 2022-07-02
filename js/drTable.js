async function drTableShow(){

let response = await fetch(`https://qr-atendans.herokuapp.com/getDBDoctors`, {
    method: `GET`,
    headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        'Access-Control-Allow-Origin': '*'
    }
});
let res = await response.json();

let trs = "";
for (let i = 0; i < res.Doctors.length; i++) {
    trs += `<tr>
                <td>${res.Doctors[i].Name}</td>
                <td>${res.Doctors[i].ID}</td>
                <td>${res.Doctors[i].Email}</td>
            </tr>`
}
document.getElementById("drTable").innerHTML = trs;
}

drTableShow();