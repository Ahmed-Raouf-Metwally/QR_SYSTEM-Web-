async function matTableShow(){

    let response = await fetch(`https://qr-atendans.herokuapp.com/getDBMatrials`, {
        method: `GET`,
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            'Access-Control-Allow-Origin': '*'
        }
    });
    let res = await response.json();
    
    let trs = "";
    for (let i = 0; i < res.Matrials.length; i++) {
        trs += `<tr>
                    <td>${res.Matrials[i].Name}</td>
                    <td>${res.Matrials[i].ID}</td>
                    <td>${res.Matrials[i].Code}</td>
                </tr>`
    }
    document.getElementById("matTable").innerHTML = trs;
    }
    
    matTableShow();