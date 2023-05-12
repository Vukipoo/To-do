
const todayFunc = () => {
    const app = document.querySelector('.app')
    const todayContent = document.createElement('div')
    todayContent.classList.add('today-content')

    //give it innerHTML
    todayContent.innerHTML = '<h1>Today</h1>'

    app.appendChild(todayContent)

}

export default todayFunc