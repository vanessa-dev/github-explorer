import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="Github Explorer" />
    <Title>Explore repositórios no GitHub!</Title>
    <Form>
      <input placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>
    <Repositories>
      <a href="teste">
        <img src="https://avatars.githubusercontent.com/u/52542645?s=460&u=17b4727e3f0ce3d7354ea7957d8e9a5183d04b2c&v=4" alt="Vanessa Santana" />
        <div>
          <strong>Repositório</strong>
          <p>Descrição do repositório</p>
        </div>
        <FiChevronRight size={20} />
      </a>
      <a href="teste">
        <img src="https://avatars.githubusercontent.com/u/52542645?s=460&u=17b4727e3f0ce3d7354ea7957d8e9a5183d04b2c&v=4" alt="Vanessa Santana" />
        <div>
          <strong>Repositório</strong>
          <p>Descrição do repositório</p>
        </div>
        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
);

export default Dashboard;
