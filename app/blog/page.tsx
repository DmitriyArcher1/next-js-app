'use client';
import { Metadata } from "next";
import { useEffect, useState } from "react";
import { getAllPosts } from "../services/getPosts";
import Posts from "@/components/Posts";
import PostSearch from "@/components/PostSearch";

export default function Blog() {
    const [posts, setPosts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    // Рендер постов на странице
    useEffect(() => {
        getAllPosts()
            .then(setPosts)
            .finally(() => setLoading(false))
    }, [])

    return (
        <>
            <h1>Страница блога</h1>
            <PostSearch onSearch={setPosts} />
            { loading ? <h2>Загрузка...</h2> : <Posts posts={posts}/> }
        </>
    );
};