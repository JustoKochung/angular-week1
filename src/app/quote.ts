export class Quote {
  showDescription: boolean;
  constructor(
    public id: number,
    public quoteName: string,
    public author: string,
    public creator: string,
    public dateCreated: Date,
    public dislike: number,
    public like: number,
  ) {
    this.showDescription = false;
  }
}

