# TechnicalTestAmd
Technical Test
## 1. Git Clone
git clone https://github.com/JuanC-358/TechnicalTestAmd.git
## 2. Sql Database
### 1
```cmd
docker pull mcr.microsoft.com/mssql/server:2022-latest
```
### 2
```cmd
docker run -e "ACCEPT_EULA=Y" -e "MSSQL_SA_PASSWORD=yourStrong(!)Password" -p 1433:1433 -d --name sqlserver mcr.microsoft.com/mssql/server:2022-latest
```
Listo ya podemos ingresar de manera local a la instancia Sql.
### 3
Creamos la base de datos , y la tabla con la que se va a trabajar
```SQL
CREATE TABLE Flights (
    id INT IDENTITY(1,1) PRIMARY KEY,               
    flightNumber VARCHAR(20) NOT NULL,              
    origin VARCHAR(100) NOT NULL,                    
    destination VARCHAR(100) NOT NULL,               
    departureDate DATE NOT NULL,                    
    departureTime TIME NOT NULL,                     
    arrivalDate DATE NOT NULL,                      
    flightDuration DECIMAL(5, 2) NOT NULL,          
    availableSeats INT NOT NULL,                     
    ticketPrice DECIMAL(10, 2) NOT NULL,            
    flightStatus VARCHAR(20) NOT NULL,             
    correoSoporte VARCHAR(100) NOT NULL,             
    createdAt DATETIME DEFAULT GETDATE()             
);
```
### 4
Insertamos un dato para tener data con la que probar 
```SQL
INSERT INTO Flights (
    flightNumber, 
    origin, 
    destination, 
    departureDate, 
    departureTime, 
    arrivalDate, 
    flightDuration, 
    availableSeats, 
    ticketPrice, 
    flightStatus, 
    correoSoporte
) 
VALUES (
    'AA1234',            
    'New York',          
    'Los Angeles',       
    '2024-12-15',        
    '14:30:00',          
    '2024-12-15',        
    5.5,                 
    150,                 
    350.75,              
    'On Time',           
    'soporte@airline.com' 
);
```
## 3. Swagger 
levantar el back y agregar /Swagger al path  
## 4.Angular 
-Angular 19 
-ejecutarnpm install y luego npm start , con esto inicia el front.