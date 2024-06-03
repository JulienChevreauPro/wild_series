import { Form } from "react-router-dom";

function ProgramForm() {

  return (
    <Form method="post">
      <label htmlFor="name">Nouveau programme</label>{" "}
      <input type="text" id="name" name="name" />
      <button type="submit">Ajouter</button>
    </Form>
  );
}

export default ProgramForm;