<template>
  <form :action="addServerLocation" method="post">
    <div class="form-group">
      <label for="title">博客标题:</label>
      <input type="text" name="blogTitle" id="title" v-model="blog.title"
             v-focus="titleFocusing"
             @focus="titleFocusing=true"
             @blur="titleFocusing=false">
    </div>
    <div class="form-group content-group">
      <label for="content">博客内容:</label>
      <textarea name="blogContent" id="content" cols="30" rows="10"
                v-model="blog.content"
                v-focus="contentFocusing"
                @focus="contentFocusing=true"
                @blur="contentFocusing=false"
      ></textarea>
    </div>
    <div class="form-group">
      <div class="tag-contain" :class="{tagConFocus: tagInputFocusing}">
        <span class="tag" v-for="tag in blog.tagList" :key="tag">
          {{tag}} <span class="del-btn" @click="removeThisTag" :tag="tag">×</span>
        </span>
        <label for="input-tag">
          <input type="text"
                 name="blog-tag" id="input-tag"
                 placeholder="为你的博客添加一些标签吧..."
                 v-model="tag"
                 autocomplete="off"
                 @keypress.enter="addTag"
                 @focus="showTagBox"
                 @blur="removeTagBox"
          >
        </label>
      </div>
    </div>
    <div class="form-group">
      <input type="submit" value="添加" @click.prevent="checkSubmit">
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
      tag: '',
      tagInputFocusing: false,
      titleFocusing: false,
      contentFocusing: false
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
    },
    removeThisTag ({target}) {
      let curTag = target.getAttribute('tag')
      this.blog.tagList = this.blog.tagList.filter(val => {
        return val !== curTag
      })
      return true
    },
    showTagBox () {
      this.tagInputFocusing = true
      // TODO 当聚焦标签栏时,提供标签自动补全的弹窗,拿到已有的所有标签,提供点击添加选项
      return null
    },
    removeTagBox () {
      this.tagInputFocusing = false
    },
    checkSubmit () {
      this.blog.title = this.blog.title.trim()
      if (this.blog.title === '') {
        this.titleFocusing = true
        return false
      }
      if (this.blog.content.trim() === '') {
        this.contentFocusing = true
        return false
      }
      if (this.blog.tagList.length === 0) {
        // TODO 优化alert提示
        let noTagSetAnswer = confirm('确定不为你的博客添加任何标签吗?')
        if (noTagSetAnswer === false) { return false }
      }
      this.submitBlog()
    },
    submitBlog () {
      this.axios.post(this.addServerLocation, this.blog)
        .then((res) => {
          // TODO 处理返回
          console.log(res)
        })
    }
  },
  computed: {
    addServerLocation () {
      return window.location.host + '/server/addBlog'
    }
  },
  directives: {
    // 自定义指令,控制title及content的focus,当指令所在的vnode更新后调用
    // 参数 el 为绑定的元素,binding包括指令名,指令绑定值等参数
    focus: {
      componentUpdated (el, binding) {
        if (binding.value) {
          el.focus()
        } else {
          el.blur()
        }
      }
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

  /*tags*/
  .tag-contain{
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
    height: 36px;
    box-sizing: border-box;
    padding: 0 10px;
  }
  .tagConFocus{
    outline: rgb(238,238, 238) 1px solid;
  }
  .del-btn{
    cursor: pointer;
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
    width: 100%;
  }
  #input-tag{
    width: 100%;
    box-sizing: border-box;
    outline: none;
    border: none;
  }
  .tag-contain span~label[for="input-tag"]{
    width: 400px;
  }
</style>
