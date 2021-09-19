import * as React from "react"
import { Link } from "gatsby"

const Breadcrumbs = ({ slugs }) => {
  return (
    <div className="my-6">
      <Link className="underline" to="/">
        Trails in SA
      </Link>
      {slugs &&
        slugs.map(a => (
          <span key={a.link}>
            <span className="px-2">/</span>
            <Link className="underline" key={a.link} to={a.link}>
              {a.name}
            </Link>
          </span>
        ))}
    </div>
  )
}

export default Breadcrumbs
