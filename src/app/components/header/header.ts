import { Component, signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faJs, faTypescript } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-header',
  imports: [FontAwesomeModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  bars = faBars;
  jsIcon = faJs;
  tsIcon = faTypescript;

  language = signal('Javascript');
}
