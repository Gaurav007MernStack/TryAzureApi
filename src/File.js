import React, { useState, useEffect } from 'react';
import { Container, Form, Row, Col, Button, Card, CardGroup, Jumbotron, Spinner } from 'react-bootstrap';
import axios from 'axios';
import './Style/style2.css';

export default function File() {
    const [data, setData] = useState({
        name: "",
        content: ""
    });
    const[id,setid] = useState({
        id: "",
    });
    const [file,setFile] = useState([]);
    const handleNameChange = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    };
    const OnFormSubmit = (e) => {
        e.preventDefault();
        addFile();
    };
    const getFiles = async() => {
        try {
            const res = await axios.get(`http://localhost:7000/getFilesFromDb`);
            console.log(res)
            setFile(res.data);
        } catch (error) {
            console.log("error",error);
        }
    }
    const addFile = async() => {
        try {
            const res = await axios.post(`http://localhost:7000/addFile`,data);
            getFiles();
        } catch (error) {
            console.log("error",error);
        }
    }
    const updateFile = async(id) => {
        try {
            const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            };
            console.log(data,id)
            const res = await axios.put(`http://localhost:7000/update/${id}`,data);
            setData({
                name: "",
                content: "",
            })
            getFiles();
        } catch (error) {
            console.log("error",error);
        }
    }
    useEffect(() => {
        getFiles();
      }, [])
      const getSinglefile = (_id,nam,cont) => {
        try {
            console.log(nam,cont)
            setData({
                name: nam,
                content: cont,
            });
            setid({
                id: _id,
            });
            console.log("okay")
        } catch (error) {
            console.log("error",error)
        }
      }
      const deletefile = async(_id,name)=> {
          try {
            const res = await axios.delete(`http://localhost:7000/deleteBYId/${_id}/${name}`);
            getFiles();
          } catch (error) {
              console.log("error",error);
          }
      }
    return (
        <div>
            <form onSubmit={(e) => OnFormSubmit(e)}>
                <div>
                    <input
                        type="text"
                        placeholder="Name"
                        value={data.name}
                        name="name"
                        onChange={(e) => handleNameChange(e)} />
                </div>
                <div>
                    <input
                        type="textarea"
                        placeholder="Content"
                        value={data.content}
                        name="content"
                        onChange={(e) => handleNameChange(e)} />
                </div>
                <Button type="submit" style={{ width: "60%", justifyContent: "center", display: "flex", margin: "auto",marginTop: "2%"}}>Submit</Button>
            </form>
            <Button variant="warning" style={{ width: "60%", justifyContent: "center", display: "flex", margin: "auto",marginTop: "2%"}} onClick={() => updateFile(id.id)}>Update</Button>
            <div style={{ marginTop: "5%"}}>
                {
                    file.map((item) => {
                        return (
                            <Col style={{ marginBottom: "2%" }} md={{ span: 3, offset: 0 }}>
                                <Card >
                                    <Card.Body>
                                        <Card.Title>{item.name}.txt</Card.Title>
                                        <Card.Text>
                                            <b>{item.content}</b>
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Button onClick={() =>getSinglefile(item._id,item.name,item.content)}>Update</Button>
                                        <Button variant="danger" onClick={() =>deletefile(item._id,item.name)}>Delete</Button>
                                    </Card.Footer>
                                </Card>

                            </Col>
                        )

                    })
                }
            </div>
        </div>
    )
}
