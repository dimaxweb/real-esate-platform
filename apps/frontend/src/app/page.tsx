'use client'

import styles from './page.module.scss';
import { SortDropdown } from './SortDropdown';
import { Sorting } from './types';
import { PropertySearchPage } from './PropertySearchPage';

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <div>
      <PropertySearchPage></PropertySearchPage>
    </div>
  );
}
