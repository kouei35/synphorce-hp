import Header from '../Header'
import React from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import Footer from '../Footer'

export default function Home() {
  return (
    <div>
    <Header />
    <h1 class="text-3xl font-bold m-2">製品一覧</h1>

    <h2 class="text-2xl m-2">Web開発</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-70 m-4">
        <div>
            <Card className= "py-2 w-128 m-2">
            <CardHeader className="py-0 px-4 flex-col items-start">
                <h4 className="font-bold text-large">トライワース株式会社様HP</h4>
                <p className="text-tiny uppercase font-bold">トライワース株式会社様</p>
                <CardBody className="overflow-visible py-2 flex justify-center items-center">
                    <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src="card/tryworth_hp.png"
                    width={270}
                    height={180}
                    />
                </CardBody>
                <small className="text-default-500">使用言語：HTML CSS JavaScript</small>
                <p className="text-tiny uppercase">Web開発フレームワークNext.jsを用いて動的なサイトを制作しました。行数追加</p>
            </CardHeader>
            </Card>
        </div>

        <div>
            <Card className= "py-2 w-128 m-2">
            <CardHeader className="py-0 px-4 flex-col items-start">
                <h4 className="font-bold text-large">折重様HP</h4>
                <p className="text-tiny uppercase font-bold">有限会社折重様</p>
                <CardBody className="overflow-visible py-2 flex justify-center items-center">
                    <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src="card/orisige.png"
                    width={270}
                    height={180}
                    />
                </CardBody>
                <small className="text-default-500">使用言語：HTML CSS JavaScript</small>
                <p className="text-tiny uppercase">Web開発フレームワークNext.jsを用いて動的なECサイトを制作しました。行数追加</p>
            </CardHeader>
            </Card>
        </div>

        <div>
            <Card className= "py-2 w-128 m-2">
            <CardHeader className="py-0 px-4 flex-col items-start">
                <h4 className="font-bold text-large">家系図アプリ</h4>
                <p className="text-tiny uppercase font-bold">ライセント株式会社様</p>
                <CardBody className="overflow-visible py-2 flex justify-center items-center">
                    <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src="card/kakeizu.png"
                    width={270}
                    height={180}
                    />
                </CardBody>
                <small className="text-default-500">使用言語：HTML CSS JavaScript Python</small>
                <p className="text-tiny uppercase">Web開発フレームワークNext.jsを用いて動的なECサイトを制作しました。</p>
            </CardHeader>
            </Card>
        </div>

        <div>
            <Card className= "py-2 w-128 m-2">
            <CardHeader className="py-0 px-4 flex-col items-start">
                <h4 className="font-bold text-large">着せ替えサービス</h4>
                <p className="text-tiny uppercase font-bold">自社開発</p>
                <CardBody className="overflow-visible py-2 flex justify-center items-center">
                    <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src="card/virtual_try_on.png"
                    width={270}
                    height={180}
                    />
                </CardBody>
                <small className="text-default-500">使用言語：HTML CSS JavaScript Python</small>
                <p className="text-tiny uppercase">AWSを用いてクラウドシステムを構築し、その上でwebサービスを立ち上げています。</p>
            </CardHeader>
            </Card>
        </div>
    </div>

    <h2 class="text-2xl m-2">ゲーム開発</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 m-4">

        <div>
            <Card className= "py-2 w-128 m-2">
            <CardHeader className="py-0 px-4 flex-col items-start">
                <h4 className="font-bold text-large">トライワースアカデミー</h4>
                <p className="text-tiny uppercase font-bold">トライワース株式会社様</p>
                <CardBody className="overflow-visible py-2 flex justify-center items-center">
                    <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src="card/tryworthAcademy.png"
                    width={270}
                    height={180}
                    />
                </CardBody>
                <small className="text-default-500">使用言語：C#</small>
                <p className="text-tiny uppercase">ゲームエンジンUnityを用いて水中ドローンシミュレータを制作しました。</p>
            </CardHeader>
            </Card>
        </div>
    </div>
    <Footer />
    </div>
  )
}