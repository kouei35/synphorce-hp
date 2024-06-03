import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

export default function Header() {
    return (
        <>
        <Head>
        <title>Synphorce</title>
        <meta name="description" content="synphorce公式サイト" />
        <link rel="icon" href="favicon.ico" />
        </Head>
        
        <header class="bg-white border-gray-800 border-b-2 h-16">
        
        <div class="grid grid-cols-3 h-full">
            <div></div>
            <div class="flex justify-center items-center h-full">
                <Image
                        src="/vercel.svg"
                        alt="TryWorth"
                        width={160}
                        height={40}
                        class="flex justify-center"
                        
                />
            </div>
            <div class="h-full">
                <ul class=" flex justify-end h-full gap-10 p-1 list-none items-center">
                    <li>
                        <Link href="/" class="text-black hover:text-gray-500">ホーム</Link>
                    </li>
                    <li>
                        <Link href="/products" class="text-black hover:text-gray-500">製品</Link>
                    </li>
                    <li>
                        <Link href="/about" class="text-black hover:text-gray-500">企業理念</Link>
                    </li>
                </ul>
            </div>
        </div>
        </header>
        </>
    );
}