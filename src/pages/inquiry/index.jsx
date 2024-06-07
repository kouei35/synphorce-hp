import Header from '../Header'
import Footer from '../Footer'
import InquiryForm from './form'

export default function Home() {

  return (
    <>
    <Header/>
    <h1 className="px-3 pt-10 pb-2 m-0 text-center md:text-xl text-lg">お問い合わせフォーム</h1>
    <InquiryForm/>



    <Footer/>
    </>
  )
}