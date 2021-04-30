var app = new Vue({
    el: '#root',
    data: {
        // array vuoto. sarà popolato da una lista di film dalla chiamata API in base alla ricerca dell'utente
        movieCollection: [],
        //array vuoto. Sarà popolato da una lista di serie tv e show dalla chiamata API in base alla ricerca dell'utente
        tvCollection: [],
        // variabile (corrispondente al v-model dell'input da passare al parametro 'query' della API)
        userInput: '',   
            
    },
    methods: {

        // funzione che ci permette di interrogare le API al click o al keyup
        searchMovie()  {
            axios
                .get('https://api.themoviedb.org/3/search/movie?', {
                    params: {
                        'api_key': '5081a73eac2719896b2d02d515f944ac',
                        'query': this.userInput,
                        
                    }
                })
                .then((response) => {                
                    this.movieCollection = response.data.results
                    console.log(this.movieCollection)
                });

            axios
                .get('https://api.themoviedb.org/3/search/tv?', {
                    params: {
                        'api_key': '5081a73eac2719896b2d02d515f944ac',
                        'query': this.userInput,
                        
                    }
                })
                .then((response) => {                
                    this.tvCollection = response.data.results
                    console.log(this.tvCollection)
                });
        },
        
        // Funzione che torna un numero intero
        numberAsInteger(number){
            return Math.ceil(number / 2);
        }
        
    },
    
  })

