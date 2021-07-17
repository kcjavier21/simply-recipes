import React from 'react';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import { Link, graphql } from 'gatsby';
import RecipesList from '../components/RecipesList';
import Seo from '../components/SEO'

const About = ({ data }) => {
    //console.log(data)
    const recipes = data.allContentfulRecipe.nodes;

    return (
        <Layout>
          <Seo title="About" />
            <main className="page">
                <section className="about-page">
                    <article>
                        <h2>About Simply Recipes</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, tempora?</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque illo ipsa dignissimos! Accusantium numquam repudiandae porro?</p>
                            <Link to="/contact" className="btn">
                                Contact
                            </Link>
                    </article>

                    <StaticImage src="../assets/images/about.jpeg" alt="Seasoning"
                        className="about-img" placeholder="tracedSVG"/>

                        <section>
                            <section className="featured-recipes">
                                <h5>Look at this awesomesauce!</h5>
                                <RecipesList recipes={recipes} />
                            </section>
                        </section>
                </section>
            </main>
        
        </Layout>
    )
}


export const query = graphql`
  {
    allContentfulRecipe(
      sort: {fields: title, order: ASC}
      filter: {featured: {eq: true}}
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default About;
