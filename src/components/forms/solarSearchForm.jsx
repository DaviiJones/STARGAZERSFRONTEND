import React from "react";
import "/Users/davonbridgett/Documents/STARGAZERS/STARGAZERSFRONTEND/src/components/cardsAndContainersCSS/solarSearchForm.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


const SolarSearchForm = () => {
    return(
        <div className="solarSearchForm">
        <InputGroup bg="dark" data-bs-theme="dark" className="mb-3">
          <Button variant="warning" id="button-addon1">
            Search!
          </Button>
          <Form.Control
            aria-label="Example text with button addon"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        </div>
    )
}


export default SolarSearchForm