import {inputTextBox} from "./index.js"

export function whatIsYourName(){
    return `My Name is lol`
}

export function searchFor(data){
    data = inputTextBox.value.toString().replace(" ", "+")
    return `https://duckduckgo.com/?q=${data}`
}