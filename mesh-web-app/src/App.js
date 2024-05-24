import React, { useState } from 'react';
import MeshConnectButton from './MeshConnectButton';
import BrokerConnectButton from './BrokerConnectButton';
import HoldingsButton from './HoldingsButton';

const App = () => {
  const [integrationId, setIntegrationId] = useState('');
  const authLink = 'some-auth-link'; // Replace with your auth link
  const linkToken = 'some-link-token'; // Replace with your link token
  const [authToken, setAuthToken] = useState(null); // State to hold the auth token

  const handleIntegrationChange = (event) => {
    setIntegrationId(event.target.value);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Try Mesh Below</h1>

      <div style={styles.dropdownContainer}>
        <label htmlFor="integrationId">Select Broker: </label>
        <select id="integrationId" value={integrationId} onChange={handleIntegrationChange} style={styles.dropdown}>
          <option value="34aeb688-decb-485f-9d80-b66466783394">Metamask</option>
          <option value="47624467-e52e-4938-a41a-7926b6c27acf">Coinbase</option>
          {/* Add more options as needed */}
        </select>
      </div>

      <div style={styles.buttonContainer}>
        <BrokerConnectButton authLink={authLink} linkToken={linkToken} integrationId={integrationId} />
      </div>

      <div style={{ ...styles.buttonContainer, marginTop: '20px' }}>
        <MeshConnectButton authLink={authLink} linkToken={linkToken} setAuthToken={setAuthToken}/>
      </div>

      <div style={styles.spacing} />
      Below is the button to review the User Holdings
      <HoldingsButton authToken={authToken}/>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f0f0f0',
    padding: '20px'
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '20px'
  },
  dropdownContainer: {
    marginBottom: '20px'
  },
  dropdown: {
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
    cursor: 'pointer'
  },
  buttonContainer: {
    display: 'flex',
    marginBottom: '20px'
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    marginRight: '10px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer'
  }
};

export default App;
