function factorial(n) {
    
    if (!this.cache) {
        
        this.cache = {}
    }/*Pregunta si existe una cache de esta funcion sino es asi lo crea*/

   
    if (this.cache[n]) {
        
        return this.cache[n];
    }

    if (n === 1) {
        
        return 1;
    }

    this.cache[n] =  n * factorial(n-1);
    
    return this.cache[n];
}