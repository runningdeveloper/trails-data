import {
  FaRunning,
  FaQuestion,
  FaWalking,
  FaHiking,
  FaSwimmer,
  FaBicycle,
} from "react-icons/fa"
import * as React from "react"

const getIcon = activity => {
  switch (activity) {
    case "running":
      return (
        <FaRunning
          className="text-xl fill-current text-green-700"
          title="running"
        />
      )
    case "walking":
      return (
        <FaWalking
          className="text-xl fill-current text-green-700"
          title="walking"
        />
      )
    case "hiking":
      return (
        <FaHiking
          className="text-xl fill-current text-green-700"
          title="hiking"
        />
      )
    case "swimming":
      return (
        <FaSwimmer
          className="text-xl fill-current text-green-700"
          title="swimming"
        />
      )
    case "cycling":
      return (
        <FaBicycle
          className="text-xl fill-current text-green-700"
          title="cycling"
        />
      )
    default:
      return (
        <FaQuestion
          className="text-xl fill-current text-green-700"
          title="unknown"
        />
      )
  }
}

const ActivityList = ({ activities }) => {
  return (
    <div className="my-6 flex">
      {activities &&
        activities.map(activity => (
          <div key={activity} className="mr-2">
            {getIcon(activity)}
          </div>
        ))}
    </div>
  )
}

export default ActivityList
