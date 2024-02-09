import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Alert, Button, Container, Form } from 'react-bootstrap';
import UserService from '../../services/user.service';
import { ToastService } from '../../services/toast.service';
import AddressService from '../../services/address.service';
import Step1Form from './Step1Form';
import Step2Form from './Step2Form';
import Step3Form from './Step3Form';
import PhoneService from '../../services/phone.service';
import moment from 'moment';

interface UserFormData {
fullName: string;
dateOfBirth: string;
phoneNumber: string;
mobile: boolean;
phoneNumber2: string;
mobile2: boolean;
street: string;
number: string;
zipCode: string;
city: string;
state: string;
}

const CreateUser = () => {
    const [step, setStep] = useState(1);
    const [userData, setUserData] = useState<any>(null);
    const { id } = useParams<{ id?: string }>();
    const navigate = useNavigate();
  
    useEffect(() => {
      if (id) {
        fetchData(id);
      }
    }, [id,step]);
  
    const fetchData = async (id: string) => {
      try {
        const response = await UserService.Get(id);
        if (response !== undefined) {
          const userData = {
            fullName: response.fullName,
            dateOfBirth: moment(response.dateOfBirth).format('YYYY-MM-DD'),
            phoneNumber: response.Phones[0]?.phoneNumber,
            phoneNumber2: response.Phones[1]?.phoneNumber,
            street: response.Address?.street,
            number: response.Address?.number,
            zipCode: response.Address?.zipCode,
            city: response.Address?.city,
            state: response.Address?.state,
          };
          setUserData(userData);
        }
      } catch (error) {
        console.error('Erro ao buscar usuário:', error);
      }
    };

const handleStep1Submit = async (data: any) => {    
    try {
        let dataInput = {
            fullName: data.fullName,
            dateOfBirth: data.dateOfBirth,
            userId: id ?? null
        };

        const response = await UserService.Save(dataInput);
        if (response.success) {
            ToastService.success("Salvo com sucesso.");
            navigate(`/create-user/${response.id}`);
            setStep(2);
        }
        return;
       
    } catch (error) {
        ToastService.error("Erro ao inserir o usuario.");
    }
  };

  const handleStep2Submit = async (data: any) => {
    console.log('Step 2 submitted with data:', data);
    try {
        let dataInput = {
            number: data.number,
            street: data.street,
            city: data.city,
            state: data.state,
            zipCode: data.zipCode,
            userId: id
        };

        const response = await AddressService.Save(dataInput);
        if (response.success) {
            ToastService.success("Salvo com sucesso.");
            setStep(3);
        }
        return;
       
    } catch (error) {
        ToastService.error("Erro ao inserir o usuario.");
    }
  };

  const handleStep3Submit = async (data: any) => {
    console.log('Step 3 submitted with data:', data);
    try {
        let dataInput = {
            mobilePhone: data.phoneNumber2,
            phone: data.phoneNumber,
            userId: id
        };

        const response = await PhoneService.Save(dataInput);
        if (response.success) {
            ToastService.success("Salvo com sucesso.");
        }
        navigate(`/`);
        return;
       
    } catch (error) {
        ToastService.error("Erro ao inserir o usuario.");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <div style={{ width: '50%' }}>
                <h1 className="text-center mb-4">Criar Usuário</h1>
                {step === 1 && <Step1Form userData={userData} onSubmit={handleStep1Submit} />}
                {step === 2 && <Step2Form userData={userData} onSubmit={handleStep2Submit} />}
                {step === 3 && <Step3Form userData={userData} onSubmit={handleStep3Submit} />}
                {step !== 1 && (
                    <Button variant="secondary" onClick={() => setStep(step - 1)}>Voltar</Button>
                )}
            </div>
        </Container>
  );
};

export default CreateUser;
