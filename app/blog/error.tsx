'use client';

export default function ErrorWrapper({ error }: { error: Error }) {
    return (
        <div className="container">
            <h1>Oops!!! {error.message}</h1>
        </div>
    )
}