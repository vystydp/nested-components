import { useEffect, useState } from 'react';
import { IService } from '../types/IService';
import { IPost } from '../types/IPost';
import {DEFAULT_URL} from "../types/consts";

export interface Posts {
    data: IPost[];
}

const usePostsService = (blogUrl) => {
    const [result, setResult] = useState<IService<Posts>>({
        status: 'loading'
    });

    useEffect(() => {
        fetch(blogUrl? blogUrl : DEFAULT_URL)
            .then(response => response.json())
            .then(response => setResult({ status: 'loaded', payload: response }))
            .catch(error => setResult({ status: 'error', error }));
    }, []);

    return result;
};

export default usePostsService;
