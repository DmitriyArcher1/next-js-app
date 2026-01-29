'use client';
import { usePosts } from '@/store';
import React, { FormEventHandler, useRef, useState } from 'react';

const PostSearch = () => {
    const [search, setSearch] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const getPostsBySearch = usePosts(state => state.getPostsBySearch)

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();

        await getPostsBySearch(search)
    }

    const handleClear = () => {
        setSearch('')
        inputRef.current?.focus();
    }

    return (
        <form onSubmit={handleSubmit} className='search__form'>
            <div className="search__wrapper">
                <input className='search__input' 
                    ref={inputRef}
                    type="search" 
                    placeholder='Поиск...' 
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                />
                {search && (
                    <button
                        type="button"
                        className='search__clear'
                        onClick={handleClear}
                        aria-label="Очистить поиск"
                    >
                        <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                )}
                <button className='search__button' type="submit">
                    Найти
                </button>
            </div>
            
            
        </form>
    );
};

export default PostSearch;