import { JapanTripPanel } from "@/components/trip/japanTripPanel"

export default function Page({ params }: { params: { slug: string } }) {

  if (params.slug.includes("japan")) {
    return <JapanTripPanel />
  }

  return <div>My Post: {params.slug}</div>
}