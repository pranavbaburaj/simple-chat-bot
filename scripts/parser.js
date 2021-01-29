import * as statement from "./statements.js"

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
        } 

        return "Sorry, I did'nt get you"
    }
}