import React from 'react';
import Layout from '../components/Layout';
import {graphql, Link} from 'gatsby';
import setupTags from '../utils/setupTags';
import Seo from '../components/SEO';

const Tags = ({ data }) => {
    const newTags = setupTags(data.allContentfulRecipe.nodes);

    return (
        <Layout>
          <Seo title="Tags" />
            <main className="page">
                <section className="tags-page">
                    {newTags.map((tags, index) => {
                        const [text, value] = tags
                        return <Link to={`/${text}`} key={index} className="tag">
                                <h5>{text}</h5>
                                <p>{value} recipe</p>
                            </Link>
                    })}
                </section>
            </main>
        </Layout>
    )
}


export const query = graphql`
  {
    allContentfulRecipe(sort: {fields: title, order: ASC}) {
      nodes {
        content {
          tags
        }
      }
    }
  }
`

export default Tags;
