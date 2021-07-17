import React from 'react';
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import Seo from '../components/SEO'


const RecipeTemplate = ({data}) => {
    const {
        title, cookTime,  content, prepTime, servings,
        description: { description }, image } = data.contentfulRecipe;
    const pathToImage = getImage(image);
    const { tags, instructions, ingredients, tools } = content;
    
    return (
        <Layout>
            <Seo title={title} />
            <main className="page">
                <div className="recipe-page">
                    <section className="recipe-hero">
                        <GatsbyImage 
                            image={pathToImage}
                            alt={title}
                            className="about-img"
                        />
                        <article className="recipe-info">
                            <h2>{title}</h2>
                            <p>{description}</p>

                            <div className="recipe-icons">
                                <article>
                                    <i className="fas fa-clock"/>
                                    <h5>Prep Time</h5>
                                    <p>{prepTime} min.</p>
                                </article>

                                <article>
                                    <i className="fas fa-stopwatch"/>
                                    <h5>Cook Time</h5>
                                    <p>{cookTime} min.</p>
                                </article>

                                <article>
                                    <i className="fas fa-users"/>
                                    <h5>Servings</h5>
                                    <p>{servings}</p>
                                </article>
                                
                            </div>

                            <p className="recipe-tags">
                                Tags: {" "}
                                { tags.map((tag, index) => {
                                    return (
                                        <Link to={`/${tag}`} key={index}>
                                            {tag}
                                        </Link>
                                    )
                                })}
                            </p>
                        </article>
                        </section>

                        <section className="recipe-content">
                            <article>
                                <h4>Instructions</h4>
                                { instructions.map((item, index) => {
                                    return (
                                        <div key={index} className="single-instruction">
                                            <header>
                                                <p>Step { index + 1 }</p>
                                                <div></div>
                                            </header>
                                            <p>{item}</p>
                                        </div>
                                    )
                                })}
                            </article>

                            <article className="second-column">
                                <div>
                                    <h4>Ingredients</h4>
                                    { ingredients.map((item, index) => {
                                        return <p key={index} className="single-ingredient">
                                            { item }
                                        </p>
                                    })}
                                </div>

                                <div>
                                    <h4>Tools</h4>
                                    { tools.map((item, index) => {
                                        return <p key={index} className="single-tool">
                                            { item }
                                        </p>
                                    })}
                                </div>


                            </article>

                        </section>
                    
                </div>
            </main>
        </Layout>
    )
}

export const query = graphql`
 query getSingleRecipe($title: String) {
  contentfulRecipe(title: {eq: $title}) {
    title
    cookTime
    content {
      ingredients
      instructions
      tags
      tools
    }
    description {
      description
    }
    prepTime
    servings
    image {
      gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
    }
  }
}`

export default RecipeTemplate
