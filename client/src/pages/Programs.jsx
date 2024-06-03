import { useLoaderData } from "react-router-dom";

import ProgramList from "../components/ProgramList";
import ProgramForm from "../components/ProgramForm";

function Programs() {
  const programs = useLoaderData();

  return (
    <>
      <h1>Programme</h1>
      <ProgramForm />
      <ProgramList programs={programs} />
    </>
  );
}

export default Programs;