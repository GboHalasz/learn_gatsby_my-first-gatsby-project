// Step 1: Import React
import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Home Page">
        <h1>Welcome to my Gatsby site!</h1>
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <StaticImage
        alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
        src="../images/clifford.jpg"
      />
      </Layout>
    </main>
  );
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>;

// Step 3: Export your component
export default IndexPage;
