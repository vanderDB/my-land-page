export interface IColorTheme {
    backgroundColor: string,
    textColor: string,
    primary: string,
}

export const darkTheme: IColorTheme = {
    backgroundColor: "#333333",
    textColor: "#000000",
    primary: "#77ccdd"
}

export const lightTheme: IColorTheme = {
    backgroundColor: "#e0e0e0",
    textColor: "#ffffff",
    primary: "#55aacc"
}

export const partyTheme: IColorTheme = {
    backgroundColor: "#eeff00",
    textColor: "#ff88cc",
    primary: "#aa00ee"
}