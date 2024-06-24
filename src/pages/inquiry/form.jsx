import { useState } from 'react';
import { Textarea } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { MailIcon } from '../../components/MailIcon';
import Confirmation from "./Confirmation";

export default function InquiryForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://966t2oou0h.execute-api.ap-northeast-1.amazonaws.com/default/userregistFunction', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            console.log('Success:', result);
            // 成功した場合の処理をここに追加
        } catch (error) {
            alert('エラーが発生しました。');
            // エラーハンドリングをここに追加
        } finally {
        }
    };

    return (
        <form className="flex justify-center pb-10">
            <div className="bg-gray-200 rounded-xl m-0 p-5 w-[400px] sm:w-[400px]">
                {/* お名前 */}
                <div className="w-full px-2 mx-auto py-5">
                    <h2>お名前</h2>
                    <div className="flex justify-center w-full">
                        <Input
                            type="text"
                            label="姓"
                            name="lastName"
                            isRequired={true}
                            size="sm"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                        <Input
                            type="text"
                            label="名"
                            name="firstName"
                            isRequired={true}
                            size="sm"
                            className="px-1"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                        <p className="flex items-center">様</p>
                    </div>
                    <Input
                        type="email"
                        className="w-full pt-4"
                        label="Email"
                        name="email"
                        placeholder="you@example.com"
                        labelPlacement="outside"
                        isRequired={true}
                        value={formData.email}
                        onChange={handleChange}
                        startContent={
                            <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                        }
                    />
                    <div className="w-full">
                        <Textarea
                            isRequired={true}
                            label="お問い合わせ内容"
                            labelPlacement="outside"
                            name="message"
                            placeholder="Enter your description"
                            className="w-full py-4"
                            minRows={10}
                            value={formData.message}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex justify-end w-full">
                        <Confirmation formData={formData} handleSubmit={handleSubmit}/>
                    </div>
                </div>
            </div>
        </form>
    );
}
