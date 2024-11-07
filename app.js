
//          all data of object ******************************

let data = [
    {
        name: 'Avengers Endgame',
        Image: 'images/Avengers-endgame.jpg',
        video: 'https://download.cdnnow.co/data9/englishmoviesdub/A/AvengersEndgame.2019.HDRip.Dual.mkv',
    },

    {
        name: 'Avengers Infinty-War',
        Image: 'images/Avengers-Infinty-War.jpg',
        video: 'https://download.cdnnow.co/data7/enlishmoviesdub/A/AvengersInfinityWar.2018.BRRip.Dual.mkv',
    },

    {
        name: 'Batman vs Superman',
        Image: 'images/Batman-vs-Superman.jpg',
        video: 'https://download.cdnnow.co/data1/enlishmoviesdub/B/BatmanVSupermanDawnOfJustice.2016.BRRip.Dual.mkv',
    },

    {
        name: 'Captain America Civil War',
        Image: 'images/Captain-America-Civil-War.jpg',
        video: 'https://download.cdnnow.co/data6/enlishmoviesdub/C/CaptainAmericaCivilWar.2016.BRRip.Dual.mkv',
    },

    {
        name: "Zack Snyder's : Justice League",
        Image: 'images/justice-league.jpg',
        video: 'https://download.cdnnow.co/data1/enlishmoviesdub/Z/ZackSnydersJusticeLeague.2021.BRRip.Dual.mp4',
    },

    {
        name: 'Pacific Rim',
        Image: 'images/Pacific-Rim.jpg',
        video: 'https://download.cdnnow.co/data7/3dmovies/P/PacificRimUprising.2018.3D.BRRip.mp4',
    },

    {
        name: 'Spiderman No Way Home',
        Image: 'images/spiderman-no-way-home.jpg',
        video: 'https://download.cdnnow.co/data1/enlishmoviesdub/S/SpiderManNoWayHome.2021.BRRip.Dual.mp4',
    },

    {
        name: 'Man of Steel',
        Image: 'images/superman-man-of-steel.jpg',
        video: 'https://download.cdnnow.co/data1/enlishmoviesdub/M/ManOfSteel.2013.BRRip.Dual.mkv',
    },

    {
        name: 'Thor',
        Image: 'images/Thor.jpg',
        video: 'https://download.cdnnow.co/data3/enlishmoviesdub/T/Thor.2011.BRRip.Dual.mkv',
    },
]

//          function ****************************************

function openViewer() {
    view.style.display = 'block';
    moviesCard.style.display = 'none';
}

function closeViewer() {
    view.style.display = 'none';
    moviesCard.style.display = 'flex';
}

//           logic ******************************************

let moviesCard = document.getElementsByClassName('section1')[0];
let view = document.getElementsByClassName('viewer')[0];


//           loop ********************************************

for (var i in data) {

    let card = document.createElement('div');
    let cardImage = document.createElement('div');
    let carText = document.createElement('div');
    card.setAttribute('class', 'card');
    card.setAttribute('onClick', 'openViewer()');
    cardImage.setAttribute('class', 'cardImage');
    carText.setAttribute('class', 'carText');
    moviesCard.appendChild(card);
    card.appendChild(cardImage);
    card.appendChild(carText);

    cardImage.innerHTML = `<img src="${data[i].Image}" alt="${data[i].name}">`;
    carText.innerHTML = `<h3>${data[i].name}</h3>`;

    let viewImg =  document.createElement('div');
    viewImg.setAttribute('class', 'viewImg');
    view.appendChild(viewImg);

    viewImg.innerHTML = `<img src="${data[i].Image}" alt="${data[i].name}">`
}