import { romcoms } from '$lib/data/romcoms';
import { TierList } from '$lib/models/TierList';
import type { PageLoad } from './$types';
import { Romcom } from '$lib/models/Romcom';

export const load = (({ params }) => {
  const tierList = new TierList<Romcom>();
  romcoms.forEach((romcom) => tierList.addItem(new Romcom(romcom)));
  tierList.sortByRating();
  return {
    display: params.display,
    tierList,
  };
}) satisfies PageLoad;
