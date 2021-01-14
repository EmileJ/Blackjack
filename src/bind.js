class Observable{
    constructor(value){
        this._listeners = [];
        this._value = value;
    }

    notify(){
        this._listeners.forEach(listener => listener(this._value));
    }

    subscribe(listener){
        this._listeners.push(listener);
    }

    get value(){
        console.log(this._value)
        return this._value
    }

    set value(val){
        if(val !== this._value){
            this._value = val;
            this.notify();
        }
        console.log('val')
    }
}

const bindValue = (input, observable)=>{
    input.value = observable.value;
    observable.subscribe(()=>input.value = observable.value);
    input.onkeyup = () => observable.value = input.value;
}