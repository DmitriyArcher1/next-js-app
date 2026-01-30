export const getAllPosts = async () => {
    const response = await fetch("/api/posts");

    if (!response.ok) throw new Error("Невозможно загрузить посты!");
    
    return response.json();
};

export const getPostsBySearch = async (search: string) => {
    const response = await fetch(`/api/posts?q=${search}`);

    if (!response.ok) throw new Error("Невозможно найти посты!");
    
    return response.json();
};