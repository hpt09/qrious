import React from "react";
import { Person } from "../Interfaces/types";
import { findRootParents, findPartner } from "../Utils/Utils";
import CoupleContainer from "./CoupleContainer";
import Xarrow, { Xwrapper } from "react-xarrows";

interface Props {
  data: Person[];
}

const FamilyTree: React.FC<Props> = (props) => {
  const topLevelParents = findRootParents(props.data);

  const createTreeRecursively = (data: Person[], parent: Person) => {
    return (
      <div className="siblings">
        {parent.children.map((childId: number) => {
          const child = data.find((person: Person) => person.id === childId);
          const spouse = child ? findPartner(data, child) : null;

          return child ? (
            <div key={childId}>
              <CoupleContainer
                id={`${child.id}`}
                person1={child}
                person2={spouse}
              />
              <Xarrow
                start={`${child.id}`}
                end={`${parent.id}`}
                path="grid"
                startAnchor="top"
                endAnchor="bottom"
                showHead={false}
                color="#bbb"
                strokeWidth={2}
              />
              {createTreeRecursively(data, child)}
            </div>
          ) : null;
        })}
      </div>
    );
  };

  return (
    <div>
      <Xwrapper>
        <CoupleContainer
          id={`${topLevelParents[0].id}`}
          person1={topLevelParents[0]}
          person2={topLevelParents[1]}
        />
        {createTreeRecursively(props.data, topLevelParents[0])}
      </Xwrapper>
    </div>
  );
};

export default FamilyTree;
