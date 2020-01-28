// @flow
import React from 'react';

type HotelProps = {
  name: string,
  url: string,
  manager: string,
  num_guests: number,
  stars: number,
  objectID: number
}

const Hotel = ({ hotel, onClose }: { hotel: HotelProps, onClose: any }) => {
  const {
    name,
    url,
    manager,
    num_guests,
    stars,
    objectID
  } = hotel;
  return (
    <tr>
      <td><a href={url}>{name}</a></td>
      <td>{manager}</td>
      <td>{num_guests}</td>
      <td>{stars}</td>
      <td>
        <button
          type="button"
          className="btn btn-sm btn-light"
          onClick={() => onClose(objectID)}
        >
          Close
        </button>
      </td>
    </tr>
  );
};
export default Hotel;