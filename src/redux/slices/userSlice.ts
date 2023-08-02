import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IValues} from "../../types/User.ts";

interface IState {
    isEditing: boolean;
    values: IValues;
    userData: IValues;
}

const initialState: IState = {
    isEditing: false,
    values: {
        usernameValue: ''
    },
    userData: {
        usernameValue: ''
    },
};

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        getUserData(state, action: PayloadAction<IValues>) {
            state.userData = action.payload;
        },
        saveUserData(state, action: PayloadAction<IValues>) {
            state.userData = action.payload;
        },
        setEditingStatus(state, action) {
            state.isEditing = action.payload
        },
        setValues(state, action: PayloadAction<{ key: string; value: string }>) {
            const {key, value} = action.payload;
            return {
                ...state,
                values: {
                    ...state.values,
                    [key]: value,
                },
            };
        },
        resetValues(state) {
            state.values = {
                usernameValue: ''
            }
        }
    },
});

export const {
    getUserData,
    setValues,
    setEditingStatus,
    saveUserData,
    resetValues
} = userSlice.actions;
export const userReducer = userSlice.reducer;