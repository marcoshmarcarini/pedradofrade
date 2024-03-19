'use client'
import { useRouter } from "next/router"
import { useEffect } from "react"

export default function gabriel(){
    const router = useRouter()
    const gabriel = 'https://api.whatsapp.com/send?phone=5528999919177&text=Ol%C3%A1!%20Quero%20mais%20informa%C3%A7%C3%B5es%20do%20Vicent%20Black.'

    useEffect(() => router.push(gabriel), [])

    return(
        <>
            <div onLoad={() => router.push(gabriel)}></div> 
        </>
    )
}