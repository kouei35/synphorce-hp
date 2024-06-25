import Header from '../Header'
import Footer from '../Footer'
import { Z_VERSION_ERROR } from 'zlib'

export default function Home() {
  return (
    <>
    <Header />
    <h1 className="text-3xl font-bold">About</h1>
    <p>
        ここは、俺の紹介を書いちゃうぜー！
    </p>
    <Footer />
    </>
  )
}