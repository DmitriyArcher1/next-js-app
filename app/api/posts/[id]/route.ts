import { NextResponse } from "next/server";
import { headers, cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function DELETE(req: Request, { params }: { params: Promise<{id: string}> }) {
    const {id} = await params // id поста

    const headerList = headers()
    const type = (await headerList).get('Content-Type')

    const cookiesList = cookies()
    const co2 = (await cookiesList).get('Cookie_1')?.value

    // логика удаления поста
    // redirect('/blog')
    
    return NextResponse.json({ id, type, co2 });
}