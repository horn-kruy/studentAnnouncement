import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.html', // This points to your HTML file
  styleUrls: ['./app.css'],
})
export class AppComponent {
  title = 'studentAnnouncement';
}
