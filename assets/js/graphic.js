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

// ----------------- exercise, month and year inputs -----------------
const cambioworkout = document.getElementById('workoutList')

// eventListener for the years
const cambioAnio = document.getElementById('yearSelector')
let anio = parseFloat(cambioAnio.value) - 2020

cambioAnio.addEventListener('change', () => {
   anio = parseFloat(cambioAnio.value) - 2020
   
   cambiarLista()
   dataShowned(cambioworkout.value)
   inputs()
   actualizacionFechaStorage()
})

// eventListener for the months
const months = document.querySelectorAll('input')
let month = parseFloat(document.querySelector('input[name="month"]:checked').value) - 1

const radios = document.querySelectorAll('input[type=radio][name="month"]')

radios.forEach(radio => radio.addEventListener('change', () => {
   month = parseFloat(radio.value) - 1
   
   cambiarLista()
   dataShowned(cambioworkout.value)
   inputs()
   actualizacionFechaStorage()
}
))

// stores the selected date
function actualizacionFechaStorage() {
   localStorage.setItem('monthSeleccionada', month)
   localStorage.setItem('anioSeleccionado', anio)
}

// change the list of workouts (workoutList)
function cambiarLista() {
   let listaworkout = anios[anio][month]
   document.getElementById('workoutList').innerHTML = ``
   
   if (anios[anio][month].length >= 1) {
      listaworkout.forEach((element, index) => {
         
         let opt = document.createElement('option')
         opt.value = `${index}`
         opt.innerHTML = `${element[0]}`
         cambioworkout.appendChild(opt)
      })
   } else {
      document.getElementById('workoutList').innerHTML = `<option value="empty"></option>`;
      document.getElementById('workoutList').value = 'empty';
   }
}

// eventListener for the selected workout
cambioworkout.addEventListener('change', () => {
   dataShowned(cambioworkout.value)
   inputs()
})

// ----------------- data for chart.js -----------------
let datasetsGraph = []
let graphDefault = {
   label: '',
   data: [],
   borderColor: '',
   backgroundColor: ''
}

// constructor for dataShowned()
class graphDataConstructor {
   constructor(exe, exeColor, data) {
      this.label = exe;
      this.data = data;
      this.borderColor = exeColor;
      this.backgroundColor = exeColor
   }
}

// used in dataShowned() and to set chart.js labels, checks how many days the selected month have
function daysInMonth(month, anio) {
   let days = new Date(anio, month + 1, 0).getDate()
   labels.length = 0

   for (let i = 0; i < days; i++) {
      labels.push(i + 1)
   }
}

// change the graph data used by chart.js
function dataShowned(index) {
   datasetsGraph.length = 0
   
   if (index != 'empty') {
      let datosParaDatasets = anios[anio][month][index]
      
      for (let i = 2; i < datosParaDatasets.length; i++) {
         let data = []
         let label = datosParaDatasets[i].exe
         let color = datosParaDatasets[i].exeColor
         let one = datosParaDatasets[i].d1
         let two = datosParaDatasets[i].d2
         let three = datosParaDatasets[i].d3
         let four = datosParaDatasets[i].d4
         let five = datosParaDatasets[i].d5
         let six = datosParaDatasets[i].d6
         let seven = datosParaDatasets[i].d7
         let eight = datosParaDatasets[i].d8
         let nine = datosParaDatasets[i].d9
         let ten = datosParaDatasets[i].d10
         let eleven = datosParaDatasets[i].d11
         let twelve = datosParaDatasets[i].d12
         let thirteen = datosParaDatasets[i].d13
         let fourteen = datosParaDatasets[i].d14
         let fifteen = datosParaDatasets[i].d15
         let sixteen = datosParaDatasets[i].d16
         let seventeen = datosParaDatasets[i].d17
         let eighteen = datosParaDatasets[i].d18
         let nineteen = datosParaDatasets[i].d19
         let twenty = datosParaDatasets[i].d20
         let twentyOne = datosParaDatasets[i].d21
         let twentyTwo = datosParaDatasets[i].d22
         let twentyThree = datosParaDatasets[i].d23
         let twentyFour = datosParaDatasets[i].d24
         let twentyFive = datosParaDatasets[i].d25
         let twentySix = datosParaDatasets[i].d26
         let twentySeven = datosParaDatasets[i].d27
         let twentyEight = datosParaDatasets[i].d28
         let twentyNine = datosParaDatasets[i].d29
         let thirty = datosParaDatasets[i].d30
         let thirtyone = datosParaDatasets[i].d31

         data.push(one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen,
            eighteen, nineteen, twenty, twentyOne, twentyTwo, twentyThree, twentyFour, twentyFive, twentySix, twentySeven, twentyEight, twentyNine, thirty, thirtyone)

         datasetsGraph.push(new graphDataConstructor(label, color, data))
         daysInMonth(month, anio)
      }
   } else {
      datasetsGraph.push(graphDefault)
      daysInMonth(month, anio)
   }
   myChart.update();
}

// ----------------- weight display and submition -----------------
// list all exercises in given workout in its select form
const exerciseInput = document.getElementById('exerciseInput')

function inputExercise() {
   document.getElementById('exerciseInput').innerHTML = ``;
   let position = 2
   
   if (datasetsGraph[0].label != '') {
      datasetsGraph.forEach(element => {
         
         let opt = document.createElement('option')
         opt.value = `${position}`
         opt.innerHTML = `${element.label}`
         exerciseInput.appendChild(opt)
         position += 1
      })
   }
}

// list all days in given month in its select form
const dayInput = document.getElementById('dayInput')

function inputDays() {
   document.getElementById('dayInput').innerHTML = ``;
   
   labels.forEach(element => {
      
      let opt = document.createElement('option')
      opt.value = `d${element}`
      opt.innerHTML = `${element}`
      dayInput.appendChild(opt)
   })
   displayDataGraph()
}

// sets weight's input form value to null
const weightInput = document.getElementById('weightInput')

function resetWeightValue() {
   document.getElementById('weightInput').value = null
}

// called when the year, month or workout change. to given the correct exercises, days in given workout and reset weight input
function inputs() {
   inputExercise()
   inputDays()
   resetWeightValue()
}

// submits the new weight in given selected exercise, day and workout, when the submit button is pressed
const submitInputs = document.getElementById('submitInputs')

submitInputs.addEventListener('click', () => {

   if (anios[anio][month].length >= 1) {
      let newValue = parseFloat(weightInput.value)
      let exePosition = parseFloat(exerciseInput.value)
      let dayPosition = dayInput.value
      let workout = anios[anio][month][cambioworkout.value][exePosition]

      Object.keys(workout).forEach(key => {
         if (key == dayPosition) {
            workout[key] = newValue
         }
      })

      dataShowned(cambioworkout.value)
      actualizacionDatosStorage()
      document.getElementById('dayInput').selectedIndex += 1
      displayDataGraph()
   }
})

// submits the new weight in given selected exercise, day and workout, when weight input is selected and enter key is press
weightInput.addEventListener("keypress", (keypress) => {
   if (keypress.key === "Enter") {
      if (anios[anio][month].length >= 1) {
         let newValue = parseFloat(weightInput.value)
         let exePosition = parseFloat(exerciseInput.value)
         let dayPosition = dayInput.value
         let workout = anios[anio][month][cambioworkout.value][exePosition]

         Object.keys(workout).forEach(key => {
            if (key == dayPosition) {
               workout[key] = newValue
            }
         })

         dataShowned(cambioworkout.value)
         actualizacionDatosStorage()
         document.getElementById('dayInput').selectedIndex += 1
         displayDataGraph()
      }
   }
})

// alamcena los nuevos datos de pesos ingresados, cambiando los datos del storage 
function actualizacionDatosStorage() {
   localStorage.setItem('storageAnios', JSON.stringify(anios))
   anios = JSON.parse(localStorage.getItem('storageAnios'))
}

// -----------------
// eventListener for weights list for when exercise is changed
exerciseInput.addEventListener('change', () => {
   displayDataGraph()
})

// deletes weight for selected day and exercise used by displayDataGraph()
function emptyValue(day) {
   let newValue = null
   let exePosition = parseFloat(exerciseInput.value)
   let dayPosition = day
   let workout = anios[anio][month][cambioworkout.value][exePosition]

   Object.keys(workout).forEach(key => {
      if (key == dayPosition) {
         workout[key] = newValue
      }
   });
   dataShowned(cambioworkout.value)
   actualizacionDatosStorage()
   displayDataGraph()
}

// changes weight list showned, (exercise name, weigths for each day, and delete button for each weight) 
function displayDataGraph() {
   if (exerciseInput.value != '') {
      document.getElementById("displayDataGraph").innerHTML = `<h1>${exerciseInput.selectedOptions[0].innerHTML}</h1>
      <div>
      <h1>Weight</h1>
      <hr>
      <h1>Date</h1>
      </div>`;
      let int = parseFloat(exerciseInput.value)
      let toPrint = datasetsGraph[int - 2]
      for (let i = 0; i < labels.length; i++) {

         if (toPrint.data[i] == null) {
            let nodo = document.createElement("div");
            nodo.innerHTML = `<h1>----</h1>
         <hr>
         <h1 class="gray-text">${labels[i]}</h1>
         <hr>
         <button type="button" class="buttonId-${i}" onclick="emptyValue('d${i + 1}')">🗑️</button>`;

            document.getElementById("displayDataGraph").appendChild(nodo)
         } else {
            let nodo = document.createElement("div")
            nodo.innerHTML = `<h1>${toPrint.data[i]}</h1>
         <hr>
         <h1 class="gray-text">${labels[i]}</h1>
         <hr>
         <button type="button" class="buttonId-${i}" onclick="emptyValue('d${i + 1}')">🗑️</button>`;

            document.getElementById("displayDataGraph").appendChild(nodo)
         }
      }
   } else {
      document.getElementById("displayDataGraph").innerHTML = `<h1></h1>
      <div>
      <h1>Weight</h1>
      <hr>
      <h1>Date</h1>
      </div>`;
   }
}

// ----------------- chart.js ----------------- 
let labels = [];

const data = {
   labels: labels,
   datasets: datasetsGraph
};

const config = {
   type: 'line',
   data: data,
   options: {
      spanGaps: true
   }
};

const myChart = new Chart(
   document.getElementById('myChart'),
   config
);

// ----------------- llamado a funciones al ingresar a la pagina -----------------
// de no haber datos en el storage utiliza los datos del archivo JSON
(obtenerDatosJSON = () => {
   fetch('../datos.json')
      .then(response => response.json())
      .then(result => {
         anios = JSON.parse(localStorage.getItem('storageAnios')) || result;
         
         cambiarLista()
         dataShowned(JSON.parse(localStorage.getItem('selectedWorkout')) || cambioworkout.value)
         inputExercise()
         inputDays()
         cambioworkout.value = JSON.parse(localStorage.getItem('selectedWorkout')) || cambioworkout.value
      })
      .catch(error => console.log(error))
})()