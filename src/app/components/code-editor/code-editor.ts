import { Component, PLATFORM_ID, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-code-editor',
  imports: [
     FormsModule,
    MonacoEditorModule
  ],
  templateUrl: './code-editor.html',
  styleUrl: './code-editor.css',
})
export class CodeEditor {

  protected readonly title = signal('ide');
  readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  updateLanguage(language:string){
    this.editorOptions={
      ...this.editorOptions,language:language
    }
  }

  editorOptions = { theme: 'vs-dark', language: 'typescript' };
  code: string = 'function x() {\nconsole.log("Hello world!");\n}';

}
