import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getPosts=createAsyncThunk("posts/getposts",async()=>{
    return  fetch("http://localhost:3000/results")
    .then((response) => response.json());
    
});

const postSlice=createSlice(({
    name:"posts",
    initialState:{
        posts:[],
        loading:false
    },
    extraReducers:{
        [getPosts.pending]:(state,action)=>{
            state.loading=true;
        },
        [getPosts.fulfilled]:(state,action)=>{
            state.loading=false;
            state.posts=action.payload;
        },
        [getPosts.rejected]:(state,action)=>{
            state.loading=false;
        },
    },
}));

export default postSlice.reducer;