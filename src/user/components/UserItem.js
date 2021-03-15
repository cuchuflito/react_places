import React from "react";
import { Link } from "react-router-dom";
import { Card, Avatar } from "../../shared/components/UIElements";
import classes from "./UserItem.module.css";

const UserItem = ({ name, placeCount, id, image }) => {
  return (
    <li className={classes.userItem}>
      <Card className={classes.userItem_content}>
        <Link to={`/${id}/places`}>
          <div className={classes.userItem_image}>
            <Avatar
              image={`http://192.168.1.2:9000/${image}`}
              alt={`${name} avatar`}
            />
          </div>
          <div className={classes.UserItem_info}>
            <h2>{name}</h2>
            <h3>
              {placeCount} {placeCount === 1 ? "Place" : "Places"}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UserItem;
