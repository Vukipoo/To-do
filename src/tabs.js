import inboxFunc from "./inbox"
import todayFunc from "./today"
import weekFunc from "./week"

const tabs = () => {
    const app = document.querySelector('.app')
    const tabsDiv = document.createElement('div')
    tabsDiv.classList.add('tabs-div')

    //create divs for the tabs
    const inbox = document.createElement('div')
    const today = document.createElement('div')
    const week = document.createElement('div')

    //give them classes
    inbox.classList.add('inbox')
    today.classList.add('today')
    week.classList.add('week')

    //give them innerHtml
    inbox.innerHTML = '<h1>Inbox</h1>'
    today.innerHTML = '<h1>Today</h1>'
    week.innerHTML = '<h1>Week</h1>'

    //add event listener to enable tab switching
    inbox.addEventListener('click', () => {
        clearContent()
        inboxFunc()
    })
    today.addEventListener('click', () => {
        clearContent()
        todayFunc()
    })
    week.addEventListener('click', () => {
        clearContent()
        weekFunc()
    })
    

    //append all tabs
    tabsDiv.appendChild(inbox)
    tabsDiv.appendChild(today)
    tabsDiv.appendChild(week)


    app.appendChild(tabsDiv)
}

function clearContent() {
    const app = document.querySelector('.app')
    const tabs = document.querySelectorAll('.inbox-content, .today-content, .week-content')

    tabs.forEach(tab => {
        if(tab){
            app.removeChild(tab)
        }
    })

}


export default tabs