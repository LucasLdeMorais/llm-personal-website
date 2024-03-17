interface FontSizes {
    small: string,
    medium: string,
    large: string
}
type Theme = {
    themeName: string
    colors: any,
    fonts: string[],
      fontSizes: FontSizes
}

const riverTheme: Theme = {
    themeName: "river",
    colors: {
        fg:  "#291f3e",
        bg: "#f4f2af",
        primary: "#64d0b8",
        secondary: "#3b7961"
    },
    fonts: ["sans-serif", "Roboto"],
    fontSizes: {
      small: "1em",
      medium: "2em",
      large: "3em"
    }
}

const autumnTheme: Theme = {
    themeName: "autumn",
    colors: {
        fg:  "#38192d",
        bg: "#e3e6c5",
        primary: "#d98d3d",
        secondary: "#784141"
    },
    fonts: ["sans-serif", "Roboto"],
    fontSizes: {
      small: "1em",
      medium: "2em",
      large: "3em"
    }
    
}

const flowerTheme: Theme = {
    themeName: "flower",
    colors: {
        fg:  "#381a3e",
        bg: "#f4f2af",
        primary: "#f890a8",
        secondary: "#8b506d"
    },
    fonts: ["sans-serif", "Roboto"],
    fontSizes: {
      small: "1em",
      medium: "2em",
      large: "3em"
    }
}

const leafTheme: Theme = {
    themeName: "leaf",
    colors: {
        fg:  "#382137",
        bg: "#edf2b8",
        primary: "#c4d23a",
        secondary: "#876a4e"
    },
    fonts: ["sans-serif", "Roboto"],
    fontSizes: {
      small: "1em",
      medium: "2em",
      large: "3em"
    }
}

const Themes: Theme[] = [ leafTheme, riverTheme, autumnTheme, flowerTheme];

// This theme swaps `fg` and `bg`
const invertTheme = (theme: Theme): Theme => {
    let invertedTheme = theme;
    invertedTheme.colors = {
        fg: theme.colors.bg,
        bg: theme.colors.fg,
        primary: theme.colors.secondary,
        secondary: theme.colors.primary
    }
    return invertedTheme
};

export { type Theme, flowerTheme, leafTheme, riverTheme, autumnTheme, Themes, invertTheme };