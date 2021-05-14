import { Main } from '@commonsswarm/ui'
import TransactionModal from './components/TransactionModal'

const App = () => {
  return (
    <>
      <Main
        theme="dark"
        assetsUrl="/aragon-ui"
        layout={false}
        scrollView={false}
      >
        <TransactionModal visible={true} /> 
      </Main>
    </>
  );
}

export default App;
