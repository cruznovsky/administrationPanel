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

var ctx = document.getElementById('myChart').getContext('2d');

var chart = new Chart(ctx, {
    // 1
    type: 'bar',
    data: {
        // 2
        labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
        // 3
        datasets: [{
            // 4
            label: "Signups",
            // 5
            backgroundColor: '#8DBEC8',
            borderColor: '#8DBEC8',
            // 6
            data: [52, 51, 41, 94, 26, 6, 72, 9, 21, 88],
        },
        {
            label: "FTD",
            backgroundColor: '#F29E4E',
            borderColor: '#F29E4E',
            data: [6, 72, 1, 0, 47, 11, 50, 44, 63, 76],
        },
        {
            label: "Earned",
            backgroundColor: '#71B374',
            borderColor: '#71B374',
            data: [59, 49, 68, 90, 67, 41, 13, 38, 48, 48],
            // 7
            hidden: true,
        }]
    },
});

var generalCard = document.getElementById('general');
var detailsCard = document.getElementById('details');
var linksCard = document.getElementById('links');
var bannerCard = document.getElementById('banner');
var personalCard = document.getElementById('personal');
var payoutCard = document.getElementById('payout');
var postbackCard = document.getElementById('postback');

var cards = [
    generalCard, detailsCard, linksCard, bannerCard, personalCard, payoutCard, postbackCard
]


var generalMenu = document.getElementById('generalMenu');
var detailsMenu = document.getElementById('detailsMenu');
var linksMenu = document.getElementById('linksMenu');
var bannerMenu = document.getElementById('bannerMenu');
var personalMenu = document.getElementById('personalMenu');
var payoutMenu = document.getElementById('payoutMenu');
var postbackMenu = document.getElementById('postbackMenu');


var test = document.querySelectorAll('hider');
var testowo = document.querySelectorAll('leftNavbar__menu--item-link');

// detailsMenu.addEventListener('click', function () {
//     generalCard.classList.add('cardHide');
//     detailsCard.classList.remove('cardHide');
// })

detailsMenu.addEventListener('click', function () {
    toogleVisibility(detailsCard)
})

generalMenu.addEventListener('click', function () {
    toogleVisibility(generalCard);
})

linksMenu.addEventListener('click', function () {
    toogleVisibility(linksCard)
})
bannerMenu.addEventListener('click', function () {
    toogleVisibility(bannerCard)
})
personalMenu.addEventListener('click', function () {
    toogleVisibility(personalCard)
})
payoutMenu.addEventListener('click', function () {
    toogleVisibility(pauoutCard)
})
postbackMenu.addEventListener('click', function () {
    toogleVisibility(postbackCard)
})



function toogleVisibility(visibleCard) {
    cards.forEach(function (card) {
        card.classList.add('cardHide');
    })
    visibleCard.classList.remove('cardHide');
}

