import Posts from "@/components/Posts";
import PostSearch from "@/components/PostSearch";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Посты | Блог",
};

export default function Blog() {
    return (
        <>
            <h1>Страница блога</h1>
            <PostSearch />
            <Posts />
        </>
    );
};