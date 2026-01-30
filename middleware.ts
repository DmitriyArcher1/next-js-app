export { default } from "next-auth/middleware"

// Приватный роутер на профиль пользователя
export const config = { matcher: ['/profile', '/protected/:path*'] }