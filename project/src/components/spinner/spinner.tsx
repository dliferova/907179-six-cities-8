import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const SPINNER_SIZE = 80;

type SpinnerProps = {
  message: string
};

function Spinner({message}: SpinnerProps): JSX.Element {
  return (
    <div className='spinner'>
      <div className='spinner__wrapper'
        style={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Loader type="Grid" color="#4381c3" height={SPINNER_SIZE} width={SPINNER_SIZE} />
        <span style={{
          fontSize: '14px',
          marginLeft: '20px',
        }}
        >{message}
        </span>
      </div>
    </div>
  );
}

export default Spinner;
