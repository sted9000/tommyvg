<template>
    <div class="container" style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh;">
        <div class="title" style="font-size: 2.5rem; margin-bottom: 2rem;">Log in As Teacher</div>
        <div class="login-form">
            <div class="form-group">
                <label for="username">Username:</label>
                <input type="text" id="username" v-model="username" placeholder="Enter your username">
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" v-model="password" placeholder="Enter your password">
            </div>
            <button class="login-button">Let me in</button>
        </div>
    </div>
</template>