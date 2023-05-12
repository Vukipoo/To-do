
const weekFunc = () => {
    const app = document.querySelector('.app')
    const weekContent = document.createElement('div')
    weekContent.classList.add('week-content')

    //give it innerHTML
    weekContent.innerHTML = '<h1>Week</h1>'

    app.appendChild(weekContent)

}

export default weekFunc