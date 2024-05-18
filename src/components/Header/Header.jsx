import { Link } from 'react-router-dom';
import './Header.css';

export const Header = () => {
  return (
    <>
      <header className="header">
        <Link to="/" className="logo">
          Rocha School
        </Link>
        <nav className="nav">
          <ul>
            <li>
              <Link to="/signup">Cadastre-se</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/logado">Logado</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
