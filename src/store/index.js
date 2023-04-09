import { configureStore } from "@reduxjs/toolkit";
import lojasSlice from './Reducers/lojas';

const store = configureStore ({
    reducer: {
        lojas: lojasSlice
    },
});

export default store;