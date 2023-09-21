import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

export default function ProductsModal({data}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        colorScheme="blue"
        onClick={onOpen}
        className="w-full md:w-full lg:w-24"
      >
        Descripton
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent >
          <ModalHeader>Description</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <div className="flex items-center gap-2 flex-wrap pb-2">
                  {data.technologies.map((data) => {
                    return (
                      <span className="bg-gray-500 rounded-lg text-white p-1 px-2 text-sm">
                        {data}
                      </span>
                    );
                  })}
                </div>
            <hr className="mb-2"/>
           {data.description}

          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
