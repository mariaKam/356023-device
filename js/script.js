var modal = document.querySelector('.modal');

var contactLink = document.querySelector('.contacts-btn');
var contactModal = document.querySelector('.modal-contact');
var contactForm = modal.querySelector('form');
var contactName = modal.querySelector('[name=name]');
var contactEmail = modal.querySelector('[name=email');
var contactMessage = modal.querySelector('[name=message');
var emailStorage = localStorage.getItem('contactEmail');
var nameStorage = localStorage.getItem('contactName');
var contactClose = contactModal.querySelector('.modal-close');

contactLink.addEventListener('click', function (evt) {
    evt.preventDefault();

    contactModal.classList.add('modal-show');

    var whereFocus = contactName;

    if (nameStorage) {
        contactName.value = nameStorage;
        whereFocus = contactEmail;
    }

    if (emailStorage) {
        contactEmail.value = emailStorage;
        whereFocus = contactMessage;
    }

    whereFocus.focus();
});

contactForm.addEventListener('submit', function (evt) {
    if (!contactName.value || !contactEmail.value || !contactMessage.value) {
        evt.preventDefault();
        console.log('Заполните все поля');
    }
    else {
        localStorage.setItem('contactName', contactName.value);
        localStorage.setItem('contactEmail', contactEmail.value);
    }
});

contactClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    contactModal.classList.remove('modal-show');
});

window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
        if (contactModal.classList.contains('modal-show')) {
            contactModal.classList.remove('modal-show');
        }
    }
});

var mapLink = document.querySelector('.contacts-map-interactive');
var mapModal = document.querySelector('.modal-map');
var mapClose = mapModal.querySelector('.modal-close');

mapLink.addEventListener('click', function (evt) {
    evt.preventDefault();
    mapModal.classList.add('modal-show');
});

mapClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    mapModal.classList.remove('modal-show');
});






















