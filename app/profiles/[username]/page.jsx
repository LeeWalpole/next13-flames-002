import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getPost(username) {
  try {
    const response = await fetch(`http://127.0.0.1:10009/wp-json/data/v1/profiles/${username}`);
    return response.json();
  } catch (error) {
    throw new Error(error);
  }
}


export default async function Page({ params }) {
  const { username } = await getPost(params.username);

  if (!username) {
    return notFound();
  }
  return (
    <div>
      <h1>{username}</h1>
    </div>
  );
}
