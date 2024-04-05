var url = 'http://api.alquran.cloud/v1/surah/';
let translation_url = 'http://api.alquran.cloud/v1/quran/en.asad';//Returns Muhammad Asad's translation of the Holy Quran
let audio_trans_url = 'http://api.alquran.cloud/v1/quran/ar.alafasy';//(Audio) Returns Mishary Alafasy's recitation of the Quran

let all_surahs = document.getElementById("all-surahs");

async function getSurah() {
    for (let i = 1; i <= 114; i++) {
        await fetch(url + i).
            then((response) => response.json()).
            then((data) => {
                console.log(data);
                //localStorage.setItem(`Quran-API${i}`,JSON.stringify(data));

                let card = document.createElement('div');
                card.id='surah-card';
                all_surahs.appendChild(card);

                let title_div = document.createElement("div");
                title_div.id = 'title';
                card.appendChild(title_div);
                title_div.innerHTML = `<span id="title-eng">${data.data.englishName}</span><span id="title-translate">${data.data.englishNameTranslation}</span><span id="title-arab">${data.data.name}</span>`;

                let ul = document.createElement('ul');
                card.appendChild(ul);

                for(let ayah of data.data.ayahs){
                    let li = document.createElement('li');
                    li.id ="ayah";
                    ul.appendChild(li);
                    li.textContent = ayah.text + data.data.number + ":" + ayah.numberInSurah;
                }
            });
    }
}
getSurah();