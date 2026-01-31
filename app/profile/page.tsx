import { authConfig } from "@/configs/auth"
import { getServerSession } from "next-auth/next"

export default async function Profile() {
    const session = await getServerSession(authConfig);

    return <div>
        <h1>Профиль <br /> <span style={{color: '#c97d58'}}>{session?.user?.name}</span></h1>
        {session?.user?.image &&
        <div className="user__image">
            <img src={session.user.image} alt="" />
        </div>
        }
    </div>
}