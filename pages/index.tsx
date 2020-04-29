import * as React from "react";
import BlogPosts from "../components/blogPosts/BlogPosts";
import {BLOG_URL} from "../types/consts";
import {IService} from "../types/IService";
import usePostsService, {Posts} from "../hooks/usePostsService";

export default () => {

    const service: IService<Posts> = usePostsService(BLOG_URL);
    return (
        <div className="app">

            {service.status === 'loading' &&
            <div>Loading...</div>}

            {service.status === 'loaded' &&
            <BlogPosts data={service.payload.data}/>}

            {service.status === 'error' && (
                <div>Internal Server Error.</div>
            )}

        </div>
    )
}
