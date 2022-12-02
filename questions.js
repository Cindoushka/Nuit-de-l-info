let tableauQuestions = [
    {   "id":0,
        "img":"images/bisou.jpg",
        "question":"Un camarade que tu ne souhaites pas embrasser insiste fortement pour que tu le fasses, que fais-tu?",
        "reponse":[
            {1: "Je finis par accepter 🤷‍♂️", nextQ: 1},
            {2: "Je refuse 🙅‍♀️", nextQ: 2}]
    },
    {   "id":1,
        "img":"images/no.jpg",
        "question":"Sache que le refus est OK, si tu n'as pas envie de quelque chose, refuse! Maintenant tu es en couple, vous souhaitez aller plus loin, quel est ton premier reflexe?",
        "reponse":[
            {1: "Vérifier qu'il a un préservatif 🛡", nextQ: 4},
            {2: "Profiter de l'instant 🥰", nextQ: 3}]
    },
    {
        "id":2,
        "img":"images/no.jpg",
        "question":"Très bien! Le refus est OK, ne jamais se forcer à faire ce qu'on ne veut pas! Maintenant tu es en couple, vous souhaitez aller plus loin, quel est ton premier reflexe?",
        "reponse":[
            {1: "Vérifier qu'il a un préservatif 🛡", nextQ: 4},
            {2: "Profiter de l'instant 🥰", nextQ: 3}]
    },
    {
        "id":3,
        "img":"images/preservatif.jpg",
        "question":"C'est normal de vouloir profiter de l'instant, en revanche n'oublie pas de te protéger c'est très important pour se protéger des IST et MST ;) Comme vous n'avez pas mis de préservatif, à quoi penses-tu le lendemain?",
        "reponse":[
            {1: "Je dois faire un depistage au plus vite! 💉", nextQ: 5},
            {2: "À recommencer 😋", nextQ: 6}]
    },
    {
        "id":4,
        "img":"images/preservatif.jpg",
        "question":"Très bon reflexe! Malheureusement, le préservatif a craqué... Quel est ton premier reflexe?",
        "reponse":[
            {1: "Je dois faire un depistage au plus vite! 💉", nextQ: 5},
            {2: "À recommencer 😋", nextQ: 6}]
    },
    {
        "id":5,
        "img":"images/piqures.jpg",
        "question":"Très bon reflexe! Sais-tu également qu'il existe un traitement préventif au VIH après un rapport à risque (le TPE)? Penses-vite à le demander! Ça fait maintenant longtemps que vous êtes ensemble et souhaitez ne plus mettre de préservatifs, comment procèdez-vous?",
        "reponse":[
            {1: "Un nouveau depistage, et ce régulièrement 💉", nextQ: 7},
            {2: "On se fait confiance, on peut y aller! ♥️", nextQ: 8}]
    },
    {
        "id":6,
        "img":"images/piqure.jpg",
        "question":"On te comprend mais il serait plus sage de penser au dépistage au plus vite pour vérifier qu'il n'y a pas de MST/IST et s'il y en a se soigner au plus vite! D'ailleurs maintenant ça fait longtemps que vous êtes ensemble et souhaitez ne plus mettre de préservatifs, comment procèdez-vous?",
        "reponse":[
            {1: "Un nouveau depistage, et ce régulièrement 💉", nextQ: 7},
            {2: "On se fait confiance, on peut y aller! ♥️", nextQ: 8}]
    },
    {
        "id":7,
        "img":"images/omg.jpg",
        "question":"Super, tu es au point là dessus! Malheureusement, tu apprends que tu as la chlamydia...",
        "reponse":[
            {1: "Oh mon dieu je vais mourir! 😱", nextQ: 9},
            {2: "Il y a un traitement non? 🤔", nextQ: 10}]
    },
    {
        "id":8,
        "img":"images/omg.jpg",
        "question":"Et non, même avec une personne à qui on a confiance, il faut se tester avant ET après! D'ailleurs après un test, tu apprends que tu as la chlamydia malheureusement...",
        "reponse":[
            {1: "Oh mon dieu je vais mourir! 😱", nextQ: 9},
            {2: "Il y a un traitement non? 🤔", nextQ: 10}]
    },
    {
        "id":9,
        "img":"images/ouf.jpg",
        "question":"Non ne t'en fais pas! La chlamydia se soigne très bien! Prend ton traitement et c'est du passé, tu feras attention la prochaine fois!",
        "reponse":[
            {1: "Merci pour les infos!", nextQ: 0}]
    },
    {
        "id":10,
        "img":"images/ouf.jpg",
        "question":"En effet la chlamydia se soigne très bien! Prend ton traitement et c'est du passé, tu feras attention la prochaine fois!",
        "reponse":[
            {1: "Merci pour les infos!", nextQ: 0}]
    },
]

let container= document.querySelector('#main');
let buttonAccess= document.querySelector('#boutons');
let imageShow = document.querySelector('#imagejeu');
let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let id = urlParams.get('id');

genButton()

let generateHtml= `
<h1> ${tableauQuestions[id].question}</h1>
`;
// console.log(tableauQuestions[id].reponse[0]["j'accepte"])
console.log(tableauQuestions[id].reponse.length)

let generateImageHtml= `
<img src="${tableauQuestions[id].img}">
`;
// document.createElement(generateImageHtml);

function changeQuestion(){

};


function genButton(){
    for(let i=0; i < tableauQuestions[id].reponse.length; i++) {
        let button = document.createElement("button")
        button.innerHTML = `
        <button onclick="test(this.id)" id="${tableauQuestions[id].reponse[i].nextQ}">${tableauQuestions[id].reponse[i][i+1]}</button>
        `;
        buttonAccess.appendChild(button)
    }
};

function test(id){
    window.location.replace(`http://127.0.0.1:5500/jeu.html?id=${id}`)
}

container.innerHTML=generateHtml,

imageShow.innerHTML=generateImageHtml

