import { Form, useLoaderData } from "react-router-dom";

function ProgramEdit() {
  const loaderData = useLoaderData();
  // console.log(loaderData)

  return (
    <>
      <Form method="put">
        <label htmlFor="name">Nom</label>{" "}
        <input
          type="text"
          id="name"
          name="name"
          defaultValue={loaderData.name}
        />
        <button type="submit">Modifier</button>
      </Form>

      <Form method="delete">
        <button type="submit">Supprimer</button>
      </Form>
    </>
  );
}

export default ProgramEdit;