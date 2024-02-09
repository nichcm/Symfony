import React from 'react';
import { useForm } from 'react-hook-form';
import { Alert, Button, Form } from 'react-bootstrap';

interface Step2FormData {
  street: string;
  number: string;
  zipCode: string;
  city: string;
  state: string;
}
interface Step2FormProps {
    userData: Step2FormData;
    onSubmit: (data: Step2FormData) => void;
  }
  
const Step2Form = ({ userData, onSubmit }: Step2FormProps) => {
    const { register, handleSubmit } = useForm<Step2FormData>({ defaultValues: userData });
    
  return (
    <div className="my-4">
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId="street">
                    <Form.Label>Rua</Form.Label>
                    <Form.Control type="text" placeholder="Rua" {...register('street')} />
                </Form.Group>
                <Form.Group controlId="number" className="mt-3">
                    <Form.Label>Número</Form.Label>
                    <Form.Control type="text" placeholder="Número" {...register('number')} />
                </Form.Group>
                <Form.Group controlId="zipCode" className="mt-3">
                    <Form.Label>CEP</Form.Label>
                    <Form.Control type="text" placeholder="CEP" {...register('zipCode')} />
                </Form.Group>
                <Form.Group controlId="city" className="mt-3">
                    <Form.Label>Cidade</Form.Label>
                    <Form.Control type="text" placeholder="Cidade" {...register('city')} />
                </Form.Group>
                <Form.Group controlId="state" className="mt-3">
                    <Form.Label>Estado</Form.Label>
                    <Form.Control type="text" placeholder="Estado" {...register('state')} />
                </Form.Group>
                <Button type="submit" className="mt-3">Próximo</Button>
            </Form>
        </div>
  );
};

export default Step2Form;
