import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './pages/myDemos/reduxTest/count';

export default configureStore({
    reducer: {
        counter: counterReducer 
    }
})