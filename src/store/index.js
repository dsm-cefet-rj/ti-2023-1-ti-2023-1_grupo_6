import { configureStore } from "@reduxjs/toolkit";
import lojasSlice from './Reducers/lojas';
import produtossSlice from './Reducers/produtos';


const store = configureStore ({
    reducer: {
        lojas: lojasSlice,
        produtos: produtossSlice

    },
});

export default store;