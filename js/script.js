// Funkcja otwierająca modal
function openModal(modal) {
    document.querySelectorAll('#overlay > *').forEach(function (modal) {
        modal.classList.remove('show')
    })
    document.querySelector('#overlay').classList.add('show')
    document.querySelector(modal).classList.add('show')
}
// Funkcja zamykająca modal
function closeModal() {
    document.getElementById('overlay').classList.remove('show')
}
// Zamknięcie modala poprzez X lub guzik na dole
document.querySelectorAll('#overlay .js--close').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        e.preventDefault()
        closeModal()
    })
})
// Zamknięcie modala poprzez kliknięcie na ciemne tło
document.querySelector('#overlay').addEventListener('click', function (e) {
    if (e.target === this) {
        closeModal()
    }
})
// Zamknięcie modala poprzez kliknięcie ESC
document.addEventListener('keyup', function (e) {
    if (e.keyCode === 27) {
        closeModal()
    }
})

var newLink = document.getElementsByClassName('addNewLink');
var newBanner = document.getElementsByClassName('addNewBanner');
var onlineChat = document.getElementsByClassName('startChat');
var login = document.getElementById('startLogin');
var exit = document.getElementById('startExit');

newLink[0].addEventListener('click', function () {
    openModal('#newLink');
});
newLink[1].addEventListener('click', function () {
    openModal('#newLink');
});

newBanner[0].addEventListener('click', function () {
    openModal('#newBanner');
});
newBanner[1].addEventListener('click', function () {
    openModal('#newBanner');
});

onlineChat[0].addEventListener('click', function () {
    openModal('#onlineChat');
});

login.addEventListener('click', function () {
    openModal('#login');
});

exit.addEventListener('click', function () {
    openModal('#exit');
});