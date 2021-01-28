import {messageList} from "./index.js"

export function getMessageTemplate(message){
    return `
    <div class="helloworld">
        <p>${message}</p>
    </div>
    `
}

export function addMessage(message){
    messageList.innerHTML = getMessageTemplate(message)
}