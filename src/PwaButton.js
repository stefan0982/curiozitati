import React from "react"
import { useSWUpdateChecker } from "service-worker-updater"
const CHECK_INTERVAL = 10 * 60 // 10 minute = 10 * 60 * 1000
const UPDATE_ON_LOAD = true
export default function UpdateButton() {
  const [hasUpdate, updateHandler] = useSWUpdateChecker({
    checkInterval: CHECK_INTERVAL,
    updateOnLoad: UPDATE_ON_LOAD
  })
  if (!hasUpdate) return null;
  return (
    <button
      onClick={() => {
        updateHandler()
      }}
    >
      Update app
    </button>
  )
}