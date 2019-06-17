<template>
  <form :action="addServerLocation" method="post">
    <div class="form-group">
      <label for="title">博客标题:</label>
      <input type="text" name="blogTitle" id="title" v-model="blog.title">
    </div>

    <div class="form-group content-group">
      <label for="content">博客内容:</label>
      <textarea name="blogContent" id="content" cols="30" rows="10" v-model="blog.content"></textarea>
    </div>
    <div class="form-group">
      <div class="tag-contain">
        <span class="tag" v-for="tag in blog.tagList" :key="tag">
          {{tag}} <span class="del-btn">×</span>
        </span>
        <label for="input-tag">
          <input type="text" name="blog-tag" id="input-tag" placeholder="为你的博客添加一些标签吧..." v-model="tag" @keypress.enter="addTag">
        </label>
      </div>
    </div>
    <div class="form-group">
      <input type="submit" value="添加">
      <input type="button" value="取消">
    </div>
  </form>
</template>

<script>
export default {
  name: 'addBlog',
  data () {
    return {
      blog: {
        title: '',
        content: '',
        tagList: []
      },
      tag: ''
    }
  },
  methods: {
    addTag () {
      if (this.tag.trim() !== '' && !this.blog.tagList.includes(this.tag)) {
        this.blog.tagList.push(this.tag)
        this.tag = ''
        return true
      }
      return false
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
  .form-group{
    position: relative;
    margin: 10px;
    overflow: hidden;
    font-size: 14px;
    background-color: #fff;
    background-clip: padding-box;
    border-radius: 2px;
    box-shadow: 0 1px 2px rgba(0,0,0,.3);
    min-height: 50px;
    display: flex;
    align-items: center;
    padding: 0 30px;
  }

  label[for='title']{
    font-size: 20px;
    color: brown;
    margin-right: 10px;
  }
  #title{
    height: 30px;
    box-sizing: border-box;
    width: calc(100% - 120px);
    font-size: 20px;
  }

  .content-group{
    flex-direction: column;
    padding: 20px 30px;
  }
  label[for="content"]{
    width: 100%;
    color: brown;
    font-size: 20px;
  }
  #content{
    width: 100%;
    margin: 10px 0;
  }

  .tag-contain{
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
  }
  .tag{
    display: inline-block;
    color: #017e66;
    background-color: #e7f2ed;
    font-size: 13px;
    text-align: center;
    padding: 0 6px;
    height: 22px;
    line-height: 22px;
    margin-right: 5px;
  }
  label[for="input-tag"]{
    width: 200px;
  }
  #input-tag{
    width: 100%;
    box-sizing: border-box;
  }
</style>
