<template>
  <form :action="addServerLocation" method="post">
    <div class="form-group">
      <label for="title">博客标题</label>
      <input type="text" name="blogTitle" id="title" required="required">
    </div>

    <div class="form-group">
      <label for="content">博客内容</label>
      <textarea name="blogContent" id="content" cols="30" rows="10"></textarea>
    </div>
    <div class="form-group">
      <input type="submit" value="添加">
    </div>
  </form>
</template>

<script>
export default {
  name: 'addBlog',
  data () {
    return {
    }
  },
  computed: {
    addServerLocation () {
      return window.location.host + '/server/addBlog'
    }
  }
}
</script>

<style scoped>

</style>
