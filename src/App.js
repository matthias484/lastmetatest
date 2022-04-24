import './App.css';
import React from 'react';
import { useMoralis } from 'react-moralis'
import { Container } from 'react-bootstrap'

const tableStyle = {
  border: '1px solid black',
  borderCollapse: 'collapse',
}

const tdStyle = {
  border: '1px solid black',
}


function App() {


  const students = [
    { id: 1, Fach: 'Datenbanken ILV', Note: 1 },
    { id: 2, Fach: 'Internet of Things ILV', Note: 1 },
    { id: 3, Fach: 'Mobile App Development ILV', Note: 1 },
    { id: 4, Fach: 'Projektmanagement ILV', Note: 1 },
    { id: 5, Fach: 'Projektarbeit 1 MODUL', Note: 1 },
    { id: 6, Fach: 'Ring Lecture - Selected Topics ILV', Note: 1 },
    { id: 7, Fach: 'Secure Admin Tools ILV', Note: 1 },

  ]

  const {
    authenticate,
    isAuthenticated,
    user,
    logout
  } = useMoralis()

  if(!isAuthenticated){
    return(
      <div>
        <button onClick={authenticate}>Auth</button>
        <img id='metamask' src={require('./metamask.png')} onClick={() => authenticate()} />
      </div>
    )
  }
  
  return(
    <div>

      <button onClick={logout}> Logout </button>
    <div>
      <p>{user.getUsername()}</p>
      <p>{user.get('ethAddress')}</p>

    </div>

      <div id="heading">
        <h1>Certificate</h1>
        <h2>FH CAMPUS WIEN</h2>
        <h3>Favoritenstraße 110, 1030 Wien</h3>
      </div>

      <Container>
        <div class="grid2x2">
          <div class="box box1">
            <div>Name</div>
          </div>
          <div class="box box2">
            <div>Vorname</div>
          </div>
          <div class="box box3">
            <div>Geburtsdatum</div>
          </div>
          <div class="box box4">
            <div>Geburtsort</div>
          </div>
        </div>
      </Container>

      <div>
        <table style={tableStyle} className="font-link">
          <tbody>
            <tr>
              <th style={tdStyle}>Id</th>
              <th style={tdStyle}>Fach</th>
              <th style={tdStyle}>Note</th>
            </tr>
            {students.map(({ id, Fach, Note }) => (
              <tr key={id}>
                <td style={tdStyle}>{id}</td>
                <td style={tdStyle}>{Fach}</td>
                <td style={tdStyle}>{Note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <table>
        <colgroup>
          <col width="10%"></col>
          <col width="10%"></col>
        </colgroup>
        <tr>
          <td>Datum, Ort</td>
          <input type="text" name="datumort" /> <br></br>
          <td>Unterschrift</td> <br></br>
          <input type="text" name="unterschrift" />
        </tr>
      </table>
    </div>
  

  )

}

export default App;



