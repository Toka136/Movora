import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchfilms=createAsyncThunk('filmSlice/fetchfilms',async()=>
{
    // const res=await fetch('https://api.themoviedb.org/3/movie/popular?api_key=fd02ac94888f63a349464b4b91851bda');
    // const data=await res.results.json();
    // return data;
    const res=await fetch("https://api.themoviedb.org/3/movie/popular?api_key=fd02ac94888f63a349464b4b91851bda");
     const data=await res.json();
    return data.results;
})
const filmSlice=createSlice({
    initialState:[],
    name:"filmSlice",
    reducers:{
        addFilm:(state,action)=>
        {
            state.push(action.payload);
        },
        deleteFilm:(state,action)=>
        {
            state=state.filter((x)=>parseInt(x.id)!=parseInt(action.payload));
            return state;
        },
         editFilm:(state,action)=>
        {
            state=state.filter((x)=>parseInt(x.id)!=parseInt(action.payload.id));
            state.push(action.payload);
            return state;
        },

    },
    extraReducers :(builder)=>
    {
        builder.addCase(fetchfilms.fulfilled,(state,action)=>
        {
            // console.log("pay",action.payload);
            state=action.payload;
            return state
        })
    }
})
export const {addFilm,deleteFilm,editFilm}=filmSlice.actions;
export default filmSlice.reducer;