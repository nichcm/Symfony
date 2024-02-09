import React from 'react';
import { useForm } from 'react-hook-form';
import { Alert, Button, Form } from 'react-bootstrap';

interface Step3FormData {
  phoneNumber: string;
  phoneNumber2: string;
}

interface Step3FormProps {
    userData: Step3FormData;
    onSubmit: (data: Step3FormData) => void;
  }
  
  const Step3Form = ({ userData, onSubmit }: Step3FormProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<Step3FormData>({ defaultValues: userData });

  return (
    <div className="my-4">
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId="phoneNumber">
                    <Form.Label>Número de Telefone Celular</Form.Label>
                    <Form.Control type="text" placeholder="Número de Telefone Celular" {...register('phoneNumber', { required: true })} />
                    {errors.phoneNumber && <Alert variant="danger">Este campo é obrigatório</Alert>}
                </Form.Group>
                <Form.Group controlId="phoneNumber2" className="mt-3">
                    <Form.Label>Número de Telefone Fixo</Form.Label>
                    <Form.Control type="text" placeholder="Número de Telefone Fixo" {...register('phoneNumber2', { required: true })} />
                    {errors.phoneNumber2 && <Alert variant="danger">Este campo é obrigatório</Alert>}
                </Form.Group>
                <Button type="submit" className="mt-3">Enviar</Button>
            </Form>
        </div>
  );
};

export default Step3Form;
