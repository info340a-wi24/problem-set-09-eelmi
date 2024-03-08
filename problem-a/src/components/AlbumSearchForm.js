import React, { useState } from 'react';
// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner, faMusic } from '@fortawesome/free-solid-svg-icons'

export default function AlbumSearchForm({ searchCallback, isWaiting }) {
  const [queryText, setQueryText] = useState('');

  const handleChange = (event) => {
    setQueryText(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    let queryTextEncoded = encodeURIComponent(queryText);
    searchCallback(queryTextEncoded);
  }

  return (
    <div>
      <form className="form-inline" onSubmit={handleSubmit}>
        <div className="form-group mb-2">
          <label htmlFor="searchQuery" className="mb-2">Search Query:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter search query"
            value={queryText}
            onChange={handleChange}
          />
        </div>

        {/* Conditional rendering for spinner or button */}
        {isWaiting ?
          <FontAwesomeIcon icon={faSpinner} spin size="lg" aria-label="Loading..." aria-hidden="false" />
          :
          <button type="submit" className="btn btn-primary">
            <FontAwesomeIcon icon={faMusic} /> Search
          </button>
        }
      </form>
    </div>
  )
}

