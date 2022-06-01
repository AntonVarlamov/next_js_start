//import React from 'react';

import {useEffect, useState} from "react";
import Link from "next/link";
import MainContainers from "../components/MainContainers";

const Users = ({users}) => {

  return (
    <MainContainers>
      <h1>Users list</h1>
      <ul>
        {users.map(user =>
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>
              <a>{user.name}</a>
            </Link>
          </li>
        )}
      </ul>
    </MainContainers>
  );
};

export async function getStaticProps(context) {
  const response =  await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();
  return {
    props: {users}, // will be passed to the page component as props
  }
}

export default Users;