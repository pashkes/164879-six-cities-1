import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import City from './../city/city.jsx';

class Cities extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {cities} = this.props;
    return (
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city, i) => <City key={i} city={city}/>)}
        </ul>
      </section>
    );
  }
}

Cities.propTypes = {
  cities: PropTypes.array.isRequired,
};

export default Cities;
