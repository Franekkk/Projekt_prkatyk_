const addBtn = document.querySelector('.przycisk')
const list = document.querySelector('myList')
const field = document.getElementById("input1")
let arrayValue = []


function wpis(){
  if(field.value === '' ){
    alert('pole musi byc wypelnione')
    field.value = ''
  }else{
   arrayValue.push(field.value)
    li2 = document.createElement('li')
    li2.innerHTML = arrayValue
    document.getElementById('MojaLista').appendChild(li2) 
    field.value = ''
    arrayValue.pop(field.value)
    }
  }





addBtn.addEventListener('click' ,wpis)
field.addEventListener('keypress', function (e) {
  if (e.key === 'Enter'){
    wpis()
  }
})
