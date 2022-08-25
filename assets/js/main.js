// ----------------- month and year -----------------
// if month and year are not in the storage sets month and year to current real time month and year
(seleccionAutomaticaFecha = () => {
   let months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'dicember']
   let today = new Date()

   let month = localStorage.getItem('monthSeleccionada') || today.getMonth()
   document.getElementById(months[month]).innerHTML = document.getElementById(months[month]).setAttribute('checked', 'checked')

   let year = localStorage.getItem('anioSeleccionado') || today.getFullYear() - 2020
   document.getElementById('yearSelector')[year].setAttribute('selected', 'selected')
})()

// ----------------- modal window -----------------
// eventListener to open modal window 
const openWorkoutEdit = document.getElementById('openWorkoutEdit')

openWorkoutEdit.addEventListener('click', () => {
   document.getElementById('commitList').classList.remove('hidden')
   document.getElementById('confirmEdit').classList.add('hidden')
   modal_container.classList.add('show')
   
   document.getElementById('creacionDeWorkout').innerHTML = `<form action="#">
   <input type="text" name="workout-name" id="workout-name" placeholder="Workout name" maxlength="15" autocomplete="off">
   </form><hr>`;
   agregarInput()
})

// eventListener new exercise in modal window
const newExercise = document.getElementById('newExercise')

newExercise.addEventListener('click', () => {
   agregarInput()
})

// 
let idRowDataInput = 0

function agregarInput() {
   let nodo = document.createElement("div")
   nodo.innerHTML = `<input type="color" class="exeColorInput" name="exeColor" id="exeColor${idRowDataInput}">
   <input type="text" name="exe" class="exeInput" placeholder="Exercise" id="exe${idRowDataInput}" maxlength="25" autocomplete="off">
   <button type="button" class="deleteButtonInput" id="deleteExe${idRowDataInput}" onclick="eliminarColumna(${idRowDataInput})">🗑️
   </button>`;

   nodo.id = `columna${idRowDataInput}`
   document.getElementById('creacionDeWorkout').appendChild(nodo)
   idRowDataInput += 1
}

// eventListener commit new workout
const commitList = document.getElementById('commitList')

commitList.addEventListener('click', () => {
   obtenerLosValoresIngresados()
   if (datosValidos == true) {
      modal_container.classList.remove('show');
      document.getElementById('creacionDeWorkout').innerHTML = ``;
      idRowDataInput = 0
   }
})

// eventListener close modal window, and not save new workout
const closeWorkoutEdit = document.getElementById('closeWorkoutEdit')

closeWorkoutEdit.addEventListener('click', () => {
   modal_container.classList.remove('show');
   document.getElementById('creacionDeWorkout').innerHTML = ``;
   idRowDataInput = 0
})

// delete row inside modal window
function eliminarColumna(idDeColumna) {
   document.getElementById(`columna${idDeColumna}`).remove()
}

// ----------------- exercise, month and year inputs -----------------
const cambioAnio = document.getElementById('yearSelector')
let anio = parseFloat(cambioAnio.value) - 2020

const months = document.querySelectorAll('input')
let month = parseFloat(document.querySelector('input[name="month"]:checked').value) - 1

let idDivDatosAImprimir = 0

// eventListener year change
cambioAnio.addEventListener('change', () => {
   anio = parseFloat(cambioAnio.value) - 2020

   actualizacionFechaStorage()
   resetDataShowed()
   showData()
})

// eventListener month change
for (const radio of months) {
   radio.onchange = (e) => {
      month = parseFloat(e.target.value) - 1

      actualizacionFechaStorage()
      resetDataShowed()
      showData()
   }
}

//
function resetDataShowed() {
   document.getElementById("listWorkouts").innerHTML = '';
}

// shows fieldsets of data blocks
function showData() {
   idDivDatosAImprimir = 0
   anios = JSON.parse(localStorage.getItem('storageAnios')) || anios
   let datosAImprimir = anios[anio][month]

   for (let i = 0; i < datosAImprimir.length; i++) {

      let tokenDeIdentificacion = datosAImprimir[i][1]
      let nombreWorkout = datosAImprimir[i][0]
      imprimirNombreDatos(nombreWorkout, idDivDatosAImprimir, tokenDeIdentificacion)

      for (let e = 2; e < datosAImprimir[i].length; e++) {

         let ejercicio = datosAImprimir[i][e].exe
         let ejeColor = datosAImprimir[i][e].exeColor

         imprimirDatos(ejercicio, ejeColor, idDivDatosAImprimir)
      }
      idDivDatosAImprimir += 1
   }

   if (datosAImprimir.length <= 0) {
      document.getElementById('creationWorkouts_p').innerHTML = `Looks like you have no workouts plan for this month, 
      would you like to create a new one?`;
   } else {
      document.getElementById('creationWorkouts_p').innerHTML = `Would you like to create a new workout plan for 
      this month?`;
   }
}

// used in showData()
function imprimirNombreDatos(nombreWorkout, idDivDatosAImprimir, tokenDeIdentificacion) {
   let element = document.createElement("fieldset")
   element.innerHTML = `<legend>${nombreWorkout}</legend>
   <button type="button" class="delete-button" title="delete" onclick=deleteDeBaseDeDatos("${tokenDeIdentificacion}")>❌</button>
   <button type="button" class="edit-button" title="edit" onclick=editDeBaseDeDatos("${tokenDeIdentificacion}")>✏️
   </button><a onclick="localStorage.setItem('selectedWorkout', '${idDivDatosAImprimir}')" href="pages/graphic.html">📊Graph</a>`;

   element.id = `${idDivDatosAImprimir}`
   element.classList.add("data-block")
   document.getElementById("listWorkouts").appendChild(element)
}

// used in showData()
function imprimirDatos(ejercicio, ejeColor, idDivDatosAImprimir) {
   let nodo = document.createElement("div")
   nodo.innerHTML = `<span id="rectangulo" style="background-color:${ejeColor}">&nbsp</span><h3>${ejercicio}</h3>`;

   document.getElementById(`${idDivDatosAImprimir}`).appendChild(nodo)
}

// create and push new array data
class exerciseConstructor {
   constructor(exe, exeColor) {
      this.exe = exe;
      this.exeColor = exeColor;
      this.d1 = null;
      this.d2 = null;
      this.d3 = null;
      this.d4 = null;
      this.d5 = null;
      this.d6 = null;
      this.d7 = null;
      this.d8 = null;
      this.d9 = null;
      this.d10 = null;
      this.d11 = null;
      this.d12 = null;
      this.d13 = null;
      this.d14 = null;
      this.d15 = null;
      this.d16 = null;
      this.d17 = null;
      this.d18 = null;
      this.d19 = null;
      this.d20 = null;
      this.d21 = null;
      this.d22 = null;
      this.d23 = null;
      this.d24 = null;
      this.d25 = null;
      this.d26 = null;
      this.d27 = null;
      this.d28 = null;
      this.d29 = null;
      this.d30 = null;
      this.d31 = null;
   }
}

// obtains data of the modal window inputs
function obtenerLosValoresIngresados() {
   let nuevoNombre = document.getElementById('workout-name').value
   let tokenDeIdentificacion = `${nuevoNombre.replace(/ /g, "-")}-${Math.floor(Math.random() * 10000)}`
   let nuevoArray = [nuevoNombre, tokenDeIdentificacion]

   for (let v = 0; v < idRowDataInput; v++) {
      let nuevoExer = document.getElementById(`exe${v}`)
      let nuevoExerColor = document.getElementById(`exeColor${v}`)

      if (typeof (nuevoExer) != 'undefined' && nuevoExer != null && nuevoExer.value != '') {
         nuevoArray.push(new exerciseConstructor(nuevoExer.value, nuevoExerColor.value))
      }
   }

   if (nuevoNombre == '' || nuevoArray.length <= 1) {
      Swal.fire({
         icon: 'error',
         title: 'Oops...',
         text: 'Workout name and at least one Exercise are required!'
      })
      return datosValidos = false
   } else {
      pushABaseDeDatos(nuevoArray)
      actualizacionDatosStorage()
      resetDataShowed()
      showData()
      return datosValidos = true
   }
}

// change data array to new values
function pushABaseDeDatos(array) {
   anios[anio][month].push(array)
}

// delete element from data array
function deleteDeBaseDeDatos(tokenDeIdentificacion) {
   Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
   }).then((result) => {
      if (result.isConfirmed) {

         Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
         anios[anio][month].forEach((element, index) => {    
         if (element[1] == tokenDeIdentificacion) {
            anios[anio][month].splice(index, 1)
         }
        })
        
        actualizacionDatosStorage()
        resetDataShowed()
        showData()
      }
   })
}

// ----------------- welcome username -----------------
if (localStorage.getItem("username") === null) {
   newUserName()
} else { document.getElementById('user-name').innerHTML = localStorage.getItem("username") }


// eventListener change user name 
const editUserName = document.getElementById("edit-userName")

editUserName.addEventListener("click", () => {
   newUserName()
})

// sweetAlert change user name
function newUserName() {
   Swal
      .fire({
         title: "Cual es tu nombre?",
         input: "text",
         inputAttributes: {
            maxlength: 15
         },
         showCancelButton: true,
         confirmButtonText: "Guardar",
         cancelButtonText: "Cancelar",
      })
      .then(resultado => {
         if (resultado.value) {
            nombre = resultado.value;
            document.getElementById('user-name').innerHTML = nombre
            localStorage.setItem('username', nombre)
            username = localStorage.getItem('username')
         }
      })
}

// ----------------- edit workouts -----------------
let edit
let indexEdit

// opens modal window and fills it with the workout info you want to edit
function editDeBaseDeDatos(tokenDeIdentificacion) {
   document.getElementById('confirmEdit').classList.remove('hidden')
   document.getElementById('commitList').classList.add('hidden')

   modal_container.classList.add('show')
   anios[anio][month].forEach((element, index) => {
      if (element[1] == tokenDeIdentificacion) {
         edit = anios[anio][month][index]
         indexEdit = index
      }
   })

   document.getElementById('creacionDeWorkout').innerHTML = `<form action="#">
   <input type="text" name="workout-name" id="workout-name" placeholder="Workout name" value="${edit[0]}" maxlength="15" autocomplete="off">
   </form><hr>`;

   for (let i = 2; i < edit.length; i++) {

      let nodo = document.createElement("div")
      nodo.innerHTML = `<input type="color" class="exeColorInput" name="exeColor" id="exeColor${idRowDataInput}" value="${edit[i].exeColor}">
      <input type="text" name="exe" class="exeInput" placeholder="Exercise" id="exe${idRowDataInput}" maxlength="25" 
      autocomplete="off" value="${edit[i].exe}"><button type="button" class="deleteButtonInput" id="deleteExe${idRowDataInput}" 
      onclick="eliminarColumna(${idRowDataInput})">🗑️</button>`;

      nodo.id = `columna${idRowDataInput}`
      document.getElementById('creacionDeWorkout').appendChild(nodo)
      idRowDataInput += 1
   }
}

// eventListener edit workout
const editWorkout = document.getElementById('confirmEdit')

editWorkout.addEventListener('click', () => {
   cambiarDatos()
   if (datosValidos == true) {
      modal_container.classList.remove('show')
      document.getElementById('creacionDeWorkout').innerHTML = ``;
      idRowDataInput = 0
   }
})

// submits new workouts data
function cambiarDatos() {
   let nuevoNombre = document.getElementById('workout-name').value
   let tokenDeIdentificacion = edit[1]
   let nuevoArray = [nuevoNombre, tokenDeIdentificacion]

   for (let v = 0; v < idRowDataInput; v++) {
      let nuevoExer = document.getElementById(`exe${v}`)
      let nuevoExerColor = document.getElementById(`exeColor${v}`)

      if (v <= edit.length - 3) {
         if ((typeof (nuevoExer) != 'undefined' && nuevoExer != null && nuevoExer.value != '')) {
            let editado = edit[v + 2]
            editado.exe = nuevoExer.value
            editado.exeColor = nuevoExerColor.value
            nuevoArray.push(editado)
         }
      } else {
         if ((typeof (nuevoExer) != 'undefined' && nuevoExer != null && nuevoExer.value != '')) {
            nuevoArray.push(new exerciseConstructor(nuevoExer.value, nuevoExerColor.value))
         }
      }
   }

   if (nuevoNombre == '' || nuevoArray.length <= 1) {
      Swal.fire({
         icon: 'error',
         title: 'Oops...',
         text: 'Workout name and at least one Exercise are required!'
      })
      return datosValidos = false
   } else {
      anios[anio][month][indexEdit] = nuevoArray
      actualizacionDatosStorage()
      resetDataShowed()
      showData()
      return datosValidos = true
   }
}

// change storage workouts data
function actualizacionDatosStorage() {
   localStorage.setItem('storageAnios', JSON.stringify(anios))
   anios = JSON.parse(localStorage.getItem('storageAnios'))
}

// stores date in storage
function actualizacionFechaStorage() {
   localStorage.setItem('monthSeleccionada', month)
   localStorage.setItem('anioSeleccionado', anio)
}

let anios

// ----------------- llamado a funciones al ingresar a la pagina -----------------
// de no haber datos en el storage utiliza los datos del archivo JSON
(obtenerDatosJSON = () => {
   fetch('../datos.json')
   .then(response => response.json())
   .then(result => {
      anios = JSON.parse(localStorage.getItem('storageAnios')) || result;
      
      showData()
   })
   .catch(error => console.log(error))
})()

// reset selectedWorkout in local storage to prevent problems in graph page
localStorage.setItem('selectedWorkout', '0')