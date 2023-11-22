import { Meta, StoryObj } from '@storybook/react'
import Main from '.'

export default {
  title: 'Main',
  component: Main
} as Meta

export const Default: StoryObj = {}

export const Basic: StoryObj = {
  args: {
    title: 'React Avançado',
    description: 'Typescript, ReactJS, NextJS e Styled Components'
  }
}
