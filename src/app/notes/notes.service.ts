import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Note, NoteList } from './notes.model';
import { LoggerService } from '@shared/services/logger.service';
import { Filter } from '@app/shared/model/options.model';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  noteUrl = './assets/data/release-notes.json';

  constructor(private http: HttpClient, private logger: LoggerService) {}

  getNotes(filter: Filter): Observable<NoteList> {
    this.logger.debug('Gathering notes');
    return this.http.get<NoteList>(this.noteUrl).pipe();
  }
}
