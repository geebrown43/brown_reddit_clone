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
    let submit_button = document.getElementById('submit_button')
    let votefield = document.getElementById('votelabel')
    let votecontrol= document.getElementById('voteinput')

    let label = document.createElement('label')
        label.className = 'label'
        label.textContent = 'Name'
    field.appendChild(label)

    let input = document.createElement('input')
        input.className = 'input'
        input.type = 'text'
        input.placeholder = 'Name'
        input.setAttribute('name', 'name')
    control.appendChild(input)

    let textlabel = document.createElement('label')
        textlabel.className = 'label'
        textlabel.textContent = 'Favorite Link'
    textfield.appendChild(textlabel)

    let textinput = document.createElement('textarea')
        textinput.className = 'textarea'
        textinput.placeholder = 'Links Here'
        textinput.setAttribute('name', 'link')
    textcontrol.appendChild(textinput)

    let voteLabel = document.createElement('label')
        voteLabel.className = 'label'
        voteLabel.textContent = 'Vote'
    votefield.appendChild(voteLabel)

    let voteInput = document.createElement('input')
        voteInput.className = 'input'
        voteInput.placeholder = '0'
        voteInput.setAttribute('name', 'votes')
    votecontrol.appendChild(voteInput)

    let button = document.createElement('button')
        button.className = 'button is-danger is-outlined'
        button.textContent = 'Submit'
    submit_button.appendChild(button)
    
}
