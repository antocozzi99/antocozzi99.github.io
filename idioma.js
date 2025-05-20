function cambiarIdioma(idioma) {
    localStorage.setItem('idiomaSeleccionado', idioma); // guarda el idioma
  
    for (const id in textos[idioma]) {
      const el = document.getElementById(id);
      if (el) {
        el.textContent = textos[idioma][id];
      }
    }
  }
  