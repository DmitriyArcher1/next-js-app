import GoogleButton from "@/components/GoogleButton";
import SignInForm from "@/components/SignInForm";

export const dynamic = 'force-dynamic';

export default async function Signin() {
    return (
        <div>
            <h1>Войти</h1>
            <div className="google__button">
                <GoogleButton />
            </div>
            <div className="or__wrapper">Или</div>
            <SignInForm />
        </div>
    )
}