1.执行了new Vue

2.Compile 编译了dom，追加到页面中

3.this 是vue的一个实例，绑定了data值

4.observe observe(data,this)

5.observe 拿到data，将data中的每个值挂载到vue实例中

6.defineReactive 将挂载到 vue中的data 变为响应式数据，监听 get 和 set 

7.寻找Dep，只要引用data中的值，就会将Dep.target添加到dep中，data中的值一旦被修改，就会通过dep实例更新对应的值

8.这里的Dep.target是一个watcher

9.Dep.target是在Compile 中挂载的

10.Compile 中的nodeToFragment方法返回了最后的dom

11.页面的指令集 -》 Watcher，每个使用data数据的dom元素都会创建一个watcher

12.回到第8步，这儿创建的watcher实例就是Dep.target
Watcher(vm,node,name,'nodeValue')

vue源码分析图：
![vue](https://github.com/webmapLee/mini-vue/blob/main/img/vue.png)
