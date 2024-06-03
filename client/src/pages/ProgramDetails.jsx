import { Link, useLoaderData } from "react-router-dom";

import ProgramDescription from "../components/ProgramDescription";

function ProgramDetails() {
  const program = useLoaderData();
// console.log(program)
  return (
    <>
      <h1>{program.name}</h1>
      <Link to={`/programs/${program.id}/edit`}>Modifier</Link>
      <ProgramDescription programs={program.programs} />
    </>
  );
}

export default ProgramDetails;