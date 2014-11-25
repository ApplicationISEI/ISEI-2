function radio(radiobutton)
{
     for (var i=0; i<radiobutton.length; i++) {
       if (radiobutton[i].checked)
          break;
     }
     if (i==radiobutton.length)
        return false;
     return radiobutton[i].value;
}


 function verif(date_pas_sure){
 var tabDate = date_pas_sure.split('/');
    dateTest = new Date(tabDate[2], tabDate[1] - 1, tabDate[0]);
    var auj = new Date();
    if(parseInt(tabDate[0], 10) != parseInt(dateTest.getDate(), 10)
            || parseInt(tabDate[1], 10) != parseInt(dateTest.getMonth(), 10) + parseInt(1, 10)
            || parseInt(tabDate[2], 10) != parseInt(dateTest.getFullYear(), 10) ){ // if exist
        return false;
    }
    if (auj<dateTest)
    {return false;
    }
    else
    return true;
    }

function checkRegistry(str){
      var regexp = /^(\d{11}|\d{6} \d{3} \d{2}|\d{6}.\d{3}.\d{2})$/;
            if(!regexp.test(str)){
      return false;
     }
     else{
      return true;

     }
    }

function myFunction() {

       var prenomok = false;
       var nomok = false;
       var validRegistry = false;
       var annivok = false;
       var sexok = false;
       var donok = false;

     var formData = document.formulaire;
     var nom = formData.lname.value;
     var prenom = formData.fname.value;
     var anniv = formData.birth.value;
     var sexe = formData.sex;
     var taille = [formData.height1.value,formData.height2.value];
     var poids = [formData.weight1.value,formData.weight2.value];
     var nation = formData.nationality.value;
     var registry = formData.ID.value;
     var patho = [formData.patho1.value,formData.patho2.value,formData.patho3.value,formData.patho4.value,formData.patho5.value];
     var chir = [formData.chir1.value,formData.chir2.value,formData.chir3.value,formData.chir4.value,formData.chir5.value];
     var allerg = [formData.allerg1.value,formData.allerg2.value,formData.allerg3.value,formData.allerg4.value,formData.allerg5.value];
     var treatment = [formData.treatment1.value,formData.treatment2.value,formData.treatment3.value,formData.treatment4.value,formData.treatment5.value];
     var medtreat = formData.doctor.value;
     var medspe = [formData.spe1.value,formData.spe2.value,formData.spe3.value];
     var donneur = formData.org_donn;


     if(nom==""){
     alert("le nom est vide");
     }  else {
     nomok=true;}

     if(prenom==""){
     alert("le prénom est vide");
     }  else {
     prenomok=true;}

     if(!radio(sexe)){
     alert("sexe non choisi");
     }      else{
           sexok = true;}

     if(!checkRegistry(registry)){
     alert("numéro de registre non valide");
     }    else{
            validRegistry=true;}

     if(!verif(anniv)) {
     alert("date pas valide");}
             else {
             annivok=true;}

     if(!radio(donneur)){
     alert("donneur d'organe non choisi");
     }      else{
           donok = true;}

      if(nomok && prenomok && sexok && validRegistry && annivok && donok)
      {
     var myWin = open("", "","width=600,height=900");
     myWin.document.write("Nom: " +  nom +"<br>");
     myWin.document.write("Prénom: " +  prenom +"<br>");
     myWin.document.write("Date de naissance: " + anniv + "<br>");
     myWin.document.write("Sexe: " + radio(sexe) + "<br>" );
     myWin.document.write("Taille: " + taille[0] + "m" + taille[1] + "cm <br>");
     myWin.document.write("Poids: " + poids[0] + "kg" + poids[1] + "g <br>");
     myWin.document.write("Nationalité: " + nation + "<br>");
     myWin.document.write("Numéro de registre national: " + registry + "<br>");
     myWin.document.write("Groupe sanguin: " + boite1.value + "<br>" );
     myWin.document.write("Pathologies: " + patho[0] + "<br>" + patho[1] + "<br>" + patho[2] + "<br>" + patho[3] + "<br>" + patho[4] + "<br>");
     myWin.document.write("Chirurgies: " + chir[0] + "<br>" + chir[1] + "<br>" + chir[2] + "<br>" + chir[3] + "<br>" + chir[4] + "<br>");
     myWin.document.write("Allergies: " + allerg[0] + "<br>" + allerg[1] + "<br>" + allerg[2] + "<br>" + allerg[3] + "<br>" + allerg[4] + "<br>");
     myWin.document.write("Traitements suivis: " + treatment[0] + "<br>" + treatment[1] + "<br>" + treatment[2] + "<br>" + treatment[3] + "<br>" + treatment[4] + "<br>");
     myWin.document.write("Médecin traitant: " + medtreat + "<br>");
     myWin.document.write("Médecin spécialisés: " + medspe[0] + "<br>" + medspe[1] + "<br>" + medspe[2] + "<br>");
     myWin.document.write("Donneur d'organes: " + radio(donneur) + "<br>" );

       }
     }

function enregistre() {
       
       var prenomok = false;
       var nomok = false;
       var validRegistry = false;
       var annivok = false;
       var sexok = false;
       var donok = false;

     var formData = document.formulaire;
     var nom = formData.lname.value;
     var prenom = formData.fname.value;
     var anniv = formData.birth.value;
     var sexe = formData.sex;
     var taille = [formData.height1.value,formData.height2.value];
     var poids = [formData.weight1.value,formData.weight2.value];
     var nation = formData.nationality.value;
     var registry = formData.ID.value;
     var patho = [formData.patho1.value,formData.patho2.value,formData.patho3.value,formData.patho4.value,formData.patho5.value];
     var chir = [formData.chir1.value,formData.chir2.value,formData.chir3.value,formData.chir4.value,formData.chir5.value];
     var allerg = [formData.allerg1.value,formData.allerg2.value,formData.allerg3.value,formData.allerg4.value,formData.allerg5.value];
     var treatment = [formData.treatment1.value,formData.treatment2.value,formData.treatment3.value,formData.treatment4.value,formData.treatment5.value];
     var medtreat = formData.doctor.value;
     var medspe = [formData.spe1.value,formData.spe2.value,formData.spe3.value];
     var donneur = formData.org_donn;


          if(nom==""){
     alert("le nom est vide");
     }  else {
     nomok=true;}

     if(prenom==""){
     alert("le prénom est vide");
     }  else {
     prenomok=true;}

     if(!radio(sexe)){
     alert("sexe non choisi");
     }      else{
           sexok = true;}

     if(!checkRegistry(registry)){
     alert("numéro de registre non valide");
     }    else{
            validRegistry=true;}

     if(!verif(anniv)) {
     alert("date pas valide");}
             else {
             annivok=true;}

     if(!radio(donneur)){
     alert("donneur d'organe non choisi");
     }      else{
           donok = true;}

      if(nomok && prenomok && sexok && validRegistry && annivok && donok)
      {

     if (typeof(Storage) != "undefined") {
    // Store
    localStorage.setItem("name", nom);
    localStorage.setItem("firstname", prenom);
    localStorage.setItem("anniversaire", anniv);
    localStorage.setItem("sexe", radio(sexe));
    localStorage.setItem("taille", taille[0] + "m" + taille[1] + "cm" );
    localStorage.setItem("poids", poids[0] + "kg" + poids[1] + "g" );
    localStorage.setItem("nationalite", nation );
    localStorage.setItem("numéroregistre", registry);
    localStorage.setItem("sang", boite1.value);
    localStorage.setItem("patho1", patho[0]);
    localStorage.setItem("patho2", patho[1]);
    localStorage.setItem("patho3", patho[2]);
    localStorage.setItem("patho4", patho[3]);
    localStorage.setItem("patho5", patho[4]);
    localStorage.setItem("chir1", chir[0]);
    localStorage.setItem("chir2", chir[1]);
    localStorage.setItem("chir3", chir[2]);
    localStorage.setItem("chir4", chir[3]);
    localStorage.setItem("chir5", chir[4]);
    localStorage.setItem("allerg1", allerg[0]);
    localStorage.setItem("allerg2", allerg[1]);
    localStorage.setItem("allerg3", allerg[2]);
    localStorage.setItem("allerg4", allerg[3]);
    localStorage.setItem("allerg5", allerg[4]);
    localStorage.setItem("treatment1", treatment[0]);
    localStorage.setItem("treatment2", treatment[1]);
    localStorage.setItem("treatment3", treatment[2]);
    localStorage.setItem("treatment4", treatment[3]);
    localStorage.setItem("treatment5", treatment[4]);
    localStorage.setItem("medecintraitant", medtreat);
    localStorage.setItem("medspe1", medspe[0]);
    localStorage.setItem("medspe2", medspe[1]);
    localStorage.setItem("medspe3", medspe[2]);
    localStorage.setItem("donneur", radio(donneur));

} else {
    return alert("Sorry, your browser does not support Web Storage...");
}
}
        }

function recupere() {
     var myWin = open("", "","width=600,height=900");
     myWin.document.write("Nom: " +  localStorage.getItem("name") +"<br>");
     myWin.document.write("Prénom: " +  localStorage.getItem("firstname") +"<br>");
     myWin.document.write("Date de naissance: " + localStorage.getItem("anniversaire") + "<br>");
     myWin.document.write("Sexe: " + localStorage.getItem("sexe") + "<br>" );
     myWin.document.write("Taille: " + localStorage.getItem("taille") + "<br>");
     myWin.document.write("Poids: " + localStorage.getItem("poids") + "<br>");
     myWin.document.write("Nationalité: " + localStorage.getItem("nationalite") + "<br>");
     myWin.document.write("Numéro de registre national: " + localStorage.getItem("numéroregistre") + "<br>");
     myWin.document.write("Groupe sanguin: " + localStorage.getItem("sang") + "<br>" );
     myWin.document.write("Pathologies: " + localStorage.getItem("patho1") + "<br>");
     myWin.document.write(localStorage.getItem("patho2") + "<br>");
     myWin.document.write(localStorage.getItem("patho3") + "<br>");
     myWin.document.write(localStorage.getItem("patho4") + "<br>");
     myWin.document.write(localStorage.getItem("patho5") + "<br>");
     myWin.document.write("Chirurgies: " + localStorage.getItem("chir1") + "<br>");
     myWin.document.write(localStorage.getItem("chir2") + "<br>");
     myWin.document.write(localStorage.getItem("chir3") + "<br>");
     myWin.document.write(localStorage.getItem("chir4") + "<br>");
     myWin.document.write(localStorage.getItem("chir5") + "<br>");
     myWin.document.write("Allergies: " + localStorage.getItem("allerg1") + "<br>");
     myWin.document.write(localStorage.getItem("allerg2") + "<br>");
     myWin.document.write(localStorage.getItem("allerg3") + "<br>");
     myWin.document.write(localStorage.getItem("allerg4") + "<br>");
     myWin.document.write(localStorage.getItem("allerg5") + "<br>");
     myWin.document.write("Traitements suivis: " + localStorage.getItem("treatment1") + "<br>");
     myWin.document.write(localStorage.getItem("treatment2") + "<br>");
     myWin.document.write(localStorage.getItem("treatment3") + "<br>");
     myWin.document.write(localStorage.getItem("treatment4") + "<br>");
     myWin.document.write(localStorage.getItem("treatment5") + "<br>");
     myWin.document.write("Médecin traitant: " + localStorage.getItem("medecintraitant") + "<br>");
     myWin.document.write("Médecin spécialisés: " + localStorage.getItem("medspe1") + "<br>");
     myWin.document.write(localStorage.getItem("medspe2") + "<br>");
     myWin.document.write(localStorage.getItem("medspe3") + "<br>");
     myWin.document.write("Donneur d'organes: " + localStorage.getItem("donneur") + "<br>" );

    }
function efface(){localStorage.clear();
	}	