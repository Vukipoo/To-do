

const showInputFunc = () => {
    const app = document.querySelector('.app')

    //create inputBox div
    const inputBox  = document.createElement('div')
    inputBox.classList.add('input-box')
    inputBox.innerHTML = '<input type="text" placeholder = "" id ="inputBox">'

    //create inputBtn div
    const inputBtn = document.createElement('div')
    inputBtn.classList.add('input-btn')
    inputBtn.innerHTML = '<input type="button" value = "add">'
    

}

export default showInputFunc