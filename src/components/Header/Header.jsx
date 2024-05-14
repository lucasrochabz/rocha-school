import './Header.css';

export const Header = () => {
  return (
    <>
      <header className="header">
        <h2 className="logo">Rocha School</h2>
        <nav>
          <ul>
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a href="#">Cadastre-se</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
