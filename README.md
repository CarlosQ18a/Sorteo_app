# React + TypeScript + Vite

# Proyecto de Lotería en React

## Descripción del Proyecto
Crea una aplicación donde los usuarios pueden simular un sorteo de lotería. Los usuarios seleccionan un conjunto de números y luego hacen clic en un botón para "sortear" los números ganadores, con retroalimentación sobre si han ganado o no.

## Habilidades y Requerimientos

### 1. Escribir tu primer componente de React

**Descripción:**
Crear un componente `Lotería` que permita al usuario seleccionar sus números y ver el resultado del sorteo.

**Código:**

```tsx
import React from 'react';

const Lottery: React.FC = () => {
  return (
    <div>
      <h1>Lotería</h1>
      <p>Selecciona un conjunto de números para ver si has ganado.</p>
    </div>
  );
};

export default Lottery;
```
**Explicación:**

**¿Qué hace este fragmento de código?**
Este componente muestra un título y un mensaje explicativo al usuario.

**¿Cómo cumple con el requisito de la habilidad?**
Crea un componente básico de React para la aplicación de lotería.

**¿Por qué es la mejor forma de implementarlo?**
Usamos una función sencilla con JSX para renderizar el contenido de la interfaz.

### 2. Crear archivos con múltiples componentes

**Descripción:**
Crear componentes para la selección de números, el botón de sorteo y la visualización de resultados.

**Código:**
```tsx
import React, { useState } from 'react';

const NumberSetsSelection: React.FC<{ handleSelectSet: (index: number) => void }> = ({ handleSelectSet }) => {
  const numberSets = [
    [5, 12, 23, 34, 45, 56],
    [3, 15, 27, 36, 42, 50],
    // Otros conjuntos de números
  ];

  return (
    <div>
      {numberSets.map((set, index) => (
        <button key={index} onClick={() => handleSelectSet(index)}>
          Conjunto {index + 1}: {set.join(', ')}
        </button>
      ))}
    </div>
  );
};

export default NumberSetsSelection;

```
**Explicación:**

**¿Qué hace este fragmento de código?** 
Crea un componente que renderiza botones para cada conjunto de números disponible.

**¿Cómo cumple con el requisito de la habilidad?**
Se crean múltiples componentes (uno para la selección de números y otro para manejar los resultados).

**¿Por qué es la mejor forma de implementarlo?** 
Utilizamos la función map para renderizar de manera eficiente los botones para cada conjunto de números.

### 3. Añadir marcado a JavaScript con JSX
**Descripción:**
Usar JSX para mostrar la interfaz de selección de números y los resultados del sorteo.
**Código:**
```tsx
import React, { useState } from 'react';

const App: React.FC = () => {
  const [selectedSetIndex, setSelectedSetIndex] = useState<number | null>(null);
  const [isWinner, setIsWinner] = useState<boolean | null>(null);
  const [winningSet, setWinningSet] = useState<number[]>([]);

  // Generar el conjunto ganador
  React.useEffect(() => {
    const randomIndex = Math.floor(Math.random() * 7);
    setWinningSet([
      [5, 12, 23, 34, 45, 56],
      [3, 15, 27, 36, 42, 50],
      // Otros conjuntos de números
    ][randomIndex]);
  }, []);

  const handleSelectSet = (index: number) => {
    setSelectedSetIndex(index);
    setIsWinner(null);
  };

  const handleCheckWinner = () => {
    if (selectedSetIndex !== null) {
      const selectedSet = [
        [5, 12, 23, 34, 45, 56],
        [3, 15, 27, 36, 42, 50],
        // Otros conjuntos de números
      ][selectedSetIndex];
      const winner = JSON.stringify(selectedSet) === JSON.stringify(winningSet);
      setIsWinner(winner);
    }
  };

  return (
    <div>
      <h1>Lotería</h1>
      <div>
        {[
          [5, 12, 23, 34, 45, 56],
          [3, 15, 27, 36, 42, 50],
          // Otros conjuntos de números
        ].map((set, index) => (
          <button key={index} onClick={() => handleSelectSet(index)}>
            Conjunto {index + 1}: {set.join(', ')}
          </button>
        ))}
      </div>
      <button onClick={handleCheckWinner}>Comprobar si ganaste</button>
      {isWinner !== null && (
        <div>
          {isWinner ? <h2>¡Felicidades! Has ganado.</h2> : <h2>Lo siento, no ganaste.</h2>}
        </div>
      )}
      <h3>Números ganadores: {winningSet.join(', ')}</h3>
    </div>
  );
};

export default App;

```

 **Explicación:**

**¿Qué hace este fragmento de código?**
Muestra la interfaz de selección de números y los resultados del sorteo, todo utilizando JSX para la presentación.

**¿Cómo cumple con el requisito de la habilidad?** 
Utiliza JSX para representar los datos dinámicos y la lógica de la aplicación, como los números seleccionados y los resultados.

**¿Por qué es la mejor forma de implementarlo?** 
JSX permite escribir estructuras de HTML dentro de JavaScript, lo que hace que el código sea más legible y fácil de mantener.


### 4. Añadir llaves con JSX
**Descripción:**
Usar llaves {} para manejar la selección de números y el sorteo de los números ganadores.

**Código:**

```tsx
<button onClick={() => handleSelectSet(index)}>
  Conjunto {index + 1}: {set.join(', ')}
</button>

```
**Explicación:**

**¿Qué hace este fragmento de código?**
El uso de llaves en JSX permite insertar expresiones de JavaScript, como el índice de un conjunto y los números dentro de un conjunto, en la estructura HTML.

**¿Cómo cumple con el requisito de la habilidad?**
Las llaves se usan para insertar datos dinámicos, como el nombre del conjunto y los números en el JSX.

**¿Por qué es la mejor forma de implementarlo?**
Las llaves permiten incluir datos y expresiones dentro de JSX de forma clara y efectiva.

### 5. Configurar componentes con props
**Descripción:**
 Pasar los números seleccionados y los resultados del sorteo como props entre los componentes.

**Código:**

```tsx
import React from 'react';

const NumberSetsSelection: React.FC<{ numberSets: number[]; handleSelectSet: (index: number) => void }> = ({
  numberSets,
  handleSelectSet,
}) => {
  return (
    <div>
      {numberSets.map((set, index) => (
        <button key={index} onClick={() => handleSelectSet(index)}>
          Conjunto {index + 1}: {set.join(', ')}
        </button>
      ))}
    </div>
  );
};


```
**Explicación:**

**¿Qué hace este fragmento de código?**
El componente NumberSetsSelection recibe dos props: numberSets para los conjuntos de números y handleSelectSet para manejar la selección de un conjunto.

**¿Cómo cumple con el requisito de la habilidad?**
Pasamos la información sobre los conjuntos y la función para seleccionarlos como props entre los componentes.

**¿Por qué es la mejor forma de implementarlo?**
Utilizar props hace que los componentes sean reutilizables y desacoplados, permitiendo una mejor gestión del estado y de los datos en toda la aplicación.

### Codigo Lottery.tsx
```tsx
import React, { useState } from 'react';

// Definición de las propiedades que recibirá el componente Lottery
interface LotteryProps {
    numberSets: number[][]; // Arreglo de conjuntos de números
    selectedSetIndex: number | null; // Índice del conjunto seleccionado
    handleSelectSet: (index: number) => void; // Función para seleccionar un conjunto
    handleCheckWinner: () => void; // Función para verificar si el usuario ganó
    isWinner: boolean | null; // Estado de ganador o no
    winningSet: number[]; // Conjunto de números ganadores
}

// Componente principal de la Lotería
const Lottery: React.FC<LotteryProps> = ({
    numberSets,
    selectedSetIndex,
    handleSelectSet,
    handleCheckWinner,
    isWinner,
    winningSet,
}) => {
    return (
        <div>
            <h1>Lotería</h1>
            <div>
                <h2>Selecciona tu conjunto de números:</h2>
                {numberSets.map((set, index) => (
                    <button
                        key={index}
                        onClick={() => handleSelectSet(index)}
                        style={{
                            margin: '10px',
                            padding: '10px',
                            backgroundColor: selectedSetIndex === index ? 'lightgreen' : 'white'
                        }}
                    >
                        Conjunto {index + 1}: {set.join(', ')}
                    </button>
                ))}
            </div>

            <div>
                <button onClick={handleCheckWinner}>Comprobar si ganaste</button>
            </div>

            {isWinner !== null && (
                <div style={{ marginTop: '20px' }}>
                    {isWinner ? (
                        <h2 style={{ color: 'green' }}>¡Felicidades! Has seleccionado el conjunto ganador.</h2>
                    ) : (
                        <h2 style={{ color: 'red' }}>Lo siento, no ganaste. ¡Inténtalo de nuevo!</h2>
                    )}
                </div>
            )}

            <div>
                <h3>Números ganadores:</h3>
                <p>{winningSet.join(', ')}</p>
            </div>
        </div>
    );
};

export default Lottery;
```
**Explicacion:**
**¿Qué hace este fragmento de código?**

Este componente Lottery representa una interfaz de usuario básica para un juego de lotería. Permite a los usuarios seleccionar un conjunto de números entre varios disponibles, comprobar si el conjunto seleccionado coincide con el conjunto ganador, y recibir retroalimentación sobre el resultado.

**¿Cómo cumple con el requisito de la habilidad?**

Selección de Conjunto: Los usuarios pueden ver múltiples conjuntos de números y seleccionar uno haciendo clic en un botón correspondiente.
Verificación de Ganador: El botón "Comprobar si ganaste" activa la verificación de si el conjunto seleccionado coincide con el ganador.
Retroalimentación Condicional: Después de verificar, muestra un mensaje de felicitación en caso de ganar o un mensaje de intento fallido si no fue el caso.
Visualización del Conjunto Ganador: Finalmente, siempre se muestra el conjunto de números ganadores.

**¿Por qué es la mejor forma de implementarlo?**

Este diseño modular y claro separa la lógica de presentación en un componente que utiliza props para manejar datos dinámicos. Esto facilita la reutilización y permite pruebas sencillas. Además, el uso de condiciones (isWinner !== null) asegura que los mensajes de estado solo se muestren cuando corresponda.

### Codigo de NumberSetsSelection.tsx
```tsx
import React from 'react';

// Definición de las propiedades que recibirá el componente NumberSetsSelection
interface NumberSetsSelectionProps {
    numberSets: number[][]; // Arreglo de conjuntos de números
    selectedSetIndex: number | null; // Índice del conjunto seleccionado
    handleSelectSet: (index: number) => void; // Función para seleccionar un conjunto
}

// Componente para la selección de conjuntos numéricos
const NumberSetsSelection: React.FC<NumberSetsSelectionProps> = ({
    numberSets,
    selectedSetIndex,
    handleSelectSet,
}) => {
    return (
        <div>
            {numberSets.map((set, index) => (
                <button
                    key={index}
                    className="boton-transparente" // Aplica la clase personalizada para el botón
                    onClick={() => handleSelectSet(index)} // Llama a la función de selección con el índice del conjunto
                    style={{
                        backgroundColor: selectedSetIndex === index ? 'lightgreen' : 'transparent',
                    }}
                >
                    Conjunto {index + 1}: {set.join(', ')}
                </button>
            ))}
        </div>
    );
};

export default NumberSetsSelection;

```
**Explicacion:**

**¿Qué hace este fragmento de código?**

Este código define un componente NumberSetsSelection que muestra una lista de botones, cada uno representando un conjunto de números. Al hacer clic en un botón, el conjunto de números correspondiente se selecciona visualmente, cambiando su color de fondo, e invoca una función de selección.

**¿Cómo cumple con el requisito de la habilidad?**

Generación de Botones Dinámicos: Usa .map() para renderizar un botón por cada conjunto en numberSets.
Selección Visual: Cambia el color de fondo del botón seleccionado usando una condición (selectedSetIndex === index), proporcionando feedback visual al usuario.
Función de Selección: Llama a handleSelectSet(index) al hacer clic, delegando la lógica de selección al componente padre.

**¿Por qué es la mejor forma de implementarlo?**

La estructura modular y la recepción de props permiten que el componente se enfoque en la presentación y delegue la lógica al componente padre. Al usar clases CSS y estilos condicionales, la implementación es flexible y fácil de mantener, proporcionando una experiencia de usuario clara y una estructura de código limpia y reutilizable.

### Codigo de WinningNumbers.tsx
```tsx
import React from 'react';

// Definición de las propiedades que recibirá el componente WinningNumbers
interface WinningNumbersProps {
    isWinner: boolean | null; // Estado que indica si el usuario ganó o no
}

// Componente para mostrar el mensaje de ganador o perdedor
const WinningNumbers: React.FC<WinningNumbersProps> = ({ isWinner }) => {
    // Mensaje inicial si no se ha verificado un conjunto
    if (isWinner === null) return <div>Por favor, selecciona un conjunto y comprueba si ganaste.</div>;

    return (
        <div>
            {isWinner ? (
                <h2 style={{ color: 'green' }}>¡Felicidades! Has seleccionado el conjunto ganador.</h2>
            ) : (
                <h2 style={{ color: 'red' }}>Lo siento, no ganaste. ¡Inténtalo de nuevo!</h2>
            )}
            <div style={{ color: 'black', fontWeight: 'bold' }}>Números ganadores: 1, 13, 26, 39, 48, 52</div>
        </div>
    );
};

export default WinningNumbers;

```
**Explicacion:**
**¿Qué hace este fragmento de código?**

Este fragmento define un componente WinningNumbers, el cual muestra un mensaje de resultado basado en si el usuario ha ganado o perdido en el juego de lotería. Si aún no se ha realizado una verificación, se le pide al usuario que seleccione un conjunto y verifique su selección.

**¿Cómo cumple con el requisito de la habilidad?**

Mensaje de Estado Inicial: Si isWinner es null, muestra un mensaje pidiendo al usuario que seleccione y verifique un conjunto, lo que ayuda a guiar al usuario.
Mensaje Condicional de Resultado: Muestra un mensaje de felicitación en caso de ganar y un mensaje de intento fallido en caso de no ganar, cambiando el color del texto para enfatizar el resultado.
Visualización de Números Ganadores: Siempre muestra el conjunto de números ganadores al final para mantener al usuario informado sobre los números seleccionados en el sorteo.
**¿Por qué es la mejor forma de implementarlo?**

Este componente es modular y enfocado en una tarea específica: mostrar el estado de ganador o perdedor. Al condicionar la visualización de mensajes con isWinner, mejora la experiencia de usuario proporcionando un flujo claro e intuitivo. El código es simple y legible, y la estructura es ideal para reutilización o ampliación en caso de futuras modificaciones.

### Codigo de App.tsx
```tsx
import React, { useState } from 'react';
import Lottery from './components/Lottery';

// Definición de los conjuntos de números disponibles para seleccionar
const numberSets = [
    [5, 12, 23, 34, 45, 56],
    [3, 15, 27, 36, 42, 50],
    [2, 10, 24, 33, 44, 55],
    [1, 13, 26, 39, 48, 52],
    [8, 18, 29, 35, 41, 49],
    [4, 11, 25, 31, 43, 57],
    [6, 14, 22, 32, 46, 58],
];

const App: React.FC = () => {
    const [selectedSetIndex, setSelectedSetIndex] = useState<number | null>(null); // Índice del conjunto seleccionado
    const [isWinner, setIsWinner] = useState<boolean | null>(null); // Estado de ganador o perdedor
    const [winningSet, setWinningSet] = useState<number[]>([]); // Conjunto de números ganadores

    // Función para generar un conjunto ganador aleatorio
    const generateWinningSet = () => {
        const randomIndex = Math.floor(Math.random() * numberSets.length);
        setWinningSet(numberSets[randomIndex]);
    };

    // Maneja la selección de un conjunto y genera un nuevo conjunto ganador
    const handleSelectSet = (index: number) => {
        setSelectedSetIndex(index); // Actualiza el conjunto seleccionado
        setIsWinner(null); // Reinicia el mensaje de ganador o perdedor
        generateWinningSet(); // Genera un nuevo conjunto ganador
    };

    // Verifica si el conjunto seleccionado coincide con el conjunto ganador
    const handleCheckWinner = () => {
        if (selectedSetIndex !== null) {
            const selectedSet = numberSets[selectedSetIndex];
            const winner = JSON.stringify(selectedSet) === JSON.stringify(winningSet);
            setIsWinner(winner); // Actualiza el estado de ganador o perdedor
        }
    };

    return (
        <Lottery
            numberSets={numberSets}
            selectedSetIndex={selectedSetIndex}
            handleSelectSet={handleSelectSet}
            handleCheckWinner={handleCheckWinner}
            isWinner={isWinner}
            winningSet={winningSet}
        />
    );
};

export default App;

```
**Explicacion:**
**¿Qué hace este fragmento de código?**

Este código define el componente principal App de una aplicación de lotería. App administra el estado de la selección del conjunto de números y verifica si coincide con el conjunto ganador generado aleatoriamente cada vez que el usuario selecciona uno.

**¿Cómo cumple con el requisito de la habilidad?**

Selección de Conjunto: La función handleSelectSet permite al usuario seleccionar un conjunto y reinicia el mensaje de ganador o perdedor, generando un nuevo conjunto ganador cada vez que se selecciona un nuevo conjunto.
Generación de Conjunto Ganador: generateWinningSet elige un conjunto ganador aleatorio de numberSets cuando el usuario selecciona un conjunto.
Verificación de Ganador: La función handleCheckWinner compara el conjunto seleccionado con el conjunto ganador usando JSON.stringify para determinar si son iguales y establece el estado isWinner en true o false.
**¿Por qué es la mejor forma de implementarlo?**

Esta implementación separa claramente la lógica de selección y verificación en funciones individuales, lo que hace el código más fácil de entender y mantener. La función generateWinningSet permite generar un nuevo conjunto ganador cada vez que cambia la selección, haciendo que la aplicación sea dinámica y manteniendo la lógica simple. Además, pasar el estado y las funciones necesarias al componente Lottery hace que App sea modular y reutilizable.


### Codigo de index.css
```tsx
/* Estilo para los botones con borde visible y fondo transparente */
.boton-transparente {
  background-color: transparent; /* Fondo transparente */
  border: 2px solid black; /* Bordes negros */
  padding: 10px 20px; /* Espaciado interno para hacer el botón más grande */
  cursor: pointer; /* Cambia el cursor a una mano para indicar que es clickeable */
  font-weight: bold; /* Texto en negrita */
  color: black; /* Color del texto */
  transition: background-color 0.3s ease; /* Transición suave para el cambio de fondo */
}

/* Estilo de hover para los botones */
.boton-transparente:hover {
  background-color: rgba(0, 0, 0, 0.1); /* Fondo ligero al pasar el mouse */
}

```
**Exaplicacion:**
**¿Qué hace este fragmento de código?**

Este código define una clase .boton-transparente para estilizar botones con un fondo transparente y un borde visible. También incluye un efecto de transición en el fondo al hacer hover.

**¿Cómo cumple con el requisito de la habilidad?**

Estilo Visual y Claridad: La clase .boton-transparente crea un botón que es visualmente atractivo y fácil de identificar gracias al borde negro y la transición de fondo al hacer hover.
Feedback Visual: El color de fondo cambia sutilmente al pasar el mouse, dándole al usuario una pista visual clara de que el botón es interactivo.
Facilita la Usabilidad: La transición suave y el estilo del cursor mejoran la experiencia del usuario al hacer que el botón se vea moderno e intuitivo.
**¿Por qué es la mejor forma de implementarlo?**

Esta estructura de CSS es modular y clara, separando los estados de normal y hover en estilos específicos. Esto permite ajustar los colores y los efectos sin afectar la funcionalidad general del botón. Además, el uso de transiciones y efectos de hover ayuda a mejorar la experiencia de usuario, haciéndola más amigable y profesional.

### HABILIDADES

**1. Escribir tu primer componente de React** 
El componente App y el componente NumberSetsSelection son ejemplos de componentes básicos escritos en React, donde se permite al usuario seleccionar números y ver el resultado del sorteo.

**2. Crear archivos con múltiples componentes**
Se crearon varios componentes: App, NumberSetsSelection, y se sugirieron otros como WinningNumbers y Lottery para separar las funcionalidades.

**3. Añadir marcado a JavaScript con JSX**
Todo el código dentro de los componentes está escrito con JSX, que permite la mezcla de HTML y JavaScript. Se usan expresiones como {} para insertar variables y resultados dentro del marcado.

**4. Añadir llaves con JSX**
En JSX, se usan las llaves {} para insertar expresiones de JavaScript dentro del HTML, como los conjuntos de números y los resultados.

**5. Configurar componentes con props**
Los props se usan para pasar información entre los componentes. Por ejemplo, el componente NumberSetsSelection recibe el conjunto de números (numberSets) y una función para manejar la selección (handleSelectSet).

**6. Renderizar condicionalmente**
Se renderizan mensajes condicionales usando el valor de isWinner. Si el usuario gana, se muestra un mensaje; si no, otro mensaje.

**7. Renderizar múltiples componentes a la vez**
Se usa .map() para renderizar dinámicamente los botones correspondientes a cada conjunto de números disponibles.

**8. Mantener componentes puros**
Los componentes de selección de números no modifican directamente el estado. En cambio, el estado se maneja en el componente App y se pasa a los componentes secundarios mediante props.

**9. Entender la UI como árboles**
La estructura de los componentes está organizada de forma jerárquica. El componente principal (App) incluye otros componentes como NumberSetsSelection y los mensajes de resultados.

**10. Controlar eventos del usuario**
Se manejan eventos de usuario como la selección de números y el clic en el botón para comprobar si el usuario ha ganado.

**11. Gestionar el estado**
El estado de los números seleccionados, el conjunto ganador y el resultado del sorteo (si el usuario ganó o no) se gestionan usando el hook useState.

**12. Actualizar un array en el estado**
El estado de winningSet y selectedSetIndex se actualiza correctamente para reflejar el conjunto ganador y el conjunto seleccionado por el usuario.

**13. Levantar el estado**
El estado de los números seleccionados por el usuario y los resultados del sorteo se levantan al componente principal (App), y se pasan a los componentes secundarios como props.

**14. Efectos opcionales**
Se usa useEffect para generar aleatoriamente el conjunto ganador cuando se monta el componente, cumpliendo con el requisito de usar efectos para manejar el sorteo.
 
