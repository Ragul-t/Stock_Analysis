// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Container, Grid, FormControl, InputLabel, MenuItem, Select, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Board from './components/Board';
import Navbar from './navbar'
const CompanyData = [
  {
    ticker: "AAPL",
    name: "Apple Inc.",
    address: "One Apple Park Way, Cupertino, CA 95014",
    ebitda: 110240000000,
    eps: 5.12
  },
  {
    ticker: "MSFT",
    name: "Microsoft Corporation",
    address: "One Microsoft Way, Redmond, WA 98052",
    ebitda: 76166000000,
    eps: 8.05
  },
  {
    ticker: "GOOGL",
    name: "Alphabet Inc.",
    address: "1600 Amphitheatre Parkway, Mountain View, CA 94043",
    ebitda: 64615000000,
    eps: 102.06
  },
  {
    ticker: "AMZN",
    name: "Amazon.com Inc.",
    address: "410 Terry Ave N, Seattle, WA 98109",
    ebitda: 38625000000,
    eps: 52.52
  },
  {
    ticker: "FB",
    name: "Meta Platforms Inc.",
    address: "1 Hacker Way, Menlo Park, CA 94025",
    ebitda: 45430000000,
    eps: 13.93
  },
  {
    ticker: "TSLA",
    name: "Tesla Inc.",
    address: "3500 Deer Creek Road, Palo Alto, CA 94304",
    ebitda: 8438000000,
    eps: 2.37
  },
  {
    ticker: "NVDA",
    name: "NVIDIA Corporation",
    address: "2788 San Tomas Expressway, Santa Clara, CA 95051",
    ebitda: 7237000000,
    eps: 9.17
  },
  {
    ticker: "PYPL",
    name: "PayPal Holdings Inc.",
    address: "2211 N 1st St, San Jose, CA 95131",
    ebitda: 5895000000,
    eps: 4.35
  },
  {
    ticker: "NFLX",
    name: "Netflix Inc.",
    address: "100 Winchester Circle, Los Gatos, CA 95032",
    ebitda: 10831000000,
    eps: 5.65
  },
  {
    ticker: "INTC",
    name: "Intel Corporation",
    address: "2200 Mission College Blvd, Santa Clara, CA 95054",
    ebitda: 37270000000,
    eps: 5.00
  },
  {
    ticker: "CSCO",
    name: "Cisco Systems Inc.",
    address: "170 West Tasman Dr, San Jose, CA 95134",
    ebitda: 16061000000,
    eps: 3.02
  },
  {
    ticker: "ADBE",
    name: "Adobe Inc.",
    address: "345 Park Ave, San Jose, CA 95110",
    ebitda: 5187000000,
    eps: 12.12
  },
  {
    ticker: "CRM",
    name: "Salesforce.com Inc.",
    address: "415 Mission St, San Francisco, CA 94105",
    ebitda: 4605000000,
    eps: 3.69
  },
  {
    ticker: "AMD",
    name: "Advanced Micro Devices Inc.",
    address: "2485 Augustine Dr, Santa Clara, CA 95054",
    ebitda: 3071000000,
    eps: 2.36
  },
  {
    ticker: "QCOM",
    name: "Qualcomm Incorporated",
    address: "5775 Morehouse Dr, San Diego, CA 92121",
    ebitda: 8936000000,
    eps: 8.44
  },
  {
    ticker: "IBM",
    name: "International Business Machines Corporation",
    address: "1 New Orchard Road, Armonk, NY 10504",
    ebitda: 15991000000,
    eps: 6.06
  },
  {
    ticker: "PYPL",
    name: "PayPal Holdings Inc.",
    address: "2211 N 1st St, San Jose, CA 95131",
    ebitda: 5895000000,
    eps: 4.35
  },
  {
    ticker: "UBER",
    name: "Uber Technologies Inc.",
    address: "1455 Market St #400, San Francisco, CA 94103",
    ebitda: 2073000000,
    eps: -0.81
  },
  {
    ticker: "V",
    name: "Visa Inc.",
    address: "900 Metro Center Blvd, Foster City, CA 94404",
    ebitda: 16088000000,
    eps: 5.35
  },
  {
    ticker: "SQ",
    name: "Square Inc.",
    address: "1455 Market St #600, San Francisco, CA 94103",
    ebitda: 1638000000,
    eps: 3.63
  },
  {
    ticker: "SNAP",
    name: "Snap Inc.",
    address: "2772 Donald Douglas Loop N, Santa Monica, CA 90405",
    ebitda: -83257000,
    eps: -0.17
  },
];

const ContainerStyled = styled(Container)(({ theme }) => ({
  marginTop: '20px',
}));

const FormControlStyled = styled(FormControl)(({ theme }) => ({
  minWidth: 120,
  width: '100%',
  margin: '10px 0',
}));

const ButtonStyled = styled(Button)(({ theme }) => ({
  marginTop: '20px',
  backgroundColor: '#3f51b5',
  color: 'white',
  '&:hover': {
    backgroundColor: '#303f9f',
  },
}));

function Home() {
  const [selectedCompanies, setSelectedCompanies] = React.useState({
    company1: '',
    company2: '',
    company3: '',
    company4: '',
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSelectedCompanies((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const selectedCompanyData = Object.values(selectedCompanies).map(
      (ticker) => CompanyData.find((company) => company.ticker === ticker)
    );
    navigate('/board', { state: selectedCompanyData });
  };

  return (
    <div>
    <Navbar/>
    <ContainerStyled maxWidth="lg">
      <Grid container spacing={3}>
        {['company1', 'company2', 'company3', 'company4'].map((company, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <FormControlStyled variant="outlined">
              <InputLabel id={`${company}-label`}>Company {index + 1}</InputLabel>
              <Select
                labelId={`${company}-label`}
                id={company}
                name={company}
                value={selectedCompanies[company]}
                onChange={handleChange}
                label={`Company ${index + 1}`}
              >
                {CompanyData.map((comp, idx) => (
                  <MenuItem key={idx} value={comp.ticker}>
                    {comp.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControlStyled>
          </Grid>
        ))}
      </Grid>
      <ButtonStyled 
        variant="contained" 
        onClick={handleSubmit}
      >
        Submit
      </ButtonStyled>
    </ContainerStyled>
    </div>
  );
}

function BoardWrapper() {
  const location = useLocation();
  const companies = location.state || [];
  return <Board companies={companies} />;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/board" element={<BoardWrapper />} />
      </Routes>
    </Router>
  );
}

export default App;
