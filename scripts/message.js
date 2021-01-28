import {messageList} from "./index.js"
import {Speaker} from "./speech.js"

export function getMessageTemplate(message){
    return `
    <div class="helloworld">
        <p>${message}</p>
    </div>
    `
}

function askUserName(){
    var speaker = new Speaker("I would love to know your name?").speak()
    return window.prompt("I would love to know your name?")
}

export function addMessage(message){
    messageList.innerHTML = getMessageTemplate(message)
}

export function setUserName(){
    const user = localStorage.getItem('user')

    if(user == "null"){
        const newUserName = askUserName()
        localStorage.setItem('user', newUserName)
        return newUserName
    } else {
        return localStorage.getItem('user')
    }
}