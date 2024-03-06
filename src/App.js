import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './Login';

function App(props) {
  // const [hello, setHello] = useState('');

  // useEffect(() => {
  //   axios
  //     .get('/api/test')
  //     .then((res) => {
  //       setHello(res.data);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching data:', error);
  //     });
  // }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
