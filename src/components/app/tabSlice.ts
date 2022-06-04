import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../redux/store";

interface TabState {
    tabIndex: number,
}

const initialState: TabState = {
    tabIndex: 0,
};

const tabSlice = createSlice({
    name: "tab",
    initialState: initialState,
    reducers: {
        tabIndexHasSelected: (state, action: PayloadAction<TabState["tabIndex"]>) => {
            state.tabIndex = action.payload;
        }
    },
});


export const {tabIndexHasSelected} = tabSlice.actions;

export const selectTabIndex = (state: RootState) => state.tab.tabIndex;

export const tabReducer = tabSlice.reducer;
