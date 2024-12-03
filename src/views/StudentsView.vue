<template>
    <div class="container">
        <div class="title">Choose How You Want to Login</div>
        <div class="login-options">
            <button class="login-button" style="display: flex; flex-direction: column; align-items: center;">
                <img src="../assets/abc.jpg" alt="Two squares" style="width: 64px; height: 64px; margin-bottom: 8px;">
                Class Code
            </button>
            <button class="login-button" style="display: flex; flex-direction: column; align-items: center;">
                <img src="../assets/qr-code.png" alt="QR Code" style="width: 64px; height: 64px; margin-bottom: 8px;">
                QR Code
            </button>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 2rem;
}

.title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 2rem;
    text-align: center;
}

.login-options {
    display: flex;
    flex-direction: row;
    gap: 1rem;
}

.login-button {
    padding: 1rem 2rem;
    font-size: 1.2rem;
    border-radius: 8px;
    border: none;
    background-color: #4a90e2;
    color: white;
    cursor: pointer;
    transition: transform 0.2s;
}

.login-button:hover {
    transform: scale(1.05);
}
</style>
