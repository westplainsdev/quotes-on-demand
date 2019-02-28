var manage = Vue.component("Manage",{
    template: `<div>
   <h4>{{ message }}</h4>
   <hr />
    <form>
        <input type="hidden" v-model="quote.id" />
        <div class="form-group">
            <label for="formGroupAuthorInput">Author:</label>
            <input type="text" class="form-control" id="formGroupAuthorInput" placeholder="Author Name" v-model="quote.author">
        </div>
        <div class="form-group">
            <label for="formGroupQuoteTextInput">Quote Text</label>
            <input type="text" class="form-control" id="formGroupQuoteTextInput" placeholder="Quote text" v-model="quote.text">
        </div>
        <button type="submit" class="btn btn-success" @click="save">Save Quote</button>
        <button type="button" class="btn btn-outline-danger" @click="cancel">Cancel</button> 
    </form> 
</div>
`,
 
data() {
  return {
      message: 'Add or update a quote',
      quote: {
        id: undefined,
        author: '',
        text: ''
      },
      success: false,
      error: ''
    };
  },
    methods: {
      load(){
        let id = this.$route.params.id;
        if(id){
          axios
          .get(baseUrl + '/quote/' + id)
          .then(response => (this.quote = response.data));
        }
      },

      save(){   
        if(this.quote.author && this.quote.text){
          if(this.quote.id){
            axios.put(baseUrl + '/quote/',  this.quote)
                 .then(function(response){
                   this.success = response.data;
                   if(this.success){
                    router.push('/');
                   }
                 }).catch(function (error) {
                  this.error = error;
                });
          } else {
            axios.post(baseUrl + '/quote/',  this.quote)
            .then(function (response) {
              this.success = response.data;
              if(this.success){
                router.push('/');
              }
            })
            .catch(function (error) {
              this.error = error;
            });
          }
        }        
      },

      cancel() {
        router.push('/');
      }
    },
    
    mounted() {
     this.load();
    }
});