<template>
  <header :class="headerClasses">
    <div v-if="isArchive" class="outer site-nav-main">
      <div class="inner">
        <slot name="header"></slot>
      </div>
    </div>
    <div class="outer" :class="headerBackgroundClasses" :style="backgroundStyle">
      <div class="inner">
        <slot name="header" v-if="isHome || isPage || isPost"></slot>
        <div
          class="site-header-content"
          v-if="header.showCover"
        >
          <h1 class="site-title">
            <img
              v-if="header.logo"
              class="site-logo"
              :src="$withBase(header.logo)"
              :alt="header.title"
            />
            <span v-else>{{ header.title }}</span>
          </h1>
          <h2 class="site-description" v-if="header.description">
            {{ header.description }}
          </h2>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  props: ["header"],
  computed: {
    ...mapGetters(["type"]),

    backgroundStyle() {
      if (this.header.coverImage) {
        return {
          "background-image": `url(${this.$withBase(this.header.coverImage)})`,
          "background-color": "black"
          // "height": "60vh"
          // "background-position-y": "-4%",
          // "height": "78vh"
        };
      }

      return {};
    },

    isHome() {
      return this.type === "home"
    },

    isArchive() {
      return this.type === "category" || this.type === "tags" || this.type === "posts"
    },

    isPage() {
      return this.type === "page"
    },

    isPost() {
      return this.type === "post"
    },

    headerClasses() {
      return {
        "site-header": this.isPage || this.isPost,
        "site-home-header": this.isHome,
        "site-archive-header": this.isArchive
      };
    },

    headerBackgroundClasses() {
      const headerImage = !!this.header.coverImage;
      return {
        "responsive-header-img": headerImage,
        "no-image": !headerImage,
        "site-header-background": this.isArchive || this.isHome,
        "site-nav-main": this.isPage || this.isPost
        // "height": "17vh"
      };
    }
  }
};
</script>
<style>
  .site-header-content{
    margin: 10% !important;
  }

  .site-title{
    text-shadow: 2px 2px 0px #000, -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000;
    color: darkorange;
  }

  .site-description{
    font-weight: bold !important;
    text-shadow: 1px 1px 0px #000, -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000;
  }
/*
  .site-title{
    font-weight: bolder;
  }


  color: orange;
    text-shadow: 3px 3px 0px #000, 1px 1px 0px #000, -1px -1px 0px #000, 0px 1px 0px #000;
*/
.site-header-background:after, .site-header-background:before {
  opacity: 65%;
}
</style>
