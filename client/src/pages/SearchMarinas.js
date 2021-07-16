import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';


const SearchMarinas = () => {
    
    
    
    
    
    
    
    
    return (
        <div>
            <Jumbotron fluid className='text-light bg-primary'>
                <Container>
                    <h1>Search for a Marina</h1>
                    <Form /*onSubmit={handleFormSubmit}*/>
                        <Form.Row>
                            <Col xs={12} md={8}>
                                <Form.Control 
                                    name='searchInput'
                                    /*value={searchInput}*/
                                    /*onChange={(e) => setSearchInput(e.target.value)}*/
                                    type='text'
                                    size='lg'
                                    placeholder='Search for a Marina'
                                />
                            </Col>
                            <Col xs={12} md={4}>
                                <Button type='submit' variant='dark' size='lg'>
                                    Click to Search
                                </Button>
                            </Col>
                        </Form.Row>
                    </Form>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default SearchMarinas
