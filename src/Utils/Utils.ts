import { Person } from "../Interfaces/types";

export const findPartner = (data: Person[], parent1: Person): Person | null => {
  const p1Children = parent1.children;

  for (const parent2 of data) {
    const p2children = parent2.children;

    if (
      parent1.id !== parent2.id &&
      p1Children.length > 0 &&
      p2children.length > 0 &&
      p1Children.sort().toString() === p2children.sort().toString()
    ) {
      return parent2;
    }
  }
  return null;
};

export const findRootParents = (data: Person[]): Person[] | [] => {
  const parentless: Person[] = [];
  for (const p of data) {
    if (p.parents.length === 0) {
      parentless.push(p);
    }
  }

  for (const parent1 of parentless) {
    const parent2 = findPartner(parentless, parent1);
    if (parent2 !== null) {
      return [parent1, parent2];
    }
  }
  return [];
};
