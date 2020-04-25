import React from 'react';
import { connect } from 'react-redux';
import { removeItem } from '../actions';

const AddedFeature = props => {
  console.log('AddedFeature props', props)

  const removeFeature = event => {
    event.preventDefault()
    props.removeItem(props.features)
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
    features: state.car.features
  }
}

export default connect(mapStateToProps, { removeItem })(AddedFeature);
