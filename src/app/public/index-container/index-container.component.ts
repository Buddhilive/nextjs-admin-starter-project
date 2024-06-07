import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { NavigationComponent } from '../../components/navigation/navigation.component';

@Component({
  selector: 'solias-index-container',
  standalone: true,
  imports: [
    HeaderComponent,
    NavigationComponent
  ],
  templateUrl: './index-container.component.html',
  styleUrl: './index-container.component.scss'
})
export class IndexContainerComponent {

}
