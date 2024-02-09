import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaEdit, FaPlus } from 'react-icons/fa';
import UserService from '../../services/user.service';
import NormalTable from '../../components/NormalTable';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';


const Home = () => {
  const [users, setUsers] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await UserService.GetAll();
      if (response.data !== undefined) {
        setUsers(response.data);
      }
    } catch (error) {
      console.error('Erro ao buscar usuarios:', error);
    }
  };


  const columns = [
    { text: 'Nome do Usuario', key: 'fullName' },
    {
      text: 'Data de aniversário',
      key: 'dateOfBirth',
      cell: (user: any) => moment(user.dateOfBirth).format('DD/MM/YYYY'),
    },
    {
      key: 'action',
      cell: (user: any) => (
        <Button
          variant="primary"
          onClick={(e) => navigate('create-user/'+ user.id)}
        >
          <FaEdit /> Editar
        </Button>
      ),
    }
  ];

  return (
    <div className=" mt-6">
      <Container>
        <Row className="align-items-center p-6">
          <Col xs={8}>
              <h1>Lista de Usuários</h1>
          </Col>
          <Col xs={4} className="text-end">
              <Button variant="primary" onClick={() => navigate('/create-user')}>
                  <FaPlus /> Novo usuário
              </Button>
          </Col>
      </Row>
        <NormalTable data={users} columns={columns}/>
      </Container>
    </div>
  );
};

export default Home;
