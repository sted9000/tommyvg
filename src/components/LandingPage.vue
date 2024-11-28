<template>
  <div class="landing-container">
    <h1 class="title">Tommy VG</h1>
    <button class="enter-button" @click="handleClick">Let me in!</button>
    <footer class="footer">
      Made with <span class="heart">❤️</span> by Tommy VG and Friends
    </footer>
  </div>
</template>

<script setup>
const handleClick = () => {
  console.log('Button clicked!') // You can add more functionality here
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
</style>
