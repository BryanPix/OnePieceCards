class onePiece {
    constructor (nom, devilFruit, sea, photo){
        this.nom = nom
        this.devilFruit = devilFruit
        this.sea = sea
        this.photo = photo
    }
}

let luffy = new onePiece('Luffy','Gomu gomu no mi',' East Blue','luffy.jpg');
let law = new onePiece('Law','Ope Ope no mi','North Blue','law.jpg');
let kuzan = new onePiece('kuzan','Hie Hie no Mi','South Blue','kuzan.jpg');
let robin = new onePiece('Robin','Hana Hana no Mi','West Blue','robin.png');


//créer un tableau et le parcourir pour l'afficher dans l'HTML

const onePieceChar = [luffy, law, kuzan, robin];
    
    for (let i = 0; i<=3; i++){
        info.innerHTML += `
        
        <div class="card">
        <p class="information">Nom : ${onePieceChar[i].nom}</p>
        <p class="information">Fruit du démon : ${onePieceChar[i].devilFruit}</p>
        <p class="information">Mer : ${onePieceChar[i].sea}</p>
        <img src="${onePieceChar[i].photo}">
        </div>
        `
    }
    
    
    console.log(luffy);
    console.log(law);
    console.log(kuzan);
    console.log(robin);