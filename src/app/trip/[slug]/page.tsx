import { JapanTripPanel } from "@/components/japanTripPanel"

export default function Page({ params }: { params: { slug: string } }) {

  if (params.slug === "japan") {
    return <JapanTripPanel />
  }

  return <div>My Post: {params.slug}</div>
}