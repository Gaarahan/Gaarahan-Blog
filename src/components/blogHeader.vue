<template>
  <header class="blog-header">
    <router-link class="view-blog" to="/view">浏览博客</router-link>
    <router-link class="add-blog" to="/add">添加新博客</router-link >
  </header>
</template>

<script>
export default {
  name: 'blogHeader'
}
</script>

<style scoped>
  .blog-header{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: azure;
    height: 30px;
  }
  .blog-header .view-blog{
    padding: 0 10px;
    margin : 0 5px;
  }
  .blog-header .add-blog{
    padding: 0 10px;
    margin : 0 5px;
  }
</style>
