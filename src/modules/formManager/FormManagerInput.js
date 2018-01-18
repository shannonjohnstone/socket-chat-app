import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, shape } from 'prop-types';
import { formUpdateAction, formClearAction } from '../../actions';

class FormManagerInput extends Component {
  onChange = (e) => {
    const { currentForm } = this.props.forms;
    this.props.dispatchFormUpdateAction({ form: currentForm, path: `${currentForm}.${e.target.name}`, value: e.target.value });
  }
  render() {
    const { inputWrapper: WrapperComponent, formInput: FormInputComponent } = this.props;
    return (
      <WrapperComponent {...this.props} >
        <FormInputComponent {...this.props} onChange={this.onChange} />
      </WrapperComponent>
    );
  }
}

FormManagerInput.propTypes = {
  inputWrapper: func.isRequired,
  formInput: func.isRequired,
  forms: shape({}).isRequired,
  children: shape({}).isRequired,
  dispatchFormUpdateAction: func.isRequired
};

function mapStateToProps(store) {
  return {
    forms: store.forms
  };
}

export default connect(mapStateToProps, {
  dispatchFormUpdateAction: formUpdateAction,
  dispatchFormClearAction: formClearAction
})(FormManagerInput);
