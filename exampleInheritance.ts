class WebComponent{
    constructor(){
     
    }
    click(){
        console.log("simulating a click")
    }
    focus(){
        console.log("simulating focusing on the component")
    }
}
export class button extends WebComponent{
    click(){
        console.log("simulating a click & message specific to buttons")
    }

}
export class TextInput extends WebComponent{
    value:string="";
    enterText(text: string){
        console.log("Print Text"+ text)
    }

}