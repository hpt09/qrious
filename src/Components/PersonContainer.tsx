import React from "react";
import { Person } from "../Interfaces/types";
import logo from "../Assets/icon.png";

interface Props {
  person: Person | null;
}

const PersonContainer: React.FC<Props> = (props) => {
  return props.person ? (
    <div className={`person ${props.person.gender}`}>
      <img src={logo} alt="icon" className="icon" />
      {props.person.name}
    </div>
  ) : null;
};

export default PersonContainer;
