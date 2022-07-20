function Vue(options){
    this.data = options.data
    var data = this.data
    observe(data,this)
    var id = options.el
    const app = document.getElementById(id)
    var dom = new Compile(app,this)
    app.appendChild(dom)
}