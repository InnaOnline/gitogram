<template>
  <div class="topline">
    <topline>
      <template #headline>
        <div class="topline___header">
          <logo></logo>
          <div class="topline__user-icons">
            <profileIcons></profileIcons>
          </div>
        </div>
      </template>
      <template #content>
        <ul class="stories">
          <li class="stories-item" v-for="story in stories" :key="story.id">
            <story-user-item
              :avatar="story.avatar"
              :username="story.username"
              @onPress="handlePress(story.id)"
            />
          </li>
        </ul>
      </template>
    </topline>
  </div>
<div class="c-columns">
  <ul class="columns">
    <li class="columns-item" v-for="datauser in datausers" :key="datauser.id">
      <column :nick="datauser.username" :path="datauser.avatar" :comments="datauser.feeds">
        <template #description>
          <div class="column__content">
            <div class="column__title" v-text="datauser.title"></div>
            <div class="column__description" v-text="datauser.description">
            </div>
            <div class="column__starPanel"><starPanel :nstar="datauser.nstar" :nfork="datauser.nfork"></starPanel></div>
          </div>
        </template>
      </column>
    </li>
  </ul>
  </div>

</template>

<script>
import { topline } from '../../components/topline'
import { storyUserItem } from '../../components/storyUserItem'
import stories from './data.json'
import datausers from './datausers.json'
import logo from '../../components/logo/logo.vue'
import profileIcons from '../../components/profileIcons/profileIcons.vue'
import column from '../../components/column/column.vue'
import starPanel from '../../components/starPanel/starPanel.vue'
export default {
  name: 'feeds',
  components: {
    topline,
    storyUserItem,
    column,
    logo,
    profileIcons,
    starPanel
  },
  data () {
    return {
      stories,
      datausers
    }
  }
}
</script>

<style src="./feeds.scss" lang="scss" scoped></style>
