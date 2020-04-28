import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions';

const AdditionalFeature = props => {
  console.log('AdditionalFeature props', props)

  const buyItem = event => {
    event.preventDefault();
    props.addItem(props.feature)
  }


  return (
    <li>
      <button className="button" onClick={buyItem}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  console.log('AdditionalFeature mSTP', state)
  return {
    features: state.additionalFeatures
  }
}

export default connect(mapStateToProps, { addItem })(AdditionalFeature);
