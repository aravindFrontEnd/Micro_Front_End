import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div [ngStyle]="containerStyle">
      <h2>🅰️ Angular Micro Frontend</h2>
      <p>This is an Angular component with TypeScript and reactive features.</p>
      <div [ngStyle]="counterStyle">
        <p style="font-size: 1.2rem;">Count: {{ count }}</p>
        <p style="font-size: 0.9rem;">{{ message }}</p>
      </div>
      <button 
        (click)="increment()"
        [ngStyle]="buttonStyle"
        (mouseenter)="onMouseEnter()"
        (mouseleave)="onMouseLeave()"
      >
        🚀 Increment
      </button>
    </div>
  `,
})
export class AppComponent {
  count = 0;
  message = 'Angular is working!';
  isHovered = false;

  containerStyle = {
    'text-align': 'center',
    'padding': '2rem',
    'background': 'linear-gradient(135deg, #dd0031 0%, #c3002f 100%)',
    'border-radius': '10px',
    'color': 'white'
  };

  counterStyle = {
    'background': 'rgba(255,255,255,0.1)',
    'padding': '1rem',
    'border-radius': '8px',
    'margin': '1rem 0'
  };

  get buttonStyle() {
    return {
      'background-color': '#ffffff',
      'color': '#dd0031',
      'border': 'none',
      'border-radius': '25px',
      'padding': '12px 24px',
      'cursor': 'pointer',
      'font-weight': 'bold',
      'font-size': '1rem',
      'transition': 'all 0.3s ease',
      'transform': this.isHovered ? 'scale(1.05)' : 'scale(1)'
    };
  }

  increment() {
    this.count++;
    this.message = `Angular is working! Count: ${this.count}`;
  }

  onMouseEnter() {
    this.isHovered = true;
  }

  onMouseLeave() {
    this.isHovered = false;
  }
}