import React, { useState, useEffect} from 'react';
import { CardGroup, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './user.css';

const User = props => {
    var id = props.match.params.id
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [user, setUser] = useState([]);
    const [userAddress, setUserAddress] = useState([]);
    const [userCompany, setUserCompany] = useState([]);
    
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/" + id)
            .then(res => res.json())
            .then(
                (data) => {
                    console.log(data);
                    setIsLoaded(true);
                    setUser(data);
                    setUserAddress(data.address);
                    setUserCompany(data.company);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, )
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    if (!isLoaded) {
        return <div>Loading...</div>;
    }  

    if (user) {
        return (
            <div>
                <h1>Details of Kiosk User </h1>
                <div className="cards-container">

                <CardGroup className='userDetails'>
                    <Card>
                        <Card.Body>
                            <Card.Text><strong>-Name:</strong> {user.name}</Card.Text>
                            <Card.Text><strong>-User Name:</strong> {user.username}</Card.Text>
                            <Card.Text><strong>-Email:</strong> {user.email}</Card.Text>
                            <Card.Text><strong>-Phone:</strong> {user.phone}</Card.Text>
                            <Card.Text><strong>-Company:</strong> {userCompany.name}</Card.Text>
                            <Card.Text><strong>-Website:</strong> {user.website}</Card.Text>
                            <Card.Text><strong>-Address:</strong></Card.Text>
                            <Card.Text><strong>*Street:</strong> {userAddress.street}</Card.Text>
                            <Card.Text><strong>*Suite:</strong> {userAddress.suite}</Card.Text>
                            <Card.Text><strong>*City:</strong> {userAddress.city}</Card.Text>
                            <Card.Text><strong>*Zipcode</strong> {userAddress.zipcode}</Card.Text>
                        </Card.Body>
                        <ul>
                            <li>
                                <Link to={'/'}>
                                    <Button variant="primary" size="xl">
                                        Back
                                    </Button>
                                </Link>
                            </li>
                        </ul>
                    </Card>
                </CardGroup>
                </div>
            </div>



        );
    }
}
export default User;
