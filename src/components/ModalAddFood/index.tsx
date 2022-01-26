import { useRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';
import { FormHandles } from '@unform/core';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';

interface Props {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddFood: (data: Data) => void;
}

interface Data {
  image: string;
  name: string;
  price: string;
  description: string;
}

function ModalAddFood({ isOpen, setIsOpen, handleAddFood }: Props) {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = async (data: Data) => {
    handleAddFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Novo Prato</h1>
        <Input icon={FiCheckSquare} name="image" placeholder="Cole o link aqui" />

        <Input icon={FiCheckSquare} name="name" placeholder="Ex: Moda Italiana" />
        <Input icon={FiCheckSquare} name="price" placeholder="Ex: 19.90" />

        <Input icon={FiCheckSquare} name="description" placeholder="Descrição" />
        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}

export default ModalAddFood;
