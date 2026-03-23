import { Component, signal } from '@angular/core';
// import { PLATFORM_ID, inject, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';
// import { isPlatformBrowser } from '@angular/common';
import { DiffEditorModel } from 'ngx-monaco-editor-v2';

@Component({
  selector: 'app-code-editor',
  imports: [FormsModule, MonacoEditorModule],
  templateUrl: './code-editor.html',
  styleUrl: './code-editor.css',
})
export class CodeEditor {
  protected readonly title = signal('ide');
  // readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  // updateLanguage(language: string) {
  //   this.editorOptions = {
  //     ...this.editorOptions,
  //     language: language,
  //   };
  // }

  // editorOptions = { theme: 'vs-dark', language: 'typescript' };
  // code = 'function x() {\nconsole.log("Hello world!");\n}';

  options = {
    theme: 'vs-dark',
    originalEditable: true,
  };
  originalModel: DiffEditorModel = {
    code: 'heLLo world!',
    language: 'text/plain',
  };

  modifiedModel: DiffEditorModel = {
    code: 'hello orlando!',
    language: 'text/plain',
  };
}
