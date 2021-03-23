import React from 'react';
import { FiChevronsLeft, FiChevronRight } from 'react-icons/fi';
import { Link, useRouteMatch } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams{
    repository: string;
}
const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <>
      <Header>
        <img src={logoImg} alt="GitHub Explorer" />
        <Link to="/">
          <FiChevronsLeft size={16}>Voltar</FiChevronsLeft>
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img src="https://avatars.githubusercontent.com/u/52542645?s=88&u=17b4727e3f0ce3d7354ea7957d8e9a5183d04b2c&v=4" alt="" />
          <div>
            <strong>Rocktseat</strong>
            <p>Description</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1800</strong>
            <span>stars</span>
          </li>
          <li>
            <strong>1800</strong>
            <span>forks</span>
          </li>
          <li>
            <strong>1800</strong>
            <span>issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="asss">
          <div>
            <strong>asss</strong>
            <p>assss</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>

    </>
  );
};

export default Repository;
