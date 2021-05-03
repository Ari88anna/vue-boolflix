var app = new Vue({
    el: '#root',
    data: {
        // array vuoto. sarà popolato da una lista di film dalla chiamata API in base alla ricerca dell'utente
        movieCollection: [],
        //array vuoto. Sarà popolato da una lista di serie tv e show dalla chiamata API in base alla ricerca dell'utente
        tvCollection: [],
        // variabile (corrispondente al v-model dell'input da passare al parametro 'query' della API)
        userInput: '', 
        // array vuoto. Sarà popolato dai generi dei film
        movieGenres: [],
        activeGenre: '',
        // array di bandierine
        flagsArray: [
            'en',
            'it',
            'fr',
            'de',
            'es',
            'ja',
            'no',
        ]           
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
                    
                });
        },
        // funzione che ritorna il percorso dell'immagine
        // poster-->variabile che contiene l'immagine
        posterImg(poster) {
            return `https://image.tmdb.org/t/p/w342/${poster}`
        },

        // funzione che ritorna il percorso dell'immagine
        // language-->variabile che contiene la sigla della lingua originale e che corrisponde all'immagine della bandiera
        flagLanguage(language) {

            return `img/${language}.svg`
        },
        
        // Funzione che torna un numero intero
        numberAsInteger(number){
            return Math.ceil(number / 2);
        },        
        
    },
    mounted () {
        axios
            .get('https://api.themoviedb.org/3/genre/movie/list?',{
                params: {
                    'api_key': '5081a73eac2719896b2d02d515f944ac',
                }
            })
            .then((response) => {
                this.movieGenres = response.data.genres
                

                // genres.forEach(element => {
                //     this.movieGenres.push(element.name)
                    
                // });
                
            })
    }

    
  })

