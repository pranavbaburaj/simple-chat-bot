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

    startUserDataParsing() {
        this.curr = getCurrentCharacter(this.data, this.pos)
        const tokensKeyList = Object.keys(tokens)

        while (this.curr != null){
            for(let i = 0 ; i < tokensKeyList.length; i++){
                const currentList = tokens[tokensKeyList[i]]
                if(currentList.includes(this.curr)){
                    this.tokens.push(
                        createNewTokenObject(
                            tokensKeyList[i], this.curr
                        )
                    )
                } 
            }
            this.pos += 1
            this.curr = getCurrentCharacter(this.data, this.pos)
        }
        return this.tokens
    }
}