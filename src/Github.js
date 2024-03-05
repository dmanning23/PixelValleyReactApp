import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ReactLoading from 'react-loading';
import { Card } from 'react-bootstrap';

function GitHub() {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("greg");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getData();
        
    },[]);

    const getData = async () => {
        await axios.get(`https://api.github.com/search/users?q=${searchTerm}`)
        .then(res => {
            console.log(res.data.items);
            setData(res.data.items);
            setIsLoading(false);
        });
    }

    const handleSubmit = event => {
        event.preventDefault();
        setIsLoading(true);
        getData();
    }

    const listUsers = data.map((user) =>
        <Card style={{ width: '10rem' }}>
            <Card.Img
                variant="top"
                width ={64}
                height={64}
                className="mr-3"
                src={user.avatar_url}
                alt="Image"
            />
            <Card.Body>
                <Card.Title>{user.login}</Card.Title>
                <Card.Text>
                    <p>Id: {user.id}</p>
                </Card.Text>
            </Card.Body>
        </Card>
    );


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={event => setSearchTerm(event.target.value)} />
                <button type="submit">Search</button>
            </form>

            <h3>GitHub Users Results</h3>
            {isLoading && 
                <ReactLoading type="spinningBubbles" color="#444" />
            }
            {listUsers}
        </div>
    );
}

export default GitHub;