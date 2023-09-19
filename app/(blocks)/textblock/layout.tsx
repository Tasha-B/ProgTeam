export default function TextBlockLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <span>IT IS A TextBlockLayout</span>
        {children}
    </div>
  )
}
