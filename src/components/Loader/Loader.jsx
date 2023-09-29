import DotLoader from 'react-spinners/ClipLoader';
import data from './Loader.module.css';

export default function Loader() {
  return (
    <div className={data.overlay}>
      <DotLoader size={250} color={'#461646'} className={data.loader} />
    </div>
  );
}
