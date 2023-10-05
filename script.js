// definir array

const countries = ["Colombia", "España", "Canada", "Italia"]

// primera función: map()
// devuelve todos los elementos en el array.

document.write((countries.map((myFunction)=>myFunction ) + "<br> "))


//segunda función: every()
// verifica si los elementos del array tienen cinco o más caracteres.

document.write(countries.every((country)=>country.length >=5) + "<br> " )

//tercera función: includes()
// verifica si el elemento "Perú" está en el array

document.write(countries.includes((country) => (country ==="Perú") ) + "<br>")

