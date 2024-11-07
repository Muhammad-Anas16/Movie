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
        Image: 'images/Justice League.jpg',
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

function openViewer() {
    let view = document.getElementsByClassName('viewer')[0];
    view.style.display = 'block';
}

function closeViewer() {
    let view = document.getElementsByClassName('viewer')[0];
    view.style.display = 'none';
}

let setImg = document.getElementById('img1');
setImg.setAttribute('src', data[5].Image);

// for (var i in data) {
//     if (typeof (data[i]) === `object`) {
//         for(var key in data[i]){
//             console.log(key, data[i][key]);
//         }
//     }
// }