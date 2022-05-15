import React from "react";
import { Person } from "../Interfaces/types";
import PersonContainer from "./PersonContainer";

interface Props {
  id: string;
  person1: Person | null;
  person2: Person | null;
}

const CoupleContainer: React.FC<Props> = (props) => {
  return (
    <div id={props.id} className="partners">
      <PersonContainer person={props.person1} />
      <PersonContainer person={props.person2} />
    </div>
  );
};

export default CoupleContainer;
