import { redirect } from '@sveltejs/kit';
import { base } from '$app/paths';

export function load() {
  throw redirect(302, `${base}/tier-lists/rollercoasters/overview`);
}
