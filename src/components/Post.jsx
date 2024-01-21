// Post.jsx
import { useContext, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { PostListContext } from "../store/post-List-store";


const Post = ({ post }) => {
    const { deletePost } = useContext(PostListContext);
    const [showFullText, setShowFullText] = useState(false);


    const handleSeeMore = () => {
        setShowFullText(!showFullText);
    };

    return (
        <div className="card-containerr col-md-6" >
            <div className="card">
                <div className="card-body">

                    <h5 className="card-title">
                        {post.title}
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={() => deletePost(post.id)}>
                            <AiFillDelete />
                        </span>
                    </h5>

                    <p className={`card-text ${showFullText ? "" : "text-truncate"}`}>
                        {post.body}
                    </p>

                    {!showFullText && (
                        <button className="btn btn-link" onClick={handleSeeMore}>
                            See More
                        </button>
                    )}

                    <div className="mt-2">
                        {post.tags && Array.isArray(post.tags) && post.tags.map((tag) => (
                            <span key={tag} className="badge bg-primary mr-1">
                                {tag}
                            </span>
                        ))}
                    </div>


                    <div className="mt-2 alert alert-success" role="alert">
                        This post has been reacted by {post.reactions} people.
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Post;
