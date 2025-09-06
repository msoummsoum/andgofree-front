import { Component } from '@angular/core';
import { Editor, NgxEditorModule, Toolbar } from 'ngx-editor';

@Component({
  selector: 'app-maintenance-mode',
  imports: [NgxEditorModule],
  templateUrl: './maintenance-mode.component.html',
  styleUrl: './maintenance-mode.component.scss'
})
export class MaintenanceModeComponent {
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

