const centres = [
    {image:"téléchargement.jfif",description:"institut spécialisé de technologie appliquée cartier adarissa avec 4 filieres",
        id: 1,
        titre: "istia adarissa",
        type: "scolaire",
        ville: "fes",
        cartier: "adarissa",contact:"0677072608",localisation:"https://maps.app.goo.gl/gHMknvNfJHXoDjJCA",
        professeur:["boufounas l7san","idrisii asmae","youala asmae","zahar mouna","souad abou el hamama","bakkali hasan"],
        niveaux: [
            { id:1,
                nom: "dev",
                groups: [
                    { 
                        emploi: "https://i.ibb.co/rfSQJH1/dev1-1.png",
                        nom: "dev1"
                    },
                    { 
                        emploi: "https://i.ibb.co/2NfmxDb/dev1-2.png",
                        nom: "dev2"
                    },
                    { 
                        emploi: "https://i.ibb.co/87Kxwm1/dev1-3.pngg",
                        nom: "dev3"
                    }
                ]
            },
            { id:2,
                nom: "devwfs",
                groups: [
                    { 
                        emploi: "https://i.ibb.co/d58X5GX/dev2-1.png",
                        nom: "devwfs1"
                    },
                    { 
                        emploi: "https://i.ibb.co/qDFPMHH/dev2-2.png",
                        nom: "devwfs2"
                    },
                    { 
                        emploi: "https://i.ibb.co/McwH2Jf/dev2-3.png",
                        nom: "devwfs3"
                    }
                ]
            }
        ]
    },

    {image:"https://i.ibb.co/25F0BP5/logo.png",description:"معهد البيت الألماني لتعليم اللغات و الدعم المدرسي و الجامعي das deutsche hause institute fes",
        id: 2,
        titre: "das deutsche hause institute fes",
        type: "langues",
        ville: "fes",
        cartier: "wed fes",contact:"0766548709",localisation:"https://maps.app.goo.gl/3moCKxmTF388Qy5m6",
        professeur:["mohamedd sabiri","sayfdine nabet"],
        niveaux: [
            { id:1,
                nom: "allemand",
                groups: [
                    { 
                        emploi: "https://i.ibb.co/j4PCHyk/Capture111.png",
                        nom: "groupe 1"
                    },{ 
                        emploi: "https://i.ibb.co/yXcPKK7/112.png",
                        nom: "groupe 2"
                    }
                ]
            },
            
        ]
    }
];

const villes=[{nom:"fes"}];
const cartiers=[{nom:"bensouda",ville:"fes"},{nom:"wed fes",ville:"fes"},{nom:"narjis",ville:"fes"},{nom:"adarissa",ville:"fes"}]
export { centres,villes,cartiers };
