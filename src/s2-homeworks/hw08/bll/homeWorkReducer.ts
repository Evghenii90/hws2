import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: any, action: any): any => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            return [...state].sort(
                (a: any, b: any) => action.payload === 'up'
                    ? a.name.localeCompare(b.name)
                    : b.name.localeCompare(a.name))

            // need to fix
        }
        case 'check': {
            return state.filter((user: any) => user.age >= action.payload)
            // need to fix
        }
        default:
            return state
    }
}
