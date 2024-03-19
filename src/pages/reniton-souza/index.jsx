'use client'
import { useRouter } from "next/router"

export default function reniton(){
    const router = useRouter()
    const reniton = 'https://api.whatsapp.com/send?phone=5528999796807&text=Ol%C3%A1!%20Quero%20mais%20informa%C3%A7%C3%B5es%20do%20Tempest%20Blue.'

    return(
        <>
            <div onLoad={() => router.push(reniton)}></div> 
        </>
    )
}