// post-List-store.jsx
import { createContext, useReducer } from "react";

export const PostListContext = createContext({
    postList: [],
    addPost: () => { },
    deletePost: () => { },
    addInitialPosts: () => { },


});

const postListReducer = (currentPostList, action) => {
    let newPostList = currentPostList;
    switch (action.type) {
        case "ADD_POST":
            newPostList = [action.payload, ...currentPostList];
            break;
        case "DELETE_POST":
            newPostList = currentPostList.filter((post) => post.id !== action.payload.id);

            break;
        case "Initial_POST":
            newPostList = action.payload.post;
            break;
        default:
            break;
    }
    return newPostList;
};

const PostListProvider = ({ children }) => {
    const [postList, dispatchPostList] = useReducer(postListReducer, []);


    const addInitialPosts = (post) => {
        console.log("post add", post)
        dispatchPostList({
            type: "Initial_POST",
            payload: {
                post
            },
        });
    };

    const deletePost = (postId) => {
        dispatchPostList({
            type: "DELETE_POST",
            payload: {
                id: postId,
            },
        });
    };

    const addPost = (usertitle, userbody, userreaction, userid, usertags) => {
        console.log("post add", usertitle, userbody, userreaction, userid, usertags)
        dispatchPostList({
            type: "ADD_POST",
            payload: {
                // id: newDate(),
                title: usertitle,
                body: userbody,
                reactions: userreaction,
                userid: userid,
                tags: usertags,
            },
        });
    };





    return (
        <PostListContext.Provider value={{ postList, addPost, deletePost, addInitialPosts }}>
            {children}
        </PostListContext.Provider>
    );
};


export default PostListProvider;
