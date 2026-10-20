import css from './Loader.module.css';
import { MagnifyingGlass } from 'react-loader-spinner';

export default function Loader() {
  return (
    <>
      <MagnifyingGlass
        height={80}
        width={80}
        ariaLabel="magnifying-glass-loading"
        wrapperClass={css.spinner}
        glassColor="#c0efff"
        color="#084298"
      />
      <p className={css.text}>Loading movies, please wait...</p>
    </>
  );
}
