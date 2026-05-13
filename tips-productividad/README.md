# tips de productividad
es una aplicación web desarrollada en React que muestra consejos de productividad y permite votarlos.

Al abrir la app, se muestra un tip del listado. El usuario puede hacer clic en "Siguiente tip" para ver otro aleatorio (sin que se repita el mismo dos veces seguidas), y en "Me sirvió" para votar el tip que está viendo. Cada tip acumula sus votos de forma independiente, y en la sección inferior siempre se muestra cuál es el tip más votado hasta el momento. Si todavía nadie votó, se muestra un mensaje indicando que no hay votos.


Conceptos de React utilizados:

- useState para manejar el tip actual y los votos
- Props para comunicar datos entre componentes
- Componentes funcionales reutilizables (TipActual, TipMasVotado)
- Actualización de estado mediante copias del objeto, sin mutarlo directamente