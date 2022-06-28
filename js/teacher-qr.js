
var showQR = document.getElementsByClassName('showQR');
var qrContainer = document.querySelector('.qr-container');
var qrCardClose = document.getElementById('qr-card-close');
var qrCodeCancel = document.getElementById('qr-code-cancel');
var addNewTopic = document.getElementById('addNewTopic');
var topicContainer = document.querySelector('.new-topic-container');
var topicCardClose = document.getElementById('new-topic-close');
var topicCancle = document.getElementById('new-topic-cancel');
var details = document.getElementsByClassName('details');
var cardDetails = document.getElementById('card-details');
var detailsContainer = document.querySelector('.topic-details-container');
var detailsCardClose = document.getElementById('topic-details-close');
var detailsCancle = document.getElementById('topic-details-cancel');

for (var i = 0; i < showQR.length; i++) {
    showQR[i].addEventListener('click', function () {
        qrContainer.classList.replace('d-none', 'd-flex');
    });
}

for (var s = 0; s < details.length; s++) {
    details[s].addEventListener('click', function () {
        detailsContainer.classList.replace('d-none', 'd-flex');
        cardDetails.innerHTML = `<h3 class="fw-bold">Lecture Name</h3>
        <p class="h5 my-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit ratione quisquam soluta recusandae iste qui consequatur nesciunt aperiam obcaecati eos labore praesentium necessitatibus, officiis cumque ullam, quibusdam aliquid perferendis! Repudiandae!</p>`
    });
}

function close() {
    qrContainer.classList.replace('d-flex', 'd-none');
    topicContainer.classList.replace('d-flex', 'd-none');
    detailsContainer.classList.replace('d-flex', 'd-none');
}

qrCardClose.addEventListener('click', close);
qrCodeCancel.addEventListener('click', close);
topicCancle.addEventListener('click', close);
topicCardClose.addEventListener('click', close);
detailsCancle.addEventListener('click', close);
detailsCardClose.addEventListener('click', close);


addNewTopic.addEventListener(`click`, function () {
    topicContainer.classList.replace('d-none', 'd-flex');
});