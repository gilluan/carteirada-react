import React, { Component } from 'react';
import { Jumbotron, Button, Panel, Col, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'

class Home extends Component {





  render() {
    const title = (
    <h3>Cadastro de Movimentações</h3>
  );
    return (
      <div>

       <Panel header={title} bsStyle="primary">
         <Form horizontal>
            <FormGroup controlId="formHorizontalEmail">
              <Col componentClass={ControlLabel} sm={2}>
                Valor
              </Col>
              <Col sm={10}>
                <FormControl type="number" placeholder="Valor" />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
              <Col componentClass={ControlLabel} sm={2}>
                Descrição
              </Col>
              <Col sm={10}>
                <FormControl type="text" placeholder="Descrição" />
              </Col>
            </FormGroup>

            <FormGroup controlId="formControlsSelect">
            <Col componentClass={ControlLabel} sm={2}>
              Tipo
            </Col>
            <Col sm={10}>
              <FormControl componentClass="select" placeholder="select">
                <option value="select">Selecione</option>
                <option value="e">Entrada</option>
                <option value="s">Saída</option>
              </FormControl>
            </Col>
            </FormGroup>
            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Button type="submit">
                  Salvar
                </Button>
              </Col>
            </FormGroup>
          </Form>
       </Panel>
      </div>

    );
  }
}

export default Home;
