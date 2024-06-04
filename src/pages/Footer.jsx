import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    return (
        <footer class="bg-white border-gray-800 border-t-2">

            <div class="grid grid-cols-3">
                <div className="hidden lg:flex md:flex">
                    <ul class="gap-10 px-12 py-2 list-none">
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

                <div class="sm:flex md:hidden lg:hidden">
                </div>

                <div class="flex items-center justify-center">
                    <Image
                            src="/vercel.svg"
                            alt="TryWorth"
                            width={160}
                            height={40}
                            class=""
                    />
                </div>
            </div>
        </footer>
    );
}