import * as React from 'react';

const HiddenContent = React.lazy(() => import(
  /* webpackChunkName: "HiddenContent" */
  './components/HiddenContent'
));
import Icon from './assets/Boom.svg'

import './App.css'

function App() {
  const [isVisible, setVisibile] = React.useState(false);

  const handleVisible = () => {
    setVisibile(!isVisible)
  }

  return(
    <div onClick={handleVisible} className="wrapper">
      Icon ?! ->
      <Icon width={24} height={24} />
      {isVisible && (
        <React.Suspense fallback={<div>test</div>}>
          <HiddenContent />
        </React.Suspense>
      )}
    </div>
  )
}

export default App;