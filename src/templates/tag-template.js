import React from 'react';
import { graphql } from 'gatsby';
import RecipesList from '../components/RecipesList';
import Layout from '../components/Layout';
import Seo from '../components/SEO';


const TagTemplate = ({data, pageContext }) => {
    const recipes = data.allContentfulRecipe.nodes
    let theTag = pageContext.tag;
    console.log(theTag[0]);
    theTag = theTag[0].toUpperCase() + theTag.slice(1);

    return (
        <Layout>
            <Seo title={theTag} />
            <main className="page">
                <h2>{ pageContext.tag }</h2>
                <div className="tag-recipes">
                    <RecipesList recipes={recipes} />
                </div>
            </main>
        </Layout>
    )
}

export const query = graphql`
    query GetRecipeByTag($tag: String) {
        allContentfulRecipe(
        sort: {fields: title, order: ASC}
        filter: {content: {tags: {eq: $tag}}}
        ) {
        nodes {
            title
            id
            cookTime
            prepTime
            servings
            image {
                gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)   
            }
        }
    }
}
`

export default TagTemplate
