export class ResidentFilm {
  constructor(title: string, episode_id: string, opening_crawl: string, director: string, producer: string, release_date: string) {
    this.title = title;
    this.episode_id = episode_id;
    this.opening_crawl = opening_crawl;
    this.director = director;
    this.producer = producer;
    this.release_date = release_date;
  }

  title?: string
  episode_id?: string
  opening_crawl?: string
  director?: string
  producer?: string
  release_date?: string
}
