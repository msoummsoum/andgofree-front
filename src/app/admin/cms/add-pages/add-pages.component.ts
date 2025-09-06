import { Component } from '@angular/core';
import { routes } from '../../../shared/routes';
import { Editor, NgxEditorModule, Toolbar } from 'ngx-editor';
import { TagInputModule } from 'ngx-chips';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-pages',
  imports: [NgxEditorModule,TagInputModule,CommonModule,FormsModule,RouterLink],
  templateUrl: './add-pages.component.html',
  styleUrl: './add-pages.component.scss'
})
export class AddPagesComponent {
routes=routes
editor!: Editor;
toolbar: Toolbar = [
  ['bold', 'italic', 'format_clear'],
  ['underline', 'strike'],
  [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
  ['image'],
  ['link'],
];
tags=['Books Car','Online']
ngOnInit(): void {
  this.editor = new Editor();
}
ngOnDestroy(): void {
  this.editor.destroy();
}
constructor(private router:Router){}
pageRedirect():void{
  this.router.navigate([routes.pages])
}
}
