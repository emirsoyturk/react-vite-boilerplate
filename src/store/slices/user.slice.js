import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        id: -1,
        username: '',
        bio: '',
        profile_pic: '',
    },
    reducers: {
        changeUser: (state, action) => {
            state.general = action.payload
        },
    },
})

export const { changeUser } = userSlice.actions
export default userSlice.reducer