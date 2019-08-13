Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    // 这里定义了data属性，属性值可以在组件使用时指定
    data: {
      type: Object,
      value: {},
    }
  },
  data: {
    // 这里是一些组件内部数据
    someData: {}
  },
  methods: {
    // 这里是一个自定义方法
    customMethod: function () { },
    clickMoreCell(e){
      let { name, fnName } = e.currentTarget.dataset.item
      console.debug(e.currentTarget.dataset.item)
      if (fnName) {
        this.triggerEvent(fnName)
      }
    }
  },
  ready(){
    // console.debug(666)
  }
})