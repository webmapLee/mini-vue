function Batcher(){
    this.reset()
}

Batcher.prototype.reset = function(){
    this.has = {}
    this.queue = []
    this.waiting = false
}

Batcher.prototype.push = function(job){
    let id = job.id
    if(!this.has[id]){
        this.queue.push(job)
        this.has[id] = true
        if(!this.waiting){
            this.waiting = true
            if('Promise' in window){
                Promise.resolve().then((()=>{
                    this.flush()
                }))
            }else{
                setTimeout(()=>{
                    this.flush()
                },0)
            }
        }
    }
}

Batcher.prototype.flush = function(){
    this.queue.forEach((job)=>{
        job.cb()
    })
    this.reset()
}

