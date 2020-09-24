<template>
  <div id="app">
    <el-container>
<!--      <el-aside>-->
<!--        <el-avatar :size="50" :src="circleUrl"></el-avatar>-->
<!--      </el-aside>-->
      <el-container>
        <el-header>Today Ideas</el-header>
        <el-main>
          <div id="messageboard">
            <div class="block">
              <el-timeline>
                <el-timeline-item v-for="data in ideas"
                                  v-bind:key=data.id
                                  :timestamp=data.timestamp
                                  placement="top">
                  <el-card v-html="data.content">
                  </el-card>
                </el-timeline-item>
              </el-timeline>
            </div>
            <div style="text-align:right" v-show="ideas.length>0">
              <el-button size="small" @click="delAll()">全部删除</el-button>
            </div>
          </div>
        </el-main>
        <el-footer height="20%">
          <quill-editor ref="text"
                        v-model="content"
                        class="myQuillEditor"
                        :options="editorOption"
                        style="padding: 10px"/>
          <el-button type="primary" @click="add">提交</el-button>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>

import toolbarOptions from "@/js/quilleditor";

export default {
  data() {
    return {
      title: '',
      content: '',
      ideas: [],
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      editorOption: {
        modules: {
          toolbar: {
            container: toolbarOptions,
            headers: {
              image: function(value) {
                if (value) {
                  // upload
                } else {
                  this.quill.format("image", false)
                }
              }
            }
          }
        }
      }
    }
  },
  methods: {
    add() {
      if (this.content === '') {
        this.$message.error('请填写完整');
      } else {
        let idea = {
          id: this.ideas.length + 1,
          content: this.content,
          timestamp: this.tools.getDate()
        }
        this.ideas.push(idea);
        this.content = ''
        this.submit(idea)
      }
    },
    delAll() {
      this.ideas = []
    },
    submit (data) {
      console.log(data)
      this.req.post('', data).then(function (res) {
        console.log(res)
      }).catch(function (err) {
        console.log(this.req.getUri())
        console.log(err)
      })
      // console.log(this.$refs.text.value)
    }
  }
}
</script>

<style>
@import "css/main.css";

p {
  word-wrap: break-word;
  word-break: break-all;
  overflow: hidden;
}

#app {
  width: 60%;
  height: 100%;
  margin: auto;
}

.el-footer {
  line-height: 20px;
}

.el-card {
  padding: 10px;
  background-color: silver;
  line-height: 20px;
  text-align: left;
}
</style>
