export default function BlockLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <span>BlockLayout</span>
        {children}
    </div>
  )
}
