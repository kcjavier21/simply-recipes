import React from 'react';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const About = () => {
    return (
        <Layout>
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
                </section>
            </main>
        
        </Layout>
    )
}

export default About;
