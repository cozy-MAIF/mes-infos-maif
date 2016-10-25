/**
* subsets.js
* contains list of elements and associated subsets
*/

var elements = [
    {
        "contracts":
        {
            "title": "Mes contrats",
            "id": "menu_contracts",
            "class":"menu_item active"
        },
        "claims":
        {
            "title": "Mes sinistres",
            "id": "menu_claims",
            "class":"menu_item"
        },
        "infos":
        {
            "title": "Mes infos personnelles",
            "id": "menu_infos",
            "class":"menu_item"
        },
        "foyer":
        {
            "title": "Mon foyer",
            "id": "menu_foyer",
            "class":"menu_item"
        }
    }
];



var elements_old = [
  {
    //REMOVED WAITING FROM ELEMENT_CLASS
    /*"Communication" :
      {
        "title" : "Communication",
        "id"    : "domicile",
        "class" : "typology",
        "subsets" : [
        ]
      },*/
    "domicile":
      {
        "title" : "Domicile",
        "id"    : "communication",
        "class" : "typology",
        "subsets" : [
          {
            "element_id" : "home_accident",
            "element_class" : "toggle",
            "title" : "Sinistre Habitation",
            "title_classes" : "dynamic_element",
            "link_class" : "detenteur",
            "link_href" :   "#?Détenteur=maif",
            "link_title" : "Toutes les données de Maif",
            "img_src" : "img/typologies/logo_maif.png",
            "img_title" : "Maif",
            "desc_title" : "Un sinistre, à mon domicile (date, lieu, ...)",
            "desc_class" : "dynamic_element toHide-home_accident",
            "content_id" : "content-home_accident",
            "json_id" : "insuranceClaim"
          }
        ]
      },
    "déplacement":
      {
        "title" : "Déplacement",
        "id"    : "deplacement",
        "class" : "typology",
        "subsets" : [
          {
            "element_id" : "vehicle_accident",
            "element_class" : "toggle",
            "title" : "Sinistre Véhicule",
            "title_classes" : "dynamic_element",
            "link_class" : "detenteur",
            "link_href" :   "#?Détenteur=maif",
            "link_title" : "Toutes les données de Maif",
            "img_src" : "img/typologies/logo_maif.png",
            "img_title" : "Maif",
            "desc_title" : "Un sinistre sur mon véchiule (date, lieu, immatriculation, conducteur, ...)",
            "desc_class" : "dynamic_element toHide-vehicle_accident",
            "content_id" : "content-vehicle_accident"
          }
        ]
      },
    "finance":
      {
        "title" : "Finance",
        "id"    : "finance",
        "class" : "typology",
        "subsets" : [
          {
            "element_id" : "insurance_contract",
            "element_class" : "toggle",
            "title" : "Contrats d'assurance Maif",
            "title_classes" : "dynamic_element",
            "link_class" : "detenteur",
            "link_href" :   "#?Détenteur=maif",
            "link_title" : "Toutes les données de Maif",
            "img_src" : "img/typologies/logo_maif.png",
            "img_title" : "Maif",
            "desc_title" : "Désigne le type de contrat d'assurance, son tarif, et les risques assurés.",
            "desc_class" : "dynamic_element toHide-insurance_contract",
            "content_id" : "content-insurance_contract"
          }
        ]
      },
    /*"Loisir" :
      {
        "title" : "Loisir",
        "id"    : "loisir",
        "class" : "typology",
        "subsets" : [
        ]
      },*/
    "profil":
      {
        "title" : "Profil",
        "id"    : "profil",
        "class" : "typology",
        "subsets" : [
          {
            "element_id" : "foyer",
            "element_class" : "toggle",
            "title" : "Foyer",
            "title_classes" : "dynamic_element",
            "link_class" : "detenteur",
            "link_href" :   "#?Détenteur=maif",
            "link_title" : "Toutes les données de Maif",
            "img_src" : "img/typologies/logo_maif.png",
            "img_title" : "Maif",
            "desc_title" : "Désigne les membres du foyer et leur rôle dans le foyer",
            "desc_class" : "dynamic_element toHide-foyer",
            "content_id" : "content-foyer"
          },
          {
            "element_id" : "societaire_maif",
            "element_class" : "toggle",
            "title" : "Sociétaire Maif",
            "title_classes" : "dynamic_element",
            "link_class" : "detenteur",
            "link_href" :   "#?Détenteur=maif",
            "link_title" : "Toutes les données de Maif",
            "img_src" : "img/typologies/logo_maif.png",
            "img_title" : "Maif",
            "desc_title" : "Identification et moyen de contact du souscripteur : Nom, prénom, adresse, date de naissance, ...",
            "desc_class" : "dynamic_element toHide-societaire_maif",
            "content_id" : "content-societaire_maif"
          }
        ]
      },
  }
];