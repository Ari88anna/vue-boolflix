var app = new Vue({
    el: '#root',
    data: {
        // array vuoto. sarà popolato da ciò che torna dalla chiamata API
        movieCollection: [],
        // variabile (corrispondente al v-model dell'input da passare al parametro 'query' della API)
        userInput: '',   
            
    },
    methods: {

        // funzione che ci permette di interrogare le API al click o al keyup
        searchMovie()  {
            axios
                .get('https://api.themoviedb.org/3/search/multi?', {
                    params: {
                        'api_key': '5081a73eac2719896b2d02d515f944ac',
                        'query': this.userInput,
                        'page': 1
                    }
                })
                .then((response) => {                
                    this.movieCollection = response.data.results
                    console.log(this.movieCollection)
                });
        },

        numberAsInteger(number){
            return Math.ceil(number / 2);
        }
        
    },
    
  })

