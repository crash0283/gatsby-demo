import React from "react"
//Adding the "Link" component from the"gatsby" library will aloow you to link
//internal pages
//uses react-router underneath
import { Link } from "gatsby"
//Adding the "Layout" component will allow you to keep consistent layouts throughout your app
//To make adjustments to the "Layout" component, go to the layout.js file
import Layout from "../components/layout"
import SEO from "../components/seo"

import People from "../components/people"
import myImg from "../images/gatsby-astronaut.png"

const Bio = () => {
    return (
        <Layout>
            <SEO title="Bio" />
            <People avatar={myImg} title="Chris" excerpt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ex asperiores cumque atque quaerat labore dolorum, placeat natus velit omnis voluptatum voluptatem deleniti fugiat rem aliquam culpa, illo voluptas, laboriosam ad blanditiis quasi sapiente? Soluta praesentium iure cupiditate voluptates? Esse maxime enim sequi aspernatur possimus quia sit similique odit laudantium." />
            <People avatar="https://source.unsplash.com/random/" title="Sue" excerpt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ex asperiores cumque atque quaerat labore dolorum, placeat natus velit omnis voluptatum voluptatem deleniti fugiat rem aliquam culpa, illo voluptas, laboriosam ad blanditiis quasi sapiente? Soluta praesentium iure cupiditate voluptates? Esse maxime enim sequi aspernatur possimus quia sit similique odit laudantium." />
            <People avatar="https://source.unsplash.com/random/" title="Matt" excerpt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ex asperiores cumque atque quaerat labore dolorum, placeat natus velit omnis voluptatum voluptatem deleniti fugiat rem aliquam culpa, illo voluptas, laboriosam ad blanditiis quasi sapiente? Soluta praesentium iure cupiditate voluptates? Esse maxime enim sequi aspernatur possimus quia sit similique odit laudantium." />
            <Link to="/">Back to Home</Link>
        </Layout>
    )
}

export default Bio