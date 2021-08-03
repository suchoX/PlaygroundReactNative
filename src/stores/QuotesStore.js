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
      kanyeQuotesFetchSuccess: action,
      kanyeQuotesFetchFailure: action,
    });
  }

  fetchKanyeQuotes = () => {
    fetchKanyeQuotes().then(
      this.kanyeQuotesFetchSuccess,
      this.kanyeQuotesFetchFailure,
    );
  };

  kanyeQuotesFetchSuccess = response => {
    console.log(response.data.quote);
    this.quotes[0] = {
      id: 1,
      quote: response.data.quote,
    };
  };

  kanyeQuotesFetchFailure = error => {
    this.state = 'error';
  };
}

export default QuotesStore;
