const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ChangeThemeIdActionType): ThemeType => { // fix any
    switch (action.type) {
        // дописать
            case 'SET_THEME_ID':
                return {
                    ...state, themeId: action.id
                }

        default:
            return state
    }
}

export const changeThemeId = (id: number): ChangeThemeIdActionType => ({ type: 'SET_THEME_ID', id }) // fix any

export type ThemeType = {
    themeId: number,
}
export type ChangeThemeIdActionType = {
    type: string,
    id: number
}