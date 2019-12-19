var signoZodiacal = prompt('¿Cual es tu signo zodiacal?');

switch (signoZodiacal) {
    case 'acuario':
        console.log('Delimita tus prioridades');        
        break;
    case 'aries':
        console.log('Dinero, cuando reconoces el error ');        
        break;    
    case 'tauro':
        console.log('El dinero llega con tu madurez ');        
        break; 
    case 'geminis ':
    case 'géminis ':
        console.log('La fortuna llega con tus palabras ');        
        break; 
    case 'cancer ':
    case 'cáncer ':
        console.log('La fortuna te llega por sueños y claves ');        
        break; 

    default: 
        console.log('No tenemos tu signo zodiacal');
        break;
}

