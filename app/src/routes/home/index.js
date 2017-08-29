import { h, Component } from 'preact';
import style from './style';

export default class Home extends Component {
  componentDidMount () {
    const app = document.querySelector('[role=application]')
    cozy.client.init({
      cozyURL: '//' + app.dataset.cozyDomain,
      token: app.dataset.cozyToken
    })
    cozy.client.data.defineIndex('io.cozy.bills', ['_id']).then(index => {
      cozy.client.data.query(index, { _id: { $gt: null }}).then(function (docs) {
        console.log(docs)
      })  
    })
  }

  render() {
    return (
      <div class={style.home}>
        <h1>Home</h1>
        <p>This is the Home component.</p>
      </div>
    );
  }
}
