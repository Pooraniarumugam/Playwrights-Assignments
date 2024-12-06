 
 //if mentioned interface its act like abstract
 interface DatabaseConnection{   

    connect() :void;
    disconnect() :void;
    executeUpdate() :void;

}
export class PlaywrightConnection implements DatabaseConnection {

    connect(): void {
        console.log("Connected Successufully");
    }
    disconnect(): void {
        console.log("unfortunately disconnect tryagain");
    }
    executeUpdate(): void {
        console.log("Update successfully");
    }


}

