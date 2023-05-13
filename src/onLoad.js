import inboxFunc from "./inbox"

function onLoadFunc(){
    window.addEventListener('load', () => {
        inboxFunc()
    })
}

export default onLoadFunc