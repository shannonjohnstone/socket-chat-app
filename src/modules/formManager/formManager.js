import React from 'react';
import { func, shape } from 'prop-types';
import { connect } from 'react-redux';
import { formCurrentForm, formUpdateAction, formClearAction } from '../../actions';

const formManager = config => (Component) => {
  class Connected extends React.Component {
    componentDidMount() {
      this.props.dispatchFormCurrentForm(config.form);
      if (this.props.forms[config.form] === undefined) {
        this.props.dispatchFormUpdateAction({
          location: config.form,
          path: config.form,
          value: {}
        });
      }
    }
    componentWillUnmount() {
      if (!config.persist) {
        this.props.dispatchFormClearAction({ form: this.props.forms.currentForm });
      }
    }
    render() {
      return <Component />;
    }
  }

  Connected.propTypes = {
    forms: shape({}).isRequired,
    dispatchFormCurrentForm: func.isRequired,
    dispatchFormUpdateAction: func.isRequired,
    dispatchFormClearAction: func.isRequired
  };

  function mapStateToProps(store) {
    return {
      forms: store.forms
    };
  }

  return connect(mapStateToProps, {
    dispatchFormCurrentForm: formCurrentForm,
    dispatchFormUpdateAction: formUpdateAction,
    dispatchFormClearAction: formClearAction
  })(Connected);
};

export default formManager;
