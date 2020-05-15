const QPP_ADMINS = [
    'eduardo@ctrlalttec.hackclub.com', //remove    
     //remove
    'a01027016@itesm.mx', 
    'a01025326@itesm.mx',
    'a01027174@itesm.mx',
    'a01025344@itesm.mx', 
    'a01025343@itesm.mx', 
    'a01025320@itesm.mx', 
    'negv@princeton.edu',
    'a01025025@itesm.mx',
]

const QPP_REVIEWERS = [
    'aguzmantinajero@tec.mx',
    'alfredoguzmant@gmail.com',
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
        'bad': 'No se implementó ninguno de los elementos de ciencia estipulados en la Guía de Temas. Es imposible identificar la investigación realizada por el autor, previo a escribir el cuento.',
        'normal': 'Se observa investigación o conocimiento superficial de los temas expuestos. El tema (o temas) elegido(s) casi no está(n) presente(s) en la historia. Tema e ideas principales salen del rango abordado por esta convocatoria.',
        'good': 'Se nota investigación y conocimiento suficientes de los conceptos científicos. Los elementos científicos existen, pero no están bien integrados.',
        'excellent': 'Se nota una investigación y conocimiento profundos de los temas científicos expuestos. Los conceptos científicos interactúan de manera perfecta con los elementos ficticios. Los conceptos científicos se exponen de tal manera que son comprensibles para una audiencia con conocimiento general.'
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
        'good': 'Se observa una buena redacción con buen uso de elementos lingüísticos. Sin embargo, el cuento está algo enredado, con un hilo narrativo que se rompe de vez en cuando.',
        'excellent': 'La redacción del cuento es perfecta, es decir, no es nada confusa y resulta fácil de entender, a pesar de (posiblemente) incorporar estructuras narrativas complejas. El cuento contiene e implementa de manera eficaz una variedad de elementos lingüísticos que embellecen el lenguaje.',
    }, 
    {
        criteria: 'Formato',
        'bad': 'El formato es pobre o inexistente. El cuento resulta imposible o muy difícil de leer. Existe algún archivo, plantilla, logo externo que empobrezca la presentación. El o la estudiante rompe el anonimato, al mencionar o dar indicio de: nombre, profesor o profesora, grupo, programa, matrícula, etc.',
        'normal': 'El formato presenta errores graves. El cuerpo del documento rebasa por mucho las seis páginas o es un microcuento de unos cuantos párrafos. La tipografía hace difícil la lectura. Hay *exceso* de violaciones a las bases de la convocatoria con fines artísticos.',
        'good': 'El formato presenta imperfecciones menores. No se cita donde es necesario citar. Los márgenes distan mucho de una pulgada. El interlineado dista mucho de 1.5. El cuento se pasa por una o dos páginas de lo acordado.',
        'excellent': 'Sigue el formato a la perfección o muy bien. Los errores son menores, como no centrar el título, no justificar el texto o un interlineado ligeramente distinto de 1.5 que no perjudica la comprensión'
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
