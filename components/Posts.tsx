import Link from 'next/link';
import React from 'react';

interface Props {
    posts: any[];
};

const Posts = ({posts}: Props) => {
    return (
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