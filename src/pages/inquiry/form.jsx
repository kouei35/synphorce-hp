import {Textarea} from "@nextui-org/react";
import {Input} from "@nextui-org/react";
import {MailIcon} from '../../components/MailIcon';

import Confirmation from "./Confirmation";

export default function InquiryForm() {
    return (
        <div className="flex justify-center pb-10">
            <div className="bg-gray-200 rounded-xl m-0 p-5 w-[400px] sm:w-[400px]">
                {/* お名前 */}
                <div className="w-full px-2 mx-auto py-5">
                    <h2>お名前</h2>
                    <div className="flex justify-center w-full">
                        <Input type="text" label="姓" isRequired={true} size="sm"/>
                        <Input type="text" label="名" isRequired={true} size="sm" className="px-1" />
                        <p className="flex items-center">様</p>
                    </div>
                    <Input
                        type="email"
                        className="w-full pt-4"
                        label="Email"
                        placeholder="you@example.com"
                        labelPlacement="outside"
                        isRequired={true} 

                        startContent={
                            <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                        }
                    />
                    <div className="w-full">
                        <Textarea
                            isRequired={true} 
                            label="お問い合わせ内容"
                            labelPlacement="outside"
                            placeholder="Enter your description"
                            className="w-full py-4"
                            minRows={10}
                        />
                    </div>
                    <div className="flex justify-end w-full">
                        <Confirmation/>
                    </div>
                </div>
            </div>
        </div>
    );
}
