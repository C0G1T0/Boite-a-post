# Boite-a-post

## Projet React - Redux

Cette application est réalisée avec React et Redux.
J'ai également utilisé une fausse API avec json-server (https://github.com/typicode/json-server) et casual (https://github.com/boo1ean/casual) qui m'a permis de générer des faux posts.

L'idée est de créer une app très basique qui permet de gérer les posts.
L'utilisateur peut créer un post et/ou supprimer un post.
Il peut également grâce à une checkbox trier les posts pour n'afficher que les siens.

Le but de cette app est surtout de pratiquer React et Redux dans la continuité des autres sites créés : https://check-out-the-trailer.herokuapp.com/, http://life-is-short.surge.sh/

C'est également l'occasion de découvrir Redux-form pour gérer les formulaires à l'aide de Redux.

### Pour installer le projet se placer dans le projet et lancer :

```
> npm install
> npm start

Dans une autre fenêtre
> json-server --watch fillDB.js
```

### Etape du projet

- Pratique de React, Redux et du middleware Redux-thunk pour les actions asynchrones
- Création des dumb components
- Création des smart components
- Création des reducers
- Création des actions
- Découverte de Redux-form pour l'ajout de post
- Design : CSS Bootstrap
