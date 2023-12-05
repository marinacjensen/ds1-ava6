import { useState } from 'react'

function App() {
  const [ city, setCity] = useState('')
  const [weather, setWeather] = useState(null)

  const changes = (event) => {
    setCity(event.target.value)
  }

  const search = () => {
    fetch(`http://api.weatherapi.com/v1/current.json?key=e751ea9cf5bc4fcbbb3225428211810&q=${city}&lang=pt`)
    .then((resp) => {
      if(resp.status === 200) {
        return resp.json()
      }
    })
    .then((data) => {
      console.log(data)
      setWeather(data);
    })
  }

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
            <div className="col-md-6 d-flex">
              <input className="form-control" placeholder='Insira aqui o nome da cidade' value={city} onChange={changes}></input>
              <button className = "btn btn-dark ml-2" onClick = {search}>Pesquisar</button>
            </div>
          </div>
          
          {
            weather ?(
              <div className='mt-2'>
                <div className = 'mt-6 d-flex align-items-center'>
                  <div>
                    <img src = {weather.current.condition.icon}/>
                  </div>
                  <div>
                    <h4>Clima de hoje: {weather.current.condition.text}</h4>
                    <p className='lead'>Temperatura atual: {weather.current.temp_c}°C</p>
                  </div>
                </div>
                <div className='align-items-center mt-2'>
                  <table className='table'>
                      <thead className='thead-dark'>
                        <tr>
                          <th scope='col'>Pressão</th>
                          <th scope='col'>Nuvens (%)</th>
                          <th scope='col'>Sensação Térmica</th>
                          <th scope='col'>Umidade</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{weather.current.pressure_mb}mbar</td>
                          <td>{weather.current.cloud}%</td>
                          <td>{weather.current.feelslike_c}°C</td>
                          <td>{weather.current.humidity}%</td>
                        </tr>
                      </tbody>
                  </table>
                </div>
              </div>
            ) : null
          }

        </div>
      </div>
    </div>
  );
}

export default App;
