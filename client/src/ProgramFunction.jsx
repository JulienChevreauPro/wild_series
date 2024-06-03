import { redirect } from "react-router-dom";

export async function getAllPrograms() {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/programs`, {
    method: "get",
  });
  const data = await response.json();
  return data;
}

export async function getProgram({ params }) {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/api/programs/${params.id}`,
    {
      method: "get",
    }
  );
  const data = await response.json();
  return data;
}

export async function createProgram({ request }) {
  const formData = await request.formData();

  const title = formData.get("title");

  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/programs`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title }),
  });

  const data = await response.json();

  return redirect(`/programs/${data.insertId}`);
}

export async function editProgram({ request, params }) {
  const formData = await request.formData();

  switch (request.method.toLowerCase()) {
    case "put": {
      await fetch(`${import.meta.env.VITE_API_URL}/api/programs/${params.id}`, {
        method: "put",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: formData.get("title") }),
      });
      return redirect(`/programs/${params.id}`);
    }
    case "delete": {
      await fetch(`${import.meta.env.VITE_API_URL}/api/programs/${params.id}`, {
        method: "delete",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(),
      });
      return redirect(`/programs`);
    }
    default:
      throw new Response("", { status: 405 });
  }
}
