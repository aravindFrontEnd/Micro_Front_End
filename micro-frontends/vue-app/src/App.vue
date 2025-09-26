<template>
  <div :style="containerStyle">
    <h2>💚 Vue.js Micro Frontend</h2>
    <p>This is a Vue.js component with reactive data and computed properties.</p>
    <div :style="counterStyle">
      <p style="font-size: 1.2rem;">Count: {{ count }}</p>
      <p style="font-size: 0.9rem;">{{ message }}</p>
    </div>
    <button 
      @click="increment"
      :style="buttonStyle"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
    >
      🚀 Increment
    </button>
  </div>
</template>

<script>
export default {
  name: 'VueApp',
  data() {
    return {
      count: 0,
      isHovered: false
    };
  },
  computed: {
    message() {
      return `Vue.js is working! Count: ${this.count}`;
    },
    containerStyle() {
      return {
        textAlign: 'center',
        padding: '2rem',
        background: 'linear-gradient(135deg, #42b883 0%, #347474 100%)',
        borderRadius: '10px',
        color: 'white'
      };
    },
    counterStyle() {
      return {
        background: 'rgba(255,255,255,0.1)',
        padding: '1rem',
        borderRadius: '8px',
        margin: '1rem 0'
      };
    },
    buttonStyle() {
      return {
        backgroundColor: '#ffffff',
        color: '#42b883',
        border: 'none',
        borderRadius: '25px',
        padding: '12px 24px',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '1rem',
        transition: 'all 0.3s ease',
        transform: this.isHovered ? 'scale(1.05)' : 'scale(1)'
      };
    }
  },
  methods: {
    increment() {
      this.count++;
    }
  }
};
</script>