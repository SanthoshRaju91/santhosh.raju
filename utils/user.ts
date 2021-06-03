const DARK_THEME = 'DARK'
const LIGHT_THEME = 'LIGHT'
const USER_THEME = 'USER_THEME'

export function getUserThemePreferrence() {
    return window.localStorage.getItem(USER_THEME) === DARK_THEME
}

export function setUserThemePreference(isDarkMode: boolean) {
    window.localStorage.setItem(USER_THEME, isDarkMode ? DARK_THEME : LIGHT_THEME)
}