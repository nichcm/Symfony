import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Alert, Button, Form } from 'react-bootstrap';

interface Step1FormData {
  fullName: string;
  dateOfBirth: string;
}

interface Step1FormProps {
    userData: Step1FormData;
    onSubmit: (data: Step1FormData) => void;
  }
const Step1Form = ({ userData, onSubmit }: Step1FormProps) => {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm<Step1FormData>({ defaultValues: userData });
    console.log( userData);

    useEffect(() => {
        if (userData) {
            setValue('fullName', userData.fullName);
            setValue('dateOfBirth', userData.dateOfBirth);
        }
    }, [userData, setValue]);

  return (
    <div className="my-4">
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId="fullName">
                    <Form.Label>Nome Completo</Form.Label>
                    <Form.Control type="text" placeholder="Nome Completo" {...register('fullName', { required: true })} />
                    {errors.fullName && <Alert variant="danger">Este campo é obrigatório</Alert>}
                </Form.Group>
                <Form.Group controlId="dateOfBirth" className="mt-3">
                    <Form.Label>Data de Nascimento</Form.Label>
                    <Form.Control type="date" {...register('dateOfBirth', { required: true })} />
                    {errors.dateOfBirth && <Alert variant="danger">Este campo é obrigatório</Alert>}
                </Form.Group>
                <Button type="submit" className="mt-3">Próximo</Button>
            </Form>
        </div>
  );
};

export default Step1Form;