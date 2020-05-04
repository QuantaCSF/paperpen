const QPP_ADMINS = [
    'eduardo@ctrlalttec.hackclub.com', //remove     

    'a01027016@itesm.mx', 
    'a01025326@itesm.mx',
    'a01027174@itesm.mx',
    'a01025344@itesm.mx', 
    'a01025320@itesm.mx', 
    'ana.paula.chapa.7@gmail.com',
    'negv@princeton.edu'
]

const QPP_REVIEWERS = [
    'a01025025@itesm.mx', //remvoe

    'aguzmantinajero@tec.mx',
    'ada.godinez@tec.mx',
    'yermainmendez@tec.mx',
    'leticiacruz@tec.mx', 
    'berenice.valencia@tec.mx', 
    'teatreroloco@gmail.com',
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
        'bad': 'No se implementó ninguno de los elementos de ciencia indicados.',
        'normal': 'No se observa investigación o conocimiento de los temas expuestos y éstos no son correspondientes con la realidad',
        'good': 'Se nota investigación y conocimiento superficial de los conceptos científicos aunque existen algunas discordancias con la realidad.',
        'excellent': 'Se nota una investigación y conocimiento profundos de los temas científicos expuestos. Los conceptos científicos interactúan de manera perfecta con los elementos ficticios. Los conceptos científicos se exponen de tal manera que son entendibles para una audiencia con conocimiento general.'
    }, 
    {
        criteria: 'Elementos literarios',
        'bad': 'No se observa el uso de elementos literarios.',
        'normal': 'Los elementos literarios empleados son difíciles de identificar o son implementados deficientemente, disrrumpiendo la narrativa.',
        'good': 'Se observa el uso de elementos literarios que apoyan la narrativa de la historia.',
        'excellent': 'Los elementos del cuento son perfectamente identificables (personajes, espacios, ambiente, trama, etc.). Los elementos se implementan eficientemente y no provocan disrupciones en la narrativa del cuento.',
    }, 
    {
        criteria: 'Redacción',
        'bad': 'La redacción es pobre, confusa y difícil de entender, sin implementación alguna de elementos lingüísticos y con faltas de ortografía y redacción.',
        'normal': 'La redacción cuenta con faltas de ortografía y redacción y hay deficiencia de elementos lingüísticos.',
        'good': 'Se observa una buena redacción con buen uso de elementos lingüísticos.',
        'excellent': 'La redacción del cuento es perfecta, es decir, no es nada confusa y resulta fácil de entender. El cuento contiene e implementa de manera eficaz una variedad de elementos lingüísticos que embellecen el lenguaje.',
    }, 
    {
        criteria: 'Formato',
        'bad': 'El formato es pobre o inexistente. Aparece alguna indicación que revele la identidad del autor.',
        'normal': 'El formato cumple los mínimos necesarios.',
        'good': 'El formato presenta imperfecciones menores.',
        'excellent': 'Sigue el formato APA a la perfección y cumple con todos los requerimientos estructurales expuestos en la convocatoria.'
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