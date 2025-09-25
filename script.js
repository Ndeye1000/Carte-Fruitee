const fruits = [
    { nom: 'Pomme', prix: 300, quantite: 5 },
    { nom: 'Fraise', prix: 250, quantite: 10 },
    { nom: 'Cerise', prix: 150, quantite: 20 }
];

const prixElement = document.getElementById('prix');
fruits.forEach(fruit => {
    const fruitInfo = document.createElement('p');
    fruitInfo.textContent = `Cette ${fruit.nom} coute ${fruit.prix} FCFA et vous en voulez ${fruit.quantite} donc ca vous fera : ${fruit.prix * fruit.quantite} FCFA.`;
    prixElement.appendChild(fruitInfo);
});