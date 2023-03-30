<template>
  <article class="post-card post" :class="{ 'no-image': !post.image, 'post-card-large': !!large }">
    <a v-if="post.image" class="post-card-image-link" :href="$withBase(post.path)" aria-label="link to post">
      <img class="post-card-image" :src="$withBase(this.post.image)" sizes="(max-width: 1000px) 400px, 200px" loading="lazy" :alt="post.title" />
    </a>
    <div class="post-card-content">
        <a class="post-card-content-link" :href="$withBase(post.path)" aria-label="link to post">
          <header class="post-card-header">
            <span v-if="post.tags.length > 0" class="post-card-primary-tag">{{ post.tags[0] }}</span>
            <h2 class="post-card-title">{{ post.title }}</h2>
          </header>
          <section class="post-card-excerpt" v-if="post.excerpt">
            <p>{{ striptags(post.excerpt) }}</p>
          </section>
        </a>
        <footer class="post-card-meta">
          <!--
          <ul class="author-list" v-if="post.author.name">
            <li class="author-list-item">
              <div class="author-name-tooltip">
                {{ post.author.name }}
              </div>
              <a class="static-avatar" :href="post.author.link">
                <img class="author-profile-image" :src="authorImage(post.author.gravatar)" :alt="post.author.name">
              </a>
            </li>
          </ul>
            <span v-if="post.author.name"><a :href="post.author.link">{{ post.author.name }}</a></span>
          -->
          <div class="post-card-byline-content">
            <span class="post-card-byline-date">
              <time v-if="datetime" :datetime="datetime">{{ localeDate }}</time> <span v-if=" post.readingTime" class="bull">&bull;</span> {{ post.readingTime }}</span>
          </div>
        </footer>
    </div>
  </article>
</template>

<script>
  import striptags from 'striptags'
  import { authorImage } from '../store/utils'

  export default {
    props: ['post', 'large'],
    computed: {
      imageStyle () {
        return {
          'background-image': `url(${this.$withBase(this.post.image)})`
        }
      },

      datetime () {
        return this.post.publish && new Date(this.post.publish).toISOString()
      },

      localeDate () {
        return this.post.publish && new Date(this.post.publish).toDateString()
      }
    },
    methods: {
      striptags,
      authorImage
    }
  }
</script>

<style lang="stylus" scoped>
.post-card-image-link{
  max-height: 180px !important;
}
.post-card-byline-content{
  margin-left: 0px;
}
.post-card-title{
  text-shadow: 1px 1px 0px darkorange, -1px -1px 0px darkorange, 1px -1px 0px darkorange, -1px 1px 0px darkorange;
    color: white;
}
.post-card-primary-tag{
  color: darkorange;
}

/*
    background-position-y: -4%;
    height: 78vh;
    */
</style>
