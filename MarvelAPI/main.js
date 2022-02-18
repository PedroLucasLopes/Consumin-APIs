"use strict";

const ts = '1645127916';
const publicKey = '90b0c1ec297c61c399dc56fb24578e19';
const privateKey = 'dbc85589a4c5201e699bfc210eea12db1f5489a7';
const md5 = '603dbb38fc1b983d46322632cf9bb78e';

fetch(`http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${md5}`)
    .then(response => {
        return response.json();
    })
    .then(responseJson => {
        responseJson.data.results.forEach(element => {
            const image = element.thumbnail.path;
            const extension = element.thumbnail.extension;
            const name = element.name;

            heroesHTML(image, extension, name)
        })
    })

const body = document.querySelector('body');
const ul = document.createElement('ul');

body.appendChild(ul);

function heroesHTML(image, extension, name) {
    const li = document.createElement('li');
    ul.appendChild(li);

    const img = document.createElement('img')
    img.src = `${image}.${extension}`;
    img.classList.add('image-hero');
    li.appendChild(img)

    const heroName = document.createElement('p')
    heroName.textContent = name;
    li.appendChild(heroName)
}