// PostList.jsx
import React, { useContext, useState, useEffect } from 'react';
import Post from './Post';
import NoPost from './NoPost';
import { PostListContext } from '../store/post-List-store';
import LoadingSpinner from './LoadingSpinner';

const PostList = () => {
    const { postList, addInitialPosts } = useContext(PostListContext);
    const [fetching, setfetching] = useState(false)

    useEffect(() => {
        setfetching(true);
        const controller = new AbortController();
        const signal = controller.signal;

        fetch("https://dummyjson.com/posts", { signal })
            .then((res) => res.json())
            .then((obj) => {
                addInitialPosts(obj.posts);
                setfetching(false);
            });

        return () => {
            console.log("Cleaning up UseEffect.");
            controller.abort();
        };
    }, []);

    return (
        <div className="container">
            <div className="row">
                {fetching && <LoadingSpinner />}
                {!fetching && postList?.length === 0 && <NoPost />}
                {!fetching && postList?.map((post) => <Post key={post.id} post={post} />)}

            </div>
        </div>
    );
};

export default PostList;
