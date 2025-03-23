class EventEmitter{
    constructor(){
        this.events = {}
    }
    on(event, listener){
        if(this.events[event]) return;
        this.events[event].push(listener);
    }
    of(event, listener){
        if(!this.events[event]) return;
        this.events[event] = this.events[event].filter((l) => l !== listener);
    }
    emit(event, ...args){
        if(!this.events[event]) return;
        this.events[event].forEach((l) => l(...args));
    }
}
const emitter = new EventEmitter();

function greet(name) {
    console.log(`Hello, ${name}!`);
}

// Subscribe to event
emitter.on("greet", greet);

// Emit event
emitter.emit("greet", "Alice"); 