const QPP_ADMINS = [
    'eduardo@ctrlalttec.hackclub.com', 
    'a01025025@itesm.mx'
]

const QPP_REVIEWERS = [
    'user@example.com'
]

const QPP_CRITERIA = [
    {
        criteria: 'Creatividad',
        'bad': 'No se observa creatividad en las convenciones o el contenido del texto.',
        'normal': 'Hay clichés aparentes y la ciencia-ficción no es central a la trama.',
        'good': 'El cuento usa un par de conceptos reciclados de otros cuentos y novelas de ciencia-ficción. Los elementos ficticios son atractivos y son fundamentales a la trama del cuento.',
        'excellent': 'El cuento sale de las convenciones establecidas y es innovador: la narrativa es fresca y no recicla demasiados elementos de historias de ciencia ficción existentes. Los elementos ficticios son atractivos y fundamentales para la trama del cuento.'
    }, 
    {
        criteria: 'Implementación de elementos científicos veraces',
        0: 'No se observa creatividad en las convenciones o el contenido del texto.',
        6: 'Hay clichés aparentes y la ciencia-ficción no es central a la trama.',
        11: 'El cuento usa un par de conceptos reciclados de otros cuentos y novelas de ciencia-ficción. Los elementos ficticios son atractivos y son fundamentales a la trama del cuento.',
        16: 'El cuento sale de las convenciones establecidas y es innovador: la narrativa es fresca y no recicla demasiados elementos de historias de ciencia ficción existentes. Los elementos ficticios son atractivos y fundamentales para la trama del cuento.'
    }, 
    {
        criteria: 'Elementos literarios',
        0: 'No se observa creatividad en las convenciones o el contenido del texto.',
        6: 'Hay clichés aparentes y la ciencia-ficción no es central a la trama.',
        11: 'El cuento usa un par de conceptos reciclados de otros cuentos y novelas de ciencia-ficción. Los elementos ficticios son atractivos y son fundamentales a la trama del cuento.',
        16: 'El cuento sale de las convenciones establecidas y es innovador: la narrativa es fresca y no recicla demasiados elementos de historias de ciencia ficción existentes. Los elementos ficticios son atractivos y fundamentales para la trama del cuento.'
    }, 
    {
        criteria: 'Redacción',
        0: 'No se observa creatividad en las convenciones o el contenido del texto.',
        6: 'Hay clichés aparentes y la ciencia-ficción no es central a la trama.',
        11: 'El cuento usa un par de conceptos reciclados de otros cuentos y novelas de ciencia-ficción. Los elementos ficticios son atractivos y son fundamentales a la trama del cuento.',
        16: 'El cuento sale de las convenciones establecidas y es innovador: la narrativa es fresca y no recicla demasiados elementos de historias de ciencia ficción existentes. Los elementos ficticios son atractivos y fundamentales para la trama del cuento.'
    }, 
    {
        criteria: 'Formato',
        0: 'No se observa creatividad en las convenciones o el contenido del texto.',
        6: 'Hay clichés aparentes y la ciencia-ficción no es central a la trama.',
        11: 'El cuento usa un par de conceptos reciclados de otros cuentos y novelas de ciencia-ficción. Los elementos ficticios son atractivos y son fundamentales a la trama del cuento.',
        16: 'El cuento sale de las convenciones establecidas y es innovador: la narrativa es fresca y no recicla demasiados elementos de historias de ciencia ficción existentes. Los elementos ficticios son atractivos y fundamentales para la trama del cuento.'
    }
]

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCP0nXHd7aimWCMBdko_ScE0iyDSIagwqw",
    authDomain: "quantacsf.firebaseapp.com",
    databaseURL: "https://quantacsf.firebaseio.com",
    projectId: "quantacsf",
    storageBucket: "quantacsf.appspot.com",
    messagingSenderId: "211199920750",
    appId: "1:211199920750:web:895b1b98ee3a7fff5f347f",
    measurementId: "G-BX2S5PS0W0"
};