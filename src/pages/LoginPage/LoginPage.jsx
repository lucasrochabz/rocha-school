import './LoginPage.css';

export const LoginPage = ({ isOpen, setModalOpen }) => {
  if (isOpen) {
    return (
      <>
        <main className="create-register-bg">
          <div className="create-register-content">
            <h2>Faça o login</h2>
            {/* <form onSubmit={handleCreateTeacher}> */}
            <div className="form-login-container">
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="exemplo@email.com"
              />
  
              <label htmlFor="senha">Senha:</label>
              <input
                type="password"
                name="senha"
                id="turno"
                placeholder="Insira sua senha"
              />
  
              <button
                // type="submit"
                className="btn-save-register"
              >
                Entrar
              </button>
            </div>
            {/* </form> */}
          <button className='btnClose' onClick={setModalOpen}>Fechar Modal</button>
          </div>
        </main>
      </>
    );
  }
  return null;
};
