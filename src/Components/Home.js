// import {Tab} from "bootstrap";
import React, { useEffect, useState } from "react";
// import React, { useEffect, useState } from "react";
import { Table, Container, Button } from "react-bootstrap";
import { login, logout } from "../utils"
const Home = props => {

    const [promptList, changePromptList] = useState([]);

    useEffect(() => {
        const getPrompts = async () => {
          changePromptList(await window.contract.getAllPrompts());
          console.log(await window.contract.getAllPrompts());
        };
        getPrompts();
    }, []);

    return (
        <Container>
            <Table style={{margin:"5vh"}} striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>List of Polls</th>
                        <th>Go to polls</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        promptList.map((el,index)=>{
                            return (
                              <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{el}</td>
                                <td>
                                  <Button onClick={window.accountId === "" ? login : ()=>props.changeCandidates(el)}>Go to Poll</Button>
                                </td>
                              </tr>
                            );
                        })
                    }
                </tbody>
            </Table>
        </Container>
    );
};



export default Home;