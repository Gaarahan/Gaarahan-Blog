<template>
  <article class="single-blog">
    <h3 class="blog-title">我的博客 - 尝试一下</h3>
    <p class="blog-description">这是我博客的部分内容.. 这是我博客的部分内容.. 这是我博客的部分内容.. 这是我博客的部分内容.. 这是我博客的部分内容.. 这是我博客的部分内容.. </p>
  </article>
</template>

<script>
export default {
  name: 'viewBlog',
  data () {
    return {
      blogList: []
    }
  },
  methods: {
    getBlogList () {
      this.axios.get('/server/getAllBlog')
        .then((res) => {
          // TODO 获取数据
          this.blogList = res.blogList
        })
    }
  },
  computed () {
    this.getBlogList()
  }
}
</script>

<style scoped>
  .single-blog{
    margin: 10px 20px;
    padding: 10px 20px;
    position: relative;
    overflow: hidden;
    font-size: 14px;
    background-color: #fff;
    background-clip: padding-box;
    border-radius: 2px;
    -webkit-box-shadow: 0 1px 2px rgba(0,0,0,.3);
    box-shadow: 0 1px 2px rgba(0,0,0,.3);
  }
  .single-blog .blog-title{
    cursor: pointer;
  }
</style>
