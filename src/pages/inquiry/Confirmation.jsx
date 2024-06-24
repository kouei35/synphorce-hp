import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

export default function Confirmation({ formData , handleSubmit}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button color="primary" onPress={onOpen}>確認</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">確認内容</ModalHeader>
              <ModalBody>
                <p><strong>姓:</strong> {formData.lastName}</p>
                <p><strong>名:</strong> {formData.firstName}</p>
                <p><strong>Email:</strong> {formData.email}</p>
                <p><strong>お問い合わせ内容:</strong></p>
                <p>{formData.message}</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  閉じる
                </Button>
                <Button color="primary" onPress={onClose} onClick={handleSubmit}>
                  送信
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
