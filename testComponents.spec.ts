import test from "@playwright/test";
import { button, TextInput } from "./exampleInheritance";

test("Learning Inheritance",async()=>{

    const buttonobjt =new button();
    const testobjt = new TextInput();
    buttonobjt.click();
    buttonobjt.focus();
    testobjt.enterText("7899");
})