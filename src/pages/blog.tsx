import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticQueryDocument, graphql } from "gatsby";

interface BlogPagePropTypes {
  data: {
    allFile: {
      nodes: {name: string}[]
    }
  }
}

const BlogPage = ({data}: BlogPagePropTypes) => {
  console.log(data)
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {
          data.allFile.nodes.map((node: any) => (
            <li key={node.name}>
              {node.name}
            </li>
          ))
        }
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export const Head = () => <Seo title="My Blog Posts" />;

export default BlogPage;
