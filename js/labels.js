/**
* labels.js
* LABELS FOR TABLES
*/

var menuParams = [
  {
    id:"responsive-left-menu",
    class:"responsive-menu hide-for-small",
  }
];

var menuHeader = [
  {
    title: 'Espace personnel',
    titleClass: 'topTitle',
    delegation: 'Ma délégation'
  }
];

var appLabels = [
  {
    "last_import": "Dernière importation : ",
    "soc_data": "Données sociétaire",
    "birth_date": "Date de naissance :",
    "familySituation" : "Situation familiale",
    "job": "Profession :",
    "address": "Adresse postale :",
    "phone": "TÉLÉPHONE :",
    "mobile_phone": "Mobile :",
    "home_phone": "Fixe :",
    "pro_phone": "Professionnel :",
    "fax_phone": "Fax :",
    "mobile_phone_foyer": "Numéro de téléphone mobile :",
    "home_phone_foyer": "Numéro de téléphone fixe :",
    "pro_phone_foyer": "Numéro de téléphone professionnel :",
    "fax_phone_foyer": "Numéro de fax :",
    "email_member": "e-mail :",
    "quality": "qualité :",
    "email": "E-MAIL :",
    "name": "Nom : ",

    "auto-moto": "Auto-Moto",
    "pacs_label": "Protection du conducteur et des passagers",
    "habitation": "Habitation",
    "health": "Santé-Prévoyance",

    "sinistre_number": "Sinistre N°",
    "vehicle_concerns": "Concerne le véhicule :",
    "plate": "Immatriculation : ",
    "home_concerns": "Concerne l'habitation :",
    "sinistre_address": "Adresse : ",
    "lieuSurvenance" : "Lieu de survenance : ",
    "libelleTypeLieuSurvenance" : "Type de lieu de survenance : ",
    "driver" : "Conducteur : ",

    "place": "lieu",
    "places": "lieux",

    "boat": "bateau",
    "boats": "bateaux",

    "praxis_label": "Protection des accidents corporels de la vie quotidienne",

    "contract": "contrat",
    "contracts": "contrats",
    "vam_insurance": "ASSURANCE VAM",
    "pacs_insurance": "ASSURANCE PACS",
    "raqvam_insurance": "ASSURANCE HABITATION RAQVAM",
    "praxis_insurance": "ASSURANCE CORPORELLE PRAXIS",
    "vehicle": "véhicule",
    "vehicles": "véhicules",
    "price": "Cotisation",
    "insurance_from_date": "Vous êtes assurée depuis le ",
    "for_your_risks": " pour vos risques de propriétaire",
    "formula": "Formule",
    "linked_driver": "Conducteur déclaré",

    "foyer_data": "Données foyer",
    "foyer_infos": "Informations foyer",
    "foyer_name": "Nom du foyer : ",
    "foyer_address": "Adresse du foyer : ",


  }
];

//table's header
var headers = [
  {
    key: 'data',
    label: 'Donnée'
  },
  {
    key: 'description',
    label: 'Description' 
  },
  { 
    key: 'example', 
    label: 'Exemple' 
  }
];

//labels for home accident
var labelshome_accident = [
  {
    "horodatage" : "Date et heure de survenance du sinistre.",
    "lieuSurvenance" : "Lieu de survenance (champ libre : une commune, un numéro d’autoroute, …)",
    "referenceSinistre" : "Référence de l’événement, communiquée au sociétaire pour les relations avec la MAIF (appels, documents …)",
    "codeTypeLieuSurvenance" : "codeTypeLieuSurvenance",
    "typeLieuSurvenance" : "Type du lieu de survenance (Sans information, Agglomération, Rase campagne)",
    "libelleTypeLieuSurvenance" : "Type du lieu de survenance (Sans information, Agglomération, Rase campagne)",
    "address/street" : "Élément d'adresse : numéro de voie", 
    "address/postCode" : "Code postal", 
    "address/city" : "Nom de commune", 
    "address/numeroPays" : "Numéro de pays", 
    "address/country" : "Pays", 
    "address/deliveryOffice" : "Bureau de poste distributeur", 
    "address/inseeCode" : "Code INSEE de la commune", 
    "address/residence" : "Résidence", 
    // "immatriculationVehicule" : "Immatriculation du véhicule assuré  - Si sinistre véhicule",
    // "driver/prefix" : "Genre du conducteur   - Si sinistre véhicule",
    // "driver/family" : "Nom du conduteur   - Si sinistre véhicule",
    // "driver/given" : "Prénom du conducteur   - Si sinistre véhicule",
    "type" : "Type",
    "societaire" : "Sociétaire",
    "driverTypeNumber" : "numéro de conducteur",
  }
];

//meta for home accident
var metahome_accident = [
  "type",
  "societaire",
  "driverTypeNumber"
];

//data to not show in table
var forbiddenhome_accident = [
  "typeLieuSurvenance",
  "address/deliveryOffice",
  "address/inseeCode",
  "address/residence",
  "driver/prefix",
  "driver/family",
  "driver/given"
];


//labels for vehicle accident
var labelsvehicle_accident = [
  {
    "horodatage" : "Date et heure de survenance du sinistre.",
    "lieuSurvenance" : "Lieu de survenance (champ libre : une commune, un numéro d’autoroute, …)",
    "referenceSinistre" : "Référence de l’événement, communiquée au sociétaire pour les relations avec la MAIF (appels, documents …)",
    "codeTypeLieuSurvenance" : "codeTypeLieuSurvenance",
    "typeLieuSurvenance" : "Type du lieu de survenance (Sans information, Agglomération, Rase campagne)",
    "libelleTypeLieuSurvenance" : "Type du lieu de survenance (Sans information, Agglomération, Rase campagne)",
    // "address/street" : "Adresse de l'habitation assurée (rue)  - Si sinistre habitation", 
    // "address/postCode" : "Adresse de l'habitation assurée (code postal  - Si sinistre habitation)", 
    // "address/city" : "Adresse de l'habitation assurée (ville)  - Si sinistre habitation", 
    // "address/numeroPays" : "Adresse de l'habitation assurée (numéro de pays)  - Si sinistre habitation", 
    // "address/country" : "Adresse de l'habitation assurée (pays)  - Si sinistre habitation", 
    "address/deliveryOffice" : "Bureau de poste distributeur", 
    "address/inseeCode" : "Code INSEE de la commune", 
    "address/residence" : "Résidence", 
    "immatriculationVehicule" : "Immatriculation du véhicule assuré  - Si sinistre véhicule",
    "driver/prefix" : "Genre du conducteur",
    "driver/family" : "Nom du conduteur",
    "driver/given" : "Prénom du conducteur",
    "type" : "Type",
    "societaire" : "Sociétaire",
    "driverTypeNumber" : "numéro de conducteur",
  }
];

//meta for vehicle accident
var metavehicle_accident = [
  "type",
  "societaire",
  "driverTypeNumber"
  ];

//data to not show in table
var forbiddenvehicle_accident = [
  "typeLieuSurvenance",
  "address/deliveryOffice",
  "address/inseeCode",
  "address/residence",
  "address/street",
  "address/postCode",
  "address/city",
  "address/numeroPays",
  "address/country"
];


//label for insurance's contract
var labelsinsurance_contract = [
  {
    "societaire" : "Numéro du sociétaire souscripteur du contrat.",
    "name":"Nom du produit",
    // "name/codeTitrePersonne" : "Code titre personne",
    // "name/prefix" : "Civilité",
    // "name/family" : "Nom de famille",
    // "name/given" : "Prénom",
    // "name/maiden" : "Nom de jeune fille",
    "codeFormuleReference" : "Code formule souscrite",
    "formuleBase" : "Formule souscrite dans le contrat",
    "montantTarifTtc" : "Montant du tarif",
    "startDate" : "Date de souscription au contrat",
    "objects/startDate" : "Date d'ajout, pour chaque nouvel objet (véhicule ou habitation) ajouté au contrat.",
    "objects/vehicule/immatriculationVehicule" : "Immatriculation du véhicule",
    "objects/bateau/immatriculationBateau" : "Immatriculation du bateau",
    "objects/lieu/address/street" : "Élément d'adresse : numéro de voie",
    "objects/lieu/address/postCode" : "Code postal",
    "objects/lieu/address/city" : "Nom de commune",
    "objects/lieu/address/numeroPays" : "Numéro de pays",
    "objects/lieu/address/country" : "Pays",
    "objects/lieu/address/deliveryOffice" : "Bureau de poste distributeur", 
    "objects/lieu/address/inseeCode" : "Code INSEE de la commune", 
    "objects/lieu/address/residence" : "Résidence"
  }  
];

//meta for insurance contract
var metainsurance_contract = [
];

var forbiddeninsurance_contract = [
  "objets/lieu/address/deliveryOffice",
  "objets/lieu/address/inseeCode",
  "objets/lieu/address/residence"
];


//labels for foyer
var labelsfoyer = [
  {
    // "name/codeTitrePersonne" : "Code titre personne",
    // "name/prefix" : "Civilité",
    // "name/family" : "Nom de famille",
    // "name/given" : "Prénom",
    // "name/maiden" : "Nom de jeune fille",
    "foyer:" : "  Nom du foyer (nom de famille + nom de la comune)",
    "address/street" : "Élément d'adresse : numéro de voie",
    "address/postCode" : "Code postal",
    "address/city" : "Nom de commune",
    "address/numeroPays" : "Numéro de pays",
    "address/country" : "Pays",
    "address/deliveryOffice" : "Bureau de poste distributeur", 
    "address/inseeCode" : "Code INSEE de la commune", 
    "address/residence" : "Résidence", 
    "membres/name/codeTitrePersonne" : "Code titre personne",
    "membres/name/prefix" : "Civilité de la personne",
    "membres/name/family" : "Nom de la personne",
    "membres/name/given" : "Prénom de la personne",
    "membres/name/maiden" : "Nom de jeune fille de la personne",
    "membres/email" : "Email (seulement pour membres principaux)",
    "membres/telMobile" : "NumeroTelephonePortable (seulement pour membres principaux)",
    "membres/telHome" : "NumeroTelephoneDomicile (seulement pour membres principaux)",
    "membres/telPro" : "NumeroTelephoneProfessionnel (seulement pour membres principaux)",
    "membres/telFax" : "NumeroFax (seulement pour membres principaux)",
    "membres/birthdate" : "Date de naissance de la personne",
    "membres/birthplace/city" : "CommuneNaissance (seulement pour membres principaux)",
    "membres/birthplace/region" : "DepartementNaissance (seulement pour membres principaux)",
    "membres/birthplace/numeroPays" : "Numéro de pays de naissance",
    "membres/birthplace/country" : "PaysNaissance (seulement pour membres principaux)",
    "membres/codeProfessionSocietaire" : "Code profession",
    "membres/profession" : "Profession (seulement pour membres principaux)",
    "membres/codeQualitePersonne" : "Code qualité personne",
    "membres/quality" : "Rôle du membre membre dans le foyer (enfant, ...)"
  }
];

//meta for foyer
var metafoyer = [
  "address/residence",
  "address/deliveryOffice",
  "address/inseeCode"
];

var forbiddenfoyer = [
];


//label for societaire
var labelssocietaire_maif = [
  {
    "name/codeTitrePersonne" : "Code titre personne",
    "name/prefix" : "Civilité de la personne",
    "name/family" : "Nom de la personne",
    "name/given" : "Prénom de la personne",
    "name/maiden" : "NomJeune Fille",
    "email" : "Email",
    "telMobile" : "NumeroTelephonePortable",
    "telHome" : "NumeroTelephoneDomicile",
    "telPro" : "NumeroTelephoneProfessionnel",
    "telFax" : "NumeroFax",
    "birthdate" : "Date de naissance de la personne",
    "birthplace/city" : "Commune de naissance",
    "birthplace/region" : "DépartementNaissance",
    "birthplace/numeroPays" : "Numéro de pays de naissance",
    "birthplace/country" : "PaysNaissance",
    "codeProfessionSocietaire" : "Code profession",
    "profession" : "Profession",
    "codeSituationFamiliale" : "Code situation familiale",
    "familySituation" : "Situation familiale",
    "codeActif" : "actif / retraité",
    "codeEtat" : "TODO",
    "dateEtat" : "TODO",
    "referenceClient" : "TODO Numéro de sociétaire ?",
    "timestampModification" : "Horodatage de dernière modification"
  }
];

//meta for societaire
var metasocietaire_maif = [
  "codeActif",
  "codeEtat",
  "dateEtat",
  "referenceClient",
  "timestampModification"
];

var forbiddensocietaire_maif = [];

//error labels
var errorLabels = {
  "hasToConnect" : "Erreur de chargement des données. Veuillez vous connecter via le Konnector MAIF pour récupérer vos données. ",
  "dataUndefined" : "Erreur lors de la récupération des données.",
  "noData" : "Aucune donnée disponible.",
  "otherError" : "Erreur.",
  "loadingError" : "Erreur lors du chargement des données."
};