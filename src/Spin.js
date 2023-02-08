import { useSelector } from 'react-redux';
import { SpinnerCircular } from 'spinners-react';

const Spin = () => {
   const spinner = useSelector(state => state.appReducer.loading)
  
    

  return (
    <div className='loader-styles'>
      <SpinnerCircular
        secondaryColor = '#20B2AA'
        size={150}
        enabled={spinner}/>
    </div>
  )
}

export default Spin;