import { useState } from 'react'

function App() {
  const [ city, setCity] = useState("")

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <h1 className="navbar-brand text-white">
          Previsão do tempo.
        </h1>
      </nav>
      <div className="container">
        <div className="jumbotron">
          <h1>
            Se informe sobre a previsão do tempo em poucos cliques!
          </h1>
          <p className="lead">
            Selecione sua cidade e saiba as principais informações sobre o clima.
          </p>

          <div className="row mb-4">
            <div className="col-md-6">
              <input className="form-control" placeholder='Insira aqui o nome da cidade' value={city}></input>
            </div>
          </div>
          <button className = "btn btn-dark btn-lg" >Pesquisar</button>
        </div>
      </div>
    </div>
  );
}

export default App;
