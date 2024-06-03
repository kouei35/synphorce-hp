import Header from './Header'
import Head from 'next/head'

export default function Home() {
  return (
    <>
    <Head>
      <title>Synphorce</title>
      <meta name="description" content="synphorce公式サイト" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    
    <Header/>
    <h1 className="text-3xl font-bold text-black">Hello Next.js</h1>
    <p>
        ここは、かっこよくしていくぜ！
        トップページだからな！
    </p>
    </>
  )
}