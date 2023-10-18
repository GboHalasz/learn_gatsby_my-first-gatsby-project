import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { Link, graphql } from "gatsby";

interface BlogPagePropTypes {
  data: {
    allMdx: {
      nodes: {
        frontmatter: {
        date: string,
        title: string,
        slug:string
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
  return (
    <Layout pageTitle="My Blog Posts">
      {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>
              <Link to={`/blog/${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
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
          slug
        }
        id        
      }
    }
  }
`;

export const Head = () => <Seo title="My Blog Posts" />;

export default BlogPage;
