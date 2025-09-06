import { Component } from '@angular/core';
import { routes } from '../../../shared/routes';
import { Editor, NgxEditorModule, Toolbar } from 'ngx-editor';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ticket-details',
  imports: [NgxEditorModule,RouterLink],
  templateUrl: './ticket-details.component.html',
  styleUrl: './ticket-details.component.scss'
})
export class TicketDetailsComponent {
routes=routes
editor!: Editor;
toolbar: Toolbar = [
  ['bold', 'italic', 'format_clear'],
  ['underline', 'strike'],
  [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
  ['image'],
  ['link'],
];
ngOnInit(): void {
  this.editor = new Editor();
}
ngOnDestroy(): void {
  this.editor.destroy();
}
}
