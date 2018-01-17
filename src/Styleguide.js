import React from 'react';
import { Button, FieldSet, FormGroup, FormInput, FormInputAddonBtn } from './components';

const Styleguide = () => [
  <div className="l-container">
    <section className="row l-section">
      <h1>Form elements</h1>
      <FieldSet>
        <FormGroup
          labelText="This is a small input"
          formInput={FormInput}
          inputSize="sm"
          name="exampleInputSm"
          placeholder="Input example small"
        />
        <FormGroup
          labelText="This is a medium input"
          formInput={FormInput}
          inputSize="md"
          name="exampleInputMd"
          placeholder="Input example medium"
        />
        <FormGroup
          labelText="This is a large input"
          formInput={FormInput}
          name="exampleInputLg"
          placeholder="Input example large"
        />
        <FormGroup
          labelText="This is a large input"
          formInput={FormInputAddonBtn}
          name="exampleInputAddonBtn"
        />
      </FieldSet>
    </section>
    <section>
      <h1>Buttons elements</h1>
      <Button btnText="Standard button" />
    </section>
    <section>
      <h1>Grid elements</h1>
      <div className="l-container">
        <p>Simple usage</p>
        <div className="grid-example">
          <div className="row">
            <div className="col col-sm-12 col-med-6 col-lrg-4" />
            <div className="col col-sm-12 col-med-6 col-lrg-4" />
            <div className="col col-sm-12 col-med-6 col-lrg-4" />
          </div>
          <div className="row">
            <div className="col col-sm-12 col-lrg-3" />
            <div className="col col-sm-12 col-lrg-3" />
            <div className="col col-sm-12 col-lrg-6" />
          </div>
          <div className="row">
            <div className="col.col-sm-12" />
            <div className="col.col-sm-12" />
          </div>
          <div className="row">
            <div className="row" />
            <div className="row" />
            <div className="row" />
          </div>
        </div>
        <p>Offset example</p>
        <div className="grid-example">
          <div className="row">
            <div className="col col-sm-12 col-med-6 col-offset-sm-12 col-offset-med-3" />
          </div>
          <div className="row">
            <div className="col col-sm-12 col-med-3" />
            <div className="col col-sm-12 col-med-3 col-offset-sm-12 col-offset-med-6" />
          </div>
          <div className="row">
            <div className="col col-sm-12 col-med-3 col-offset-sm-12 col-offset-med-3" />
            <div className="col col-sm-12 col-med-3" />
          </div>
        </div>
      </div>
    </section>
  </div>
];

export default Styleguide;
