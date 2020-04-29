import P from './Paragraph';
import Post from './Post';
import "../../styles/main.scss";
import * as React from "react";
import {IPost} from "../../types/IPost";

interface TProps {
    data: IPost[];
}

export default class BlogPosts extends React.Component<TProps> {
    render() {
        return (
            <div className="blog-post-container">
                <div className="main">
                    {this.props.data.map((post, postIndex) => (
                        <Post title={post.title} key={postIndex} isLast={postIndex === this.props.data.length - 1}>
                            {post.paragraphs.map((p, idx) => <P key={idx}>{p}</P>)}
                        </Post>
                    ))}
                </div>
            </div>
        )
    }
}
