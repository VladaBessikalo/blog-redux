import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    { id: "1", title: "Learning Redux", content: "describe what Redux is and how to use it"},
    { id: "2", title: "Slices...", content: "describe what Slice is and how to use it in Redux"},
]

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, content) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content
                    }
                }
            }
        }
    }
})

export const selectAllPosts = (state) => state.posts;
export const { postAdded } = postSlice.actions

export default postSlice.reducer