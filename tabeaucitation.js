// On va selectionner nos elements
let nouveau = document.querySelector('#nouveau')// notre id nouveau bouton, pour charger notre nouvelle cit;
let citation  = document.querySelector('#citation');// Afficher notre citation et la changer
let auteur    = document.querySelector('#auteur');// selectionner notre auteur et on pourra le modifier

 //On va creer des variables utiles:
 let dernier   = 0;// recuperrer la derniere citations affiches pour eviter les repetitions, index O
let nombreAleatoire = 0;// va contenir le nbr aléatoire généré

// detecterle clicklorsque le btn "nouvelle citation est cliqué"

// Tableau de citations
let citations = [
    ["La vie est un mystère qu'il faut vivre, et non un problème à résoudre.", "Gandhi"],
    ["Le plus grand risque est de ne prendre aucun risque.", "Mark Zuckerberg"],
    ["Méritez votre statut de leader chaque jour.", "Mickael Jordan"],
    ["Soyez le changement que vous voulez voir dans le monde.", "Gandhi"],
    ["A chaque fois que vous vous retrouvez du même côté que la majorité, il est temps de prendre du recul, et de réfléchir.", "Mark Twain"],
    ["Seulement ceux qui prendront le risque d’aller trop loin découvriront jusqu’où on peut aller.", "T.S Elliot"],
    ["Le succès c’est tomber sept fois, se relever huit.", "Proverbe japonais"],
    ["Dans vingt ans vous serez plus déçus par les choses que vous n’avez pas faites que par celles que vous avez faites. Alors sortez des sentiers battus. Mettez les voiles. Explorez. Rêvez. Découvrez.", "Mark Twain"],
    ["Si vous attendez pour agir, tout ce que vous gagnerez, avec le temps, c’est de l’âge.", "Brian Tracy"],
    ["Quand on concentre son attention sur un seul projet, l’esprit suggère constamment des idées et des améliorations qui lui échapperaient s’il était occupé avec plusieurs projets en même temps.", "P.T. Barnum"],
    ["Se dédier à faire tout ce que l’on peut pour aider les autres à obtenir ce qu’ils veulent, c’est la clé du succès.", "Brian Sher"],
    ["Si vous pensez que vous êtes trop petit pour avoir de l’impact, essayez d’aller au lit avec un moustique.", "Anita Roddick"],
    ["Ne jugez pas chaque jour sur ce que vous récoltez, mais sur les graines que vous semez.", "Robert Louis Stevenson"],
    ["L’action est la clé fondamentale de tout succès.", "Pablo Picasso"],
    ["Le succès, c’est se promener d’échecs en échecs tout en restant motivé.", "Winston Churchill"],
    ["Votre avenir est créé par ce que vous faîtes aujourd’hui, pas demain.", "Robert T. Kiyosaki"],
    ["Ne vous découragez pas, c’est souvent la dernière clef du trousseau qui ouvre la porte.", "Zig Ziglar"],
    ["Pour gagner votre vie, apprenez à l’école. Pour gagner une fortune, apprenez par vous-même.", "Brian Tracy"],
    ["Les gagnants trouvent des moyens, les perdants des excuses…", "F. D. Roosevelt"],
    ["Vous n’êtes jamais trop vieux pour vous fixer de nouveaux buts, ou rendre vos rêves réalité.", "C.S. Lewis"],
    ["Un pessimiste voit la difficulté dans chaque opportunité. Un optimiste voit une opportunité dans chaque difficulté.", "Winston Churchill"]
  ];
// on vadevoir d'abord generer un nvre entier car Math Randomdernier   = 0;// recuperrer la derniere citations affiches pour eviter les repetitions, index O
function genererNombreEntier(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
// Math random va generer un nbr entre 0 et 1 par ex 0.8 suite à ca on va le *Math.floor(max)), la fct flloor ca renvoie l'entier au max
// ex : 5,1 = 5



  // detecterle clicklorsque le btn "nouvelle citation est cliqué"
  nouveau. addEventListener('click',() => {
  do {
    nombreAleatoire = genererNombreEntier(citations.length);
  } while (nombreAleatoire == dernier)
  //console.log(nombreAleatoire)
  citation.textContent = citations[nombreAleatoire][0];
  auteur.textContent   = citations[nombreAleatoire][1];
  dernier              = nombreAleatoire;
  });
 