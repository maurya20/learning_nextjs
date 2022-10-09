import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Link from "next/link"

//getStaticProps 
export const getStaticProps = async () => {
const API_URL = "https://jsonplaceholder.typicode.com/posts"
  const request = await fetch(API_URL)
  const posts = await request.json()
  return  { props : { posts }, 
             revalidate : 60  //In seconds
      }
}

export interface Post {
  userId: number;
  id:     number;
  title:  string;
  body:   string;
}
interface Props {
  posts: Post[]
}
const Home: NextPage<Props> = ({posts}: {posts:Post[]}) => {
  return (
    <div className={styles.container}>
      <h1>Home</h1>
    <div className="container"></div>
    <main>
           {posts.map((post: Post) => (
            <Link href={`posts/${post.id}`} key={post.id}>
                <a >
                  <h3>{post.title}</h3>
                </a>
          </Link>
          ))}
      </main>

    </div>
  );
};

export default Home;
