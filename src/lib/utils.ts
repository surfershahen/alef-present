import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getCampaignSource(): string {
  if (typeof window === 'undefined') return 'direct';
  
  const urlParams = new URLSearchParams(window.location.search);
  
  // Check for Facebook Click ID
  const fbclid = urlParams.get('fbclid');
  if (fbclid) {
    return `facebook_${fbclid.substring(0, 8)}`;
  }
  
  // Check for Google Click ID
  const gclid = urlParams.get('gclid');
  if (gclid) {
    return `google_${gclid.substring(0, 8)}`;
  }
  
  // Check for UTM source
  const utmSource = urlParams.get('utm_source');
  if (utmSource) {
    const utmMedium = urlParams.get('utm_medium');
    const utmCampaign = urlParams.get('utm_campaign');
    let source = utmSource;
    if (utmMedium) source += `_${utmMedium}`;
    if (utmCampaign) source += `_${utmCampaign}`;
    return source;
  }
  
  // Check for other common campaign parameters
  const ref = urlParams.get('ref');
  if (ref) return `ref_${ref}`;
  
  const source = urlParams.get('source');
  if (source) return source;
  
  return 'direct';
}
