const API_KEY = "40c63784d027ab34a085d0280782474f53094bc503c188c00a2260bef213adfd"
let url = new URL(`http://data4library.kr/api/libSrch?format=json&authKey=${API_KEY}`);
let articles = [];

const getLibs = async () => {
    let object = await fetch(url);
    let data = await object.json();
    articles = data.response.libs;
    console.log(articles[0].lib);

    render();
}



const render = () => {
    let resultHTML = ``;
    for ( let i = 0; i < articles.length; i++) {
        resultHTML += `<p>${articles[i].lib.libName}</p>`
    }
    document.querySelector('#libs-list').innerHTML = resultHTML
}



getLibs()
