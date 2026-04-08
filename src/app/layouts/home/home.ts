import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { CodeEditor } from '../../components/code-editor/code-editor';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-home',
  imports: [Header, CodeEditor, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
