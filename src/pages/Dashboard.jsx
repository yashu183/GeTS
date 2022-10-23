import styled from "styled-components";
import { mobile } from "../responsive";
import Select from '@mui/material/Select';
import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Chart from "../components/Chart";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: 70% 70%;
  background-repeat: no-repeat;
  // display: flex;
  // align-items: flex-start;
  // justify-content: flex-start;
  margin: 0 auto;
  ${mobile({ })}
`;

const Wrapper = styled.div`
  width: 70%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  ${mobile({ width: "75%", background: "transparent" })}
`;

const CardWrapper = styled.div`
  width: 90%;
  padding: 20px;
  margin: 0 auto;
  display: flex;
  color: white;
  ${mobile({ width: "75%", background: "transparent" })}
`;

const Title = styled.h1`
  font-size: 26px;
  text-align: center;
`;

const SubTitle = styled.h3`
  font-size: 20px;
  margin: 2rem 0;
  font-weight: 400;
  text-align: center;
`;

const Card = styled.div`
  width: 25%;
  height: 100px;
  border-radius: 5px;
  margin-right: 1rem;
  padding: 1rem;
  color: white
`

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #f85e00;
  color: white;
  cursor: pointer;
`;

const Dashboard = () => {
  const years = () => [
    { label: '2018' },
    { label: '2019' },
    { label: '2020' },
    { label: '2021' },
  ];
  const countries = ['Afghanistan', 'Albania', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bolivia (Plurinational State of)', 'Bosnia Herzegovina', 'Botswana', 'Brazil', 'Brunei Darussalam', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cambodia', 'Cameroon', 'Canada', 'Cayman Isds', 'Central African Rep.', 'Chile', 'China', 'China, Hong Kong SAR', 'China, Macao SAR', 'Colombia', 'Comoros', 'Congo', 'Costa Rica', 'Croatia', 'Cyprus', 'Czechia', "Côte d'Ivoire", 'Dem. Rep. of the Congo', 'Denmark', 'Dominican Rep.', 'Ecuador', 'Egypt', 'El Salvador', 'Estonia', 'Eswatini', 'Ethiopia', 'Fiji', 'Finland', 'France', 'French Polynesia', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Greenland', 'Grenada', 'Guatemala', 'Guyana', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Kuwait', 'Kyrgyzstan', "Lao People's Dem. Rep.", 'Latvia', 'Lebanon', 'Lesotho', 'Libya', 'Lithuania', 'Luxembourg', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Mauritania', 'Mauritius', 'Mexico', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Macedonia', 'Norway', 'Oman', 'Other Asia, nes', 'Pakistan', 'Palau', 'Panama', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Rep. of Korea', 'Rep. of Moldova', 'Romania', 'Russian Federation', 'Rwanda', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Isds', 'South Africa', 'Spain', 'Sri Lanka', 'State of Palestine', 'Sudan', 'Suriname', 'Sweden', 'Switzerland', 'Tajikistan', 'Thailand', 'Togo', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'USA', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United Rep. of Tanzania', 'Uruguay', 'Uzbekistan', 'Viet Nam', 'Yemen', 'Zambia', 'Zimbabwe', 'All'];

  const [countryName, setCountryName] = React.useState([]);
  const [year, setYear] = React.useState('');
  const [ec, setEC] = React.useState(0);
  const [ic, setIC] = React.useState(1);
  const [eq, setEQ] = React.useState(2);
  const [iq, setIQ] = React.useState(3);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setCountryName(
      typeof value === 'string' ? value.split(',') : value,
    );
    // api
  };

  const handleChangeYear = (event) => {
    setYear(event.target.value);
    // api
  };

  
  const theme = useTheme();

  return (
    <Container>
      <Wrapper>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-chip-label">Year</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={year}
            label="Year"
            onChange={handleChangeYear}
          >
            <MenuItem value={2018}>2018</MenuItem>
            <MenuItem value={2019}>2019</MenuItem>
            <MenuItem value={2020}>2020</MenuItem>
            <MenuItem value={2021}>2021</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-chip-label">Country</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={countryName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Country" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {countries.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, countryName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
        </FormControl>
      </Wrapper>
      {/* cards */}
      <CardWrapper>
        <Card style={{ background: "rgb(255, 99, 132)" }}>
          <Title>Export Quantity</Title>
          <SubTitle>{eq}</SubTitle>
        </Card>
        <Card style={{ background: "rgb(53, 162, 235)" }}>
          <Title>Import Quantity</Title>
          <SubTitle>{iq}</SubTitle>
        </Card>
        <Card style={{ background: "rgb(75, 192, 192)" }}>
          <Title>Export Cost</Title>
          <SubTitle>{ec}</SubTitle>
        </Card>
        {/* #E56B6F #6D597A #EAAC8B #0094C6*/}
        <Card style={{ background: "#EAAC8B" }}>
          <Title>Import Cost</Title>
          <SubTitle>{ic}</SubTitle>
        </Card>
      </CardWrapper>

      <Title style={{ width: "100%", marginTop: "1rem" }}>HS Code</Title>
      <Wrapper>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-chip-label">Year</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={year}
            label="Year"
            onChange={handleChangeYear}
          >
            <MenuItem value={2018}>2018</MenuItem>
          </Select>
        </FormControl>
      </Wrapper>
      <Wrapper>
        <Chart countryName={countryName} />
      </Wrapper>
    </Container>
  );
};

export default Dashboard;
