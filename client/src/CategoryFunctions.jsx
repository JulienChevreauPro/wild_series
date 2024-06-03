import { redirect } from "react-router-dom";

export async function getAllCategories() {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/api/categories`,
    {
      method: "get",
    }
  );
  const data = await response.json();
  return data;
}

export async function getCategory({ params }) {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/api/categories/${params.id}`,
    {
      method: "get",
    }
  );
  const data = await response.json();
  return data;
}

export async function createCategory({ request }) {
  const formData = await request.formData();

  const name = formData.get("name");

  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/api/categories`,
    {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    }
  );

  const data = await response.json();

  return redirect(`/categories/${data.insertId}`);
}

export async function editCategory({ request, params }) {
  const formData = await request.formData();

  switch (request.method.toLowerCase()) {
    case "put": {
      await fetch(
        `${import.meta.env.VITE_API_URL}/api/categories/${params.id}`,
        {
          method: "put",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: formData.get("name") }),
        }
      );
      return redirect(`/categories/${params.id}`);
    }
    case "delete": {
      await fetch(
        `${import.meta.env.VITE_API_URL}/api/categories/${params.id}`,
        {
          method: "delete",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(),
        }
      );
      return redirect(`/categories`);
    }
    default:
      throw new Response("", { status: 405 });
  }
}
