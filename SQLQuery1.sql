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
