const centres = [
    {image:"téléchargement.jfif",description:"institut spécialisé de technologie appliquée cartier adarissa avec 4 filieres",
        id: 1,
        titre: "istia adarissa",
        type: "scolaire",
        ville: "fes",
        cartier: "adarissa",contact:"0677072608",localisation:"https://maps.app.goo.gl/gHMknvNfJHXoDjJCA",
        professeur:["soufiane","sayf"],
        niveaux: [
            { id:1,
                nom: "dev",
                groups: [
                    { 
                        emploi: "img/dev1 1.png",
                        nom: "dev1"
                    },
                    { 
                        emploi: "img/dev1 2.png",
                        nom: "dev2"
                    },
                    { 
                        emploi: "img/dev1 3.png",
                        nom: "dev3"
                    }
                ]
            },
            { id:2,
                nom: "devwfs",
                groups: [
                    { 
                        emploi: "img/dev2 1.png",
                        nom: "devwfs1"
                    },
                    { 
                        emploi: "img/dev2 2.png",
                        nom: "devwfs2"
                    },
                    { 
                        emploi: "img/dev2 3.png",
                        nom: "devwfs3"
                    }
                ]
            }
        ]
    }
];

const villes=[{nom:"fes"}];
const cartiers=[{nom:"bensouda",ville:"fes"},{nom:"wed fes",ville:"fes"},{nom:"narjis",ville:"fes"},{nom:"adarissa",ville:"fes"}]
export { centres,villes,cartiers };
