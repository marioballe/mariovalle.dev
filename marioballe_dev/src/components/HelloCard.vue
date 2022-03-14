<template>
  <div class="greetings">
    <h1 class="green">Hola! 👋🏼</h1>
    <h3>
      Mi nombre es <a>Mario Ballester</a> y soy ingeniero de software desde hace
      más de 5 años. Actualmente trabajo como consultor full-stack developer
      <a>.Net</a> y <a>Vue.js.</a> Además me gusta involucrarme en la comunidad
      creando contenido sobre programación y tecnología en redes. Aquí podrás
      encontrar todos mis enlaces de interés. ¡Bienvenid@!
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 1.75rem;
  top: -10px;
}
.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
