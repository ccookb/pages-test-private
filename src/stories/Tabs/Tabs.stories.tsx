import { ComponentMeta } from '@storybook/react'
import { Tab } from "./Tab"
import { Tabs } from './Tabs'

export default {
  title: 'Tabs',
  component: Tabs,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Tabs>

export const Primary = () => (
  <Tabs>
    <Tab title='Tab 1'>This is Tab #1</Tab>
    <Tab title='Tab 2'>This is Tab #2</Tab>
    <Tab title='Tab 3'>This is Tab #3</Tab>
  </Tabs>
)