'use client';
import { usePosts } from '@/store';
import Link from 'next/link';
import React, { useEffect } from 'react';

const Posts = () => {
    const posts = usePosts((state) => state.posts);
    const loading = usePosts((state) => state.loading);
    const getAllPosts = usePosts((state) => state.getAllPosts);

    useEffect(() => {
        getAllPosts()
    }, [getAllPosts])

    return loading 
        ? (<h2>Загрузка...</h2>) 
        :( 
        <div className='container'>
            <ul>
                {posts.map((post: any) => (
                    <li key={post.id}>
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Posts;