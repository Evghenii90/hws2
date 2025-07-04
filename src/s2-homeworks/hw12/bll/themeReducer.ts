const initState = {
    themeId: "1" as ThemeIdType,
}

export type ThemeIdType = "1"|"2"|"3"

export type ThemeStateType = {
    themeId: ThemeIdType,
}

export type ChangeThemeIdActionType = {
    type: 'SET_THEME_ID',
    id: ThemeIdType
}

export const themeReducer = (state = initState, action: ChangeThemeIdActionType): ThemeStateType => { // fix any
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

export const changeThemeId = (id: ThemeIdType): ChangeThemeIdActionType => ({ type: 'SET_THEME_ID', id }) // fix any

