import { persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
import createWebStorage from 'redux-persist/lib/storage/createWebStorage'

//Action Types
const CHANGE_LAYOUT = 'CHANGE_LAYOUT'


//Action Creator
export const changeLayoutAction = payload => ({
   type: CHANGE_LAYOUT,
   payload
})

const initialState = {
    layout: 'grid',
}

//Reducer
const reducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        case CHANGE_LAYOUT:
            return {
                ...state, 
                layout: action.payload
            }
        default:
            return { ...state }
    }

}

const createNoopStorage = () => {
    return {
        getItem(_key) {
            return Promise.resolve(null)
        },
        setItem(_key, value) {
            return Promise.resolve(value)
        },
        removeItem(_key) {
            return Promise.resolve()
        },
    }
}

const storage = typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage()

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer( persistConfig, reducer )

export default persistedReducer