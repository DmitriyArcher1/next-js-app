// export { default } from "next-auth/middleware"

// // Приватный роутер на профиль пользователя
// export const config = { matcher: ['/profile', '/protected/:path*'] }\

import { withAuth } from "next-auth/middleware";

export const middleware = withAuth({
    pages: {
        signIn: '/signin'
    },
});

export const config = { matcher: ['/profile', '/protected/:path*'] }