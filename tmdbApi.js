const { RESTDataSource, RequestOptions } = require('apollo-datasource-rest');

const apiKey = '397c42a96d2c187c2a4912fccc6be558';

// api class
class MoviesAPI extends RESTDataSource {
  constructor() {
    //* always call super()
    super();
    // set the base URL
    this.baseUrl = 'https://api.themoviedb.org/3/';
  }

  //get movie by id
  async getMovieById(id) {
    return this.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
    );
  }

  //get all movies
  async getAllMovies() {
    const data = await this.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`
    );
    return data.results;
  }
}

class PersonlizedAPI extends RESTDataSource {
  baseURL = 'https://api.themoviedb.org/3';

  willSendRequest() {
    const request = RequestOptions();
    request.headers.set('api_key', this.context.token);
  }
}

module.exports = { MoviesAPI, PersonlizedAPI };
