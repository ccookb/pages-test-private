import { useState } from 'react'
import { TabTitle } from './TabTitle'
import './tabs.scss'

type TabsProps = {
  children: any
}

export const Tabs = ({
  children
}: TabsProps) => {
  const [selectedTab, setSelectedTab] = useState(0)

  return (
    <div
      className={'tabs'}
    >
      <ul>
        {children.map((item: any, index: number) => (
          <TabTitle
            key={index}
            title={item.props.title}
            index={index}
            setSelectedTab={setSelectedTab}
          />
        ))}
      </ul>
      {children[selectedTab]}
    </div>
  )
}