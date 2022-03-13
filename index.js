const apiKey = 'qONGDMuM_kTCzoMK__jyCgDzd0k3wCjCHm9D1vHuN8M';
const keywordInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-btn');
const imageContainers = document.querySelectorAll('.img');
let keyword = 'winter';
const apiUrl = 'https://api.unsplash.com/search/photos';
let images;
getData();

async function getData(){
    const url = `${apiUrl}?query=${keyword}&per_page=30&orientation=landscape&client_id=${apiKey}`;
    const result = await fetch(url);
    const data = await result.json();
    images = data.results;
    updateGallery();
}
keywordInput.addEventListener('input', updateKeyword);
function updateKeyword(event){
    keyword = event.target.value;
}

function updateGallery(){
    let arraySrc = images.map(function(item){
        return item.urls.regular;
    })
   imageContainers.forEach(function(item, i){
       item.style.backgroundImage = `url(${arraySrc[i]})`;
   })
}
searchButton.addEventListener('click', getData);

keywordInput.addEventListener('keydown', pressEnter);
function pressEnter(event){
    if(event.code == 'Enter'){
        console.log('beep')
        getData();
    }
}


console.log(`
Вёрстка +10\n
При загрузке приложения на странице отображаются полученные от API изображения +10\n
Если в поле поиска ввести слово и отправить поисковый запрос, на странице отобразятся изображения соответствующей тематики, если такие данные предоставляет API +10\n
Поиск +30\n
    Total score: 60/70`);