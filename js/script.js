var app = new Vue({
    el: '#root',
    data: {
        movieCollection: [],
        userInput: '',
            
    },
    methods: {
        searchMovie() {

        }
    },
    mounted() {
        axios
            .get('https://api.themoviedb.org/3/search/movie?', {
                params: {
                    'api_key': '5081a73eac2719896b2d02d515f944ac',
                    'query': 'smetto quando voglio',
                    'page': 1
                }
            })
            .then((response) => {                
                this.movieCollection = response.data.results
                console.log(this.movieCollection)
            })
    }
  })

