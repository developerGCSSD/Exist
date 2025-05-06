import { createAsyncThunk } from "@reduxjs/toolkit";
import { endPoints } from "../../Network/endPoints";
import { api } from "../../Network/api";
import {createSlice} from '@reduxjs/toolkit';
import { removeToken,saveToken } from "../../AsyncStorage/LoginAuth";

export const loginThunk = createAsyncThunk(endPoints.Login, async args => {
    const response = await api.post(endPoints.Login, args).catch(error => {        
        console.log(error.toString())
        return error;
    })

    if (response.status !== 200) {
        throw new Error('Something Went Wrong')
    }
    else { 
      console.log('iiiiiddddddd', response.data.profileId)       
      return { profileId: response.data.profileId, token: response.data.token };
    }


}
);
 
export const initialState = {
  user: undefined,
  isTherapist: false,
  token:null,
  profileId: null
};
 
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: state => {
      state.user = undefined;
      state.isTherapist=false;
      state.token = null;
      state.profileId = null; 
      removeToken()  
    },
    login: (state, action) => {
      state.token = action.payload;
      state.profileId = action.payload.profileId;
      saveToken(state.token,state.profileId);
    },
    setIsTherapist: (state, action) => {
      state.isTherapist = action.payload;
    },
  },
  extraReducers: (builder)=> {
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.success=true;
      state.user = action.payload;
      state.profileId = action.payload.profileId;
      saveToken(state.user['token'],state.profileId);
    });
    builder.addCase(loginThunk.pending, state => {
      state.isLoading = true;
      state.error = false;
      state.success=false;

    });
    builder.addCase(loginThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.success=false;
      state.error = action.error
      console.log("rejectedddddd", action.error);
    });
  },
});
 
export const {logout, setIsTherapist} = userSlice.actions;
export default userSlice.reducer;


