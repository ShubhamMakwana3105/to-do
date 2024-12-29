let input = document.getElementById('input')
let button = document.getElementById('button');
let container = document.getElementById('container');

button.addEventListener('click',addValue)
function addValue () {
    
     if(input.value !==   ' '){
    child = document.createElement('input')
    label = document.createElement('span')
    br = document.createElement('br')
    label.textContent = input.value
    child.type = 'checkbox'
    label.style.fontSize = '20px'
    container.appendChild(child)
    container.appendChild(label)
    container.appendChild(br)
    input.value = ' '

    label.addEventListener('dblclick',()=>{
       child.remove()
       label.remove()
    })
    child.addEventListener('click',()=>{
        if(child.checked){
            child.style.backgroundColor = 'green'
            label.style.color = 'black'
            label.style.textDecoration = 'line-through'
        }
        else{
            child.style.backgroundColor = 'white'
            label.style.textDecoration = 'none'

        }
    })
}
else{
    alert('Can Not Take Empty String Please enter a value')
}
}