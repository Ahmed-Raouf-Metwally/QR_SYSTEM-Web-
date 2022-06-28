
var attend_button = document.getElementsByClassName('attend-button');
var qrContainer = document.querySelector('.qr-container');
var qrCardClose = document.getElementById('qr-card-close');
var qrCodeCancel = document.getElementById('qr-code-cancel');

for (var i = 0; i < attend_button.length; i++) {
    attend_button[i].addEventListener('click', function () {
        qrContainer.classList.replace('d-none', 'd-flex');
    });
}

function close() {
    qrContainer.classList.replace('d-flex', 'd-none');
    qrCodeCancel.classList.replace('d-flex', 'd-none');
}

qrCardClose.addEventListener('click', close);