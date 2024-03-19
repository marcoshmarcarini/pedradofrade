'use client'
import { useRouter } from "next/router"

export default function romulo(){
    const router = useRouter()
    const reniton = 'https://api.whatsapp.com/send?phone=5528999832160&text=Ol%C3%A1!%20Quero%20mais%20informa%C3%A7%C3%B5es%20do%20Lunar%20.'

    return(
        <>
            <div onLoad={() => router.push(reniton)}></div> 
        </>
    )
}