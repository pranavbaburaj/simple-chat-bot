import getAllTokens from "./tokens.js"

/**
 * 
 * @param {string} data 
 * @param {number} pos 
 * @returns null | string
 */


function getCurrentCharacter(data, pos){
    if(data.length == pos){
        return null
    } else {
        return data[pos]
    }
}

// reduce to gets the values
// in list inices divisible by 3
function reduceToThree(dictList){
    var list = [] // the final list
    for(var i = 0; i < dictList.length; i++){
        // if (I + 1) % 3 == 0
        // i = 0 && i + 1 = 1 == 0
        // i = 3 and element will not match
        if((i + 1) % 3 == 0){
            list.push(dictList[i])
        }
    }
    return list
}

const tokens = getAllTokens()

function createNewTokenObject(tokenType, tokenData){
    return {
        type : tokenType,
        data : tokenData
    }
}

// the lexical analyser
export default class LexicalAnalyser {
    constructor(data){
        this.data = data.toLowerCase().split(" ")
        this.pos = 0
        this.curr = getCurrentCharacter(data, this.pos)
        this.tokens = new Array()
    }

    getElement(tokensKeyList, i, currentList){
        if(currentList.includes(this.curr)){
            return createNewTokenObject(
                tokensKeyList[i], this.curr
                )
        } else {
            return createNewTokenObject(
                "variable", this.curr
            )
        }
    }

    startUserDataParsing() {
        this.curr = getCurrentCharacter(this.data, this.pos)
        const tokensKeyList = Object.keys(tokens)

        while (this.curr != null){
            for(let i = 0 ; i < tokensKeyList.length; i++){
                const currentList = tokens[tokensKeyList[i]]
                // if(currentList.includes(this.curr)){
                //     this.tokens.push(
                //         createNewTokenObject(
                //             tokensKeyList[i], this.curr
                //         )
                //     )
                // } 
                this.tokens.push(this.getElement(
                    tokensKeyList,
                    i,
                    currentList
                ))

            }
            this.pos += 1
            this.curr = getCurrentCharacter(this.data, this.pos)
        }
        return reduceToThree(this.tokens)
    }
}