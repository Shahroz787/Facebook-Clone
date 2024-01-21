import React, { useContext, useRef } from 'react'
import { PostListContext } from "../store/post-List-store";
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {

    const { addPost } = useContext(PostListContext);
    const navigate = useNavigate();

    const useridElement = useRef()
    const posttitleElement = useRef()
    const postbodyElement = useRef()
    const reactionsElement = useRef()
    const tagsElement = useRef()

    const handleonSubmit = (event) => {
        event.preventDefault();
        const userid = useridElement.current.value;
        const usertitle = posttitleElement.current.value;
        const userbody = postbodyElement.current.value;
        const userreaction = reactionsElement.current.value;
        const usertags = tagsElement.current.value.split(" ");

        useridElement.current.value = "";
        posttitleElement.current.value = "";
        postbodyElement.current.value = "";
        reactionsElement.current.value = "";
        tagsElement.current.value = "";

        console.log("server run")
        console.log("User ID:", userid); // Log the user ID 

        addPost(userid, usertitle, userbody, userreaction, usertags)

        navigate("/")

    }

    return (
        <>
            <form className='create-post' onSubmit={handleonSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Enter here user id</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1 " placeholder="your user id" ref={useridElement} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Post Title</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1 " placeholder="How aree you feeling today" ref={posttitleElement} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Post Content</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Tell us more about it... " ref={postbodyElement} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">No of reactions</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1 " placeholder="How many people reacted to this post" ref={reactionsElement} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Enter your hashtags here</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1 " placeholder="plz enter tags using space" ref={tagsElement} />
                </div>
                <button type="submit" className="btn btn-info">Submit</button>
            </form>
        </>
    )
}

export default CreatePost
