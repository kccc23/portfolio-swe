import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
    return (
        <div>
            <h1>404</h1>
            <p>Hey, couldn't find this page, but here are my cats</p>
            <Image src="/images/cats.jpg" alt="Cinnamon and Duke" width={500} height={500} />
            <Link href="/">Return Home</Link>
        </div>
    )
}