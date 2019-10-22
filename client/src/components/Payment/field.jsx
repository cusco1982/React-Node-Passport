import React from 'react';
import PropTypes from 'prop-types';
import Api from './api';

export default class BraintreeHostedField extends React.Component {

    static propTypes = {
        type: PropTypes.oneOf([
            'number', 'expirationDate', 'expirationMonth', 'expirationYear', 'cvv', 'postalCode',
        ]).isRequired,
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        placeholder: PropTypes.string,
        className: PropTypes.string,
        onCardTypeChange: PropTypes.func,
        onValidityChange: PropTypes.func,
        onNotEmpty: PropTypes.func,
        onFocus: PropTypes.func,
        onEmpty: PropTypes.func,
        onBlur: PropTypes.func,
        prefill: PropTypes.string,
    }

    static contextTypes = {
        braintreeApi: PropTypes.instanceOf(Api),
    }

    focus() {
        this.context.braintreeApi.focusField(this.props.type);
    }

    clear() {
        this.context.braintreeApi.clearField(this.props.type);
    }

    setPlaceholder(text) {
        this.context.braintreeApi.setAttribute(this.props.type, 'placeholder', text);
    }

    componentWillMount() {
        this.fieldId = this.context.braintreeApi.checkInField(this.props);
    }

    get className() {
        const list = ['braintree-hosted-field'];
        if (this.props.className) { list.push(this.props.className); }
        return list.join(' ');
    }

    render() {
        return <div id={this.fieldId} className={this.className} />;
    }
}
