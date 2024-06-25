import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    return (
        <footer className="bg-white border-gray-800 border-t-2">

            <div className="grid grid-cols-3 py-2">
                <div className="hidden lg:flex md:flex">
                    <ul className="gap-10 px-12 py-2 list-none">
                        <li>
                            <Link href="/" className="text-black hover:text-gray-500">ホーム</Link>
                        </li>
                        <li>
                            <Link href="/products" className="text-black hover:text-gray-500">製品</Link>
                        </li>
                        <li>
                            <Link href="/about" className="text-black hover:text-gray-500">企業理念</Link>
                        </li>
                        <li>
                            <Link href="/inquiry" className="text-black hover:text-gray-500">お問い合わせ</Link>
                        </li>
                    </ul>
                </div>

                <div className="sm:flex md:hidden lg:hidden">
                </div>

                <div className="flex items-center justify-center">
                    <Image
                            src="/vercel.svg"
                            alt="TryWorth"
                            width={80}
                            height={20}
                            className=""
                    />
                </div>
            </div>
        </footer>
    );
}