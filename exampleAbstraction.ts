//Abstract with Interface
interface DatabaseConnection{   

    connect() :void;
    disconnect() :void;
    executeUpdate() :void;

}
//Create an Abstract Class MySqlConnection that implements DatabaseConnection interface
//and adds `executeQuery()` 
export abstract class MySqlConnection implements DatabaseConnection{

    connect(): void {
        console.log("Connected Successufully");
    }
    disconnect(): void {
        console.log("unfortunately disconnect tryagain");
        
    }
    executeUpdate(): void {
        console.log("Update successfully");
    }
    executeQuery():void{
        console.log("executed successfully");

    }
    
}