import test from "@playwright/test";
import { PlaywrightConnection } from "./exampleInterface";
import { ABSPlaywrightConnection } from "./Abstract/abstractSubclass";

test("Learning Classes",async()=>{
    //const testclass =new PlaywrightConnection();
    //testclass.connect();
    //testclass.disconnect();

    const testclass2=new ABSPlaywrightConnection();
    testclass2.connect();
    testclass2.disconnect();
    testclass2.executeQuery();
    testclass2.executeUpdate();
})


