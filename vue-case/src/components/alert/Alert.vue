<template>
  <div class="alert-box-wrapper">
    <div class="alert-box">
      <div class="alert-box-header">
        <div class="alert-box-title">提示</div>
        <div class="alert-box-headerbtn">X</div>
      </div>
      <div class="alert-box-content">
        <div class="alert-box-container">这是一段提示内容</div>
      </div>
      <div class="alert-box-btns">
        <button class="close-btn">取消</button>
        <button class="submit-btn">确定</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Alert',
  data () {
    return {
      title: '',
      text: '',
      promise: null,
      show: false,
      cancelText: '',
      confirmText: ''
    }
  },
  computed: {},
  watch: {},
  created () { },
  mounted () { },
  methods: {}
}
</script>

<style lang="less" scoped>
.alert-box-wrapper {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  .alert-box {
    display: inline-block;
    width: 420px;
    padding-bottom: 10px;
    background-color: #fff;
    border-radius: 4px;
    border: 1px solid #303133;
    font-size: 16px;
    text-align: left;
    overflow: hidden;
    .alert-box-header {
      position: relative;
      padding: 15px;
      padding-bottom: 10px;
      .alert-box-title {
        color: #303133;
      }
      .alert-box-headerbtn {
        position: absolute;
        top: 15px;
        right: 15px;
        cursor: pointer;
        color: #909399;
      }
    }
    .alert-box-content {
      padding: 10px 15px;
      color: #606266;
      font-size: 14px;
    }
    .alert-box-btns {
      padding: 5px 15px 0;
      text-align: right;
      .close-btn {
        padding: 5px 15px;
        background: #fff;
        border: 1px solid #dcdfe6;
        border-radius: 4px;
        outline: none;
        cursor: pointer;
      }
      .submit-btn {
        margin-left: 6px;
        padding: 5px 15px;
        color: #fff;
        background-color: #409eff;
        border: 1px solid #409eff;
        border-radius: 4px;
        outline: none;
        cursor: pointer;
      }
    }
  }
}
</style>
