<template>
  <div class="c-slide">
    <div class="header">
      <div class="header__progress">
        <xProgress />
      </div>
      <div class="header__nickname">
        <nickname name="React.reposit" source="https://picsum.photos/100/100" />
      </div>
    </div>
    <div class="content">
      <div class="content__image">
        <img src="https://picsum.photos/300/300" alt="" class="content__pic">
      </div>
      <div class="content__text">
        The easiest way to get .NET 6 Preview 4 is to install the maui-check dotnet tool from CLI and follow the instructions.
        For running on Mac you'll currently use your favorite text editor and terminal to edit and run apps. We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year.
        In Preview 4 we enable push/pop navigation with NavigationPage. We added a concrete implementation of IWindow, and completed porting ContentPage from Xamarin.Forms
        For running on Mac you'll currently use your favorite text editor and terminal to edit and run apps. We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year.
      </div>
    </div>
    <div class="footer">
      <xButton hoverText="Unfollow">Follow</xButton>
    </div>
  </div>
</template>

<script>
import progress from '../progress/progress.vue'
import nickname from '../nickname/nickname.vue'
import button from '../button/button.vue'
export default {
  components: { xProgress: progress, nickname, xButton: button },
  name: 'slide'
}
</script>

<style lang="scss" scoped src="./slide.scss"></style>
