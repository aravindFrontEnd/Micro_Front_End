<script>
  let count = 0;
  let isHovered = false;
  
  $: message = `Svelte is working! Count: ${count}`;
  
  function increment() {
    count += 1;
  }
  
  function handleMouseEnter() {
    isHovered = true;
  }
  
  function handleMouseLeave() {
    isHovered = false;
  }
</script>

<div class="container">
  <h2>🧡 Svelte Micro Frontend</h2>
  <p>This is a Svelte component with reactive statements and stores.</p>
  <div class="counter">
    <p style="font-size: 1.2rem;">Count: {count}</p>
    <p style="font-size: 0.9rem;">{message}</p>
  </div>
  <button 
    on:click={increment}
    on:mouseenter={handleMouseEnter}
    on:mouseleave={handleMouseLeave}
    class="btn"
    class:hovered={isHovered}
  >
    🚀 Increment
  </button>
</div>

<style>
  .container {
    text-align: center;
    padding: 2rem;
    background: linear-gradient(135deg, #FF3E00 0%, #FF6B35 100%);
    border-radius: 10px;
    color: white;
  }
  
  .counter {
    background: rgba(255,255,255,0.1);
    padding: 1rem;
    border-radius: 8px;
    margin: 1rem 0;
  }
  
  .btn {
    background-color: #ffffff;
    color: #FF3E00;
    border: none;
    border-radius: 25px;
    padding: 12px 24px;
    cursor: pointer;
    font-weight: bold;
    font-size: 1rem;
    transition: all 0.3s ease;
  }
  
  .btn.hovered {
    transform: scale(1.05);
  }
</style>