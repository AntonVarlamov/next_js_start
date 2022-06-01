import React from 'react';
import {useRouter} from "next/router";
import styles from  "../../styles/User.module.scss"
import MainContainers from "../../components/MainContainers";

const User = ({user}) => {
  const {query} = useRouter();

  return (
    <MainContainers>
      <div className={styles.user}>
        <h1>User with id {query.id}</h1>
        <div>Name of the user is {user.name}</div>
      </div>
    </MainContainers>
  );
};

export async function getServerSideProps({params}) {
  const response =  await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  const user = await response.json();
  return {
    props: {user}, // will be passed to the page component as props
  }
}

export default User;