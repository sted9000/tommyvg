<template>
  <div class="landing-container">
    <h1 class="title">Thomas Van Gorder The Great App!</h1>
    <div class="login-buttons">
    <button class="google-login-button" @click="handleClick('/home')">
      <img class="google-icon" src="../assets/google-logo.png" alt="Google logo" style="width: 16px; height: 16px;">
      <div class="google-login-text">Login with Google</div>
    </button>
    <button class="enter-button" @click="handleClick('/home')">Let me in!</button>
    </div>
    <div class="user-type-buttons">
      <button class="user-button parent-button" @click="handleClick('/parents')" style="padding: 1.5rem 3rem; font-size: 1.2rem;">
        👨‍👩‍👧‍👦 Parent
      </button>
      <button class="user-button teacher-button" @click="handleClick('/teachers')" style="padding: 1.5rem 3rem; font-size: 1.2rem;">
        👩‍🏫 Teacher
      </button>
      <button class="user-button student-button" @click="handleClick('/students')" style="padding: 1.5rem 3rem; font-size: 1.2rem;">
        👨‍🎓 Student
      </button>
    </div>
    <footer class="footer">
      Made with <span class="heart">❤️</span> by Tommy VG and Friends
    </footer>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const handleClick = (route, userCategory) => {
  console.log(userCategory)
  router.push(route)
}
</script>

<style scoped>
.landing-container {
  height: 100vh; /* Changed from min-height to fixed height */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem; /* Removed top/bottom padding */
  background-color: #f0f7ff;
  box-sizing: border-box; /* Ensure padding is included in height calculation */
}

.title {
  font-size: 4rem;
  color: #4a90e2;
  padding-top: 2rem; /* Changed from margin to padding */
  text-shadow: 2px 2px #ddd;
}

.enter-button {
  background-color: #ff6b6b;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  border-radius: 25px;
  cursor: pointer;
  transition: transform 0.2s;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.enter-button:hover {
  transform: scale(1.05);
  background-color: #ff5252;
}

.footer {
  padding-bottom: 1rem; /* Changed from margin to padding */
  font-size: 1.2rem;
  color: #666;
}

.heart {
  color: #ff6b6b;
  display: inline-block;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
}

@media (max-width: 768px) {
  .title {
    font-size: 3rem;
  }
  
  .enter-button {
    font-size: 1.2rem;
    padding: 0.8rem 1.6rem;
  }
  
  .footer {
    font-size: 1rem;
  }

}
.login-buttons {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;

  }
.google-login-button {
  display: flex;
  flex-direction: row;
  align-items: center;

}
.google-login-text {
  margin-left: 1rem;
}
</style>
