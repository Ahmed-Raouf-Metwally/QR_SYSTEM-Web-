async function stuTableShow(){

    let response = await fetch(`https://qr-atendans.herokuapp.com/getDBStudent`, {
        method: `GET`,
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            'Access-Control-Allow-Origin': '*'
        }
    });
    let res = await response.json();
    
    let trs = "";
    for (let i = 0; i < res.Students.length; i++) {
        trs += `<tr>
                    <td>${res.Students[i].Name}</td>
                    <td>${res.Students[i].ID}</td>
                    <td>${res.Students[i].Email}</td>
                </tr>`
    }
    document.getElementById("stuTable").innerHTML = trs;
    }
    
    stuTableShow();