<script>
import axios from "axios";

export default {
  name: 'Home',
  data(){
    return{
      formHandle: {
        name : '',
        message: '',
      }
    }
  },

  methods: {
    submitForm(){
      axios
        .post('https://secreto-backend.vercel.app/api', this.formHandle)
        .then((res) => {
          alert('Berhasil terkirim !')
        })
        .catch(() => {
          alert('Gagal Terkirim !')
        })
    }
  }
}
  
</script>
<template>
  <main>
    <div class="wrapper">
      <div class="bg-light py-5 px-3  px-md-5 rounded-5 shadow text-center">
        <h1 class="mb-5">Express JS & Vue JS</h1>
        <h3 class="mb-4">Hujat Aku dong puh sepuh :v</h3>
        
        <form v-on:submit="submitForm">
          <input v-model="formHandle.name" class="form-control py-3 ps-4 rounded-5" type="text" placeholder="Nama" required>
          <input v-model="formHandle.message" class="form-control py-3 ps-4 rounded-5 mt-3" type="text" placeholder="Pesanmu" required>

          <div class="d-grid mt-4">
            <button class="btn btn-dark w-full py-2 rounded-5">Kirim</button>
          </div>
        </form>
        <p class="lead mt-5">dibuat oleh ❤️ <a href="https://rauliqbal.my.id" target="_blank">Rauliqbal</a></p>
      </div>
    </div>
  </main>
</template>

