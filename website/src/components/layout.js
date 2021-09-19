import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header = (
    <h1 className="text-4xl font-bold mt-2 mb-4">
      <Link to="/">{title}</Link>
    </h1>
  )

  return (
    <div
      className="container mx-auto max-w-screen-md px-4 py-4"
      data-is-root-path={isRootPath}
    >
      {isRootPath && <header>{header}</header>}
      <main>{children}</main>
      <hr className="my-8" />
      <footer className="prose flex justify-between">
        <div>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com" target="_blank" rel="noreferrer">
            Gatsby
          </a>
        </div>
        <div>
          <a
            href="https://github.com/runningdeveloper/trails-data"
            target="_blank"
            rel="noreferrer"
          >
            Github Source
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Layout
