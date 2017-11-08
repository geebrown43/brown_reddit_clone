const form = document.getElementById('form')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    let id1 = event.target.elements.email.value
    let id2 = event.target.elements.password.value

    funcLogin(id1,id2)
})

funcLogin = (id1, id2) => {
    fetch(`https://morning-lake-50008.herokuapp.com/api/redditusers/user/${id1},${id2}`)
    .then((response) => {
        return response.json()
        .then((data) => {
            const login_status = document.getElementsByClassName('login_status')[0]
            let username = data[0].username
            let tag = document.createElement('p')
                tag.textContent = 'Logged in as:' + username
                tag.className = 'navbar-item'
            login_status.appendChild(tag)
        })
    })
    return form.innerHTML = ''
}

