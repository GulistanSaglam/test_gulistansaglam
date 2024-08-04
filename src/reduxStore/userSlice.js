import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const signUpUser = createAsyncThunk("signupuser", async (userInfo) => {
    return fetch("https://django-dev.aakscience.com/signup/", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            first_name: userInfo.first_name,
            last_name: userInfo.last_name,
            username: userInfo.username,
            country: userInfo.country,
            email: userInfo.email,
            password: userInfo.password,
            user_type: userInfo.user_type
        })
    }).then(response => response.json())
})


export const userSlice = createSlice({
    name: 'user',
    initialState: {
        loading: false,
        user: null,
        error: ''
    },
    reducers: {
        logout: (state) => {
            state.user = null
        }
    },

    extraReducers: (builder) => {
        builder.addCase(signUpUser.pending, state => {
            state.loading = true
            state.user = null
            state.error = ''
        })
        builder.addCase(signUpUser.fulfilled, (state, action) => {
            state.loading = false
            state.user = action.payload
            state.error = ''
        })
        builder.addCase(signUpUser.rejected, (state, action) => {
            state.loading = false
            state.user = null
            state.error = action.message.error
        })
    }
});

export const { logout } = userSlice.actions;
export const selectUser = (state) => (state.user.user);
export default userSlice.reducer;

