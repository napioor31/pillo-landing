import { useTranslation } from 'react-i18next';
import { preventOrphans } from '../utils/orphanControl';

export function useOrphanT(namespace) {
  const { t, i18n } = useTranslation(namespace);
  const tWithOrphans = (key, options) => preventOrphans(t(key, options));
  return { t: tWithOrphans, i18n };
}
