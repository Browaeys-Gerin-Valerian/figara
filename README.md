Le Figara
==
Projet Node.js, site vitrine & back-office
-  
<br><br>

### Brief client 

***   
<br> 

Actuellement, le client utilise un éditeur de texte pour maintenir à jour son site internet. Il présente un fort intérêt pour le developpemet et les technololgies. 

Le client souhaite une refonte de son blog et de son espace d'administration (back-office). Sur le site vitrine, seul les utilisateurs connectés doivent pouvoir accéder aux articles complets ainsi qu'aux pages catégories. Il souhaite que chacun des articles comportent un __questionnaire à choix unique__ (en mode QCM). Les utilisateurs doivent être connectés pour répondre au questionnaire. Si le questionnaire est réussi, alors message d’information doit s'afficher pour tenir informé l’utilisateur. Le site doit avoir une fonction de recherche par mot-clefs.

Il faut garder en mémoire ces données, car la V2 prévoit l'implémentation de statistiques. 

L'__authentification__ doit se faire avec l'email pour le login. Le mot de passe doit comprendre six caractères minimum, dont une majuscule,une minuscule, une lettre, un chiffre et un symbole.

Le client aime beaucoup la simplicité d'utilisation de Wordpress comme back-office.    


<br><br>

### Installation de la bêta

***
<br>

Afin de pouvoir accéder à la démo, veuillez cloner le repo git :


    git clone https://github.com/ValerianGerin/figara.git

Attention, la racine du site vitrine est sur <localhost:3000/app/home>.<br>
Les identifiants pour vous connecter en tant qu'utilisateur lambda sont :


    login : lambda@lambda.com
    mdp :   L@mbd4aa


Ceux en tant qu'admin sont :


    login : admin@lambda.com
    mdp :   Adm1!nn


Si vous souhaitez consulter un article contenant un questionnaire, vous pouvez lire :

+ NodeJS


<br><br>

### Site vitrine: ajouts à prévoir

***
<br>

+ implémenter le formulaire de contact
+ ajout des messages d'erreur et de succès



<br><br>

### Back-office: ajouts à prévoir

***
<br>
Dashboard
<br>

+ générateur de statistiques des articles
+ générateur des data des catégories

<br><br>
Articles
<br>

+ validation de la création d'un article
+ modification d'un article (les controllers sont faits)

<br><br>
Catégories
<br>

+ création, modification, suppression d'une catégorie (les controllers sont faits)

<br><br>
Questionnaires
<br>

+ création, modification, suppression d'un questionnaire (les controllers sont faits)

<br><br>
