import placeHolder from './placeHolder.vue'

export default {
  title: 'placeHolder',
  component: placeHolder
}

const template = () => ({
  components: { placeHolder },
  template: '<placeHolder />'
})

export const Default = template.bind({})
Default.story = {
  name: 'Without paragraphs'
}

const templateWithParagraph = () => ({
  components: { placeHolder },
  template: '<placeHolder :paragraphs=2 />'
})

export const DefaultParagraph = templateWithParagraph.bind({})
DefaultParagraph.story = {
  name: 'With paragraphs'
}