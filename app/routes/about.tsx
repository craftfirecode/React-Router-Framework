import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader({ params }: Route.LoaderArgs) {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return { data };
  } catch (error) {
    console.error('Fetch error:', error);
    return { data: null };
  }
}

export default function About({loaderData}: Route.ComponentProps) {
  const { data } = loaderData;
  return (
    <div>
      <h1>{data.title}</h1>
    </div>
  );
}