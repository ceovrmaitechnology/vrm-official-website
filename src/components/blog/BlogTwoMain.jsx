import React from 'react'
import { Link } from 'react-router-dom';

const BlogTwoMain = (props) => {
    const { blogID, blogImage, blogTitle, blogPublishedDate } = props;
    return (
        <>
            <Link to={`/blog/${blogID}`} className="thumbnail">
                <img src={`assets/images/blog/${blogImage}`} alt="Business_blog" />
            </Link>
            <div className="body">
                <span>Business Solution / by David Dolean</span>
                <Link to={`/blog/${blogID}`}>
                    <h4 className="title">
                        {blogTitle ? blogTitle : 'How to growing your business'}
                    </h4>
                </Link>
                <Link className="rts-read-more btn-primary" to={`/blog/${blogID}`}>
                    <i className="far fa-arrow-right" />
                    Read More
                </Link>
            </div>
        </>

    )
}

export default BlogTwoMain