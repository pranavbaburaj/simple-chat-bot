import * as statement from "./statements.js"
import {inputTextBox} from "./index.js"


export default class Parser {
    constructor(dataToParse) {
        this.array = this.addAll(dataToParse)
        this.data = dataToParse
    }

    getValue(arrayElement){
        return arrayElement.value
    }

    addAll(dataset){
        var data = []
        for(let idx = 0; idx < dataset.length; idx++){
            data.push(
                dataset[idx].data
            )
        }
        return data
    }

    parser(){
        if(this.array.includes("your") && this.array.includes("name")){
            return statement.whatIsYourName()
        } else if(this.array.includes("hello,")){
            return "Hai"
        }

        window.open(
            statement.searchFor(),
            "DescriptiveWindowName",
            "resizable,scrollbars,status"
        )
        return inputTextBox.value
    }
}