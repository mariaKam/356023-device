var contactLink = document.querySelector('.contacts-btn');
var contactModal = document.querySelector('.modal-contact');
var contactForm = contactModal.querySelector('form');
var contactName = contactModal.querySelector('[name=name]');
var contactEmail = contactModal.querySelector('[name=email');
var contactMessage = contactModal.querySelector('[name=message');
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
        contactModal.classList.remove('modal-error');
        contactModal.offsetWidth = contactModal.offsetWidth;
        contactModal.classList.add('modal-error');
    }
    else {
        localStorage.setItem('contactName', contactName.value);
        localStorage.setItem('contactEmail', contactEmail.value);
    }
});

contactClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    contactModal.classList.remove('modal-show');
    contactModal.classList.remove('modal-error');
});

window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
        if (contactModal.classList.contains('modal-show')) {
            contactModal.classList.remove('modal-show');
            contactModal.classList.remove('modal-error');
        }
    }
});

var mapLink = document.querySelector('.contacts-map-image');
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


var sliderIndicator = document.querySelectorAll('.indicator');
var i;

for (i = 0; i < sliderIndicator.length; i++) {

    sliderIndicator[i].addEventListener('click', function () {
        var currentSlide = document.querySelector('.slide.active');
        currentSlide.classList.remove('active');

        var nextSliderId = '#slide-' + this.dataset.slideTo;
        var nextSlider = document.querySelector(nextSliderId);
        nextSlider.classList.add('active');

        var currentSlideIndicator = document.querySelector('.indicator.active');
        currentSlideIndicator.classList.remove('active');
        this.classList.add('active');
    });
}

var tabsNavItem = document.querySelectorAll('.tabs-nav-item');
var c;

for (c = 0; c < tabsNavItem.length; c++) {

    tabsNavItem[c].addEventListener('click', function (evt) {

        evt.preventDefault();

        var currentTab = document.querySelector('.tab-pane.active');
        currentTab.classList.remove('active');

        var nextTabId = '#tab-pane-' + this.dataset.switchTo;
        var nextTab = document.querySelector(nextTabId);
        nextTab.classList.add('active');

        var currentTabsNavItem = document.querySelector('.tabs-nav-item.active');
        currentTabsNavItem.classList.remove('active');
        this.classList.add('active');
    });
}