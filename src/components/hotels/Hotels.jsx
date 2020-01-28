// @flow
import React from 'react';
import { connect } from 'react-redux';

import { doCloseHotel, doFetchHotels } from '../../../utils/saga_generator';
import Hotel from './Hotel';

type Props = {
  hotels: Array<Object>,
  onClose: any,
  onFetchHotels: any
};

class Hotels extends React.Component<Props> {
  componentDidMount() {
    this.props.onFetchHotels();
  }

  render() {
    const { hotels = [], onClose } = this.props;
    const hotelsTable = <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Manager</th>
          <th scope="col">Guests</th>
          <th scope="col">Stars</th>
          <th scope="col"></th>
        </tr>
      </thead>
        <tbody>
          { hotels.map((hotel) =>
            <Hotel
              key={ hotel.objectID }
              hotel={ hotel }
              onClose= { onClose }
            />
          )}
        </tbody>
      </table>;
      
    return <div className="hotels">
      { hotels.length > 0 ? hotelsTable : <h2>No hotels found</h2> }
    </div>;
  }
}

const mapStateToProps = state => ({
  hotels: state
});

const mapDispatchToProps = dispatch => ({
  onClose: id => dispatch(doCloseHotel(id)),
  onFetchHotels: () => dispatch(doFetchHotels())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hotels);