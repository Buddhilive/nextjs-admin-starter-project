import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { NavigationComponent } from '../../components/navigation/navigation.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'solias-index-container',
  standalone: true,
  imports: [
    HeaderComponent,
    NavigationComponent,
    FooterComponent
  ],
  templateUrl: './index-container.component.html',
  styleUrl: './index-container.component.scss'
})
export class IndexContainerComponent {

}
