const addQuestion = document.getElementById('add')

addQuestion.addEventListener('click', (event) => {
    event.preventDefault()

    console.log(event)
    createFormInput()
})


createFormInput = () => {
    let field = document.getElementById('field')
    let control = document.getElementById('control')
    let textfield = document.getElementById('textfield')
    let textcontrol = document.getElementById('textcontrol')

    let label = document.createElement('label')
        label.className = 'label'
        label.textContent = 'Name'
    field.appendChild(label)

    let input = document.createElement('input')
        input.className = 'input'
        input.type = 'text'
        input.placeholder = 'Name'
    control.appendChild(input)

    let textlabel = document.createElement('label')
        textlabel.className = 'label'
        textlabel.textContent = 'Message'
    textfield.appendChild(textlabel)

    let textinput = document.createElement('textarea')
        textinput.className = 'textarea'
        textinput.placeholder = 'Message Here'
    textcontrol.appendChild(textinput)
    
}