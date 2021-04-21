export default {
  props: {
    to: {
      type: String,
      required: true
    }
  },
  render (h) {
    return h('a', { attrs: { href: '#' + this.to } }, this.$slots.default)
    // return <a href={'#' + this.to}>{this.$slots.default}</a>
  }
}
