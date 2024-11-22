import { Component,OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import {MatTimepickerModule} from '@angular/material/timepicker';
import {MatIconModule} from '@angular/material/icon';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { emailValidator } from '../services/email-validator';
import {MatRadioModule} from '@angular/material/radio';
@Component({
  selector: 'app-registry',
  imports: [
    CommonModule,
    ReactiveFormsModule,  
    MatFormFieldModule,    
    MatInputModule,        
    MatSelectModule,       
    MatButtonModule,       
    MatDatepickerModule,   
    MatNativeDateModule,
    MatRadioModule,
    MatTimepickerModule,
    MatIconModule,
    HttpClientModule ,
  ],
  templateUrl: './registry.component.html',
  styleUrl: './registry.component.css'
})
export class RegistryComponent implements OnInit {
  flightForm!: FormGroup;
  private apiUrl = 'https://localhost:7209/api/Flight/'; 
  constructor(private readonly fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.flightForm = this.fb.group({
      flightNumber: ['', Validators.required],
      origin: ['', Validators.required],
      destination: ['', Validators.required],
      departureDate: ['', Validators.required],
      departureTime: ['', Validators.required],
      arrivalDate: ['', Validators.required],
      flightDuration: ['', [Validators.required, Validators.min(1)]],
      availableSeats: ['', [Validators.required, Validators.min(1)]],
      ticketPrice: ['', [Validators.required, Validators.min(0)]],
      flightStatus: ['', Validators.required],
      correoSoporte: ['', [Validators.required, emailValidator()]],
    });
  }

  onSubmit(): void {
    const updatedFlight = this.flightForm.value;

    updatedFlight.departureDate = this.formatDate(updatedFlight.departureDate);
    updatedFlight.arrivalDate = this.formatDate(updatedFlight.arrivalDate);
    updatedFlight.departureTime = this.formatTime(updatedFlight.departureTime);
      console.log(updatedFlight);
      this.http.post<any>(`${this.apiUrl}`, updatedFlight).subscribe(
        response => {
            console.log('Flight created successfully', response);
            this.flightForm.reset();
        },
        error => {
            console.error('Error adding flight:', error);
        }
    );
     
    
  }
  formatDate(date: Date): string {
    const formattedDate = new Date(date);
    const year = formattedDate.getFullYear();
    const month = (formattedDate.getMonth() + 1).toString().padStart(2, '0'); 
    const day = formattedDate.getDate().toString().padStart(2, '0'); 
    return `${year}-${month}-${day}`;
  }

  formatTime(time: string): string {
    const formattedTime = new Date()
    const hours = formattedTime.getHours().toString().padStart(2, '0');
    const minutes = formattedTime.getMinutes().toString().padStart(2, '0');
    const seconds = formattedTime.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }
}

