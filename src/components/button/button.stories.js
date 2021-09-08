import button from './button.vue'
export default {
  title: 'button',
  component: { button },
  argTypes: {
    hoverText: {
      control: { type: 'text' }
    }
  }
}

const template = (args) => ({
  components: { xButton: button },
  data () {
    return { args }
  },
  template: `
  <x-button v-bind="args" theme="gray" loading @onPress="$emit('onPress')">Follow</x-button>
  `
})

export const DefaultView = template.bind({})

DefaultView.story = {
  name: 'Button'
}

DefaultView.args = {
  hoverText: 'Unfollow'
}
