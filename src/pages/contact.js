import React from 'react';
import Layout from '../components/Layout';

const Contact = () => {
    return (
        <Layout>
            <main className="page">
                <section className="contact-page">
                    <article className="contact-info">
                        <h3>Want To Get In Touch?</h3>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        </p>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        </p>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        </p>
                      
                    </article> 


                    <article>
                        <form className="form-contact form">
                            <div className="form-row">
                                <label htmlFor="name">Your Name</label>
                                <input type="text" name="name" id="name" />
                            </div>

                            <div className="form-row">
                                <label htmlFor="email">Your Email</label>
                                <input type="text" name="email" id="email" />
                            </div>

                            <div className="form-row">
                                <label htmlFor="message">Message</label>
                                <textarea name="message" id="message" />
                            </div>

                        </form>
                    </article>
                </section>
            </main>
        </Layout>
    )
}

export default Contact;