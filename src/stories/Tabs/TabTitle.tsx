type TabTitleProps = {
  title: string
  index: number
  setSelectedTab: (index: number) => void
}

export const TabTitle = ({
    title,
    index,
    setSelectedTab,
    ...props
}: TabTitleProps) => {
  return (
    <li>
      <button onClick={() => setSelectedTab(index)}>{title}</button>
    </li>
  )
}