import React from "react";
import {Card} from "../../shared/components/UIElements";
import {Button} from "../../shared/components/FormElements";
import PlaceItem from "./PlaceItem";
import classes from "./PlaceList.module.css";

const PlaceList = (props) => {
  // console.log(props)
  // console.log(props.items)
  if (props.items.length === 0) {
    return (
      <div className={`${classes.PlaceList} center`}>
        <Card>
          <h2>No places found.</h2>
          <Button to="/places/new">Share Place</Button>
        </Card>
      </div>
    );
  }

  return (
    <ul className={`${classes.PlaceList}`}>
      {props.items.map((place) => (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.image}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorId={place.creator}
          coordinates={place.location}
          onDelete={props.onDeletePlace}
        />
      ))}
    </ul>
  );
};

export default PlaceList;
