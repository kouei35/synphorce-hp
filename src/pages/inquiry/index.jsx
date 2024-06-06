import Header from '../Header'
import Footer from '../Footer'
import {Textarea} from "@nextui-org/react";
import {Input} from "@nextui-org/react";
import {MailIcon} from '../../components/MailIcon';
import {Button} from "@nextui-org/react";

export default function Home() {

  return (
    <>
    <Header/>
    <h1 className="px-3 pt-10 pb-2 m-0 text-center md:text-xl text-lg">お問い合わせフォーム</h1>
    <div className="flex justify-center pb-10">
      <div className="bg-gray-200 w-full max-w-2xl rounded-xl m-0 p-5 w-[300px] sm:w-[400px]">
          {/* お名前 */}
          <div className="w-full px-2 mx-auto py-5">
              <h2>お名前</h2>
              <div className="flex justify-center w-full">
                  <Input type="text" label="姓" />
                  <Input type="text" label="名" />
                  <p className="flex items-center">様</p>
              </div>
              <Input
                  type="email"
                  className="w-full"
                  label="Email"
                  placeholder="you@example.com"
                  labelPlacement="outside"
                  startContent={
                      <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
              />
              <div className="w-full">
                  <Textarea
                      label="お問い合わせ内容"
                      labelPlacement="outside"
                      placeholder="Enter your description"
                      className="w-full py-4"
                  />
              </div>
              <div className="flex justify-end w-full">
                  <Button color="primary">送信</Button>
              </div>
          </div>
      </div>
  </div>



    <Footer/>
    </>
  )
}