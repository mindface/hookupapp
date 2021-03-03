export interface Headers {
  method: string;
  headers: object;
  credentials: string;
  mode: string;
  body: object[];
}

export class ApiFetch {
  private seturl: string;
  private data: string[];

  constructor(_seturl: string, _data: string[]) {
    this.seturl = _seturl;
    this.data = _data;
  }
  async init() {
    const response = await fetch(this.seturl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
        // "X-CSRFToken": csfTokn
      },
      credentials: 'same-origin',
      mode: 'cors',
      body: JSON.stringify(this.data)
    });
    if (!response.ok) {
      console.log(await response.json());
    } else {
      return await response.json();
    }
  }
}
