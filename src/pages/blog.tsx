import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticQueryDocument, graphql } from "gatsby";

interface BlogPagePropTypes {
  data: {
    allMdx: {
      nodes: {
        frontmatter: {
        date: string,
        title: string,
      },
      id: string,
      excerpt: string,
      parent: {
        modifiedTime: string
      }
    }[];
    };
  };
}

const BlogPage = ({ data }: BlogPagePropTypes) => {
  console.log(data);
  return (
    <Layout pageTitle="My Blog Posts">
      {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <p>Posted: {node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
          </article>
        ))
      }
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "YYYY.MM.DD")
          title
        }
        id
        excerpt
        parent {
          ... on File {
            modifiedTime(formatString: "YYYY.MM.DD")
          }
        }
      }
    }
  }
`;

export const Head = () => <Seo title="My Blog Posts" />;

export default BlogPage;
