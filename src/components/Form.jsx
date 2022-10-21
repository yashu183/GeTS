import React, { useState } from 'react';
import styled from "styled-components";
import { mobile } from "../responsive";
import axios from 'axios'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';  
import TableCell from '@material-ui/core/TableCell'; 
import TableHead from '@material-ui/core/TableHead';  
import TableRow from '@material-ui/core/TableRow'; 


const Container = styled.div`
  width: 70%;
  padding: 1rem;
  margin: 1rem auto 0;
  font-size: 1.5rem;
  ${mobile({ width: "90%", padding: "0" })}
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
//   border: 2px solid lightgray;
//   border-radius: 5px;
//   box-shadow: 5px #d3d3d3;
  ${mobile({ flexDirection: "column" })}
`

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;

  ${mobile({ width: "100%", margin: "0.5rem 0" })}
`;

const Input = styled.input`
  border: none;
  border: 2px solid lightgray;
  border-radius: 5px;
  box-shadow: 5px #d3d3d3;
  flex: 8;
  padding: 0.45rem 0.65rem;
`;

const Title = styled.h1`
  font-size: 25px;
  margin-bottom: 20px;
`;

const SubTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 8px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #f85e00;
  padding: 8px 16px;
  border-radius: 3px;
  margin: 0.8rem auto 0 auto;
  color: white;
  cursor: pointer
`;

const Summary = styled.div`
    width: 100%:
`

// styles
const s_to_d = {
  marginRight: "2rem", 
  fontSize: "1.3rem",
  padding: "8px 16px",
  background: "rgba(248, 94, 0, 0.5)",
  borderRadius: "5px",
  color: "white"
}

const hscode = {
  marginTop: "2rem",
  width: "100%"
}

const text_area = {
  width: "97.5%",
  height: "15rem",
  padding: "1rem"
}

const table_styles = {
  width: "100%",
  marginTop: "1rem",
  border: "2px solid #d3d3d3",
  boxShadow: "2px 2px 2px 2px #d3d3d3"
}

// API response
const res = {
  days: 20,
  route: ['a', 'b', 'c'],
  mode: 'air',
  price: 200
}

const Form = () => {
    const [source, setSource] = useState('');
    const [dest, setDest] = useState('');
    const [desc, setDesc] = useState('');
    const [weight, setWeight] = useState('');

    const [error, setError] = useState(false);

    const [showRrouteResults, setShowRrouteResults] = useState(false);

    const [sourceTxt, setSourceTxt] = useState('Yet to be decided');
    const [destTxt, setDestTxt] = useState('Yet to be decided');
    const [descTxt, setDescTxt] = useState('Yet to be decided');

    const submit = () => {
      if(source === '' || dest === '' || desc === '' || weight === '') {
        setError(true);
      } else {
        setShowRrouteResults(true)
        setError(false)
      }
    }

    const rows = [
      createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
      createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
      createData('Eclair', 262, 16.0, 24, 6.0),
      createData('Cupcake', 305, 3.7, 67, 4.3),
      createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];

    function createData(
      name,
      calories,
      fat,
      carbs,
      protein,
    ) {
      return { name, calories, fat, carbs, protein };
    }

    return (
    <Container>
        { error && <div style={{ color: "red", textAlign: "center" }}>Please enter all the details</div> }
        <Title>Tell us about your shipment</Title>
        <Wrapper>
            <InputContainer style={{ marginRight: "1rem" }}>
                <Input placeholder="Enter source point" name="source" maxLength={"6"} minLenght={"6"} onChange={async (e) => {
                    setSource(e.target.value);
                    if(e.target.value.length === 6) {
                        const res = await axios.get(`https://flux.freightos.com/api/v1/geocoder/autocomplete?searchTerm=${source}&filters=country:IN&language=en`);
                        console.log(res["data"]["predictions"][0]["label"]);
                        setSourceTxt(res["data"]["predictions"][0]["label"]);
                    }
                }} />
            </InputContainer>
            <InputContainer style={{ marginRight: "1rem" }}>
                <Input placeholder="Enter destination point" name='dest' maxLength={"6"} minLenght={"6"} value={dest} onChange={async (e) => {
                    setDest(e.target.value);
                    if(e.target.value.length === 6) {
                        const res = await axios.get(`https://flux.freightos.com/api/v1/geocoder/autocomplete?searchTerm=${dest}&filters=country:IN&language=en`);
                        console.log(res);
                        setDestTxt(res["data"]["predictions"][0]["label"]);
                    }
                }} />
            </InputContainer>
            <InputContainer style={{ marginRight: "1rem" }}>
                <Input placeholder="Enter description of the pkg" name="desc" value={desc} onChange={(e) => {
                    setDesc(e.target.value)
                }} />
            </InputContainer>
            <InputContainer style={{ marginRight: "1rem" }}>
                <Input type="number" name="weight" placeholder="Enter weight of the pkg in kgs" value={weight} onChange={(e) => {
                    setWeight(e.target.value)
                }} />
            </InputContainer>
        </Wrapper>
        <Title style={{ marginTop: "2rem", marginBottom: "0.75rem" }}>Your Shipment Summary</Title>
        <Summary style={{ marginBottom: "0.5rem" }}>
            <div style={{ display: "flex" }}><SubTitle style={{ marginRight: "0.5rem" }}>Source : </SubTitle>  <p style={{ fontSize: "16px" }}>{sourceTxt}</p></div>
            <div style={{ display: "flex" }}><SubTitle style={{ marginRight: "0.5rem" }}>Destination : </SubTitle>  <p style={{ fontSize: "16px" }}>{destTxt}</p></div>
            <div style={{ display: "flex" }}><SubTitle style={{ marginRight: "0.5rem" }}>HS Code : </SubTitle>  <p style={{ fontSize: "16px" }}>{descTxt}</p></div>
        </Summary>
        <Button onClick={submit}>
            Submit
        </Button>

        {/* showing routes */}
        { showRrouteResults &&         <div style={{ fontSize: "1rem", border: "2px solid #d3d3d3", padding: "1.5rem 1rem", marginTop: "2rem",  borderRadius: "5px" }}>
          <div className="header" style={{ display: "flex" }}>
            <div className="s_to_d" style={s_to_d}>
              {"PORT"}<strong><i className="fa-solid fa-arrow-right" style={{ margin: "0 0.5rem", color: '#f85e00' }}></i></strong>{"DOOR"}
            </div>
            <div className="kg" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginRight: "2rem" }}>
              <p>Load Weight</p>
              <p style={{ marginTop: "0.5rem" }}>{weight} kg</p>
            </div>
            <div className="date" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginRight: "2rem" }}>
              <p>Ordered Date</p>
              <p style={{ marginTop: "0.5rem" }}>{new Date().getDate()} - {new Date().getMonth()} - {new Date().getFullYear()}</p>
            </div>
          </div>
          <br/>
          <hr/>
          <br/>
          <div className="route">
          {sourceTxt}<strong><i className="fa-solid fa-arrow-right" style={{ margin: "0 0.5rem", color: '#f85e00' }}></i></strong>{destTxt}
          </div>
        </div> }
        {/* show results */}
        { showRrouteResults &&         <div className="results">
          <div className="row" style={{ display: "flex", border: "2px solid #d3d3d3", padding: "1.5rem 1rem", marginTop: "2rem", }}>
            <div className="details" style={{ width: "80%", borderRight: "2px solid black" }}>
                <div className="mode" style={{ display: "flex" }}>
                  <SubTitle style={{ fontSize: "1rem", marginRight: "0.5rem" }}>Mode: </SubTitle> <p style={{ fontSize: "1.1rem" }}>{res.mode}</p>
                </div>
                <div className="days" style={{ display: "flex" }}>
                  <SubTitle style={{ fontSize: "1rem", marginRight: "0.5rem" }}>Days: </SubTitle> <p style={{ fontSize: "1.1rem" }}>{res.days}</p>
                </div>
                <div className="route" style={{ display: "flex" }}>
                  <SubTitle style={{ fontSize: "1rem", marginRight: "0.5rem" }}>Route: </SubTitle> <p style={{ fontSize: "1.1rem" }}>{res.route}</p>
                </div>
            </div>
            <div className="price" style={{ width: "20%", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Title style={{ textAlign: "center", marginTop: "auto" }}>{res.price}$</Title>
            </div>
          </div>
        </div> }
        {/* top 10 HS code */}
        <div style={hscode}>
          <Title>Predict your HS Code here</Title>
          <textarea style={text_area}></textarea>
          <Table sx={{ minWidth: 650 }} aria-label="simple table" style={table_styles}>
            <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
    </Container>
    )
}

export default Form;
