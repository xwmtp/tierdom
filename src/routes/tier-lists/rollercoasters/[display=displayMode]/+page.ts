import { rollercoasters } from '$lib/data/rollercoasters';
import { TierList } from '$lib/models/TierList';
import { Rollercoaster } from '$lib/models/Rollercoaster';
import type { PageLoad } from './$types';

export const load = (({ params }) => {
  const tierList = new TierList<Rollercoaster>();
  rollercoasters.forEach((romcom) => tierList.addItem(new Rollercoaster(romcom)));
  tierList.sortByRating();
  return {
    display: params.display,
    tierList,
  };
}) satisfies PageLoad;
