import { DEFAULT_THEME, MantineColorsTuple, createTheme, mergeMantineTheme } from "@mantine/core";

const appLight: MantineColorsTuple = [
    "#f2f5f8",
    "#e5e8e9",
    "#c7cfd5",
    "#a5b5c0",
    "#899faf",
    "#7791a4",
    "#6c8ba0",
    "#5a788c",
    "#4e6a7e",
    "#3d5c70"
]

const appDark: MantineColorsTuple = [
    "#e6eef2",
    "#b8cdd9",
    "#8fadbf",
    "#6c90a6",
    "#4d758c",
    "#345b73",
    "#1f4359",
    "#102e40",
    "#061a26",
    "#01080d",
]

const themeOverride = createTheme({
    colors: {
        'light': appLight,
        'dark': appDark
    },
    fontFamily: 'Space Mono, monospace',
    headings: {
        fontFamily: 'Space Mono, monospace',
    },
})

const DefaultTheme = mergeMantineTheme(DEFAULT_THEME, themeOverride)

export default DefaultTheme;