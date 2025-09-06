import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-language-setting',
  imports: [RouterLink,CommonModule],
  templateUrl: './language-setting.component.html',
  styleUrl: './language-setting.component.scss'
})
export class LanguageSettingComponent {
routes=routes
}
