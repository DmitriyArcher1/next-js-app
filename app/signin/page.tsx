import GoogleButton from "@/components/GoogleButton";
import SignInForm from "@/components/SignInForm";

export const dynamic = 'force-dynamic';

export default async function Signin() {
    return (
        <div>
            <h1>Войти</h1>
            <GoogleButton />
            <div>or</div>
            <SignInForm />
        </div>
    )
}