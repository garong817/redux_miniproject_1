import {configureStore} from "@reduxjs/toolkit";
import thunk from 'redux-thunk' // 미들웨어 => 비동기방식
import rootReducer from '../reducers/index'
import {createLogger, logger} from "redux-logger/src"


const longger=createLogger()
const middleware =[thunk,logger]
const store=configureStore({
    reducer:rootReducer,
    devTools:window.__REDUX_DEVTOOTS_EXTENSION__&& window.REDUX_DEVTOOTS_EXTENSION__()

})
export default store