<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios'

const posts = ref('')
async function getPosts() {
  try {
    const res = await axios.get('https://secreto-backend.vercel.app/api')
    posts.value = res.data.data
  } catch (error) {
    console.log(error)
  }
}
onMounted(()=> {
  getPosts()
})

const formatDate = (date) => {
  const options = {
    hour:'numeric',
    minute:'numeric',
    day: 'numeric',
    month: 'long',
    year:  'numeric',
  }
  return new Date(date).toLocaleDateString('id-ID', options)
}
</script>

<template>
  <main>
    <div class="container-ve ">
      <div class="content shadow bg-white rounded-5">
        <h2 class="mb-4">Komentar</h2>
      <div class="post" v-if="posts.length > 0">
        <div  class="post__card" v-for="post in posts" :key="post">
          <h4 class="post__name">{{ post.name }}</h4>
          <p class="post__message">{{ post.message }}</p>
          <span class="post__date">{{ formatDate(post.createdAt) }}</span>
        </div>
      </div>
      <div v-else>Belum ada pesan !</div>
      </div>
    </div>
  </main>
</template>

<style>

.container-ve {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.content {
  width: 450px;
  padding: 32px 16px;
}
@media screen and (min-width: 490px) {
  .content {
    padding: 32px
  }
}

.post {
  overflow: auto;
  height: 390px;
  display: flex;
  gap: 16px;
  flex-direction: column;
}

.post__card {
  padding: 16px;
  border-radius: 12px;
  background-color: #e9e9e9;
}

.post .post__name {
  font-size: 24px;
  font-weight: 600;
}

.post .post__message {
  font-size: 18px;
  margin-top: 8px;
  margin-bottom: 0;
}

.post .post__date {
  font-size: 14px;
  color: #8d8d8d;
}
</style>
