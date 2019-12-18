var x = 4, y = '4';

var sebastian = {

    nombre: 'Sebastian'
}

var pepe = sebastian;

pepe.nombre = 'Pepe';/*Esta linea afectara tanto al nombre de
el objeto pepe como al objeto sebastian, ya que ambos apuntan 
al mismo lugar o referencia*/ 