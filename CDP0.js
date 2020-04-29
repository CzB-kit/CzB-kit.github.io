$(document).ready(function() {
    var entries = [
        { label: 'COMMUN', url: 'https://drive.google.com/file/d/1RPataEvneEbH3ssVZt607v0os-kpdASF/preview', target: '_top' },
        { label: 'DESIGN', url: 'https://drive.google.com/file/d/1RPataEvneEbH3ssVZt607v0os-kpdASF/preview', target: '_top' },
        { label: 'PROBLEME', url: 'https://drive.google.com/file/d/1RPataEvneEbH3ssVZt607v0os-kpdASF/preview', target: '_top' },
        { label: 'Commoneur', url: 'https://drive.google.com/file/d/1RPataEvneEbH3ssVZt607v0os-kpdASF/preview', target: '_top' },
        { label: 'Utilisateur', url: 'https://drive.google.com/file/d/1RPataEvneEbH3ssVZt607v0os-kpdASF/preview', target: '_top' },
        { label: 'Éthique', url: 'https://drive.google.com/file/d/1RPataEvneEbH3ssVZt607v0os-kpdASF/preview', target: '_top' },
        { label: 'Consommateur', url: 'https://drive.google.com/file/d/1RPataEvneEbH3ssVZt607v0os-kpdASF/preview', target: '_top' },
        { label: 'Individu', url: 'https://drive.google.com/file/d/1RPataEvneEbH3ssVZt607v0os-kpdASF/preview', target: '_top' },
        { label: 'Ressources', url: 'https://drive.google.com/file/d/1RPataEvneEbH3ssVZt607v0os-kpdASF/preview', target: '_top' },
        { label: 'Low-Tech', url: 'https://drive.google.com/file/d/1RPataEvneEbH3ssVZt607v0os-kpdASF/preview', target: '_top' },
        { label: 'Bon design', url: 'https://drive.google.com/file/d/1RPataEvneEbH3ssVZt607v0os-kpdASF/preview', target: '_top' },
        { label: 'Matériel', url: 'https://drive.google.com/file/d/1RPataEvneEbH3ssVZt607v0os-kpdASF/preview', target: '_top' },
        { label: 'Connaissance', url: 'https://drive.google.com/file/d/1RPataEvneEbH3ssVZt607v0os-kpdASF/preview', target: '_top' },
        { label: 'Savoir', url: 'https://drive.google.com/file/d/1RPataEvneEbH3ssVZt607v0os-kpdASF/preview', target: '_top' },
        { label: 'Faire', url: 'https://drive.google.com/file/d/1RPataEvneEbH3ssVZt607v0os-kpdASF/preview', target: '_top' },
        { label: 'Projet', url: 'https://drive.google.com/file/d/1RPataEvneEbH3ssVZt607v0os-kpdASF/preview', target: '_top' },
        { label: 'Durable', url: 'https://drive.google.com/file/d/1RPataEvneEbH3ssVZt607v0os-kpdASF/preview', target: '_top' },
        { label: 'Soutenable', url: 'https://drive.google.com/file/d/1RPataEvneEbH3ssVZt607v0os-kpdASF/preview', target: '_top' },
        { label: 'COnvivial', url: 'https://drive.google.com/file/d/1RPataEvneEbH3ssVZt607v0os-kpdASF/preview', target: '_top' },
        { label: 'Partage', url: 'https://drive.google.com/file/d/1RPataEvneEbH3ssVZt607v0os-kpdASF/preview', target: '_top' },
        { label: 'Générer', url: 'https://drive.google.com/file/d/1RPataEvneEbH3ssVZt607v0os-kpdASF/preview', target: '_top' },

    ];

    var settings = {

        entries: entries,
        width: '100%',
        height: '100%',
        radius: '65%',
        radiusMin: 75,
        bgDraw: true,
        bgColor: 'transparent',
        opacityOver: 1.00,
        opacityOut: 0.05,
        opacitySpeed: 6,
        fov: 800,
        speed: .3,
        fontFamily: 'calibri',
        fontSize: '24',
        fontColor: '#000000',
        fontWeight: 'normal', //bold
        fontStyle: 'normal', //italic 
        fontStretch: 'normal', //wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
        fontToUpperCase: true

    };

    //var svg3DTagCloud = new SVG3DTagCloud( document.getElementById( 'holder'  ), settings );
    $('#tag-cloud').svg3DTagCloud(settings);

});