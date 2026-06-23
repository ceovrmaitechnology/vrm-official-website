import React from 'react'

import { Link } from 'react-router-dom';

const BlogGridMain = (props) => {
    const { blogID, blogImage, blogTitle, blogCategory, blogPublishedDate } = props;
    return (
        <>
            <div className="blog-header">
                <Link className="thumbnail" to={`/blog/${blogID}`}>
                    <img
                        src={`assets/images/blog/${blogImage}`}
                        alt="Business_Blog"
                    />
                </Link>
                <div className="blog-info">
                    <div className="user">
                        <i className="fal fa-user-circle" />
                        <span>by Smith</span>
                    </div>
                    <div className="user">
                        <i className="fal fa-tags" />
                        <span>{blogCategory ? blogCategory : "1"}</span>
                    </div>
                </div>
                <div className="date">
                    <h6 className="title">15</h6>
                    <span>Jan</span>
                </div>
            </div>
            <div className="blog-body">
                <Link to={`/blog/${blogID}`}>
                    <h5 className="title">
                        {blogTitle ? blogTitle : 'How to growing your business'}
                    </h5>
                </Link>
            </div>
        </>

    )
}

export default BlogGridMain