'use trict';
const actionForm = document.querySelector('#action');
actionForm.addEventListener('submit', async function(e){
  e.preventDefault();
  let searchKey = document.querySelector('#query').value;
  try{
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchKey}`);
    const jsonData = await response.json();
    let results = document.querySelector('#results');
    results.innerHTML = ""
    for (let data of jsonData){
      let h2 = document.createElement('h2');
      h2.innerHTML = data.show.name;
      let a = document.createElement('a');
      a.setAttribute('href', data.show.url);
      a.setAttribute('target', '_blank');
      a.innerText = 'Link';
      let img = document.createElement('img');
      img.setAttribute('src', data.show.image?.medium);
      img.setAttribute('alt', data.show.name);
      let div = document.createElement('div');
      div.innerHTML = data.show.summary;
      let article = document.createElement('article');
      article.appendChild(h2);
      article.appendChild(a);
      article.appendChild(img);
      article.appendChild(div);
      results.appendChild(article);

    }
  } catch (error) {
    console.log(error.message);
  }
})