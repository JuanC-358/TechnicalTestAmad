import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CommonModule } from '@angular/common'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { emailValidator } from '../services/email-validator';
@Component({
  selector: 'app-update',
  imports: [   
    CommonModule,
    ReactiveFormsModule,  
    MatFormFieldModule,    
    MatInputModule,        
    MatSelectModule,       
    MatButtonModule,       
    MatDatepickerModule,   
    MatNativeDateModule,
    HttpClientModule ],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {

  flightForm: FormGroup;
  flightId: number | null = null;
  private apiUrl = 'https://localhost:7209/api/Flight'; 

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.flightForm = this.fb.group({
      id: [''],
      flightNumber: ['', Validators.required],
      origin: ['', Validators.required],
      destination: ['', Validators.required],
      departureDate: ['', Validators.required],
      arrivalDate: ['', Validators.required],
      flightDuration: ['', [Validators.required, Validators.min(0)]],
      availableSeats: ['', [Validators.required, Validators.min(1)]],
      ticketPrice: ['', [Validators.required, Validators.min(0)]],
      flightStatus: ['', Validators.required],
      correoSoporte: ['', [Validators.required, emailValidator()]],
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.flightId = +params['id'];
      
      if (this.flightId) {
        console.log(this.flightId);
        this.loadFlightData();
      }
    });
  }

  loadFlightData(): void {
    this.http.get<any>(`${this.apiUrl}/`+this.flightId!).subscribe(
      (response) => {
        console.log(response);
        this.fillFlightForm(response);
      },
      (error) => {
        console.error('Error al obtener los vuelos', error);
      }
    );
  }

  fillFlightForm(data: any): void {
    this.flightForm.patchValue({
      flightNumber: data.flightNumber,
      origin: data.origin,
      destination: data.destination,
      departureDate: data.departureDate,
      arrivalDate: data.arrivalDate,
      flightDuration: data.flightDuration,
      availableSeats: data.availableSeats,
      ticketPrice: data.ticketPrice,
      flightStatus: data.flightStatus,
      correoSoporte: data.correoSoporte
    });
  }

  onSubmit(): void {
    if (this.flightForm.invalid) {
      return;
    }
    console.log('Flight ID:', this.flightId);
    const updatedFlight = this.flightForm.value;
    
    updatedFlight.id = this.flightId;
    console.log('Flight value:', updatedFlight);
    this.http.put<any>(`${this.apiUrl}/`+this.flightId!, updatedFlight).subscribe(
      response => {
          console.log('Flight updated successfully', response);
      },
      error => {
          console.error('Error when update flight:', error);
      }
    );
    location.reload();
  }

  
}
