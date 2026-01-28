import { Metadata } from "next";
import React from "react";

async function getData(id: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        next: {
            revalidate: 60
        },
    });

    if (!response.ok) throw new Error("Невозможно получить пост!");

    return response.json();
};

interface Props {
    params: {
        id: string;
    };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const {id} = await params
    const post = await getData(id)
    return {
        title: post.title,
    };
};

export default async function Post({ params }: Props) {
    const {id} = await params;
    const post = await getData(id);
    
    return (
        <>
            <div className="container">
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>
        </>
    );
};