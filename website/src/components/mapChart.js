import React from "react"
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps"
import { geoCentroid } from "d3-geo"
import map from "../map/sa-provinces.json"

const MapChart = ({ onProvinceSelect }) => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-25, 28, 0],
        scale: 2400,
      }}
    >
      <Geographies geography={map}>
        {({ geographies }) => (
          <>
            {geographies
              .filter(
                d =>
                  d.properties.slug !== "eswatini" &&
                  d.properties.slug !== "lesotho"
              )
              .map(geo => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  // fill="#EAEAEC"
                  stroke="#D6D6DA"
                  style={{
                    default: {
                      fill: "#EAEAEC",
                      outline: "#D6D6DA",
                    },
                    hover: {
                      fill: "#F53",
                      outline: "#D6D6DA",
                      cursor: "pointer",
                    },
                    pressed: {
                      fill: "#E42",
                      outline: "none",
                    },
                  }}
                  onClick={() => onProvinceSelect(geo.properties.slug)}
                />
              ))}

            {geographies
              .filter(
                d =>
                  d.properties.slug !== "eswatini" &&
                  d.properties.slug !== "lesotho"
              )
              .map(geo => {
                const centroid = geoCentroid(geo)
                return (
                  <g key={geo.rsmKey + "-name"}>
                    <Marker
                      coordinates={centroid}
                      onClick={() => onProvinceSelect(geo.properties.slug)}
                    >
                      <text
                        y="2"
                        fontSize={14}
                        textAnchor="middle"
                        style={{
                          fontFamily: "system-ui",
                          fill: "#5D5A6D",
                          cursor: "pointer",
                        }}
                      >
                        {geo.properties.name}
                      </text>
                    </Marker>
                  </g>
                )
              })}
          </>
        )}
      </Geographies>
    </ComposableMap>
  )
}

export default MapChart
