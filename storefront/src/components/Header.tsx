// External components
import * as React from "react"

// Lib
import { listRegions } from "@lib/data/regions"

// Components
import InnerHeader from "./InnerHeader"

export async function Header() {
  const regions = await listRegions()

  return <InnerHeader regions={regions} />
}
