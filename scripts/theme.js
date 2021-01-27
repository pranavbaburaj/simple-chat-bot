
export const themes = {
    dark : {
        b : "#2F3136",
        c : "#FFFFFF"
    },
    light : {
        b : "#FFFFFF",
        c : "#000000"
    }
}

const keys = "site-theme-data"

export function getCurrentTheme() {
    const background = localStorage.getItem('back')
    const color = localStorage.getItem('color')
    if(background == null){
        return [themes.dark.b, themes.dark.c]
    } else {
        return [background, color]
    }
}

export function storeTheme(themeData) {
    localStorage.setItem(keys, themeData)
    return getCurrentTheme()
}