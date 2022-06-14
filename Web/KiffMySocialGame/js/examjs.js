//Fonctions pour la structure de la page
// 1 - Identification
function identification() { //Je crée ma fonction "identification" qui va structurer ma page HTML
    document.getElementById("identification").innerHTML = `

      <p><h2>Identification</h2></p>
      <div>
        Quel est votre genre ? : <br>
        <input type="radio" id="Gender1" name="gender" value="homme">
        <label for="Gender1">Homme</label>
      </div>

      <div>
        <input type="radio" id="Gender2"
         name="gender" value="femme">
        <label for="Gender2">Femme</label>
      </div>

      <div>
        Nom : <input type="text" id="lname" name="nom" required="required">
        Prénom : <input type="text" id="fname" name="prenom" required="required">
      </div>

      <div>
        E-mail : 
        <input type="text" name="Mail1" id="mail1" required="required">
        Veuillez entrer votre E-mail une seconde fois :
        <input type="text" name="Mail2" id="mail2" required="required"> 
      </div>

      <div>
        Date de Naissance : <input type="date" name="birth" id="birthday">
      </div>

      <div>
        Adresse Postale : Numéro : <input type="number" name="number" id="strnum"> Rue/Avenue : <input type="" name="street" id="str"> Code Postal : <input type="" name="postal" id="postcode">
      </div>

      <div>
        Numéro de téléphone : <input type="tel" name="phone" id="phone">
      </div>

`
}identification();

//2 - Préférences
function preferences() {
    document.getElementById("preferences").innerHTML = `

    <p><h2>Préférences de jeux</h2></p>

    <div>

        Quels sont vos types de jeux préférés ?
        
        <div>

            <div>
                <input type="checkbox" id="Cartes" name="Jeux de cartes">
                    <label for ="Cartes">Jeux de Cartes</label> </input>
            </div>

            <div>
                <input type="checkbox" id="Plateau" name="Jeux de plateau">
                    <label for ="Plateau">Jeux de Plateau</label>
            </div>

            <div>
                <input type="checkbox" id="Strategie" name="Jeux de stratégie">
                    <label for ="Strategie">Jeux de Stratégie</label> </input>
            </div>

            <div>
                <input type="checkbox" id="JdR" name="Jeux de rôles">
                    <label for ="JdR">Jeux de Rôles</label> </input>
            </div>

            <div>
                <input type="checkbox" id="Party" name="Party games">
                    <label for ="Party">Party Games</label> </input>
            </div>

            <div>
                <input type="checkbox" id="Coop" name="Jeux de coopération">
                    <label for ="Coop">Jeux de Coopération</label> </input>
            </div>

            <div>
                <input type="checkbox" id="Versus" name="Jeux de versus">
                    <label for ="Versus">Jeux de Versus</label> </input>
            </div>

            <div>
                <input type="checkbox" id="Solo" name="Jeux solo">
                    <label for ="Solo">Jeux Solo</label> </input>
            </div>

            <div>
                <input type="checkbox" id="Escape" name="Jeux solo">
                    <label for ="Escape">Jeux d'Escape</label> </input>
            </div>
        `
}preferences();

//3 - Avis
function avis() {
    document.getElementById("avis").innerHTML =`
<div id="jeu">
    <label for="game">Sélectionnez un Jeu :</label>

    <select name="game" id="game">
        <option value="default">--Choisissez un jeu--</option>
        <option value="1">Monopoly</option>
        <option value="2">Loups-Garous de Thiercelieux</option>
        <option value="3">Cluedo</option>
        <option value="4">Uno</option>
        <option value="5">Scrabble</option>
        <option value="6">Trivial Pursuit</option>
        <option value="7">Qui Est-ce ?</option>
        <option value="8">Bataille Navale</option>
    </select>
</div>

<div id="commentaire">
    <label for="comment">Ecrivez un commentaire pour le Jeu (200 caractères max):</label>
    <br>
    <textarea type="text" name="comment" maxlength="200" placeholder="Votre commentaire" id="comment"></textarea>
</div>

<div id="notation">
    <label for="note">Donnez une note au Jeu :</label>

    <select name="note" id="note">\t
        <option value="default">--Choisissez une note--</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
    </select>
</div>

`
}avis();

//4 - Fin, on y met les deux boutons d'envoi et de réinitialisation
function fin(){
    document.getElementById("fin").innerHTML =`
    <button type="submit" onclick="envoi(); return false;">Envoyer</button>
    <button type="reset"> Réinitialiser</button> 
`
}fin();

function envoi(){
    if (document.getElementById("mail1").value != document.getElementById("mail2").value) {
        alert("Les deux adresses mail ne correspondent pas");
    }else{

        //1 - On met en mémoire les données pour l'identification
        var genre = document.getElementById("Gender1").checked; console.log("Homme ?", genre);
        var genre = document.getElementById("Gender2").checked; console.log("Femme ?", genre);


        var nom = document.getElementById("lname").value; console.log("Nom :", nom);
        var prenom = document.getElementById("fname").value; console.log("Prenom :", prenom);
        var mail = document.getElementById("mail1").value; console.log("E-mail :", mail);
        var birth = document.getElementById("birthday").value; console.log("Naissance :", birth);
        var number = document.getElementById("strnum").value; console.log("Numero :", number);
        var street = document.getElementById("str").value; console.log("Rue :", street);
        var postal = document.getElementById("postcode").value; console.log("Code Postal :", postal);
        var phone = document.getElementById("phone").value; console.log("Phone :", phone);


        //2 - On met en mémoire les données pour les préférences
        var cartes = document.getElementById("Cartes").checked; console.log("Cartes :", cartes);
        var plateau = document.getElementById("Plateau").checked; console.log("Plateau :", plateau);
        var strategie = document.getElementById("Strategie").checked; console.log("Strategie :", strategie);
        var jdr = document.getElementById("JdR").checked; console.log("JdR :", jdr);
        var party = document.getElementById("Party").checked; console.log("Party :", party);
        var coop = document.getElementById("Coop").checked; console.log("Coop :", coop);
        var versus = document.getElementById("Versus").checked; console.log("Versus :", versus);
        var solo = document.getElementById("Solo").checked; console.log("Solo :", solo);
        var escape = document.getElementById("Escape").checked; console.log("Escape :", escape);


        //3 - On met en mémoire les données pour les avis
        var jeu = document.getElementById("game").value;
        switch (jeu) {
            case "1": jeu = "Monopoly"; console.log(jeu); break;
            case "2": jeu = "Loups-Garous de Thiercelieux"; console.log(jeu); break;
            case "3": jeu = "Cluedo"; console.log(jeu); break;
            case "4": jeu = "Uno"; console.log(jeu); break;
            case "5": jeu = "Scrabble"; console.log(jeu); break;
            case "6": jeu = "Trivial Pursuit"; console.log(jeu); break;
            case "7": jeu = "Qui Est-ce ?"; console.log(jeu); break;
            case "8": jeu = "Bataille Navale"; console.log(jeu); break;
            console.log("Jeu :", jeu);
        }
        var comment = document.getElementById("comment").value;
        console.log("Commentaire :",comment);
        var note = document.getElementById("note").value;
        console.log("Note :", note);

        alert("Votre formulaire a bien été envoyé");


    }
}
