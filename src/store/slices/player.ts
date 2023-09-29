import { createSlice } from "@reduxjs/toolkit";

const playerSlice = createSlice({
    name: "player",
    initialState: {
        course: {
            modules: [{
                id: '1',
                title: 'Iniciando com React',
                lessons: [{
                    id: "Jai8w6K_GnY", title: "Fundamentos do Redux", duration: '09:13'
                }]
            }]
        }
    },
    reducers: {},
})

export const player = playerSlice.reducer