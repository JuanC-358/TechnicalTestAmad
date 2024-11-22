import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common'
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-list',
  imports: [MatCardModule, CommonModule,HttpClientModule ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  flights: any[] = [];
  private apiUrl = 'https://localhost:7209/api/Flight'; 
  constructor(
    private http: HttpClient,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.http.get<any[]>(`${this.apiUrl}`).subscribe(
      (response) => {
        console.log(response);
        this.flights = response;
      },
      (error) => {
        console.error('Error al obtener los vuelos', error);
      }
    );
  }

  deleteRecord(index: number): void {
    if (confirm('Are you sure you want to delete this flight?')) {
        let url = `${this.apiUrl}/` + index;
        console.log('URL to delete:', url);  
        this.http.delete<any>(url).subscribe(
            response => {
                console.log('Flight deleted successfully', response);
                location.reload();
            },
            error => {
                console.error('Error deleting flight:', error);
            }
        );
    }
}

  editRecord(index: number): void {
    console.log(index);
    this.router.navigate(['/update'], { queryParams: { id: index } });
  }
  newRecord(): void {
    this.router.navigate(['/create']);
  }
}
