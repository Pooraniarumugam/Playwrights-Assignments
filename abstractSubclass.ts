
import { MySqlConnection } from "./exampleAbstraction"


//Create a Concrete Class PlaywrightConnection that inherits MySqlConnection, implementing
//methods
 export class ABSPlaywrightConnection extends MySqlConnection{
    
   connect(): void {
      super.connect();
     console.log("Connected Successufully for Playwright Class");
   }

   disconnect(): void {
      console.log("unfortunately disconnect tryagain for Playwright Class ");
      
  }
        
    }
    



