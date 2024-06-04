import Header from './Header'
import Image from 'next/image'
import Footer from './Footer'

export default function Home() {
  return (
    <>
    <Header/>

    <Image src="/toppage/top.png" alt="hero" width={300} height={300}  
          className="w-full mt-0"/>

    <Image src="/toppage/Group54.png" alt="hero" width={300} height={300}  
          className="w-full m-0"/>

    <Footer/>

    </>
  )
}