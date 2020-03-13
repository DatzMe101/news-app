import React, { Component } from 'react';
import Select from './forms/Select';
import {
  ENDPOINT,
  ENDPOINTS,
  DEFAULT_ENDPOINT_VALUE
} from '../constants/endpoints';
import { COUNTRIES } from '../constants/countries';

class ArticleSearch extends Component {
  state = {
    countries: [...COUNTRIES],
    selectedCountry: '',
    endpoints: [...ENDPOINTS],
    selectedEndpoint: DEFAULT_ENDPOINT_VALUE,
    articleQuery: '',
    isCountryDisabled: false
  };

  onFormSubmit = event => {
    event.preventDefault();
    const {
      selectedCountry: country,
      selectedEndpoint: endpoint,
      articleQuery: q
    } = this.state;
    this.props.onSearch({ country, endpoint, q });
  };

  onChangeEndpoint = selectedEndpoint => {
    const isCountryDisabled = selectedEndpoint === ENDPOINT.EVERYTHING;
    const countryObj = isCountryDisabled ? { selectedCountry: '' } : {};
    this.setState({ selectedEndpoint, isCountryDisabled, ...countryObj });
  };

  render() {
    const {
      countries,
      selectedCountry,
      endpoints,
      selectedEndpoint,
      articleQuery,
      isCountryDisabled
    } = this.state;
    return (
      <form className='ui form' onSubmit={this.onFormSubmit}>
        <div className='ui grid'>
          <div className='field three column row'>
            <div className='column field'>
              <Select
                data={countries}
                value={selectedCountry}
                onChange={selectedCountry => this.setState({ selectedCountry })}
                placeholder='Select a country'
                disabled={isCountryDisabled}
              />
            </div>
            <div className='column field'>
              <Select
                data={endpoints}
                value={selectedEndpoint}
                onChange={this.onChangeEndpoint}
              />
            </div>
            <div className='column field'>
              <div className='ui icon input'>
                <i className='search icon'></i>
                <input
                  type='text'
                  placeholder='Search articles...'
                  value={articleQuery}
                  required
                  onChange={e =>
                    this.setState({ articleQuery: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default ArticleSearch;
