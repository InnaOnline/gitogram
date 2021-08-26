import topline from './topline.vue'

export default {
  title: 'topline',
  components: { topline }
}

export const defaultView = () => ({
  components: {
    topline
  },
  template: `
    <topline>
        <template #headline>
            <h1>Some text</h1>
        </template>
        <template #content>
            <h1>Some text1</h1>
        </template>
    </topline>
  `
})
defaultView.story = {
  name: "Topline double"
}

export const defaultViewOne = () => ({
    components: {
      topline
    },
    template: `
      <topline>
          <template #headline>
              <h1>Some text</h1>
          </template>
      </topline>
    `
  })
  defaultViewOne.story = {
    name: "Topline single"
  }