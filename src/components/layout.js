/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Hero from "./hero"

import IconCcBy from "../svgs/icon-cc-by.svg"
import IconCc from "../svgs/icon-cc.svg"
import IconGlobe from "../svgs/icon-globe.svg"

const Layout = ({ children, showHero }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      {showHero && <Hero />}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <main>{children}</main>
          <footer className="py-6">
            <a
              href="https://creativecommons.org/licenses/by/4.0/"
              className="pr-5"
            >
              <IconCc class="inline-block h-5 -mt-1 pr-1" />{" "}
              <IconCcBy class="inline-block h-5 -mt-1 pr-1" />
            </a>
            <a
              className="pr-5 hover:underline"
              href="https://oerworldmap.org/imprint"
            >
              Imprint & Privacy
            </a>
            OE Policy Registry is a project by{" "}
            <a className="hover:underline" href="https://oerworldmap.org/">
              <IconGlobe className="inline-block h-3 -mt-1 pr-1" />
              OER World Map
            </a>
          </footer>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  showHero: PropTypes.bool,
}

Header.defaultProps = {
  showHero: false,
}

export default Layout
