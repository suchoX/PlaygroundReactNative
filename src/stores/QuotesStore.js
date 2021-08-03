import {makeObservable, observable, action} from 'mobx';
import {fetchKanyeQuotes} from '../services/quotes.service';

class QuotesStore {
  quotes = [
    {
      id: 1,
      quote: 'test',
    },
  ];

  constructor() {
    makeObservable(this, {
      quotes: observable,
      fetchKanyeQuotes: action,
    });
  }

  fetchKanyeQuotes = () => {
    fetchKanyeQuotes().then(
      action(response => {
        this.quotes[0] = {
          id: 1,
          quote: response.data.quote,
        };
      }),
      action(error => {
        console.log(error);
      }),
    );
  };
}

export default QuotesStore;
