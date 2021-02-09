// @ts-ignore
import React from "react"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Projects from "../components/projects"
import About from "../components/about"
import Contact from "../components/contact"
import {graphql, useStaticQuery} from "gatsby";

const Cara = () => {
    // 10 carduri = 5 screen // pentru telefon => 2 carduri = 1 screen
    // 17 carduri = 5 screen // pentru calculator => 3.4 carduri pe screen

    // @ts-ignore
    const {curiozitati} = useStaticQuery(graphql`{
        curiozitati:allContentfulCuriozitati {
            totalCount
        }
    }`)

    let projectPages = Math.ceil(curiozitati.totalCount/2)
    const projectOffset = typeof window !== `undefined` && window.innerWidth <= 400 ? 3 : 1

    // if (window.innerWidth >= 1024) {
    //     projectPages = Math.ceil(curiozitati.totalCount/3.4)
    // } else {
    //      projectPages = Math.ceil(curiozitati.totalCount/2)
    // }
    return (
            <Layout>
                <Parallax pages={projectPages + 1}>
                    <Hero offset={0} factor={1} />
                    <Projects offset={projectOffset} factor={projectPages} />
                    <Contact offset={projectPages} factor={1} />
                </Parallax>
            </Layout>
    )
}

export default Cara
