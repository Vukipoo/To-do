

const inboxFunc = () => {
    const app = document.querySelector('.app')
    const inboxContent = document.createElement('div')
    inboxContent.classList.add('inbox-content')

    //give it innerHTML
    inboxContent.innerHTML = '<h1>Inbox</h1>'

    //append inbox to app
    app.appendChild(inboxContent)

    //create addTask div with input
    const addTask = document.createElement('div')
    addTask.classList.add('add-task')
    addTask.innerHTML = '<span class="material-symbols-outlined">add</span><p>Add task</p>'

    //create event listenr that makes it go away when clicked
    //create showInput in separate module and implement func
    addTask.addEventListener('click', () => {
        addTask.style = 'display: none'
    })

    app.appendChild(addTask)
}

export default inboxFunc