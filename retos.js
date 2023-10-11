const getNestedRecordsExample = () => [
    {
      id: 1,
      nombre: 'Camila Lopez',
      detalles: {
        descripcion: 'matricula normal',
        contacto: {
          email: 'clopez@mail.com',
		  telefono: 83242834
        },
		valorMatricula: 200000
      },
    },
    {
      id: 2,
      nombre: 'Pedro Perez',
      detalles: {
        descripcion: 'beca',
        contacto: {
          email: 'pperez@mail.com',
		  telefono: 83242834
        },
		valorMatricula: 0
      },
    },
    {
      id: 3,
      nombre: 'Juan Yarce',
      detalles: {
        descripcion: 'matricula normal',
        contacto: {
          value: 'jyarce@mail.com',
		  telefono: 1122334455
        },
		valorMatricula: 400000
      },
    },
	{
      id: 4,
      nombre: 'Alberto Benitez',
      detalles: {
        descripcion: 'matricula condicional',
        contacto: {
          value: 'abenitez@mail.com',
		  telefono: 234534566
        },
		valorMatricula: 600000
      },
    },
  ];



const matriculaTotal = getNestedRecordsExample().reduce((accumulator, matricula) =>accumulator+matricula.detalles.valorMatricula, 0) 

document.write("El total de la matrícula es: $" + matriculaTotal)


// sobre la misma data o función en un array obtener los datos de contacto teléfono de los estudiantes

const contactoTel = getNestedRecordsExample().filter(contacto=> 
  {
    document.write("<br> " + "Teléfono de contacto: "+ contacto.detalles.contacto.telefono, 0);
   
  })


//obtener el nombre del estudiante con mayor valor de matricula
  


const mayorValor = getNestedRecordsExample().reduce((estudianteMayorValor, estudiante) =>
  {
    return estudiante.detalles.valorMatricula <estudianteMayorValor.detalles.valorMatricula 
      ? estudianteMayorValor : estudiante;
  }
  
  
  ) 

document.write("<br> "+ "El estudiante con mayor valor de matrícula es: " + mayorValor.nombre + "<br> ")


//Obtener el correo del estudiante con matricula condicional




const matriculaCondicional = getNestedRecordsExample()

const encontrarCondicional = matriculaCondicional.find(encontrar=> encontrar.detalles.descripcion === "matricula condicional")

const encontrarCorreo = encontrarCondicional.detalles.contacto.email


document.write("<br> "+ "El correo del estudiante con matrícula condicional es: " + encontrarCorreo)
