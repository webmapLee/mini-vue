let uid = 0

function Watcher(vm,node,name,type){
    Dep.target = this
    this.name = name
    this.id = ++uid
    this.node = node
    this.vm = vm
    this.type = type
    this.update()
    Dep.target = null
}

Watcher.prototype = {
    update:function(){
        this.get()
        if(!batcher){
            batcher = new Batcher()
        }
        batcher.push(this)
        // this.cb()
    },
    cb:function (){
        this.node[this.type] = this.value
    },
    get:function(){
        this.value = this.vm[this.name]
    }
}