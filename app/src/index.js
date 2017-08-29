import './style';
import App from './components/app';

if (typeof document != 'undefined') {
  document.addEventListener('DOMContentLoaded', function () {
    cozy.client.init({
      cozyURL: '//' + app.dataset.cozyDomain,
      token: app.dataset.cozyToken
    })
  })
}

export default App;
