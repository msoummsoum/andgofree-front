import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes';
import { Editor, NgxEditorModule, Toolbar } from 'ngx-editor';
import { RouterLink } from '@angular/router';
import { TagInputModule } from 'ngx-chips';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
@Component({
  selector: 'app-add-blog',
  imports: [NgxEditorModule,RouterLink,TagInputModule,CommonModule,FormsModule,MatSelectModule],
  templateUrl: './add-blog.component.html',
  styleUrl: './add-blog.component.scss'
})
export class AddBlogComponent {
routes=routes
tags = ['specialist'];
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
