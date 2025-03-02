import { ratingToHsl } from './util';
import type { Item } from './Item';

export class Romcom implements Item {
  tierLevel: string;
  code: string;
  title: string;
  rating: number;
  hasArt: boolean;
  description: string;
  props: { [key: string]: string };

  mainProp: string;
  ratingColor: string;
  artUrlSquare: string | null;
  iconUrl: string | null;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(dto: any) {
    this.tierLevel = dto.tierLevel;
    this.code = dto.code;
    this.title = dto.title;
    this.rating = dto.rating;
    this.hasArt = dto.hasArt;
    this.description = dto.description;
    this.props = dto.props;

    this.mainProp = this.props['year'];
    this.ratingColor = ratingToHsl(this.rating);
    this.artUrlSquare = `/art/romcoms/${this.code}.jpg`;
    this.iconUrl = null;
  }
}
