import React from 'react';
import { connect } from 'react-redux';
import { removeItem } from '../actions';

const AddedFeature = props => {

  const removeFeature = event => {
    event.preventDefault()
    props.removeItem(props.feature)
  }

  return (
    <li>
      <button className="button" onClick={removeFeature}>X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  return {
    additionalPrice: state.additionalPrice,
    features: state.car.features
  }
}

export default connect(mapStateToProps, { removeItem })(AddedFeature);
