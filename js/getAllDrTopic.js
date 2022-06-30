let matId = JSON.parse(localStorage.getItem(`drmatid`))

async function getDrTopics() {
    let topic = {
        Mat_ID: matId
    };
    const response = await fetch(`https://qr-atendans.herokuapp.com/getDrAlltopic`, {
        method: "post",
        body: JSON.stringify(topic),
        headers: {
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    });

    let res = await response.json();
    let Topic = await res.Topics
    
    for (let i = 0; i < Topic.length; i++) {
        $(`#topicContainer`).append(`<div class="course col-lg-12 py-3 px-3">
            <a href="#" class="fs-3 text-dark text-decoration-none fw-bold">${Topic[i].Name}</a>
            <p class="mt-3">${Topic[i].Discption}</p>
            <button type="button" class="btn btn-dark details">Details</button>
            <button type="button" class="btn btn-dark showQR">Show QR</button>
            </div>`);
    }
};


