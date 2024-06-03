import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    return (
        <header class="bg-white h-16 border-gray-800 border-b-2">

            <div class="h-8">
                <Image
                        src="/vercel.svg"
                        alt="TryWorth"
                        width={160}
                        height={40}
                        class="flex justify-center h-full w-full"
                />
                <ul class="h-8 flex justify-end h-full gap-10 m-1 list-none">
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

        </header>
    );
}