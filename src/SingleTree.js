import React from 'react';
import './SingleTree.css';

export const SingleTree = props => {
  return (
    <div className="singleTreeView">
      <div className="basicInfo">
        <h1>{props.tree.commonName}</h1>
        <p>{props.tree.speciesName}</p>
        <img src={props.tree.image} alt={props.tree.commonName} />
      </div>
      <div className="locationInfo">
        <h4>Location</h4>
        <p>Nearest Address:</p>
        <p>
          {props.tree.location.nearestAddress.street}
          <br />
          {props.tree.location.nearestAddress.city}
        </p>
        <p>Tree ID:</p>
        <p>{props.tree.location.treeId}</p>
        <img
          src={props.tree.location.streetViewImage}
          alt="Street View Image"
        />
      </div>
      <div className="sizeInfo">
        <h4>Size</h4>
        <p>Height Range:</p>
        <p>{props.tree.heightRange}</p>
        <p>Trunk Diameter (DBH) Range:</p>
        <p>{props.tree.trunkDiameterRange}</p>
        <p>Species Height By Width:</p>
        <p>{props.tree.speciesHeightByWidth}</p>
      </div>
    </div>
  );
};
