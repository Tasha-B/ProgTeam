export default function BuildingLayout(props: {
  children: React.ReactNode
  blocklist: React.ReactNode
}) {
  return (
<>
      {props.children}
      {props.blocklist}
      </>
  )
}
