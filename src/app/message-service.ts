import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AiResponse } from './ai-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private http = inject(HttpClient);
  readonly base_url = 'http://127.0.0.1:8000';

  getWebSearchAgentResponse(userMessage: string): Observable<AiResponse> {
    let request = { search_input: userMessage };
    return this.http.post<AiResponse>(`${this.base_url}/web_search`, request);
  }
}
