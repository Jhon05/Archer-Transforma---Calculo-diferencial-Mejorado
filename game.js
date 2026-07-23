const worlds = [
  { name: "Bosque del Dominio", topic: "Nivel fácil · preguntas 1 a 8 del banco", goal: 1, theme: "forest" },
  { name: "Pradera de las Transformaciones", topic: "Progresión de nivel fácil a intermedio · preguntas 9 a 16 del banco", goal: 1.5, theme: "meadow" },
  { name: "Cañón de las Composiciones", topic: "Nivel intermedio · preguntas 17 a 24 del banco", goal: 1.5, theme: "canyon" },
  { name: "Montañas de la Interpretación", topic: "Progresión de nivel intermedio a difícil · preguntas 25 a 32 del banco", goal: 2, theme: "mountain" },
  { name: "Costa de las Gráficas", topic: "Nivel difícil · preguntas 33 a 40 del banco", goal: 2, theme: "coast" }
];

const questions = [
  {
    "num": 1,
    "world": 1,
    "difficulty": "Fácil",
    "type": "Opción múltiple",
    "title": "Pregunta 1",
    "prompt": "La función \\(h(x)=\\dfrac{1}{x+2}\\) se compara con la función base \\(f(x)=\\dfrac{1}{x}\\). ¿Cuál afirmación describe correctamente sus asíntotas?",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción B.",
    "options": [
      "La asíntota vertical de \\(h\\) es \\(x=2\\) y la horizontal es \\(y=0\\).",
      "La asíntota vertical de \\(h\\) es \\(x=-2\\) y la horizontal es \\(y=0\\).",
      "La asíntota vertical de \\(h\\) es \\(x=0\\) y la horizontal es \\(y=-2\\).",
      "La asíntota vertical de \\(h\\) es \\(x=0\\) y la horizontal es \\(y=2\\)."
    ],
    "answer": 1
  },
  {
    "num": 2,
    "world": 1,
    "difficulty": "Fácil",
    "type": "Opción múltiple",
    "title": "Pregunta 2",
    "prompt": "La gráfica de \\(h(x)=(x-1)^3\\) se obtiene a partir de \\(f(x)=x^3\\). El punto de inflexión de \\(h\\) es:",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción C.",
    "options": [
      "\\((-1,0)\\)",
      "\\((0,1)\\)",
      "\\((1,0)\\)",
      "\\((0,-1)\\)"
    ],
    "answer": 2
  },
  {
    "num": 3,
    "world": 1,
    "difficulty": "Fácil",
    "type": "Opción múltiple",
    "title": "Pregunta 3",
    "prompt": "Considere las funciones \\(f(x)=\\sqrt[3]{x}\\), \\(h(x)=-\\sqrt[3]{x}\\). Si el punto \\((8,2)\\) pertenece a la gráfica de \\(f\\), ¿cuál punto pertenece a la gráfica de \\(h\\)?",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción B.",
    "options": [
      "\\((-8,2)\\)",
      "\\((8,-2)\\)",
      "\\((-8,-2)\\)",
      "\\((2,-8)\\)"
    ],
    "answer": 1
  },
  {
    "num": 4,
    "world": 1,
    "difficulty": "Fácil",
    "type": "Opción múltiple",
    "title": "Pregunta 4",
    "prompt": "La expresión \\(y=x^2+6x+4\\) puede escribirse como \\(y=(x+3)^2-5\\). ¿Cuál información gráfica se obtiene directamente de esta segunda representación?",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción B.",
    "options": [
      "El vértice es \\((3,-5)\\).",
      "El vértice es \\((-3,-5)\\).",
      "El vértice es \\((-5,-3)\\).",
      "El vértice es \\((3,5)\\)."
    ],
    "answer": 1
  },
  {
    "num": 5,
    "world": 1,
    "difficulty": "Fácil",
    "type": "Opción múltiple",
    "title": "Pregunta 5",
    "prompt": "La gráfica de \\(h(x)=\\sqrt{x-2}-1\\) comienza en el punto:",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción B.",
    "options": [
      "\\((-2,-1)\\)",
      "\\((2,-1)\\)",
      "\\((-1,2)\\)",
      "\\((1,-2)\\)"
    ],
    "answer": 1
  },
  {
    "num": 6,
    "world": 1,
    "difficulty": "Fácil",
    "type": "Opción múltiple",
    "title": "Pregunta 6",
    "prompt": "¿Cuál es el dominio de la función \\(h(x)=\\sqrt{x-2}-1\\)?",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción B.",
    "options": [
      "\\(( -\\infty,2]\\)",
      "\\([2,\\infty)\\)",
      "\\([-1,\\infty)\\)",
      "\\(( -\\infty,-1]\\)"
    ],
    "answer": 1
  },
  {
    "num": 7,
    "world": 1,
    "difficulty": "Fácil",
    "type": "Opción múltiple",
    "title": "Pregunta 7",
    "prompt": "Para la función \\(h(x)=4\\sin(3x)\\), la amplitud y el período son, respectivamente:",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción C.",
    "options": [
      "\\(4\\) y \\(6\\pi\\).",
      "\\(3\\) y \\(8\\pi\\).",
      "\\(4\\) y \\(\\dfrac{2\\pi}{3}\\).",
      "\\(\\dfrac14\\) y \\(3\\pi\\)."
    ],
    "answer": 2
  },
  {
    "num": 8,
    "world": 1,
    "difficulty": "Fácil",
    "type": "Opción múltiple",
    "title": "Pregunta 8",
    "prompt": "La función \\(f\\) contiene el punto \\((2,5)\\). ¿Qué punto debe aparecer en la gráfica de \\(h(x)=f(x-4)\\)?",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción B.",
    "options": [
      "\\((-2,5)\\)",
      "\\((6,5)\\)",
      "\\((2,1)\\)",
      "\\((2,9)\\)"
    ],
    "answer": 1
  },
  {
    "num": 9,
    "world": 2,
    "difficulty": "Fácil",
    "type": "Opción múltiple",
    "title": "Pregunta 9",
    "prompt": "Si el rango de \\(f\\) es \\([-2,4]\\), ¿cuál es el rango de \\(h(x)=f(x)+3\\)?",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción B.",
    "options": [
      "\\([-5,1]\\)",
      "\\([1,7]\\)",
      "\\([-2,7]\\)",
      "\\([3,12]\\)"
    ],
    "answer": 1
  },
  {
    "num": 10,
    "world": 2,
    "difficulty": "Fácil",
    "type": "Opción múltiple",
    "title": "Pregunta 10",
    "prompt": "La gráfica de \\(f\\) contiene los puntos \\((-2,8)\\), \\((0,4)\\), \\((2,-4)\\). ¿Cuáles son los puntos correspondientes en la gráfica de \\(h(x)=\\dfrac14 f(x)\\)?",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción A.",
    "options": [
      "\\((-2,2),(0,1),(2,-1)\\)",
      "\\((-8,8),(0,4),(8,-4)\\)",
      "\\((-\\tfrac12,8),(0,4),(\\tfrac12,-4)\\)",
      "\\((-2,12),(0,8),(2,0)\\)"
    ],
    "answer": 0
  },
  {
    "num": 11,
    "world": 2,
    "difficulty": "Fácil",
    "type": "Opción múltiple",
    "title": "Pregunta 11",
    "prompt": "Si \\((1,3)\\) pertenece a la gráfica de \\(f\\), ¿qué punto pertenece a la gráfica de \\(h(x)=-f(x+4)\\)?",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción B.",
    "options": [
      "\\((5,-3)\\)",
      "\\((-3,-3)\\)",
      "\\((-3,3)\\)",
      "\\((5,3)\\)"
    ],
    "answer": 1
  },
  {
    "num": 12,
    "world": 2,
    "difficulty": "Fácil",
    "type": "Opción múltiple",
    "title": "Pregunta 12",
    "prompt": "La gráfica de \\(f\\) contiene el punto \\((-2,4)\\). ¿Cuál punto pertenece a la gráfica de \\(h(x)=2f(x+6)\\)?",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción A.",
    "options": [
      "\\((-8,8)\\)",
      "\\((4,8)\\)",
      "\\((-8,2)\\)",
      "\\((4,2)\\)"
    ],
    "answer": 0
  },
  {
    "num": 13,
    "world": 2,
    "difficulty": "Fácil",
    "type": "Opción múltiple",
    "title": "Pregunta 13",
    "prompt": "Si \\(f(4)=0\\), ¿para cuál valor de \\(x\\) se cumple que \\(f(8x)=0\\)?",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción C.",
    "options": [
      "\\(x=32\\)",
      "\\(x=12\\)",
      "\\(x=\\dfrac12\\)",
      "\\(x=\\dfrac18\\)"
    ],
    "answer": 2
  },
  {
    "num": 14,
    "world": 2,
    "difficulty": "Fácil",
    "type": "Opción múltiple",
    "title": "Pregunta 14",
    "prompt": "La gráfica de \\(f\\) contiene el punto \\((2,3)\\). ¿Cuál punto pertenece a la gráfica de \\(h(x)=8f\\!\\left(\\dfrac{x}{8}\\right)\\)?",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción B.",
    "options": [
      "\\((\\tfrac14,24)\\)",
      "\\((16,24)\\)",
      "\\((16,\\tfrac38)\\)",
      "\\((10,11)\\)"
    ],
    "answer": 1
  },
  {
    "num": 15,
    "world": 2,
    "difficulty": "Intermedio",
    "type": "Opción múltiple",
    "title": "Pregunta 15",
    "prompt": "La siguiente tabla presenta algunos valores de \\(f\\): \\(x:-2,-1,0,1,2\\) y \\(f(x):3,1,0,1,3\\). Si \\(h(x)=f(x-2)+1\\), ¿cuál es el valor de \\(h(3)\\)?",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción B.",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": 1
  },
  {
    "num": 16,
    "world": 2,
    "difficulty": "Intermedio",
    "type": "Opción múltiple",
    "title": "Pregunta 16",
    "prompt": "Sean \\(f(x)=x^2-1\\), \\(g(x)=2x+1\\). ¿Cuál expresión representa \\((f\\circ g)(x)\\)?",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción B.",
    "options": [
      "\\(2x^2\\)",
      "\\((2x+1)^2-1\\)",
      "\\(2(x^2-1)+1\\)",
      "\\(x^2+2x\\)"
    ],
    "answer": 1
  },
  {
    "num": 17,
    "world": 3,
    "difficulty": "Intermedio",
    "type": "Opción múltiple",
    "title": "Pregunta 17",
    "prompt": "Con las funciones de la pregunta anterior, ¿cuál afirmación es correcta?",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción B.",
    "options": [
      "\\(f\\circ g\\) y \\(g\\circ f\\) representan siempre la misma función.",
      "\\((f\\circ g)(x)=4x^2+4x\\).",
      "\\((g\\circ f)(x)=4x^2+4x\\).",
      "Ambas composiciones son funciones lineales."
    ],
    "answer": 1
  },
  {
    "num": 18,
    "world": 3,
    "difficulty": "Intermedio",
    "type": "Opción múltiple",
    "title": "Pregunta 18",
    "prompt": "Sean \\(f(x)=x-2\\), \\(g(x)=x^2+3x+4\\). ¿Cuál expresión representa el proceso de aplicar primero \\(f\\) y después \\(g\\)?",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción B.",
    "options": [
      "\\(f(g(x))\\)",
      "\\(g(f(x))\\)",
      "\\(f(x)+g(x)\\)",
      "\\(f(x)g(x)\\)"
    ],
    "answer": 1
  },
  {
    "num": 19,
    "world": 3,
    "difficulty": "Intermedio",
    "type": "Opción múltiple",
    "title": "Pregunta 19",
    "prompt": "Para las funciones \\(f(x)=x-2\\), \\(g(x)=x^2+3x+4\\), ¿cuál es el valor de \\((g\\circ f)(3)\\)?",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción C.",
    "options": [
      "2",
      "4",
      "8",
      "12"
    ],
    "answer": 2
  },
  {
    "num": 20,
    "world": 3,
    "difficulty": "Intermedio",
    "type": "Opción múltiple",
    "title": "Pregunta 20",
    "prompt": "Sean \\(f(x)=1-3x\\), \\(g(x)=\\cos x\\). ¿Cuál expresión representa \\((f\\circ g)(x)\\)?",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción B.",
    "options": [
      "\\(\\cos(1-3x)\\)",
      "\\(1-3\\cos x\\)",
      "\\(1-\\cos(3x)\\)",
      "\\(3\\cos(1-x)\\)"
    ],
    "answer": 1
  },
  {
    "num": 21,
    "world": 3,
    "difficulty": "Intermedio",
    "type": "Opción múltiple",
    "title": "Pregunta 21",
    "prompt": "Para las mismas funciones, \\((g\\circ f)(x)=\\cos(1-3x)\\). ¿Cuál es el período de esta función?",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción C.",
    "options": [
      "\\(2\\pi\\)",
      "\\(6\\pi\\)",
      "\\(\\dfrac{2\\pi}{3}\\)",
      "\\(\\dfrac{\\pi}{3}\\)"
    ],
    "answer": 2
  },
  {
    "num": 22,
    "world": 3,
    "difficulty": "Intermedio",
    "type": "Opción múltiple",
    "title": "Pregunta 22",
    "prompt": "Sean \\(f(x)=\\sqrt{x}\\), \\(g(x)=\\sqrt[3]{1-x}\\). ¿Cuál expresión representa \\((f\\circ g)(x)\\)?",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción B.",
    "options": [
      "\\(\\sqrt[3]{1-\\sqrt{x}}\\)",
      "\\(\\sqrt{\\sqrt[3]{1-x}}\\)",
      "\\(\\sqrt[3]{\\sqrt{1-x}}\\)",
      "\\(\\dfrac{\\sqrt{1-x}}{3}\\)"
    ],
    "answer": 1
  },
  {
    "num": 23,
    "world": 3,
    "difficulty": "Intermedio",
    "type": "Opción múltiple",
    "title": "Pregunta 23",
    "prompt": "El dominio real de \\((f\\circ g)(x)=\\sqrt{\\sqrt[3]{1-x}}\\) es:",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción B.",
    "options": [
      "\\([1,\\infty)\\)",
      "\\(( -\\infty,1]\\)",
      "\\([0,\\infty)\\)",
      "\\(\\mathbb{R}\\)"
    ],
    "answer": 1
  },
  {
    "num": 24,
    "world": 3,
    "difficulty": "Intermedio",
    "type": "Opción múltiple",
    "title": "Pregunta 24",
    "prompt": "Con \\(f(x)=\\sqrt{x}\\), \\(g(x)=\\sqrt[3]{1-x}\\), la composición en el orden contrario, \\((g\\circ f)(x)=\\sqrt[3]{1-\\sqrt{x}}\\), tiene dominio:",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción C.",
    "options": [
      "\\(( -\\infty,1]\\)",
      "\\([0,1]\\)",
      "\\([0,\\infty)\\)",
      "\\(\\mathbb{R}\\)"
    ],
    "answer": 2
  },
  {
    "num": 25,
    "world": 4,
    "difficulty": "Intermedio",
    "type": "Opción múltiple",
    "title": "Pregunta 25",
    "prompt": "Sean \\(f(x)=x+\\dfrac1x\\), \\(g(x)=\\dfrac{x+1}{x+2}\\). ¿Cuál representación corresponde a \\(f(g(x))\\), antes de simplificar?",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción A.",
    "options": [
      "\\(\\dfrac{x+1}{x+2}+\\dfrac{x+2}{x+1}\\)",
      "\\(x+\\dfrac{x+1}{x+2}\\)",
      "\\(x+\\dfrac{1}{\\frac{x+1}{x+2}}\\)",
      "\\(\\dfrac{x+1}{x+2}+\\dfrac1x\\)"
    ],
    "answer": 0
  },
  {
    "num": 26,
    "world": 4,
    "difficulty": "Intermedio",
    "type": "Opción múltiple",
    "title": "Pregunta 26",
    "prompt": "Para la composición de la pregunta anterior, los valores \\(x=-2\\) y \\(x=-1\\) se excluyen porque:",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción B.",
    "options": [
      "En ambos casos el valor final de la función es negativo.",
      "Uno hace que \\(g\\) no esté definida y el otro hace que \\(g(x)=0\\), valor no admitido por \\(f\\).",
      "Ambos hacen que \\(f(x)=0\\).",
      "La composición solamente admite números positivos."
    ],
    "answer": 1
  },
  {
    "num": 27,
    "world": 4,
    "difficulty": "Intermedio",
    "type": "Opción múltiple",
    "title": "Pregunta 27",
    "prompt": "La tabla muestra valores de dos funciones: \\(x:-2,-1,0,1,2\\), \\(f(x):1,0,2,-1,3\\), \\(g(x):0,2,-2,1,-1\\). ¿Cuál es el valor de \\((f\\circ g)(1)\\)?",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción A.",
    "options": [
      "-1",
      "0",
      "1",
      "3"
    ],
    "answer": 0
  },
  {
    "num": 28,
    "world": 4,
    "difficulty": "Intermedio",
    "type": "Opción múltiple",
    "title": "Pregunta 28",
    "prompt": "Usando la tabla anterior, ¿cuál es el valor de \\((g\\circ f)(1)\\)?",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción C.",
    "options": [
      "0",
      "1",
      "2",
      "-2"
    ],
    "answer": 2
  },
  {
    "num": 29,
    "world": 4,
    "difficulty": "Intermedio",
    "type": "Opción múltiple",
    "title": "Pregunta 29",
    "prompt": "Una máquina recibe un número \\(x\\), primero lo multiplica por \\(1{,}19\\) y después resta \\(20\\,000\\). Si \\(g(x)=1{,}19x\\) y \\(f(x)=x-20\\,000\\), ¿cuál representación corresponde al proceso completo?",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción B.",
    "options": [
      "\\(g(f(x))\\)",
      "\\(f(g(x))\\)",
      "\\(f(x)+g(x)\\)",
      "\\(f(x)g(x)\\)"
    ],
    "answer": 1
  },
  {
    "num": 30,
    "world": 4,
    "difficulty": "Intermedio",
    "type": "Opción múltiple",
    "title": "Pregunta 30",
    "prompt": "Las funciones \\(f(x)=3x-2\\) y \\(g(x)=\\dfrac{x+2}{3}\\) satisfacen \\(f(g(x))=x\\) y \\(g(f(x))=x\\). ¿Qué interpretación es correcta?",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción C.",
    "options": [
      "Las funciones tienen la misma gráfica.",
      "Las funciones son periódicas.",
      "Cada función deshace el efecto de la otra.",
      "Las funciones tienen necesariamente el mismo valor para cada \\(x\\)."
    ],
    "answer": 2
  },
  {
    "num": 31,
    "world": 4,
    "difficulty": "Difícil",
    "type": "Lectura de gráficas",
    "title": "Pregunta 31",
    "prompt": "En la gráfica se representan la función base \\(f\\) y una función transformada \\(h\\). ¿Cuál expresión corresponde a \\(h(x)\\)?",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción B.",
    "options": [
      "\\(h(x)=(x+2)^2-1\\)",
      "\\(h(x)=(x-2)^2-1\\)",
      "\\(h(x)=(x-1)^2-2\\)",
      "\\(h(x)=x^2+2\\)"
    ],
    "answer": 1,
    "image": "banco/q31.png"
  },
  {
    "num": 32,
    "world": 4,
    "difficulty": "Difícil",
    "type": "Lectura de gráficas",
    "title": "Pregunta 32",
    "prompt": "Observe las gráficas de \\(f\\) y \\(h\\). ¿Cuál transformación permite obtener \\(h\\) a partir de \\(f\\)?",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción A.",
    "options": [
      "Reflexionar respecto al eje x y trasladar dos unidades hacia arriba.",
      "Reflexionar respecto al eje y y trasladar dos unidades hacia abajo.",
      "Trasladar dos unidades hacia la derecha.",
      "Comprimir horizontalmente y trasladar dos unidades hacia arriba."
    ],
    "answer": 0,
    "image": "banco/q32.png"
  },
  {
    "num": 33,
    "world": 5,
    "difficulty": "Difícil",
    "type": "Lectura de gráficas",
    "title": "Pregunta 33",
    "prompt": "La gráfica azul representa \\(f(x)=\\sqrt{x}\\), y la gráfica roja representa una transformación \\(h\\). ¿Cuál es el punto inicial de la gráfica de \\(h\\)?",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción B.",
    "options": [
      "\\((1,2)\\)",
      "\\((-1,2)\\)",
      "\\((-2,1)\\)",
      "\\((2,-1)\\)"
    ],
    "answer": 1,
    "image": "banco/q33.png"
  },
  {
    "num": 34,
    "world": 5,
    "difficulty": "Difícil",
    "type": "Lectura de gráficas",
    "title": "Pregunta 34",
    "prompt": "Las gráficas representan dos funciones sinusoidales. De acuerdo con la gráfica, la amplitud de \\(h\\) es:",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción C.",
    "options": [
      "\\(\\dfrac12\\)",
      "1",
      "2",
      "\\(2\\pi\\)"
    ],
    "answer": 2,
    "image": "banco/q34.png"
  },
  {
    "num": 35,
    "world": 5,
    "difficulty": "Difícil",
    "type": "Lectura de gráficas",
    "title": "Pregunta 35",
    "prompt": "La gráfica roja es una transformación de la función \\(f(x)=\\dfrac1x\\). ¿Cuál es la asíntota vertical de \\(h\\)?",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción C.",
    "options": [
      "\\(x=-3\\)",
      "\\(x=0\\)",
      "\\(x=3\\)",
      "\\(y=3\\)"
    ],
    "answer": 2,
    "image": "banco/q35.png"
  },
  {
    "num": 36,
    "world": 5,
    "difficulty": "Difícil",
    "type": "Lectura de gráficas",
    "title": "Pregunta 36",
    "prompt": "La gráfica de \\(f\\) contiene, entre otros, el punto \\((1,2)\\). Se define \\(h(x)=f(x-2)+1\\). ¿En qué punto se transforma específicamente el punto \\((1,2)\\)?",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción B.",
    "options": [
      "\\((-1,3)\\)",
      "\\((3,3)\\)",
      "\\((1,5)\\)",
      "\\((3,1)\\)"
    ],
    "answer": 1,
    "image": "banco/q36.png"
  },
  {
    "num": 37,
    "world": 5,
    "difficulty": "Difícil",
    "type": "Lectura de gráficas",
    "title": "Pregunta 37",
    "prompt": "Las siguientes rectas representan las funciones \\(f\\) y \\(g\\). Utilizando la gráfica, determine el valor de \\((f\\circ g)(3)\\).",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción C.",
    "options": [
      "1",
      "2",
      "3",
      "7"
    ],
    "answer": 2,
    "image": "banco/q37.png"
  },
  {
    "num": 38,
    "world": 5,
    "difficulty": "Difícil",
    "type": "Lectura de gráficas",
    "title": "Pregunta 38",
    "prompt": "Las gráficas representan \\(f(x)=x^2\\) y \\(g(x)=x-1\\). ¿Cuál es el valor de \\((g\\circ f)(2)\\)?",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción C.",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": 2,
    "image": "banco/q38.png"
  },
  {
    "num": 39,
    "world": 5,
    "difficulty": "Difícil",
    "type": "Lectura de gráficas",
    "title": "Pregunta 39",
    "prompt": "La gráfica representa una función \\(f\\). A partir de la gráfica se observa que el valor mínimo de \\(f\\) es \\(-2\\) y el valor máximo es \\(4\\). Si \\(h(x)=-f(x)+1\\), ¿cuál es el rango de \\(h\\)?",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción A.",
    "options": [
      "\\([-3,3]\\)",
      "\\([-5,1]\\)",
      "\\([-3,5]\\)",
      "\\([-1,5]\\)"
    ],
    "answer": 0,
    "image": "banco/q39.png"
  },
  {
    "num": 40,
    "world": 5,
    "difficulty": "Difícil",
    "type": "Lectura de gráficas",
    "title": "Pregunta 40",
    "prompt": "Las gráficas muestran una función \\(f\\) y una transformación \\(h\\). ¿Cuál relación describe correctamente la gráfica roja?",
    "hint": "",
    "feedback": "La respuesta correcta, según la clave del banco de preguntas, es la opción B.",
    "options": [
      "\\(h(x)=f(x-2)\\)",
      "\\(h(x)=f(2x)\\)",
      "\\(h(x)=2f(x)\\)",
      "\\(h(x)=f\\!\\left(\\dfrac{x}{2}\\right)\\)"
    ],
    "answer": 1,
    "image": "banco/q40.png"
  }
];

const $ = s => document.querySelector(s);
const canvas = $("#gameCanvas");
if (!canvas) throw new Error("No se encontró el lienzo principal #gameCanvas.");
const ctx = canvas.getContext("2d");
const g = 9.8;
const ACTIVE_AVATAR = "explorador";
const ANGLE_MIN = -45;
const ANGLE_MAX = 70;
const ANGLE_REFERENCE_ROWS = [-45,-35,-25,-15,-5,5,15,25,35,45,55,65,70];
const targetColors = ["#ff4d6d", "#ff8c42", "#ffd166", "#06d6a0", "#4cc9f0", "#7b2ff7", "#f72585", "#2dd4bf"];
const targetRadii = [30, 36, 42, 48, 54, 60];

const state = { started:false, world:0, totalScore:0, arrows:80, shotPoints:0, worldFails:0, wrongAttempts:0, correctAnswers:0, angle:0, speed:0, avatar:ACTIVE_AVATAR, target:null, animating:false, answered:false, arrowLoaded:false, playerName:"Equipo 1", groupName:"Cálculo diferencial", startedAt:null, endedAt:null, sessionSeconds:0, timerId:null, shots:[], questionHistory:[], events:[], questionQueues:{}, usedQuestions:new Set(), currentOptionOrder:[], worldSequences:{}, sequenceStep:0, worldScore:0, challengeFails:0, challengeWrong:0, currentQuestion:null, security:{hidden:0,fullscreen:0,blur:0,rightClick:0,copy:0,shortcut:0,total:0}, securityPenalty:0, securityEvents:[], securityPaused:false, securityDisqualified:false, securityLastAt:0, fullscreenRequired:true, fullscreenRecoveryRequired:false, fullscreenRecoveryReason:"", securityGateRequired:false, lastSecurityReason:"", quizAnnulled:false, annulReason:"", annulledAt:null, lastSecurityAttemptAt:0, ignoreSecurityUntil:0, shotVisualProgress:0, finalReportDeliveryStarted:false, finalReportDownloaded:false };
const els = {
  startScreen:$("#startScreen"), gameShell:$("#gameShell"), accessCode:$("#accessCode"), accessError:$("#accessError"),
  worldTitle:$("#worldTitle"), worldLabel:$("#worldLabel"), scoreLabel:$("#scoreLabel"), shotProgressLabel:$("#shotProgressLabel"), shotGoalLabel:$("#shotGoalLabel"), arrowsLabel:$("#arrowsLabel"), worldGradeLabel:$("#worldGradeLabel"), distanceLabel:$("#distanceLabel"), heightLabel:$("#heightLabel"), radiusLabel:$("#radiusLabel"),
  angle:$("#angle"), speed:$("#speed"), angleValue:$("#angleValue"), speedValue:$("#speedValue"), message:$("#messageBox"),
  announcement:$("#worldAnnouncement"), announceTitle:$("#announceTitle"), announceText:$("#announceText"),
  dialog:$("#questionDialog"), form:$("#questionForm"), qType:$("#questionType"), qTitle:$("#questionTitle"), qCounter:$("#questionCounter"), qValue:$("#questionValue"), sequenceProgress:$("#sequenceProgress"), qBody:$("#questionBody"), qVisualCanvas:$("#questionVisualCanvas"), qVisualImage:$("#questionVisualImage"), visualMathTitle:$("#visualMathTitle"), visualCaption:$("#visualCaption"), hintBox:$("#hintBox"), feedback:$("#feedbackBox"), btnHint:$("#btnHint"), btnToggleFeedback:$("#btnToggleFeedback"), btnSubmit:$("#btnSubmitAnswer"), btnContinue:$("#btnContinue"),
  playerName:$("#playerName"), groupName:$("#groupName"), playerInfo:$("#playerInfo"), selectedAvatarTop:$("#selectedAvatarTop"), sessionTime:$("#sessionTime"), correctInfo:$("#correctInfo"), wrongInfo:$("#wrongInfo"), blockInfo:$("#blockInfo"), reportDialog:$("#reportDialog"), reportContent:$("#reportContent")
};

function escapeHTML(value){return String(value ?? "").replace(/[&<>'"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch]));}
function fmtDuration(total){total=Math.max(0,Math.floor(total||0));const m=String(Math.floor(total/60)).padStart(2,'0');const sec=String(total%60).padStart(2,'0');return `${m}:${sec}`;}
function tickClock(){const now=new Date();const text=now.toLocaleTimeString('es-CO',{hour:'2-digit',minute:'2-digit',second:'2-digit'});const el=document.querySelector('#alwaysClockText');if(el)el.textContent=text;}
setInterval(tickClock,1000);tickClock();
const avatarPortraitMap = {
  explorador:"avframes/explorador/preview.png"
};
const avatarLabels = {
  explorador:"Arquero élfico"
};
const avatarSceneMap = {...avatarPortraitMap};
const avatarImages = {};
const aimAngleValues = [-60,-50,-40,-30,-20,-10,0,10,20,30,40,50,60,70];
const shotRowAngles = [-45,-35,-25,-15,-5,5,15,25,35,45,55,65,70];
const avatarSpriteCatalog = {
  explorador:{
    portrait:avatarPortraitMap.explorador,
    x:8,
    yOffset:4,
    rowAngles:ANGLE_REFERENCE_ROWS,
    rows:Object.fromEntries(ANGLE_REFERENCE_ROWS.map(a=>[String(a),Array.from({length:10},(_,i)=>`avframes/explorador_sheets/row_${a<0?`n${Math.abs(a)}`:`p${a}`}.png::${i}`)]))
  }
};
const avatarSpriteImages = {};
const fantasyBackgroundPaths = [
  "bg_progression/phase_01.png",
  "bg_progression/phase_02.png",
  "bg_progression/phase_03.png",
  "bg_progression/phase_04.png",
  "bg_progression/phase_05.png",
  "bg_progression/phase_06.png",
  "bg_progression/phase_07.png",
  "bg_progression/phase_08.png",
  "bg_progression/phase_09.png",
  "bg_progression/phase_10.png"
];
const fantasyBackgroundImages = {};
const medievalTargetImagePath = "targets/target_medieval.png";
const medievalTargetImage = new Image();
let medievalTargetImageReady = false;
function preloadBackground(src){
  const img = new Image();
  img.onload = () => { fantasyBackgroundImages[src] = img; scheduleSceneDraw(); };
  img.src = src;
}
function loadFantasyBackgrounds(){ fantasyBackgroundPaths.forEach(preloadBackground); }
function loadMedievalTarget(){
  medievalTargetImage.onload = () => { medievalTargetImageReady = true; scheduleSceneDraw(); };
  medievalTargetImage.src = medievalTargetImagePath;
}
function allFantasyBackgroundsReady(){ return fantasyBackgroundPaths.every(p=>fantasyBackgroundImages[p]?.complete); }
function drawCoverImage(img, dx=0, dy=0){
  if(!img || !img.complete) return;
  const W=canvas.width, H=canvas.height;
  const iw=img.width||1, ih=img.height||1;
  const scale=Math.max((W+Math.abs(dx)*2)/iw,(H+Math.abs(dy)*2)/ih);
  const dw=iw*scale, dh=ih*scale;
  const x=(W-dw)/2 + dx;
  const y=(H-dh)/2 + dy;
  ctx.drawImage(img,x,y,dw,dh);
}

const avatarSpriteSourceImages = {};
const avatarSpriteSourceWaiters = {};
function parseSpriteRef(ref){
  const value=String(ref||"");
  const match=value.match(/^(.*)::(\d+)$/);
  if(!match) return {src:value,frameIndex:null,frameWidth:null,frameHeight:null};
  return {src:match[1],frameIndex:Number(match[2]),frameWidth:420,frameHeight:560};
}
function preloadSprite(ref){
  const meta=parseSpriteRef(ref);
  if(avatarSpriteSourceImages[meta.src]){
    avatarSpriteImages[ref]=avatarSpriteSourceImages[meta.src];
    return;
  }
  if(avatarSpriteSourceWaiters[meta.src]){
    avatarSpriteSourceWaiters[meta.src].push(ref);
    return;
  }
  avatarSpriteSourceWaiters[meta.src]=[ref];
  const img=new Image();
  img.onload=()=>{
    avatarSpriteSourceImages[meta.src]=img;
    (avatarSpriteSourceWaiters[meta.src]||[]).forEach(key=>{avatarSpriteImages[key]=img;});
    delete avatarSpriteSourceWaiters[meta.src];
    scheduleSceneDraw();
  };
  img.onerror=()=>{delete avatarSpriteSourceWaiters[meta.src];};
  img.src=meta.src;
}
function loadAvatarImages(){
  Object.entries(avatarSceneMap).forEach(([key,src])=>{
    const img = new Image();
    img.onload = () => { avatarImages[key] = img; if(state.avatar===key || key===ACTIVE_AVATAR) drawScene(); };
    img.src = src;
  });
  const allSpritePaths = new Set();
  Object.values(avatarSpriteCatalog).forEach(cfg=>{
    (cfg.prep||[]).forEach(p=>allSpritePaths.add(p));
    (cfg.follow||[]).forEach(p=>allSpritePaths.add(p));
    (cfg.aim||[]).forEach(item=>allSpritePaths.add(item.path));
    Object.values(cfg.rows||{}).forEach(arr=>arr.forEach(p=>allSpritePaths.add(p)));
    if(cfg.portrait) allSpritePaths.add(cfg.portrait);
  });
  allSpritePaths.forEach(preloadSprite);
}
function closestItem(list, value){ return list.reduce((best,item)=>Math.abs(item.angle-value) < Math.abs(best.angle-value) ? item : best, list[0]); }
function closestNumber(list, value){ return list.reduce((best,item)=>Math.abs(item-value) < Math.abs(best-value) ? item : best, list[0]); }
function angleBounds(list, value){
  const sorted = [...list].sort((a,b)=>a-b);
  if(value <= sorted[0]) return {lower:sorted[0], upper:sorted[0], t:0};
  if(value >= sorted[sorted.length-1]) return {lower:sorted[sorted.length-1], upper:sorted[sorted.length-1], t:0};
  for(let i=0;i<sorted.length-1;i++){
    const a=sorted[i], b=sorted[i+1];
    if(value>=a && value<=b){
      const span = Math.max(1e-6, b-a);
      return {lower:a, upper:b, t:(value-a)/span};
    }
  }
  return {lower:sorted[0], upper:sorted[0], t:0};
}
function angleSweep(rowAngles, fromAngle, toAngle){
  const low=Math.min(fromAngle,toAngle), high=Math.max(fromAngle,toAngle);
  const between=(rowAngles||[]).filter(a=>a>=low && a<=high).sort((a,b)=>a-b);
  const sweep = between.length ? between : [closestNumber(rowAngles||[0], fromAngle), closestNumber(rowAngles||[0], toAngle)];
  return toAngle >= fromAngle ? sweep : [...sweep].reverse();
}
function getAvatarIdleSprite(avatarId=state.avatar, angle=state.angle){
  const cfg = avatarSpriteCatalog[avatarId] || avatarSpriteCatalog[ACTIVE_AVATAR];
  if(cfg.aim && cfg.aim.length) return closestItem(cfg.aim, angle).path;
  const nearest = closestNumber(cfg.rowAngles || [0], angle);
  const row = cfg.rows?.[String(nearest)] || [];
  return row[5] || row[4] || row[0] || cfg.portrait;
}
function getAvatarIdleBlend(avatarId=state.avatar, angle=state.angle){
  const cfg = avatarSpriteCatalog[avatarId] || avatarSpriteCatalog[ACTIVE_AVATAR];
  const bounds = angleBounds(cfg.rowAngles || [0], angle);
  const lowerRow = cfg.rows?.[String(bounds.lower)] || [];
  const upperRow = cfg.rows?.[String(bounds.upper)] || lowerRow;
  const lowerPath = lowerRow[5] || lowerRow[4] || lowerRow[0] || cfg.portrait;
  const upperPath = upperRow[5] || upperRow[4] || upperRow[0] || cfg.portrait;
  return {lower:lowerPath, upper:upperPath, t:bounds.t, lowerAngle:bounds.lower, upperAngle:bounds.upper};
}
function getAvatarSequenceForShot(avatarId=state.avatar, angle=state.angle){
  const cfg = avatarSpriteCatalog[avatarId] || avatarSpriteCatalog[ACTIVE_AVATAR];
  if(cfg.aim && cfg.aim.length){
    const target = closestItem(cfg.aim, angle);
    const targetIndex = Math.max(0, cfg.aim.findIndex(item=>item.path===target.path));
    const neutralIndex = Math.max(0, cfg.aim.findIndex(item=>item.angle===0));
    const step = targetIndex >= neutralIndex ? 1 : -1;
    const sweep = [];
    for(let i=neutralIndex; step>0 ? i<=targetIndex : i>=targetIndex; i+=step) sweep.push(cfg.aim[i].path);
    return {
      prep:(cfg.prep||[]).map(path=>({path,duration:9})),
      aim:sweep.flatMap((path,idx)=>[{path,duration:7},{path,duration:idx===sweep.length-1?10:6}]),
      hold:[{path:target.path,duration:10}],
      follow:(cfg.follow||[]).map(path=>({path,duration:7}))
    };
  }
  // Cada ángulo ideal posee una secuencia independiente completa. No se
  // concatenan filas de otros ángulos: así el arquero conserva escala, apoyo
  // y continuidad desde la preparación hasta el seguimiento.
  const nearest = closestNumber(cfg.rowAngles || [0], angle);
  const row = cfg.rows?.[String(nearest)] || [];
  return {
    prep:[0,1,2].map(i=>row[i]).filter(Boolean).map(path=>({path,duration:6})),
    aim:[3,4,5,6].map(i=>row[i]).filter(Boolean).map(path=>({path,duration:5})),
    hold:[{path:row[7] || row[6] || row[5] || row[0],duration:9}],
    follow:[row[8]||row[7]||row[6]||row[0], row[9]||row[8]||row[7]||row[0]].filter(Boolean).map(path=>({path,duration:7}))
  };
}
function playAvatarPreparation(avatarId, angle, onRelease){
  const seq = getAvatarSequenceForShot(avatarId, angle);
  const frames = [...(seq.prep||[]), ...(seq.aim||[]), ...(seq.hold||[])];
  if(!frames.length){ state.avatarFramePath = getAvatarIdleSprite(avatarId, angle); onRelease?.(seq); return; }
  state.avatarPrepActive = true;
  let i=0, tick=0;
  const step = ()=>{
    const frame = frames[Math.min(i, frames.length-1)];
    state.avatarFramePath = frame.path;
    const showLaunchArrow = i >= Math.max(0, frames.length-2);
    drawScene([],null,0,showLaunchArrow);
    tick++;
    if(tick >= (frame.duration || 8)){
      tick = 0;
      i++;
      if(i >= frames.length){ state.avatarPrepActive = false; state.avatarFramePath = frame.path; onRelease?.(seq); return; }
    }
    requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}
loadAvatarImages();
loadFantasyBackgrounds();
loadMedievalTarget();
updateAvatarPresentation();
function updateAvatarPresentation(){
  state.avatar = ACTIVE_AVATAR;
  if(els.selectedAvatarTop){
    els.selectedAvatarTop.src = avatarPortraitMap[ACTIVE_AVATAR];
    els.selectedAvatarTop.alt = `Avatar seleccionado: ${avatarLabels[ACTIVE_AVATAR]}`;
  }
}
function updateTeacherPanel(){
  if(els.playerInfo){
    const fullName=state.playerName || '-';
    els.playerInfo.textContent=fullName;
    els.playerInfo.title=fullName;
  }
  if(els.sessionTime) els.sessionTime.textContent=fmtDuration(state.sessionSeconds);
  if(els.correctInfo) els.correctInfo.textContent=state.correctAnswers||0;
  if(els.wrongInfo) els.wrongInfo.textContent=state.wrongAttempts||0;
  if(els.blockInfo){els.blockInfo.textContent=`${totalSecurity()}/5 · −${Number(state.securityPenalty||0).toFixed(2)}`;const box=els.blockInfo.closest?.(".security-stat");box?.classList.toggle("warning",totalSecurity()>0&&!state.quizAnnulled);box?.classList.toggle("danger",state.quizAnnulled||totalSecurity()>=4);}
  updateSecurityCounters();
  updateAvatarPresentation();
}
function startSessionTimer(){
  clearInterval(state.timerId);
  state.sessionSeconds=0;
  state.timerId=setInterval(()=>{if(state.started){state.sessionSeconds++;updateTeacherPanel();}},1000);
  updateTeacherPanel();
}
function stopSessionTimer(){clearInterval(state.timerId);state.timerId=null;updateTeacherPanel();}
function logEvent(kind, detail){state.events.push({time:new Date().toLocaleString('es-CO'),kind,detail});}
function shuffleArray(arr){
  const a=[...arr];
  for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}
  return a;
}
function shuffledIndices(n){return shuffleArray(Array.from({length:n},(_,i)=>i));}
function resetQuestionQueues(){state.questionQueues={};state.usedQuestions=new Set();state.worldSequences={};}
const microRoles=[
  {name:"Activación",description:"Reconoce el concepto esencial del mundo."},
  {name:"Comprensión",description:"Relaciona representaciones y propiedades."},
  {name:"Aplicación",description:"Usa el concepto en una situación concreta."},
  {name:"Integración",description:"Resuelve el reto de cierre del mundo."}
];
const worldQuestionPairs={
  1:[[1,2],[3,4],[5,6],[7,8]],
  2:[[9,10],[11,12],[13,14],[15,16]],
  3:[[17,18],[19,20],[21,22],[23,24]],
  4:[[25,26],[27,28],[29,30],[31,32]],
  5:[[33,34],[35,36],[37,38],[39,40]]
};
function prepareWorldSequences(){
  state.worldSequences={1:[1,3,5,7],2:[9,11,13,15],3:[17,19,21,23],4:[25,27,29,31],5:[33,35,37,39]};
}
function currentMicroRole(){return microRoles[state.sequenceStep]||microRoles[0];}
function renderSequenceProgress(){
  if(!els.sequenceProgress)return;
  els.sequenceProgress.innerHTML=microRoles.map((role,i)=>{
    const cls=i<state.sequenceStep?'done':i===state.sequenceStep?'active':'pending';
    return `<div class="sequence-step ${cls}"><span>${i<state.sequenceStep?'✓':i+1}</span><div><b>${role.name}</b><small>${i===state.sequenceStep?role.description:`Reto ${i+1} de 4`}</small></div></div>`;
  }).join('');
}
function selectedOptionText(q){
  if(q.mode==='number'||q.mode==='text'||q.mode==='textarea'){
    return String(new FormData(els.form).get('answerText')||'');
  }
  const raw=new FormData(els.form).get('answer');
  if(raw===null) return '';
  const displayIdx=Number(raw);
  const originalIdx=state.currentOptionOrder[displayIdx];
  return Number.isFinite(displayIdx) && q.options && Number.isFinite(originalIdx)
    ? `${String.fromCharCode(65+displayIdx)}. ${q.options[originalIdx]}`
    : '';
}
function correctAnswerText(q){
  if(q.mode==='number') return String(q.numericAnswer);
  if(q.mode==='text'||q.mode==='textarea') return (q.alternatives&&q.alternatives[0]) || (q.keywords||[]).join(', ');
  if(q.options && Number.isFinite(Number(q.answer))){
    const displayIdx=Math.max(0,state.currentOptionOrder.indexOf(Number(q.answer)));
    return `${String.fromCharCode(65+displayIdx)}. ${q.options[Number(q.answer)]}`;
  }
  return '';
}
function securityDefaults(){return {hidden:0,fullscreen:0,blur:0,rightClick:0,copy:0,paste:0,shortcut:0,screenshot:0,close:0,total:0};}
const SECURITY_CONFIG={graceIncidents:1,penaltyPerIncident:0.05,maxPenalty:0.15,disqualifyAt:5,duplicateWindowMs:1400,blurDelayMs:320};
const MAX_SECURITY_BLOCKS=SECURITY_CONFIG.disqualifyAt;
function ensureSecurityState(){
  state.security={...securityDefaults(),...(state.security||{})};
  state.security.total=Object.entries(state.security).filter(([k])=>k!=='total').reduce((sum,[,value])=>sum+Number(value||0),0);
  state.securityPenalty=Number(state.securityPenalty||0);
  state.securityEvents=Array.isArray(state.securityEvents)?state.securityEvents:[];
  return state.security;
}
function totalSecurity(){return ensureSecurityState().total||0;}
function finalScore(){return state.quizAnnulled?0:clamp(Number(state.totalScore||0)-Number(state.securityPenalty||0),0,5);}
function gameIsRunning(){return Boolean(state.started&&!state.quizAnnulled&&!els.gameShell?.classList.contains('hidden'));}
function questionDialogVisible(){return Boolean(els.dialog?.open);}
function isFullScreen(){return Boolean(document.fullscreenElement||document.webkitFullscreenElement);}
function fullscreenCapable(){const el=document.documentElement;return Boolean(document.fullscreenEnabled||document.webkitFullscreenEnabled||el.requestFullscreen||el.webkitRequestFullscreen);}
function securityEventLabel(type){return ({fullscreen:'Salida de pantalla completa',hidden:'Cambio de pestaña o minimización',blur:'Pérdida de foco de la ventana',rightClick:'Intento de clic derecho',copy:'Intento de copiar o cortar',paste:'Intento de pegar contenido',shortcut:'Atajo restringido',screenshot:'Intento de captura de pantalla',close:'Intento de cerrar, recargar o abandonar'})[type]||'Incidencia de integridad';}
function updateSecurityCounters(){
  const count=totalSecurity();
  const gateCounter=$("#securityBlockCounter");
  if(gateCounter) gateCounter.textContent=`Incidencia ${count} de ${MAX_SECURITY_BLOCKS} · Descuento ${Number(state.securityPenalty||0).toFixed(2)}`;
  if(els.blockInfo) els.blockInfo.textContent=`${count}/5 · −${Number(state.securityPenalty||0).toFixed(2)}`;
  const stat=$("#securityStatBox");
  if(stat){stat.classList.toggle('warning',count>0&&count<5);stat.classList.toggle('danger',count>=5||state.quizAnnulled);}
}
async function requestFullScreen(){
  const el=document.documentElement;
  try{if(!isFullScreen()){if(el.requestFullscreen)await el.requestFullscreen({navigationUI:'hide'});else if(el.webkitRequestFullscreen)await el.webkitRequestFullscreen();}}
  catch(_e){state.fullscreenRecoveryRequired=true;state.fullscreenRecoveryReason='El navegador bloqueó la pantalla completa. Autorízala para continuar.';}
  setTimeout(checkFullscreenState,100);
  return isFullScreen();
}
function allowSafeNavigation(ms=2500){state.ignoreSecurityUntil=Date.now()+ms;}
function announceSecurityMessage(msg){
  const toast=$("#securityToast");
  if(toast){toast.textContent=msg;toast.classList.remove('hidden');clearTimeout(window.__qaSecurityToastTimer);window.__qaSecurityToastTimer=setTimeout(()=>toast.classList.add('hidden'),4300);}
  if(els.message)els.message.textContent=msg;
}
function checkFullscreenState(){
  const block=$("#fullscreenBlock");if(!block)return;
  updateSecurityCounters();
  const active=gameIsRunning();
  const needsFullscreen=Boolean(active&&state.fullscreenRequired&&!isFullScreen());
  const show=Boolean(active&&(state.securityPaused||state.fullscreenRecoveryRequired||needsFullscreen));
  document.body.classList.toggle('fullscreen-paused',show);
  document.body.classList.toggle('integrity-paused',Boolean(state.securityPaused));
  if(show){
    const title=$("#securityGateTitle");
    const message=$("#fullscreenBlockMessage");
    const detail=$("#securityGateDetail");
    const btn=$("#resumeFullscreenBtn");
    if(title)title.textContent=state.securityPaused?'Partida pausada por integridad':'Pantalla completa obligatoria';
    if(message)message.textContent=state.lastSecurityReason||state.fullscreenRecoveryReason||(needsFullscreen?'Debes regresar a pantalla completa para continuar.':'La actividad está pausada.');
    if(detail&&!state.securityPaused)detail.innerHTML='';
    if(btn)btn.textContent=needsFullscreen?'Volver a pantalla completa':'Regresar y continuar';
    block.classList.remove('hidden');
  }else block.classList.add('hidden');
}
function showSecurityGate(type,detail,penaltyAdded){
  state.securityPaused=true;
  state.fullscreenRecoveryRequired=!isFullScreen();
  state.lastSecurityReason=securityEventLabel(type);
  const box=$("#securityGateDetail");
  if(box){const effect=penaltyAdded>0?`−${penaltyAdded.toFixed(2)} puntos`:'advertencia sin descuento';box.innerHTML=`<strong>Registro:</strong> ${escapeHTML(detail||securityEventLabel(type))}<br><strong>Efecto:</strong> ${effect}.`;}
  updateSecurityCounters();checkFullscreenState();
}
function saveSecurityProgress(){
  try{window.SCORMBridge?.saveScore?.(finalScore(),state.sessionSeconds);}catch(error){console.warn('SCORM:',error);}
}
function registerSecurity(kind,detail){recordSecurityIncident(kind,detail||securityEventLabel(kind));}
function registerSecurityAttempt(kind,detail){recordSecurityIncident(kind,detail||securityEventLabel(kind));}
function registerCriticalSecurity(kind,detail){recordSecurityIncident(kind,detail||securityEventLabel(kind));}
function registerDevtoolsAttempt(detail){recordSecurityIncident('shortcut',detail||'Se intentó abrir una herramienta de desarrollo.');}
function registerSecurityBlock(kind,reason){return recordSecurityIncident(kind,reason);}
function recordSecurityIncident(kind,detail=''){
  if(!gameIsRunning()||state.securityPaused||state.quizAnnulled)return false;
  const now=Date.now();
  if(now<(state.ignoreSecurityUntil||0))return false;
  if(now-Number(state.securityLastAt||0)<SECURITY_CONFIG.duplicateWindowMs)return false;
  state.securityLastAt=now;
  const sec=ensureSecurityState();
  if(!(kind in sec))sec[kind]=0;
  sec[kind]=(sec[kind]||0)+1;
  sec.total=totalSecurity();
  state.lastSecurityAttemptAt=now;
  const incident=totalSecurity();
  const incidentDetail=detail||securityEventLabel(kind);
  if(incident>=SECURITY_CONFIG.disqualifyAt){
    state.securityDisqualified=true;
    state.securityEvents.push({type:kind,detail:incidentDetail,at:new Date().toLocaleString('es-CO'),penalty:0,disqualified:true});
    logEvent('incidencia de integridad',`${incident}/5 · intento anulado · ${incidentDetail}`);
    updateSecurityCounters();updateTeacherPanel();
    zeroQuizForBlocks(incidentDetail);
    return true;
  }
  const before=Number(state.securityPenalty||0);
  if(incident>SECURITY_CONFIG.graceIncidents){state.securityPenalty=Math.min(SECURITY_CONFIG.maxPenalty,before+SECURITY_CONFIG.penaltyPerIncident);}
  state.securityPenalty=Number(Number(state.securityPenalty||0).toFixed(2));
  const added=Number((state.securityPenalty-before).toFixed(2));
  state.securityEvents.push({type:kind,detail:incidentDetail,at:new Date().toLocaleString('es-CO'),penalty:added,disqualified:false});
  logEvent('incidencia de integridad',`${incident}/5 · ${added?`−${added.toFixed(2)}`:'advertencia'} · ${incidentDetail}`);
  updateLabels();updateSecurityCounters();updateTeacherPanel();saveSecurityProgress();
  announceSecurityMessage(`⚠️ Incidencia ${incident}/5: ${incidentDetail}${added?` · −${added.toFixed(2)} puntos`:' · advertencia'}`);
  showSecurityGate(kind,incidentDetail,added);
  return true;
}
async function resumeProtectedGame(){
  state.ignoreSecurityUntil=Date.now()+1200;
  if(state.fullscreenRequired&&gameIsRunning()&&!isFullScreen()){
    const ok=await requestFullScreen();
    if(!ok){const message=$("#fullscreenBlockMessage");if(message)message.textContent='No fue posible activar la pantalla completa. Autorízala en el navegador para continuar.';checkFullscreenState();return false;}
  }
  state.securityPaused=false;state.fullscreenRecoveryRequired=false;state.fullscreenRecoveryReason='';state.lastSecurityReason='';
  const detail=$("#securityGateDetail");if(detail)detail.innerHTML='';
  document.body.classList.remove('integrity-paused');
  checkFullscreenState();
  try{canvas.focus({preventScroll:true});}catch(_e){canvas.focus();}
  return true;
}
async function resumeFullScreenFlow(){return resumeProtectedGame();}
function insistFullscreen(){if(state.fullscreenRequired&&gameIsRunning()&&!isFullScreen()&&!state.securityPaused){state.fullscreenRecoveryRequired=true;if(!state.fullscreenRecoveryReason)state.fullscreenRecoveryReason='Debes volver a pantalla completa para continuar.';}checkFullscreenState();}
function armFullscreenFromGesture(){const go=()=>{if(state.fullscreenRequired&&gameIsRunning()&&!isFullScreen()&&!state.securityPaused)resumeProtectedGame();};['pointerdown','touchstart'].forEach(ev=>document.addEventListener(ev,go,{capture:true,passive:true}));}
function zeroQuizForBlocks(reason){
  if(state.quizAnnulled)return;
  ensureSecurityState();
  state.security.total=MAX_SECURITY_BLOCKS;
  state.totalScore=0;
  state.worldScore=0;
  state.securityDisqualified=true;
  state.quizAnnulled=true;
  state.annulReason=`La quinta incidencia de integridad anuló el intento. Último evento: ${reason}`;
  state.annulledAt=new Date().toLocaleString('es-CO');
  state.endedAt=state.annulledAt;
  state.started=false;
  state.fullscreenRequired=false;
  state.securityPaused=true;
  state.fullscreenRecoveryRequired=false;
  stopSessionTimer();
  try{els.dialog?.close();}catch(_e){}
  document.body.classList.remove('quiz-secure-active','fullscreen-paused','integrity-paused');
  document.body.classList.add('quiz-annulled');
  const block=$("#fullscreenBlock");
  const title=$("#securityGateTitle");
  const counter=$("#securityBlockCounter");
  const message=$("#fullscreenBlockMessage");
  const detail=$("#securityGateDetail");
  const footer=$("#securityGateFooter");
  const resume=$("#resumeFullscreenBtn");
  if(block){block.classList.remove('hidden');block.classList.add('security-annulled');}
  if(title)title.textContent='INTENTO ANULADO';
  if(counter)counter.textContent='Incidencia 5 de 5 · NOTA 0,00';
  if(message)message.textContent='La quinta incidencia de integridad anuló definitivamente esta evaluación.';
  if(detail)detail.innerHTML=`<strong>Último evento:</strong> ${escapeHTML(reason)}<br><strong>Resultado:</strong> intento finalizado, nota 0,00 y estado fallido enviado a SCORM/Brightspace.`;
  if(footer)footer.textContent='El intento ya no puede reanudarse. El informe HTML conserva el registro completo de incidencias.';
  if(resume){resume.disabled=true;resume.classList.add('hidden');}
  if(els.message)els.message.textContent='⛔ INTENTO ANULADO: quinta incidencia de integridad. Nota final 0,00 / 5,00.';
  updateSecurityCounters();
  logEvent('quiz en cero',state.annulReason);
  drawScene();
  try{window.SCORMBridge?.saveScore?.(0,state.sessionSeconds);window.SCORMBridge?.finish?.(0,'failed',state.sessionSeconds);}catch(error){console.warn('SCORM:',error);}
  setTimeout(()=>deliverFinalReportAutomatically(),250);
}
function annulQuiz(reason){zeroQuizForBlocks(reason||'Se alcanzó la quinta incidencia de integridad.');}
function restrictedShortcut(event){
  const key=String(event.key||'').toLowerCase();
  return ['F12','F5','Escape'].includes(event.key)
    ||((event.ctrlKey||event.metaKey)&&['c','x','s','p','u','a','w','r'].includes(key))
    ||((event.ctrlKey||event.metaKey)&&event.shiftKey&&['i','j','c','k','t'].includes(key))
    ||(event.altKey&&['arrowleft','arrowright'].includes(key));
}
function installIntegrityControls(){
  if(window.__arcoIntegrityInstalled)return;
  window.__arcoIntegrityInstalled=true;
  const blockEvent=(event,type,detail)=>{
    if(!gameIsRunning())return;
    event.preventDefault();
    event.stopPropagation();
    if(typeof event.stopImmediatePropagation==='function')event.stopImmediatePropagation();
    recordSecurityIncident(type,detail);
  };
  document.addEventListener('contextmenu',event=>blockEvent(event,'rightClick','Se intentó abrir el menú contextual dentro de la actividad.'),{capture:true,passive:false});
  document.addEventListener('copy',event=>blockEvent(event,'copy','Se intentó copiar contenido de la actividad.'),{capture:true,passive:false});
  document.addEventListener('cut',event=>blockEvent(event,'copy','Se intentó cortar contenido de la actividad.'),{capture:true,passive:false});
  document.addEventListener('paste',event=>blockEvent(event,'paste','Se intentó pegar contenido externo dentro de la actividad.'),{capture:true,passive:false});
  document.addEventListener('dragstart',event=>{if(gameIsRunning()){event.preventDefault();event.stopPropagation();}},{capture:true,passive:false});
  document.addEventListener('selectstart',event=>{if(gameIsRunning()&&!['INPUT','TEXTAREA'].includes(String(event.target?.tagName||'').toUpperCase()))event.preventDefault();},{capture:true,passive:false});
  document.addEventListener('keydown',event=>{
    if(!gameIsRunning())return;
    if(String(event.key||'')==='PrintScreen'){
      blockEvent(event,'screenshot','Se detectó el uso de la tecla de captura de pantalla.');
      try{navigator.clipboard?.writeText?.('Captura bloqueada durante la evaluación.');}catch(_e){}
      return;
    }
    if(restrictedShortcut(event)){
      const combo=[event.ctrlKey||event.metaKey?'Ctrl/⌘':'',event.shiftKey?'Shift':'',event.altKey?'Alt':'',event.key].filter(Boolean).join('+');
      blockEvent(event,'shortcut',`Atajo restringido: ${combo}.`);
    }
  },{capture:true,passive:false});
  document.addEventListener('visibilitychange',()=>{if(document.hidden)recordSecurityIncident('hidden','La pestaña quedó oculta o la ventana fue minimizada.');},true);
  window.addEventListener('blur',()=>{setTimeout(()=>{if(gameIsRunning()&&!document.hidden&&!document.hasFocus())recordSecurityIncident('blur','La ventana del juego perdió el foco.');},SECURITY_CONFIG.blurDelayMs);});
  const fullscreenHandler=()=>{
    if(gameIsRunning()&&state.fullscreenRequired&&!isFullScreen())recordSecurityIncident('fullscreen','Se abandonó la pantalla completa mediante Escape o un control del navegador.');
    else if(isFullScreen()){state.fullscreenRecoveryRequired=false;state.fullscreenRecoveryReason='';}
    checkFullscreenState();
  };
  document.addEventListener('fullscreenchange',fullscreenHandler,true);
  document.addEventListener('webkitfullscreenchange',fullscreenHandler,true);
  window.addEventListener('beforeunload',event=>{
    if(!gameIsRunning())return;
    recordSecurityIncident('close','Se intentó cerrar, recargar o abandonar la actividad.');
    saveSecurityProgress();
    event.preventDefault();event.returnValue='';
  });
  window.addEventListener('pagehide',()=>{if(gameIsRunning())saveSecurityProgress();});
}
function installScreenShareAndExternalGuards(){}
function installAntiInspectionGuards(){}
function initSecurityGuards(){
  armFullscreenFromGesture();installIntegrityControls();updateSecurityCounters();
  setInterval(()=>{if(state.fullscreenRequired&&gameIsRunning()&&!document.hidden&&!isFullScreen()&&!state.securityPaused){state.fullscreenRecoveryRequired=true;if(!state.fullscreenRecoveryReason)state.fullscreenRecoveryReason='La partida requiere pantalla completa durante toda la evaluación.';checkFullscreenState();}},1200);
  $("#resumeFullscreenBtn")?.addEventListener('click',resumeProtectedGame);
}
function categoryFromQuestion(q){
  const t=String(q?.type||'').toLowerCase();
  if(t.includes('verdadero')) return 'V/F';
  if(t.includes('num')) return 'Respuesta numérica';
  if(t.includes('palabra')) return 'Palabra clave';
  if(t.includes('afirmaciones')) return 'Selección de afirmaciones';
  if(t.includes('clasificación')||t.includes('ordenamiento')||t.includes('asociación')) return 'Clasificación/asociación';
  if(t.includes('gráfica')) return 'Lectura de gráficas';
  return 'Opción múltiple';
}
function topicFromQuestion(q){
  const prompt=`${q?.title||''} ${q?.prompt||''} ${(q?.options||[]).join(' ')}`;
  if(/composici[oó]n|\\circ/i.test(prompt)) return 'Composición de funciones';
  if(/inversa|f\^\{-1\}|uno a uno|inyectiva/i.test(prompt)) return 'Funciones inversas';
  if(/dominio|denominador|radicando|logaritm|as[ií]ntota/i.test(prompt)) return 'Dominio y asíntotas';
  if(/rango|recorrido|m[aá]ximo|m[ií]nimo|v[eé]rtice/i.test(prompt)) return 'Rango y puntos notables';
  if(/reflexi[oó]n|traslaci[oó]n|desplazamiento|compresi[oó]n|estiramiento|transformaci[oó]n/i.test(prompt)) return 'Transformaciones de funciones';
  if(/gr[aá]fica|punto abierto|punto cerrado|creciente|decreciente|intercepto/i.test(prompt)) return 'Interpretación de gráficas';
  return 'Funciones y representaciones';
}
function reportFormula(text){
  return String(text||'').replace(/\\/g,'\\\\').replace(/\$/g,'\\$');
}
function reportMath(value){return String(value||'').replace(/\$\$/g,'').trim() || '-';}
function percent(ok,total){return total?Math.round(100*ok/total):0;}
function reportBar(label, ok, total){
  const pct=percent(ok,total);
  return `<div class="report-bar-row"><div class="report-bar-label"><b>${escapeHTML(label)}</b><span>${ok}/${total} · ${pct}%</span></div><div class="report-bar"><i style="width:${pct}%"></i></div></div>`;
}
function buildReviewCards(){
  const cards=[
    ['Modelo general de transformación','Describe traslaciones, reflexiones y escalas desde una función base.',String.raw`h(x)=a\,f\!\bigl(b(x-c)\bigr)+d`,'Primero analiza el interior b(x-c), luego el factor a y finalmente el desplazamiento vertical d.','Cambiar el signo del desplazamiento horizontal: f(x-c) se desplaza c unidades a la derecha.'],
    ['Desplazamientos','Relaciona la ecuación transformada con el movimiento de la gráfica.',String.raw`f(x-c)+d:\quad (x,y)\mapsto(x+c,y+d)`,'Ubica un punto notable de la función base y aplica el desplazamiento.','Mover a la izquierda cuando aparece x-c.'],
    ['Reflexiones y escalas','Reconoce cambios verticales y horizontales.',String.raw`a f(x):\ |a|\text{ escala vertical},\qquad f(bx):\ |b|^{-1}\text{ escala horizontal}`,'Compara por separado el signo y el valor absoluto de a y b.','Creer que f(2x) estira horizontalmente; en realidad comprime por factor 1/2.'],
    ['Dominio, rango y asíntotas','Determina entradas permitidas y comportamiento límite.',String.raw`\mathrm{Dom}(f)=\{x:f(x)\text{ está definida}\},\qquad \mathrm{Ran}(f)=\{f(x):x\in\mathrm{Dom}(f)\}`,'Revisa denominadores, raíces, logaritmos, puntos abiertos y asíntotas.','Confundir una asíntota vertical x=c con una asíntota horizontal y=c.'],
    ['Composición e inversa','Aplica funciones en el orden correcto y verifica la inversión.',String.raw`(f\circ g)(x)=f(g(x)),\qquad f^{-1}(f(x))=x`,'Trabaja de adentro hacia afuera; para la inversa intercambia x e y y despeja.','Cambiar el orden de la composición.'],
    ['Movimiento parabólico de la flecha','Modela la trayectoria usada por el reto de tiro.',String.raw`x(t)=x_0+v_0\cos(\theta)t,\qquad y(t)=y_0+v_0\sin(\theta)t-\tfrac12gt^2`,'Ajusta primero el ángulo y luego la velocidad para alcanzar la altura del centro de la diana.','Usar grados directamente en funciones trigonométricas que esperan radianes.'],
    ['Velocidad recomendada para el blanco','Relaciona distancia, altura y ángulo con la velocidad inicial.',String.raw`v_0=\sqrt{\frac{g d^2}{2\cos^2\theta\,(d\tan\theta-\Delta y)}}`,'Comprueba que d·tan(θ)-Δy sea positivo antes de calcular.','Elegir un ángulo que hace imposible alcanzar el blanco con la trayectoria ideal.'],
    ['Sistema de calificación','Cada mundo parte de 1.0 y aplica penalizaciones por fallos.',String.raw`\mathrm{Nota}=\sum_{m=1}^{5}\max\!\left(1-0.10F_m-0.20E_m,0\right)`,'Reduce los tiros de prueba y justifica la respuesta antes de enviarla.','Confundir los puntos de tiro con puntos directos de la nota.']
  ];
  return cards.map(c=>`<article class="report-guide-card"><h4>${c[0]}</h4><p><b>Idea central:</b> ${c[1]}</p><div class="report-formula">\\[${c[2]}\\]</div><p><b>Método recomendado:</b> ${c[3]}</p><p><b>Error frecuente:</b> ${c[4]}</p></article>`).join('');
}
function buildImprovementPlan(){
  const history=state.questionHistory||[];
  const wrong=history.filter(h=>!h.correct);
  if(!history.length) return `<article class="report-plan-card"><h4>${escapeHTML(state.playerName)}</h4><p>Debe jugar una partida completa para obtener un diagnóstico individual.</p></article>`;
  const topicCounts={};
  wrong.forEach(h=>{topicCounts[h.topic]=(topicCounts[h.topic]||0)+1;});
  const topics=Object.entries(topicCounts).sort((a,b)=>b[1]-a[1]).slice(0,3);
  const topicHtml=topics.length?topics.map(([t,n],i)=>`<li><b>${escapeHTML(t)}:</b> ${n} error(es). Revisar definición, procedimiento y lectura de opciones.</li>`).join(''):`<li><b>Consolidación:</b> mantén la estrategia de lectura y justificación, porque no se registraron errores.</li>`;
  return `<article class="report-plan-card"><h4>${escapeHTML(state.playerName)}</h4><p><b>Nota:</b> ${finalScore().toFixed(2)}/5.00. <b>Acierto:</b> ${percent(state.correctAnswers,history.length)}%.</p><ol>${topicHtml}<li><b>Rutina sugerida:</b> resolver tres ejercicios adicionales del tema con menor desempeño y escribir una justificación breve antes de elegir la opción.</li></ol></article>`;
}

function buildAdventureReportThemeStyles(){
  // Un único tema embebido se usa tanto dentro del juego como en el archivo
  // descargado. Así el informe visible y el HTML descargado son idénticos.
  return String.raw`<style id="arcotransforma-adventure-report-theme">
.adventure-report,.adventure-report *{box-sizing:border-box}
.adventure-report{width:100%;font-family:Georgia,'Times New Roman',serif;line-height:1.58;color:#10243d}
.adventure-report .report-section,.adventure-report .report-question-card{background:#fff;border:1px solid #dfe8f5;border-radius:22px;padding:24px;margin:20px 0;box-shadow:0 10px 28px rgba(8,35,74,.07);break-inside:avoid;page-break-inside:avoid}
.adventure-report .report-cover{background:linear-gradient(145deg,#06184c,#112f7a)!important;color:#fff!important;text-align:center!important;border-color:#244a93!important;padding:28px 24px!important}
.adventure-report .report-cover h1{font-size:clamp(2rem,5vw,4rem);line-height:1.05;margin:8px 0;color:#ffd866!important}
.adventure-report .report-cover h2{border:0!important;color:#fff!important;margin:.35rem 0!important;font-size:1.2rem!important;padding:0!important}
.adventure-report .report-cover p{margin:.4rem 0;color:#e9f0ff}
.adventure-report .report-hero-icon{font-size:58px;line-height:1}
.adventure-report .report-topline{text-transform:uppercase;letter-spacing:.17em;font-size:.82rem;font-weight:900;color:#ffd866}
.adventure-report .report-security-alert{max-width:780px;margin:16px auto 0;padding:12px 16px;border:1px solid #ff9eaa;border-radius:14px;background:#fff0f2;color:#9f1239;font-weight:800}
.adventure-report h2{color:#062f8a;border-bottom:3px solid #dfe8f5;padding-bottom:8px;margin-top:0}
.adventure-report h3,.adventure-report h4,.adventure-report h5{color:#0a357d}
.adventure-report .report-metrics{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin:16px 0}
.adventure-report .report-metric{background:#082d76;color:#fff;border-radius:16px;padding:16px;min-height:94px;box-shadow:0 8px 18px rgba(8,45,118,.15)}
.adventure-report .report-metric b{display:block;font-size:1.7rem;color:#ffd866;line-height:1.1}
.adventure-report .report-metric span{display:block;margin-top:6px;font-size:.82rem;text-transform:uppercase;letter-spacing:.04em;color:#e8f0ff}
.adventure-report .report-clean-table{width:100%;border-collapse:collapse;background:#fff;border-radius:14px;overflow:hidden}
.adventure-report .report-clean-table td,.adventure-report .report-clean-table th{border-bottom:1px solid #e7edf5;padding:10px;text-align:left;vertical-align:top}
.adventure-report .report-clean-table th{background:#062f8a;color:#fff}
.adventure-report .report-clean-table tr:last-child td{border-bottom:0}
.adventure-report .report-bar-row{border:1px solid #dfe8f5;background:#f7fbff;border-radius:14px;padding:12px;margin:10px 0;break-inside:avoid}
.adventure-report .report-bar-label{display:flex;justify-content:space-between;gap:12px;align-items:center}
.adventure-report .report-bar-label span{font-weight:900;color:#0a357d}
.adventure-report .report-bar{height:12px;background:#e7edf5;border-radius:999px;overflow:hidden;margin-top:8px}
.adventure-report .report-bar i{display:block;height:100%;background:linear-gradient(90deg,#062f8a,#26a69a);border-radius:999px}
.adventure-report .report-plan-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:12px}
.adventure-report .report-plan-card{background:#fbfdff;border:1px solid #dfe8f5;border-radius:16px;padding:14px;break-inside:avoid}
.adventure-report .report-plan-card h4{margin:0 0 8px}
.adventure-report .report-guide-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.adventure-report .report-guide-card{background:#fbfdff;border:1px solid #dfe8f5;border-radius:16px;padding:14px;break-inside:avoid}
.adventure-report .report-guide-card h4{margin:0 0 10px}
.adventure-report .report-guide-card p{margin:8px 0}
.adventure-report .report-formula,.adventure-report .report-question-prompt,.adventure-report .report-feedback-box{background:#f7fbff;border:1px solid #dfe8f5;border-radius:14px;padding:13px;margin:10px 0;overflow-x:auto}
.adventure-report .report-formula.big{background:#fff9e8;border-color:#ead99f}
.adventure-report .report-question-card{padding:20px}
.adventure-report .report-question-card header{display:flex;gap:12px;align-items:center}
.adventure-report .report-qnum{flex:0 0 42px;width:42px;height:42px;border-radius:50%;display:grid;place-items:center;background:#062f8a;color:#fff;font-weight:900}
.adventure-report .report-question-card header>div{min-width:0;flex:1}
.adventure-report .report-question-card header>div>b{display:block;color:#062f8a;font-size:1.08rem}
.adventure-report .report-question-card header small{display:block;margin-top:2px;color:#5c6f8c}
.adventure-report .report-question-card header>strong{margin-left:auto;padding:8px 13px;border-radius:999px;white-space:nowrap}
.adventure-report .report-question-card strong.ok{background:#e4f8ee;color:#0b754f}
.adventure-report .report-question-card strong.bad{background:#ffe7ed;color:#a80f32}
.adventure-report .report-question-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.adventure-report .report-question-grid>div{background:#f7fbff;border:1px solid #dfe8f5;border-radius:14px;padding:13px}
.adventure-report .report-question-grid h5,.adventure-report .report-feedback-box h5{margin:0 0 8px}
.adventure-report .report-question-grid p,.adventure-report .report-feedback-box p{margin:4px 0}
.adventure-report .report-options-list{margin:10px 0 0;padding-left:22px}
.adventure-report .report-option{background:#fff;border:1px solid #dfe8f5;border-radius:12px;padding:9px 11px;margin:7px 0}
.adventure-report .report-option.correct{background:#eafaf2;border-color:#b9e8ce}
.adventure-report .report-option small{display:block;color:#5c6f8c;margin-top:3px}
.adventure-report .report-footer{text-align:right;color:#667;margin:18px 4px 0}
.adventure-report mjx-container{font-size:118%!important;max-width:100%;overflow-x:auto;overflow-y:hidden}
.adventure-report .report-formula mjx-container,.adventure-report .report-question-prompt mjx-container,.adventure-report .report-feedback-box mjx-container{font-size:122%!important}
@media(max-width:760px){
  .adventure-report .report-metrics,.adventure-report .report-guide-grid,.adventure-report .report-question-grid{grid-template-columns:1fr}
  .adventure-report .report-section,.adventure-report .report-question-card{padding:16px}
  .adventure-report .report-question-card header{align-items:flex-start;flex-wrap:wrap}
  .adventure-report .report-question-card header>strong{margin-left:54px}
}
@media print{
  .adventure-report .report-section,.adventure-report .report-question-card{box-shadow:none}
  .adventure-report .report-cover,.adventure-report .report-metric,.adventure-report .report-clean-table th{-webkit-print-color-adjust:exact;print-color-adjust:exact}
}
</style>`;
}

function buildReportHTML(){
  const history=state.questionHistory||[];
  const shots=state.shots||[];
  const end=state.endedAt || new Date().toLocaleString('es-CO');
  const total=history.length;
  const ok=history.filter(h=>h.correct).length;
  const wrong=total-ok;
  const centers=shots.filter(s=>s.result==='Centro').length;
  const borders=shots.filter(s=>s.result==='Borde').length;
  const misses=shots.filter(s=>s.result==='Sin impacto').length;
  const effective=centers+borders;
  const shotPct=percent(effective,shots.length);
  const topicStats={};
  history.forEach(h=>{const k=h.topic||'Funciones';if(!topicStats[k])topicStats[k]={ok:0,total:0};topicStats[k].total++;if(h.correct)topicStats[k].ok++;});
  const topicRows=Object.entries(topicStats).sort((a,b)=>b[1].total-a[1].total).map(([topic,s])=>`<tr><td>${escapeHTML(topic)}</td><td>${s.ok}/${s.total}</td><td>${percent(s.ok,s.total)}%</td></tr>`).join('') || '<tr><td colspan="3">No hay preguntas respondidas.</td></tr>';
  const byWorld=worlds.map((w,i)=>{const arr=history.filter(h=>h.world===i+1);const o=arr.filter(h=>h.correct).length;return reportBar(`${i+1}. ${w.name}`,o,arr.length);}).join('');
  const securityRows=[
    ['Cambios de pestaña o minimización',state.security.hidden||0],
    ['Salidas de pantalla completa',state.security.fullscreen||0],
    ['Pérdidas de foco',state.security.blur||0],
    ['Intentos de clic derecho',state.security.rightClick||0],
    ['Intentos de copiar o cortar',state.security.copy||0],
    ['Atajos restringidos',state.security.shortcut||0],
    ['Total de incidencias',totalSecurity()],
    ['Descuento de integridad',Number(state.securityPenalty||0).toFixed(2)]
  ].map(r=>`<tr><td>${escapeHTML(r[0])}</td><td>${r[1]}</td></tr>`).join('');
  const securityEventRows=(state.securityEvents||[]).map((event,index)=>`<tr class="${event.disqualified?'report-security-danger':''}"><td>${index+1}</td><td>${escapeHTML(event.at||'')}</td><td>${escapeHTML(securityEventLabel(event.type))}</td><td>${escapeHTML(event.detail||'')}</td><td>${event.disqualified?'Intento anulado':event.penalty?`−${Number(event.penalty).toFixed(2)}`:'Advertencia'}</td></tr>`).join('')||'<tr><td colspan="5">No se registraron incidencias.</td></tr>';
  const detail=history.map((h,i)=>{
    const opts=(h.options||[]).map((op,j)=>`<li><div class="report-option ${op===h.correctOption?'correct':''}"><b>${String.fromCharCode(65+j)}.</b> <span>${escapeHTML(op)}</span>${op===h.correctOption?'<small>Opción correcta.</small>':''}</div></li>`).join('');
    return `<article class="report-question-card"><header><span class="report-qnum">${i+1}</span><div><b>${escapeHTML(h.title)}</b><small>${escapeHTML(h.worldName)} · ${escapeHTML(h.topic||'Funciones')} · ${escapeHTML(h.category||h.type)} · ${h.duration||0}s</small></div><strong class="${h.correct?'ok':'bad'}">${h.correct?'Correcta':'Incorrecta'}</strong></header>
      <div class="report-question-prompt">${escapeHTML(h.prompt||h.title)}</div>
      <div class="report-question-grid"><div><h5>Respuesta del estudiante</h5><p>${escapeHTML(h.selected||'-')}</p></div><div><h5>Respuesta esperada</h5><p>${escapeHTML(h.correctAnswer||'-')}</p></div></div>
      <div class="report-feedback-box"><h5>Retroalimentación</h5><p>${escapeHTML(h.feedback||'Sin retroalimentación registrada.')}</p>${h.hint?`<p><b>Pista:</b> ${escapeHTML(h.hint)}</p>`:''}${opts?`<ol class="report-options-list">${opts}</ol>`:''}</div>
    </article>`;
  }).join('') || '<p class="report-muted">No hay preguntas respondidas todavía.</p>';
  return `${buildAdventureReportThemeStyles()}<div class="latex-report adventure-report">
    <section class="report-cover report-section"><div class="report-hero-icon">🏹🎯</div><div class="report-topline">Informe final · ArcoTransforma</div>${state.quizAnnulled?`<div class="report-security-alert">⛔ Quiz con nota 0 por bloqueos de seguridad: ${escapeHTML(state.annulReason)}</div>`:''}<h1>Informe ArcoTransforma</h1><h2>Transformaciones de funciones · Tiro parabólico</h2><p>${escapeHTML(end)}</p></section>
    <section class="report-section"><h2>Resumen</h2><div class="report-metrics"><div class="report-metric"><b>${finalScore().toFixed(2)}</b><span>Nota final / 5.0</span></div><div class="report-metric"><b>${ok}/${total||0}</b><span>Aciertos</span></div><div class="report-metric"><b>${shots.length}</b><span>Flechas lanzadas</span></div><div class="report-metric"><b>${centers}</b><span>Centros</span></div><div class="report-metric"><b>${borders}</b><span>Impactos de borde</span></div><div class="report-metric"><b>${shotPct}%</b><span>Eficacia de tiro</span></div></div><p><strong>Jugador:</strong> ${escapeHTML(state.playerName)} · <strong>Grupo:</strong> ${escapeHTML(state.groupName)} · <strong>Mundo alcanzado:</strong> ${escapeHTML(worlds[Math.min(state.world,worlds.length-1)]?.name||'-')} · <strong>Errores matemáticos:</strong> ${wrong} · <strong>Tiros fallidos:</strong> ${misses} · <strong>Tiempo:</strong> ${fmtDuration(state.sessionSeconds)} · <strong>Estado:</strong> ${state.quizAnnulled?'Intento anulado por quinta incidencia':'Partida registrada'} · <strong>Integridad:</strong> ${totalSecurity()}/5 · descuento ${Number(state.securityPenalty||0).toFixed(2)} · <strong>Entrega:</strong> informe HTML descargado automáticamente al finalizar</p><div class="report-formula big">\\[\\mathrm{Nota}=\\begin{cases}0,& I\\ge 5,\\\\[3pt]\\max\\!\\left(0,\\sum_{m=1}^{5}\\max(1-0.10F_m-0.20E_m,0)-P_s\\right),& I<5.\\end{cases}\\]</div></section>
    <section class="report-section"><h2>Desempeño por tema</h2><table class="report-clean-table"><thead><tr><th>Tema</th><th>Aciertos</th><th>Porcentaje</th></tr></thead><tbody>${topicRows}</tbody></table><h3>Desempeño por mundo</h3>${byWorld}</section>
    <section class="report-section"><h2>Plan de mejora</h2><div class="report-plan-grid">${buildImprovementPlan()}</div></section>
    <section class="report-section"><h2>Formulario teórico en LaTeX</h2><p>Fórmulas centrales de las transformaciones de funciones y de la física del tiro utilizada en el proyecto.</p><div class="report-guide-grid">${buildReviewCards()}</div></section>
    <section class="report-section"><h2>Integridad de la sesión</h2><p>Primera incidencia: advertencia. Incidencias 2 a 4: descuento de 0,05 puntos cada una. Quinta incidencia: intento anulado y nota 0,00.</p><table class="report-clean-table"><thead><tr><th>Evento</th><th>Cantidad / efecto</th></tr></thead><tbody>${securityRows}</tbody></table><h3>Detalle cronológico</h3><table class="report-clean-table"><thead><tr><th>#</th><th>Fecha y hora</th><th>Tipo</th><th>Detalle</th><th>Efecto</th></tr></thead><tbody>${securityEventRows}</tbody></table></section>
    <section class="report-section"><h2>Detalle de preguntas</h2>${detail}</section>
    <p class="report-footer">Generado automáticamente por ArcoTransforma.</p>
  </div>`;
}
function openReport(final=false){
  if(final) state.endedAt=new Date().toLocaleString('es-CO');
  if(!els.reportContent||!els.reportDialog) return;
  els.reportContent.innerHTML=buildReportHTML();
  typesetMath(els.reportContent);
  if(!els.reportDialog.open) els.reportDialog.showModal();
}
function buildStandaloneReportHTML(reportRawHTML){
  const title = `Informe ArcoTransforma - ${state.playerName || 'Jugador'}`;
  // reportRawHTML ya incluye exactamente el mismo CSS que se usa en el modal.
  // Por eso el archivo descargado conserva la misma tipografía, colores,
  // tarjetas, tablas, métricas, fórmulas y detalle de preguntas.
  return String.raw`<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapeHTML(title)}</title>
<script>
window.MathJax={
  tex:{
    inlineMath:[["\\(","\\)"],["$","$"]],
    displayMath:[["\\[","\\]"],["$$","$$"]],
    processEscapes:true
  },
  svg:{fontCache:"global"}
};
</script>
<script defer src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js"></script>
<style>
*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{margin:0;background:#f5f8ff;color:#10243d;font-family:Georgia,'Times New Roman',serif;line-height:1.58}
.page{width:min(1040px,calc(100% - 24px));margin:22px auto 56px}
@media print{body{background:#fff}.page{width:100%;margin:0}}
</style>
</head>
<body>
<main class="page">
${reportRawHTML}
</main>
</body>
</html>`;
}

function downloadReportHTML(){
  // Se descarga el HTML fuente con expresiones LaTeX sin procesar. El modal
  // puede renderizarse con MathJax, pero el archivo conserva un documento
  // compacto, editable y visualmente idéntico al informe del juego.
  const reportRawHTML = buildReportHTML();
  const standalone = buildStandaloneReportHTML(reportRawHTML);
  const blob = new Blob(['\ufeff', standalone], {type:'text/html;charset=utf-8'});
  const url = URL.createObjectURL(blob);
  const safe=(state.playerName||'equipo').replace(/[^a-z0-9_-]+/gi,'_').slice(0,30);
  const stamp=new Date().toISOString().replace(/[:.]/g,'-').slice(0,19);
  const filename=`Informe_ArcoTransforma_${safe}_${stamp}.html`;
  const a=document.createElement('a');
  a.href=url;
  a.download=filename;
  a.style.display='none';
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(()=>URL.revokeObjectURL(url),1800);
  return filename;
}

function deliverFinalReportAutomatically(){
  // Una única entrega por partida. Se ejecuta para finalización manual,
  // recorrido completado, agotamiento de flechas y anulación por bloqueos.
  if(state.finalReportDeliveryStarted) return;
  state.finalReportDeliveryStarted=true;
  logEvent('entrega automática del informe','Se generó y descargó el informe final en formato HTML.');
  openReport(false);
  try{
    const filename=downloadReportHTML();
    state.finalReportDownloaded=true;
    const button=$('#btnDownloadHtml');
    if(button) button.textContent='Descargar nuevamente el informe HTML';
    const toast=$('#securityToast');
    if(toast){
      toast.textContent=`✅ Informe HTML descargado automáticamente: ${filename}`;
      toast.classList.remove('hidden');
      clearTimeout(window.__qaSecurityToastTimer);
      window.__qaSecurityToastTimer=setTimeout(()=>toast.classList.add('hidden'),5200);
    }
  }catch(error){
    console.error('No fue posible iniciar la descarga automática del informe.',error);
    state.finalReportDeliveryStarted=false;
    const button=$('#btnDownloadHtml');
    if(button) button.textContent='Descargar informe HTML';
  }
}

function clamp(n,min,max){return Math.max(min,Math.min(max,n));}
function rand(min,max){return min+Math.random()*(max-min);}
function randInt(min,max){return Math.floor(rand(min,max+1));}
function pickOne(arr){return arr[Math.floor(Math.random()*arr.length)];}
function shuffleArray(arr){const a=arr.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function fmtMathValue(n){return Number.isInteger(n)?String(n):String(Number(n).toFixed(2)).replace(/\.00$/,'');}
function signed(n){return (n>=0?'+':'')+fmtMathValue(n);}
function xShift(a){if(a===0) return 'x'; return a>0?`x-${a}`:`x+${Math.abs(a)}`;}
function pointLatex(x,y){return `\\((${fmtMathValue(x)},${fmtMathValue(y)})\\)`;}
function sqrtFormula(a,b){return `\\sqrt{${xShift(a)}}${b===0?'':signed(b)}`;}
function linearFormula(m,b){return `${fmtMathValue(m)}x${b===0?'':signed(b)}`;}
function mc(correct,distractors){const opts=[];[correct,...distractors].forEach(v=>{if(v!=null && !opts.includes(v))opts.push(v);});while(opts.length<4)opts.push('Ninguna de las anteriores');const shuffled=shuffleArray(opts.slice(0,4));return {options:shuffled,answer:shuffled.indexOf(correct)};}
function cloneQ(q,patch){return Object.assign({},q,patch||{});}

const subtleHintsByNum={
  1:'Observa qué valor hace que el denominador se anule y compara el comportamiento de la gráfica cuando \(x\) crece mucho en valor absoluto.',
  3:'Piensa qué efecto produce un signo menos delante de toda la función sobre cada punto de la gráfica original.',
  5:'Ubica primero dónde empieza la gráfica de la raíz y luego revisa cómo la traslación horizontal y vertical mueve ese inicio.',
  7:'Distingue qué parámetro modifica la altura máxima de la onda y cuál afecta la longitud de un ciclo completo.',
  9:'Si a todos los valores de salida se les suma una constante, ¿qué ocurre con los extremos del rango?',
  11:'Analiza primero el desplazamiento horizontal y después la reflexión vertical; conviene hacerlo en ese orden.',
  13:'Para que la función conserve el mismo cero, el argumento transformado debe tomar exactamente el valor donde la función original se anula.',
  15:'Evalúa paso a paso: primero ajusta la entrada dentro de la función y solo después aplica el desplazamiento vertical.',
  17:'Calcula cada composición por separado y compáralas; el punto clave es respetar el orden de aplicación.',
  19:'No reemplaces todo de una vez: evalúa una función y usa ese resultado como entrada de la siguiente.',
  21:'En funciones trigonométricas, el período depende del factor que multiplica a la variable dentro del ángulo.',
  23:'Antes de responder, revisa qué condición debe cumplir el interior de la raíz cuadrada para que la expresión tenga sentido.',
  25:'Sustituye la función interior en todos los lugares donde aparece la variable de la función exterior.',
  27:'Lee la primera tabla, toma esa salida y úsala como nueva entrada en la segunda.',
  29:'Imagina la composición como una máquina de dos pasos: primero una transformación y luego un ajuste final.',
  31:'Observa el vértice de la parábola transformada y compáralo con el de la parábola base.',
  33:'Identifica el punto donde la curva comienza a existir; ese punto cambia con las traslaciones.',
  35:'Busca en la gráfica el valor de \(x\) donde la función deja de estar definida y la curva se dispara.',
  37:'Si ambas gráficas representan la identidad, piensa qué le sucede al valor de entrada al pasar por las dos funciones.',
  39:'Reflexiona sobre qué hace el signo menos al rango y luego cómo cambia todo al sumar una constante.'
};
function subtleHintForQuestion(q){
  if(!q) return 'Analiza la transformación con calma, apóyate en la gráfica y descarta opciones inconsistentes.';
  if(subtleHintsByNum[q.num]) return subtleHintsByNum[q.num];
  return 'Analiza la transformación con calma, apóyate en la gráfica y descarta opciones inconsistentes.';
}

function instantiateQuestionVariant(base){if(!base||base.__instantiated)return base;const fn=variantFactories[base.num];const q=fn?fn(base):cloneQ(base,{});q.__instantiated=true;q.hint=subtleHintForQuestion(q);if(!q.feedback||!String(q.feedback).trim())q.feedback='Revisa la transformación y valida cuidadosamente la respuesta.';return q;}
const variantFactories={
1(base){const s=pickOne([-5,-4,-3,-2,2,3,4,5]);const expr=`\\dfrac{1}{${xShift(s)}}`;const correct=`La asíntota vertical es \\(x=${s}\\) y la horizontal es \\(y=0\\).`;const o=mc(correct,[`La asíntota vertical es \\(x=${-s}\\) y la horizontal es \\(y=0\\).`,`La asíntota vertical es \\(x=0\\) y la horizontal es \\(y=${s}\\).`,`La asíntota vertical es \\(x=0\\) y la horizontal es \\(y=${-s}\\).`]);return cloneQ(base,{prompt:`Considere la función \\(h(x)=${expr}\\). ¿Cuál afirmación describe correctamente sus asíntotas?`,hint:'En \\(1/(x-a)\\), la asíntota vertical es \\(x=a\\) y la horizontal es \\(y=0\\).',feedback:'La traslación horizontal solo cambia la asíntota vertical.',options:o.options,answer:o.answer,image:null,generatedVisual:{caption:'ASÍNTOTAS Y TRASLACIÓN',type:'graph',title:`h(x)=${expr}`,range:{xMin:Math.min(-7,s-4),xMax:Math.max(7,s+4),yMin:-6,yMax:6},curves:[{fn:x=>1/x,color:'#67d9ff',label:'f'},{fn:x=>1/(x-s),color:'#89ffaf',label:'h'}],asymptotes:[{x:0,color:'#67d9ff'},{x:s,color:'#89ffaf'},{y:0,color:'#ffcf6c'}],annotations:[{x:s,y:5,text:`x=${s}`,color:'#89ffaf'}]}});},
3(base){const t=pickOne([-27,-8,-1,1,8,27]);const y=Math.cbrt(t);const correct=pointLatex(t,-y);const o=mc(correct,[pointLatex(t,y),pointLatex(-t,y),pointLatex(-t,-y)]);return cloneQ(base,{prompt:`Considere \\(f(x)=\\sqrt[3]{x}\\) y \\(h(x)=-\\sqrt[3]{x}\\). Si ${pointLatex(t,y)} pertenece a la gráfica de \\(f\\), ¿qué punto pertenece a la gráfica de \\(h\\)?`,hint:'La reflexión respecto del eje \(x\) conserva la abscisa y cambia el signo de la ordenada.',feedback:'El signo menos externo refleja la gráfica verticalmente.',options:o.options,answer:o.answer,image:null,generatedVisual:{caption:'REFLEXIÓN VERTICAL',type:'graph',title:'Reflexión respecto del eje x',range:{xMin:-10,xMax:10,yMin:-4,yMax:4},curves:[{fn:x=>Math.cbrt(x),color:'#67d9ff',label:'f'},{fn:x=>-Math.cbrt(x),color:'#89ffaf',label:'h'}],points:[{x:t,y:y,label:`(${fmtMathValue(t)},${fmtMathValue(y)})`,color:'#67d9ff'},{x:t,y:-y,label:`(${fmtMathValue(t)},${fmtMathValue(-y)})`,color:'#89ffaf'}]}});},
5(base){const a=pickOne([-3,-2,-1,0,1,2,3,4]);const b=pickOne([-3,-2,-1,1,2,3]);const formula=sqrtFormula(a,b);const correct=pointLatex(a,b);const o=mc(correct,[pointLatex(-a,b),pointLatex(a,-b),pointLatex(b,a)]);return cloneQ(base,{prompt:`La función \\(h(x)=${formula}\\) es una raíz cuadrada trasladada. ¿Cuál es su punto inicial?`,hint:'El punto inicial se obtiene haciendo cero el radicando y luego aplicando el desplazamiento vertical.',feedback:'Si \\(h(x)=\\sqrt{x-a}+b\\), entonces la gráfica inicia en \\((a,b)\\).',options:o.options,answer:o.answer,image:null,generatedVisual:{caption:'PUNTO INICIAL',type:'graph',title:`h(x)=${formula}`,range:{xMin:a-3,xMax:a+8,yMin:b-4,yMax:b+5},curves:[{fn:x=>x>=a?Math.sqrt(x-a)+b:NaN,color:'#89ffaf',label:'h'}],points:[{x:a,y:b,label:'Inicio',color:'#ffcf6c'}]}});},
7(base){const A=pickOne([2,3,4,5]);const B=pickOne([2,3,4,5]);const correct=`Amplitud \\(${A}\\) y período \\(\\dfrac{2\\pi}{${B}}\\).`;const o=mc(correct,[`Amplitud \\(${B}\\) y período \\(\\dfrac{2\\pi}{${A}}\\).`,`Amplitud \\(${A}\\) y período \\(${B}\\pi\\).`,`Amplitud \\(\\dfrac1${A}\\) y período \\(2\\pi${B}\\).`]);return cloneQ(base,{prompt:`Para la función \\(h(x)=${A}\\sin(${B}x)\\), ¿cuáles son su amplitud y su período?`,hint:'En \\(A\\sin(Bx)\\), la amplitud es \\(|A|\\) y el período es \\(2\\pi/|B|\\).',feedback:'La amplitud depende del coeficiente externo y el período del coeficiente dentro del seno.',options:o.options,answer:o.answer,image:null,generatedVisual:{caption:'AMPLITUD Y PERÍODO',type:'graph',title:`h(x)=${A}sin(${B}x)`,range:{xMin:-3.2,xMax:3.2,yMin:-A-1.5,yMax:A+1.5},curves:[{fn:x=>Math.sin(x),color:'#67d9ff',label:'sin x'},{fn:x=>A*Math.sin(B*x),color:'#89ffaf',label:'h'}],annotations:[{x:-2.5,y:A+.5,text:`A=${A}`,color:'#ffcf6c'},{x:.7,y:-A-.6,text:`T=2π/${B}`,color:'#89ffaf'}]}});},
9(base){const m=pickOne([-5,-4,-3,-2,-1]);const M=pickOne([2,3,4,5]);const c=pickOne([1,2,3,4]);const correct=`\\([${m+c},${M+c}]\\)`;const o=mc(correct,[`\\([${m-c},${M-c}]\\)`,`\\([${m},${M+c}]\\)`,`\\([${c},${M+2*c}]\\)`]);return cloneQ(base,{prompt:`Si el rango de \\(f\\) es \\([${m},${M}]\\), ¿cuál es el rango de \\(h(x)=f(x)+${c}\\)?`,hint:'Sumar una constante traslada verticalmente todos los valores del rango.',feedback:'Cada valor del rango se incrementa en la constante sumada.',options:o.options,answer:o.answer,image:null,generatedVisual:{caption:'TRANSFORMACIÓN DEL RANGO',type:'range',title:'Traslación vertical del rango',from:[m,M],to:[m+c,M+c]}});},
11(base){const x0=pickOne([-2,-1,1,2,3]);const y0=pickOne([2,3,4,5]);const a=pickOne([2,3,4,5]);const correct=pointLatex(x0-a,-y0);const o=mc(correct,[pointLatex(x0+a,-y0),pointLatex(x0-a,y0),pointLatex(x0+a,y0)]);return cloneQ(base,{prompt:`Si ${pointLatex(x0,y0)} pertenece a la gráfica de \\(f\\), ¿qué punto pertenece a la gráfica de \\(h(x)=-f(x+${a})\\)?`,hint:'\(x+a\) desplaza a la izquierda y el signo menos refleja respecto del eje \(x\).',feedback:'El nuevo punto es \((x_0-a,-y_0)\).',options:o.options,answer:o.answer,image:null,generatedVisual:{caption:'TRASLACIÓN Y REFLEXIÓN',type:'pointTransform',title:`h(x)=-f(x+${a})`,from:[x0,y0],to:[x0-a,-y0]}});},
13(base){const zero=pickOne([2,4,6,8,10]);const k=pickOne([2,4,5,8]);const x=zero/k;const correct=`\\(x=\\dfrac{${zero}}{${k}}\\)`;const o=mc(correct,[`\\(x=${zero*k}\\)`,`\\(x=${zero+k}\\)`,`\\(x=\\dfrac{${k}}{${zero}}\\)`]);return cloneQ(base,{prompt:`Si \\(f(${zero})=0\\), ¿para cuál valor de \\(x\\) se cumple que \\(f(${k}x)=0\\)?`,hint:'Para que \(f(kx)\) sea cero, el argumento \(kx\) debe coincidir con el cero conocido de \(f\).',feedback:`Se resuelve la ecuación \(${k}x=${zero}\).`,options:o.options,answer:o.answer,image:null,generatedVisual:{caption:'COMPRESIÓN HORIZONTAL',type:'numberLine',title:'Cero bajo transformación horizontal',spec:{min:Math.min(-1,x-1),max:zero+2,segments:[{a:x,b:x,color:'#89ffaf'}],points:[{x:zero,label:`f(${zero})=0`,color:'#67d9ff'},{x:x,label:`${k}x=${zero}`,color:'#89ffaf'}],note:'El argumento transformado debe llegar al mismo cero.'}}});},
15(base){const rows=[[-2,3],[-1,1],[0,0],[1,1],[2,3]];const a=pickOne([1,2]);const b=pickOne([1,2,3]);const xEval=pickOne([1+a,2+a,3+a,4+a]);const xInner=xEval-a;const fx=(rows.find(r=>r[0]===xInner)||[0,0])[1];const ans=fx+b;const o=mc(String(ans),[String(ans+1),String(ans+2),String(ans-1)]);return cloneQ(base,{prompt:`La tabla de \\(f\\) da: \\((-2,3),(-1,1),(0,0),(1,1),(2,3)\\). Si \\(h(x)=f(x-${a})+${b}\\), ¿cuál es el valor de \\(h(${xEval})\\)?`,hint:`Calcula primero \(${xEval}-${a}\), busca ese valor en la tabla y luego suma ${b}.`,feedback:'Primero se evalúa la tabla y luego se aplica la traslación vertical.',options:o.options,answer:o.answer,image:null,generatedVisual:{caption:'LECTURA DE TABLA',type:'flow',title:'EVALUACIÓN EN CADENA',steps:[`x=${xEval}`,`x-${a}=${xInner}`,`f(${xInner})=${fx}`,`${fx}+${b}=${ans}`],note:`h(${xEval})=${ans}`}});},
17(base){const m=pickOne([2,3]);const b=pickOne([1,2]);const correct=`\\((f\\circ g)(x)=(${m}x+${b})^2-1\\) y \\((g\\circ f)(x)=${m}(x^2-1)+${b}\\).`;const o=mc(correct,[`\\((f\\circ g)(x)=${m}(x^2-1)+${b}\\) y \\((g\\circ f)(x)=(${m}x+${b})^2-1\\).`,`\\((f\\circ g)(x)=${m}x+${b}-1\\) y \\((g\\circ f)(x)=x^2-1\\).`,`\\((f\\circ g)(x)=x^2-1\\) y \\((g\\circ f)(x)=${m}x+${b}\\).`]);return cloneQ(base,{prompt:`Sean \\(f(x)=x^2-1\\) y \\(g(x)=${m}x+${b}\\). ¿Cuál opción muestra correctamente que el orden de composición cambia el resultado?`,hint:'Calcula por separado \(f(g(x))\) y \(g(f(x))\).',feedback:'El orden de composición importa.',options:o.options,answer:o.answer,image:null,generatedVisual:{caption:'ORDEN DE COMPOSICIÓN',type:'dualFlow',title:'EL ORDEN CAMBIA EL RESULTADO',chains:[['x',`g(x)=${m}x+${b}`,`f(g(x))=(${m}x+${b})^2-1`],['x','f(x)=x^2-1',`g(f(x))=${m}(x^2-1)+${b}`]]}});},
19(base){const x0=pickOne([1,2,3]);const shift=pickOne([1,2]);const fVal=x0-shift;const gVal=fVal*fVal+3*fVal+4;const o=mc(String(gVal),[String(gVal+1),String(gVal+2),String(gVal-1)]);return cloneQ(base,{prompt:`Sean \\(f(x)=x-${shift}\\) y \\(g(x)=x^2+3x+4\\). ¿Cuál es el valor de \\((g\\circ f)(${x0})\\)?`,hint:`Primero calcula \(f(${x0})\) y luego reemplaza ese resultado en \(g\).`,feedback:'La composición numérica se evalúa respetando el orden.',options:o.options,answer:o.answer,image:null,generatedVisual:{caption:'EVALUACIÓN EN CADENA',type:'flow',title:`EVALUAR (g∘f)(${x0})`,steps:[`${x0}`,`f(${x0})=${fVal}`,`g(${fVal})=${gVal}`]}});},
21(base){const c=pickOne([2,3,4,5]);const d=pickOne([-2,-1,1,2]);const absd=Math.abs(d);const correct=`\\(\\dfrac{2\\pi}{${absd}}\\)`;const o=mc(correct,[`\\(${absd}\\pi\\)`,`\\(\\dfrac{2\\pi}{${c}}\\)`,`\\(${Math.abs(c*d)}\\)`]);return cloneQ(base,{prompt:`Considere la función \\(h(x)=\\cos(${c}${d>=0?'-':'+'}${absd}x)\\). ¿Cuál es su período?`,hint:'El período de \(\cos(Bx)\) es \(2\pi/|B|\). El desplazamiento horizontal interno no cambia el período.',feedback:'Solo importa el coeficiente de \(x\) dentro del coseno.',options:o.options,answer:o.answer,image:null,generatedVisual:{caption:'PERÍODO DE LA COMPOSICIÓN',type:'graph',title:`h(x)=cos(${c}${d>=0?'-':'+'}${absd}x)`,range:{xMin:-4,xMax:4,yMin:-1.5,yMax:1.5},curves:[{fn:x=>Math.cos(c-d*x),color:'#89ffaf',label:'h'}],annotations:[{x:-1.7,y:1.2,text:`T=2π/${absd}`,color:'#ffcf6c'}]}});},
23(base){const a=pickOne([1,2,3,4]);const correct=`\\(( -\\infty,${a}]\\)`;const o=mc(correct,[`\\([${a},\\infty)\\)`,`\\(( -\\infty,0]\\)`,`\\([0,${a}]\\)`]);return cloneQ(base,{prompt:`Si \\(h(x)=\\sqrt{\\sqrt[3]{${a}-x}}\\), ¿cuál es el dominio de \\(h\\)?`,hint:'La raíz cuadrada exige que su radicando sea no negativo. Entonces \(\sqrt[3]{'+a+'-x}\ge 0\), lo cual equivale a '+a+'-x\ge 0.',feedback:'La condición final es \(x\le '+a+'\).',options:o.options,answer:o.answer,image:null,generatedVisual:{caption:'DOMINIO DE LA COMPOSICIÓN',type:'numberLine',title:'Dominio de la composición',spec:{min:a-7,max:a+4,segments:[{a:-Infinity,b:a,color:'#89ffaf'}],points:[{x:a,label:String(a),color:'#89ffaf'}],note:`Se requiere x ≤ ${a}`}}});},
25(base){const b=pickOne([1,2,3]);const correct=`\\(\\dfrac{x+${b}}{x+${b+1}}+\\dfrac{x+${b+1}}{x+${b}}\\)`;const o=mc(correct,[`\\(\\dfrac{x+${b}}{x+${b+1}}\\)`,`\\(\\dfrac{x+${b+1}}{x+${b}}\\)`,`\\(\\dfrac{x+${b}}{x+${b+1}}+1\\)`]);return cloneQ(base,{prompt:`Si \\(f(u)=u+\\dfrac1u\\) y \\(g(x)=\\dfrac{x+${b}}{x+${b+1}}\\), ¿cuál es la expresión de \\((f\\circ g)(x)\\)?`,hint:'Sustituye \(g(x)\) en cada lugar donde aparece \(u\) en la expresión de \(f\).',feedback:'La composición correcta es \(g(x)+1/g(x)\).',options:o.options,answer:o.answer,image:null,generatedVisual:{caption:'SUSTITUCIÓN EN LA COMPOSICIÓN',type:'flow',title:'SUSTITUCIÓN EN f(g(x))',steps:[`g(x)=(x+${b})/(x+${b+1})`,'f(u)=u+1/u','f(g(x))=g(x)+1/g(x)']}});},
27(base){const input=pickOne([0,1,2]);const gVals={0:1,1:2,2:0};const fVals={0:-1,1:2,2:3};const mid=gVals[input],ans=fVals[mid];const o=mc(String(ans),[String(ans+1),String(ans+2),String(ans-1)]);return cloneQ(base,{prompt:`La tabla de \\(g\\) da \\(g(0)=1, g(1)=2, g(2)=0\\) y la de \\(f\\) da \\(f(0)=-1, f(1)=2, f(2)=3\\). ¿Cuál es el valor de \\((f\\circ g)(${input})\\)?`,hint:`Primero busca \(g(${input})\) y luego evalúa \(f\) en ese resultado.`,feedback:'La composición desde tablas se resuelve en dos pasos.',options:o.options,answer:o.answer,image:null,generatedVisual:{caption:'COMPOSICIÓN DESDE TABLA',type:'table',title:`COMPOSICIÓN f(g(${input}))`,headers:['Paso','Entrada','Salida'],rows:[['g',String(input),String(mid)],['f',String(mid),String(ans)]],highlight:[[0,2],[1,2]]}});},
29(base){const m=pickOne([1.1,1.15,1.2,1.25]);const b=pickOne([10000,15000,20000]);const ms=String(m).replace('.',',');const correct=`\\(${ms}x-${b}\\)`;const o=mc(correct,[`\\(${ms}x+${b}\\)`,`\\(x-${b}\\)`,`\\(${b}x-${ms}\\)`]);return cloneQ(base,{prompt:`Se definen \\(g(x)=${ms}x\\) y \\(f(x)=x-${b}\\). ¿Cuál es la expresión de \\((f\\circ g)(x)\\)?`,hint:'Primero se multiplica por el factor de \(g\) y después se resta la constante de \(f\).',feedback:'La composición reemplaza \(x\) por \(g(x)\) dentro de \(f\).',options:o.options,answer:o.answer,image:null,generatedVisual:{caption:'MÁQUINA DEL MODELO',type:'flow',title:'PROCESO COMPLETO',steps:['x',`g(x)=${ms}x`,`f(g(x))=${ms}x-${b}`]}});},
31(base){const h=pickOne([-3,-2,-1,1,2,3]);const k=pickOne([-3,-2,-1,1,2]);const correct=`\\(h(x)=(x${h>=0?'-'+h:'+'+Math.abs(h)})^2${signed(k)}\\)`;const o=mc(correct,[`\\(h(x)=(x${h>=0?'+':'-'}${Math.abs(h)})^2${signed(k)}\\)`,`\\(h(x)=(x${h>=0?'-'+h:'+'+Math.abs(h)})^2${signed(k+1)}\\)`,`\\(h(x)=x^2${signed(h)}\\)`]);return cloneQ(base,{prompt:'En la gráfica se muestran la función base \\(f(x)=x^2\\) y una parábola transformada \\(h\\). ¿Cuál expresión corresponde a \\(h(x)\\)?',hint:'Observa el vértice de la parábola transformada y compáralo con el de \(x^2\).',feedback:'La forma vértice permite identificar directamente la traslación.',options:o.options,answer:o.answer,image:null,generatedVisual:{caption:'LECTURA DE GRÁFICAS',type:'graph',title:'Identifica la parábola transformada',range:{xMin:h-5,xMax:h+5,yMin:k-4,yMax:k+16},curves:[{fn:x=>x*x,color:'#67d9ff',label:'f(x)=x^2'},{fn:x=>(x-h)*(x-h)+k,color:'#ff7d8d',label:'h(x)'}],points:[{x:h,y:k,label:`V(${h},${k})`,color:'#89ffaf'}]}});},
33(base){const a=pickOne([-3,-2,-1,1,2]);const b=pickOne([1,2,3]);const formula=sqrtFormula(a,b);const correct=pointLatex(a,b);const o=mc(correct,[pointLatex(-a,b),pointLatex(a,-b),pointLatex(b,a)]);return cloneQ(base,{prompt:`La gráfica azul representa \\(f(x)=\\sqrt{x}\\) y la roja representa \\(h(x)=${formula}\\). ¿Cuál es el punto inicial de \\(h\\)?`,hint:'El punto inicial se desplaza según las traslaciones horizontal y vertical.',feedback:'La gráfica de la raíz comienza donde el radicando vale cero.',options:o.options,answer:o.answer,image:null,generatedVisual:{caption:'LECTURA DE GRÁFICAS',type:'graph',title:`h(x)=${formula}`,range:{xMin:a-3,xMax:a+8,yMin:b-3,yMax:b+5},curves:[{fn:x=>Math.sqrt(x),color:'#67d9ff',label:'f(x)=√x'},{fn:x=>x>=a?Math.sqrt(x-a)+b:NaN,color:'#ff7d8d',label:'h(x)'}],points:[{x:a,y:b,label:'Inicio',color:'#89ffaf'}]}});},
35(base){const s=pickOne([-4,-3,-2,2,3,4]);const expr=`\\dfrac1{x${s>=0?'-'+s:'+'+Math.abs(s)}}`;const correct=`\\(x=${s}\\)`;const o=mc(correct,[`\\(x=${-s}\\)`,`\\(x=0\\)`,`\\(y=${s}\\)`]);return cloneQ(base,{prompt:`La gráfica roja corresponde a \\(h(x)=${expr}\\). ¿Cuál es la asíntota vertical de \\(h\\)?`,hint:'La asíntota vertical se ubica donde el denominador se anula.',feedback:'En \(1/(x-a)\), la asíntota vertical es \(x=a\).',options:o.options,answer:o.answer,image:null,generatedVisual:{caption:'LECTURA DE GRÁFICAS',type:'graph',title:`h(x)=${expr}`,range:{xMin:s-6,xMax:s+6,yMin:-6,yMax:6},curves:[{fn:x=>1/x,color:'#67d9ff',label:'f'},{fn:x=>1/(x-s),color:'#ff7d8d',label:'h'}],asymptotes:[{x:0,color:'#67d9ff'},{x:s,color:'#ff7d8d'},{y:0,color:'#ffcf6c'}]}});},
37(base){const x0=pickOne([1,2,3]);const correct=String(x0);const o=mc(correct,['1','2','3'].filter(v=>v!==String(x0)).concat(['4']));return cloneQ(base,{prompt:`Las rectas del gráfico representan \\(f(x)=x\\) y \\(g(x)=x\\). ¿Cuál es el valor de \\((f\\circ g)(${x0})\\)?`,hint:'Si ambas funciones son la identidad, aplicarlas conserva el mismo valor.',feedback:'La composición de la identidad consigo misma es la identidad.',options:o.options,answer:o.answer,image:null,generatedVisual:{caption:'LECTURA DE GRÁFICAS',type:'graph',title:'Composición de rectas',range:{xMin:-1,xMax:6,yMin:-1,yMax:6},curves:[{fn:x=>x,color:'#67d9ff',label:'f(x)=x'},{fn:x=>x,color:'#ff7d8d',label:'g(x)=x'}],points:[{x:x0,y:x0,label:`(${x0},${x0})`,color:'#89ffaf'}]}});},
39(base){const min=pickOne([-3,-2,-1]);const max=pickOne([3,4,5]);const c=pickOne([1,2,3]);const newMin=-max+c,newMax=-min+c;const correct=`\\([${newMin},${newMax}]\\)`;const o=mc(correct,[`\\([${min+c},${max+c}]\\)`,`\\([${-max-c},${-min-c}]\\)`,`\\([${newMin-1},${newMax-1}]\\)`]);return cloneQ(base,{prompt:`Si el rango de \\(f\\) es \\([${min},${max}]\\) y \\(h(x)=-f(x)+${c}\\), ¿cuál es el rango de \\(h\\)?`,hint:'Multiplicar por \(-1\) invierte el rango y luego se suma la constante.',feedback:'Transforma ambos extremos del rango original.',options:o.options,answer:o.answer,image:null,generatedVisual:{caption:'LECTURA DE GRÁFICAS',type:'range',title:'Transformación del rango',from:[min,max],to:[newMin,newMax]}});}
};
function renderGeneratedVisual(c,w,h,v){if(!v)return;switch(v.type){case 'graph':qvGraph(c,w,h,v);break;case 'pointTransform':qvPointTransform(c,w,h,v.title||'TRANSFORMACIÓN',v.from,v.to,v.labels||['f','h']);break;case 'range':qvRange(c,w,h,v.title||'Rango',v.from,v.to);break;case 'numberLine':qvNumberLine(c,w,h,v.title||'Recta',v.spec||{});break;case 'flow':qvFlow(c,w,h,v.title||'PROCESO',v.steps||[],v.note||'');break;case 'dualFlow':qvDualFlow(c,w,h,v.title||'COMPOSICIÓN',v.chains||[]);break;case 'table':qvTable(c,w,h,v.title||'TABLA',v.headers||[],v.rows||[],v.highlight||[]);break;default:qvFlow(c,w,h,'ANÁLISIS MATEMÁTICO',['Analiza la pregunta','Usa la pista','Responde']);}}

function currentWorld(){return worlds[state.world];}
function currentQuestion(){
  const world=state.world+1;
  const sequence=state.worldSequences[String(world)]||state.worldSequences[world]||[];
  const num=sequence[state.sequenceStep];
  const q=questions.find(item=>item.num===num) || questions.find(item=>item.world===world) || questions[0];
  if(q && q.num) state.usedQuestions.add(q.num);
  return q;
}
function totalMicroChallenges(){
  return worlds.length * 4;
}
function currentBackgroundProgress(){
  const total = totalMicroChallenges();
  if(total <= 1) return 0;
  const completed = state.world * 4 + state.sequenceStep;
  let local = 0;
  if(state.animating){
    local = 0.18 + 0.22 * clamp(state.shotVisualProgress || 0, 0, 1);
  }else if(state.currentQuestion){
    local = state.answered ? 0.82 : 0.56;
  }else if((state.shotPoints || 0) > 0){
    local = 0.32;
  }
  return clamp((completed + local) / (total - 1), 0, 1);
}
function groundY(){return canvas.height*0.78;}
function avatarLayoutMetrics(avatarId=ACTIVE_AVATAR, angle=state.angle){
  const cfg = avatarSpriteCatalog[ACTIVE_AVATAR];
  const spritePath = ((state.animating || state.avatarPrepActive) && state.avatarFramePath) ? state.avatarFramePath : getAvatarIdleSprite(ACTIVE_AVATAR, angle);
  const img = avatarSpriteImages[spritePath] || avatarImages[ACTIVE_AVATAR];
  const spriteMeta = parseSpriteRef(spritePath);
  const gY = groundY();
  const topMargin = Math.max(10, canvas.height*0.022);
  const availableH = Math.max(190, gY - topMargin - (cfg.yOffset || 0));
  // Nuevo ajuste fino: se reduce ligeramente la estatura visual del avatar
  // y se recoloca su apoyo en el suelo para que la mano que sostiene el arco
  // quede mejor alineada con el inicio de la trayectoria punteada.
  const proportionalH = canvas.width * 0.230;
  const minAvatarH = Math.min(222, availableH);
  const maxCanvasH = Math.min(availableH, canvas.height*0.670);
  const drawHeight = clamp(proportionalH, minAvatarH, maxCanvasH);
  const ratio = (spriteMeta.frameWidth && spriteMeta.frameHeight)
    ? (spriteMeta.frameWidth / spriteMeta.frameHeight)
    : ((img && img.naturalWidth && img.naturalHeight) ? (img.naturalWidth / img.naturalHeight) : 0.72);
  const drawWidth = drawHeight * ratio;
  const leftMargin = Math.max(18, canvas.width*0.032);
  const stanceFineTuneX = canvas.width * 0.016;
  const stanceFineTuneY = canvas.height * 0.024;
  const x = leftMargin + (cfg.x || 0) + stanceFineTuneX;
  const y = gY - drawHeight - (cfg.yOffset || 0) + stanceFineTuneY;
  return {cfg, spritePath, spriteMeta, img, gY, drawHeight, drawWidth, x, y};
}
function avatarArrowGuide(metrics=avatarLayoutMetrics(), angle=state.angle){
  const nearest = closestNumber(shotRowAngles, angle);
  const anchorPresets = {
    '-45': {origin:[0.462,0.454], scale:0.238},
    '-35': {origin:[0.458,0.433], scale:0.241},
    '-25': {origin:[0.452,0.409], scale:0.244},
    '-15': {origin:[0.446,0.386], scale:0.247},
    '-5':  {origin:[0.441,0.367], scale:0.249},
    '5':   {origin:[0.437,0.350], scale:0.250},
    '15':  {origin:[0.433,0.336], scale:0.249},
    '25':  {origin:[0.430,0.321], scale:0.247},
    '35':  {origin:[0.427,0.305], scale:0.245},
    '45':  {origin:[0.424,0.289], scale:0.242},
    '55':  {origin:[0.420,0.273], scale:0.239},
    '65':  {origin:[0.417,0.257], scale:0.235},
    '70':  {origin:[0.415,0.248], scale:0.233}
  };
  // El punto de lanzamiento se ancla al nock de la flecha (mano que tira de
  // la cuerda), no a la mano delantera del arco. Así la parábola nace desde
  // donde visualmente se ve la cola de la flecha en cada pose.
  const anchorAngles = Object.keys(anchorPresets).map(Number).sort((a,b)=>a-b);
  const bounds = angleBounds(anchorAngles, angle);
  const pa = anchorPresets[String(bounds.lower)] || anchorPresets['5'];
  const pb = anchorPresets[String(bounds.upper)] || pa;
  const preset = {
    origin:[
      pa.origin[0] + (pb.origin[0]-pa.origin[0])*bounds.t,
      pa.origin[1] + (pb.origin[1]-pa.origin[1])*bounds.t
    ],
    scale:pa.scale + (pb.scale-pa.scale)*bounds.t
  };
  const fineTune = {x: metrics.drawWidth*0.004, y: metrics.drawHeight*0.002};
  const origin = {
    x: metrics.x + metrics.drawWidth*preset.origin[0] + fineTune.x,
    y: metrics.y + metrics.drawHeight*preset.origin[1] + fineTune.y
  };
  const visualAngle = -angle * Math.PI/180;
  const arrowLen = metrics.drawWidth * preset.scale;
  const backLen = arrowLen * 0.18;
  const frontLen = arrowLen * 1.46;
  const ux = Math.cos(visualAngle);
  const uy = Math.sin(visualAngle);
  const start = {x: origin.x - ux*backLen, y: origin.y - uy*backLen};
  const end = {x: origin.x + ux*frontLen, y: origin.y + uy*frontLen};
  const center = {x:(start.x+end.x)/2, y:(start.y+end.y)/2};
  const launch = {x: origin.x, y: origin.y};
  const length = Math.hypot(end.x-start.x,end.y-start.y);
  return {start,end,center,launch,visualAngle,length,nearest,origin};
}
function avatarArrowAnchor(metrics=avatarLayoutMetrics(), angle=state.angle){
  return avatarArrowGuide(metrics, angle).launch;
}
function origin(){const m=avatarLayoutMetrics(); const a=avatarArrowGuide(m,state.angle).launch; return {x:a.x, y:a.y};}
function distanceScale(){return (canvas.width*0.72)/105;}
function distToX(d){return origin().x + d*distanceScale();}
function heightMeters(){return Math.round((groundY() - state.target.y)/8);}
function possibleChallengeGrade(){return clamp(0.25*(1-state.challengeFails*0.10-state.challengeWrong*0.20),0,0.25);}
function possibleWorldGrade(){return clamp(state.worldScore+possibleChallengeGrade(),0,1);}
function normalizeText(v){return (v||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9. ]/g," ").replace(/\s+/g," ").trim();}
function recommendedSpeed(){
  if(!state.target) return null;
  const d = state.target.distance;
  const h = (arrowNock().y - state.target.y)/8;
  const theta = state.angle * Math.PI/180;
  const denom = 2*Math.cos(theta)**2*(d*Math.tan(theta)-h);
  if(denom <= 0) return null;
  return Math.sqrt(g*d*d/denom);
}
function targetPalette(theme){
  const palettes={
    forest:["#f3eed8","#5c8f54","#234037","#d9bf62","#f8f1c7"],
    meadow:["#fbf4df","#8bbf56","#325a45","#f4c95a","#fff2b8"],
    canyon:["#f7ead7","#c97a43","#5d3a2d","#f2c063","#fff0c9"],
    mountain:["#f4f6f0","#6c97b8","#274154","#f0d36c","#fff6c9"],
    coast:["#fff8e9","#55b8c8","#1c6076","#ffd36e","#fff0b2"]
  };
  return palettes[theme]||palettes.forest;
}
function newTarget(){
  const minD = 46 + state.world*6;
  const maxD = 68 + state.world*7;
  const distance = Math.round(rand(minD,maxD));
  const minY = canvas.height*0.18;
  const maxY = groundY()-55;
  let y = Math.round(rand(minY,maxY));
  if(state.target && Math.abs(y-state.target.y)<canvas.height*0.16){ y = y < (minY+maxY)/2 ? Math.min(maxY,y+canvas.height*0.22) : Math.max(minY,y-canvas.height*0.22); }
  const radius = targetRadii[Math.floor(Math.random()*targetRadii.length)];
  const palette = targetPalette(currentWorld().theme);
  state.target = {distance, x:distToX(distance), y, radius, palette};
  state.angle = 0; state.speed = 0; state.arrowLoaded = false;
  updateLabels();
}
function updateLabels(){
  const w=currentWorld();
  els.worldTitle.textContent = w.name; els.worldLabel.textContent = `${state.world+1}/5`; els.scoreLabel.textContent = finalScore().toFixed(2);
  els.shotProgressLabel.textContent = state.shotPoints.toFixed(1); els.shotGoalLabel.textContent = w.goal; els.arrowsLabel.textContent = state.arrows; els.worldGradeLabel.textContent = state.worldScore.toFixed(2);
  els.distanceLabel.textContent = state.target ? state.target.distance : "-"; els.heightLabel.textContent = state.target ? heightMeters() : "-"; els.radiusLabel.textContent = state.target ? state.target.radius : "-";
  els.angleValue.textContent = state.angle; els.speedValue.textContent = state.speed; els.angle.value = state.angle; els.speed.value = state.speed;
  updateTeacherPanel();
}
function drawRoundedRect(x,y,w,h,r,fill,stroke){ctx.beginPath();ctx.roundRect(x,y,w,h,r);ctx.fillStyle=fill;ctx.fill();if(stroke){ctx.strokeStyle=stroke;ctx.stroke();}}
function drawBackground(){
  const gY=groundY();
  const W=canvas.width, H=canvas.height;
  ctx.clearRect(0,0,W,H);

  if(allFantasyBackgroundsReady()){
    const phaseCount = fantasyBackgroundPaths.length;
    const progress = currentBackgroundProgress();
    const segment = progress * (phaseCount - 1);
    const baseIndex = Math.min(phaseCount - 1, Math.floor(segment));
    const nextIndex = Math.min(phaseCount - 1, baseIndex + 1);
    const blend = baseIndex === nextIndex ? 0 : (segment - baseIndex);
    const pan = (progress - 0.5) * W * 0.024;
    const lift = Math.sin(progress * Math.PI) * H * 0.008;

    ctx.save();
    ctx.globalAlpha = 1;
    drawCoverImage(fantasyBackgroundImages[fantasyBackgroundPaths[baseIndex]], pan, -lift);
    if(nextIndex !== baseIndex && blend > 0.001){
      ctx.globalAlpha = blend;
      drawCoverImage(fantasyBackgroundImages[fantasyBackgroundPaths[nextIndex]], pan*0.65, -lift*0.6);
    }
    ctx.restore();

    // Capa tenue para integrar el campo de juego con el fondo cinematográfico.
    const overlay = ctx.createLinearGradient(0, H*0.48, 0, H);
    overlay.addColorStop(0, 'rgba(255,255,255,0.03)');
    overlay.addColorStop(0.55, 'rgba(80,116,54,0.08)');
    overlay.addColorStop(1, 'rgba(53,102,41,0.14)');
    ctx.fillStyle = overlay;
    ctx.fillRect(0,0,W,H);

    // Franja del campo para que el arquero y el blanco se apoyen visualmente.
    const turf = ctx.createLinearGradient(0,gY-16,0,H);
    turf.addColorStop(0,'rgba(128,192,92,0.18)');
    turf.addColorStop(1,'rgba(81,150,64,0.30)');
    ctx.fillStyle = turf;
    ctx.fillRect(0,gY-10,W,H-gY+10);

    ctx.strokeStyle='rgba(224,244,178,.16)';
    ctx.lineWidth=Math.max(1.2,W*0.0017);
    for(let i=0;i<6;i++){
      const y=gY-4+i*(H*0.028);
      ctx.beginPath();
      ctx.moveTo(0,y);
      ctx.lineTo(W,y);
      ctx.stroke();
    }

    const laneLeftNear=origin().x+26;
    const laneRightNear=origin().x+212;
    const laneLeftFar=W*0.72;
    const laneRightFar=W*0.94;
    ctx.fillStyle='rgba(238,229,153,.12)';
    ctx.beginPath();
    ctx.moveTo(laneLeftNear,gY+16);
    ctx.lineTo(laneRightNear,gY+16);
    ctx.lineTo(laneRightFar,gY-42);
    ctx.lineTo(laneLeftFar,gY-42);
    ctx.closePath();
    ctx.fill();

    ctx.strokeStyle='rgba(250,242,176,.16)';
    ctx.lineWidth=3.5;
    ctx.beginPath();
    ctx.moveTo(laneLeftNear+10,gY+14);
    ctx.lineTo(laneLeftFar+8,gY-42);
    ctx.moveTo(laneRightNear-12,gY+14);
    ctx.lineTo(laneRightFar-10,gY-42);
    ctx.stroke();
    return;
  }

  // Respaldo simple si las imágenes aún no han cargado.
  const sky=ctx.createLinearGradient(0,0,0,H*0.78);
  sky.addColorStop(0,'#72a8db');
  sky.addColorStop(1,'#c6e6ff');
  ctx.fillStyle=sky;
  ctx.fillRect(0,0,W,H);
  ctx.fillStyle='#8fbe68';
  ctx.fillRect(0,gY-12,W,H-gY+12);
}

function drawTarget(){
  const t=state.target;
  if(!t) return;
  ctx.save();

  if(medievalTargetImageReady && medievalTargetImage.complete){
    // La diana medieval se dibuja alineando exactamente el centro visual del
    // tablero con state.target.x/state.target.y, de modo que el puntaje y la
    // colisión sigan usando el mismo radio lógico del juego.
    const boardOuterRadius = 346;   // radio del disco en el asset recortado
    const boardCenterX = 386;       // centro del disco dentro del asset
    const boardCenterY = 543;
    const scale = t.radius / boardOuterRadius;
    const drawW = medievalTargetImage.width * scale;
    const drawH = medievalTargetImage.height * scale;
    const drawX = t.x - boardCenterX * scale;
    const drawY = t.y - boardCenterY * scale;

    ctx.shadowColor='rgba(0,0,0,.28)';
    ctx.shadowBlur=14;
    ctx.shadowOffsetY=6;
    ctx.drawImage(medievalTargetImage, drawX, drawY, drawW, drawH);
    ctx.shadowBlur=0;

    // Marca tenue del centro para apoyar la lectura del impacto.
    ctx.strokeStyle='rgba(35,24,19,.55)';
    ctx.lineWidth=Math.max(1.2, t.radius*0.028);
    ctx.beginPath();
    ctx.moveTo(t.x-t.radius*1.04,t.y);
    ctx.lineTo(t.x+t.radius*1.04,t.y);
    ctx.moveTo(t.x,t.y-t.radius*1.04);
    ctx.lineTo(t.x,t.y+t.radius*1.04);
    ctx.stroke();
    ctx.restore();
    return;
  }

  // Respaldo simple si el asset de la diana aún no ha cargado.
  ctx.strokeStyle="#8a542d";
  ctx.lineWidth=Math.max(7, canvas.width*0.0052);
  ctx.beginPath();
  ctx.moveTo(t.x, t.y+t.radius*0.9);
  ctx.lineTo(t.x, groundY()+10);
  ctx.stroke();

  ctx.shadowColor='rgba(0,0,0,.28)';
  ctx.shadowBlur=18;
  ctx.shadowOffsetY=6;
  const colors=t.palette || ["#f4efe2","#6f9c63","#204633","#e0bf58","#f5eec2"];
  const rings=[1,.78,.58,.36,.16];
  rings.forEach((r,i)=>{
    ctx.beginPath();
    ctx.fillStyle=colors[i]||colors[colors.length-1];
    ctx.arc(t.x,t.y,t.radius*r,0,Math.PI*2);
    ctx.fill();
    ctx.strokeStyle='rgba(0,0,0,.48)';
    ctx.lineWidth=2;
    ctx.stroke();
  });
  ctx.shadowBlur=0;
  ctx.strokeStyle='rgba(0,0,0,.72)';
  ctx.lineWidth=2.5;
  ctx.beginPath();
  ctx.moveTo(t.x-t.radius-12,t.y);
  ctx.lineTo(t.x+t.radius+12,t.y);
  ctx.moveTo(t.x,t.y-t.radius-12);
  ctx.lineTo(t.x,t.y+t.radius+12);
  ctx.stroke();
  ctx.restore();
}

function avatarStyle(){
  const styles={
    hombre:{
      accent:"#3b82f6", secondary:"#1e3a8a", trim:"#dbeafe", tunic:"#2b3a67", sleeves:"#314a87", pants:"#3c2f25", skin:"#d7a179", hair:"#1a1615", shoes:"#7b4f2f", eye:"#5ab0ff", hat:"#6a4b2b", hatBand:"#2563eb", feather:"#dbeafe", belt:"#5c3c22", cape:"#1c274b", quiver:"#6f4b2c", build:1, height:1.02, headScale:1, kind:"human"
    },
    mujer:{
      accent:"#ec4899", secondary:"#9d174d", trim:"#ffe4f1", tunic:"#5b2a50", sleeves:"#7c3b6d", pants:"#34273e", skin:"#e7b48d", hair:"#2b1b20", shoes:"#925d72", eye:"#7cc7ff", hat:"#7a4655", hatBand:"#ec4899", feather:"#ffd1dc", belt:"#623346", cape:"#432247", quiver:"#70452f", build:.98, height:1.01, headScale:1, kind:"woman"
    },
    marciano:{
      accent:"#84cc16", secondary:"#365314", trim:"#ecfccb", tunic:"#1f4130", sleeves:"#2d5a43", pants:"#234635", skin:"#8cdf72", hair:"#1a2f22", shoes:"#8b6a2d", eye:"#e4ff8f", hat:"#4b5d3c", hatBand:"#84cc16", feather:"#d9ff7a", belt:"#4a5a35", cape:"#183628", quiver:"#53693f", build:.97, height:1.03, headScale:1.08, kind:"alien"
    },
    enano:{
      accent:"#c08457", secondary:"#7c4a26", trim:"#f8e7d3", tunic:"#5a3826", sleeves:"#754a33", pants:"#47352a", skin:"#cb9768", hair:"#4b2a19", shoes:"#8b5e3c", eye:"#7bd1ff", hat:"#6c4a2d", hatBand:"#b77945", feather:"#f5d2a9", belt:"#3a271c", cape:"#40261b", quiver:"#6b4729", build:1.05, height:.89, headScale:1.02, kind:"dwarf"
    },
    elfo:{
      accent:"#2dd4bf", secondary:"#0f766e", trim:"#def7f3", tunic:"#285548", sleeves:"#2f6a58", pants:"#31483f", skin:"#efc79c", hair:"#25362d", shoes:"#7d6f52", eye:"#6cf0e2", hat:"#2f5f54", hatBand:"#14b8a6", feather:"#d3fff9", belt:"#365244", cape:"#1f3f37", quiver:"#4c6c57", build:.96, height:1.05, headScale:.98, kind:"elf"
    }
  };
  styles.guerrero = styles.hombre;
  styles.elfica = styles.elfo;
  styles.explorador = styles.elfo;
  return styles[state.avatar]||styles.hombre;
}
function avatarPose(){
  const st=avatarStyle(), s=st.height, a=state.angle*Math.PI/180, dir={x:Math.cos(a),y:-Math.sin(a)}, perp={x:-dir.y,y:dir.x};
  const baseX=96, baseY=groundY()-16;

  // Postura QA28: el brazo izquierdo sostiene realmente el arco. La empuñadura
  // coincide con la mano delantera y todo el conjunto se mantiene por debajo
  // del rostro para dejar visible la expresión del avatar.
  const shoulderLine={x:baseX+55*s,y:baseY-188*s};
  const armReach=42*s;
  const bowHand={
    x:shoulderLine.x + dir.x*armReach + perp.x*7*s,
    y:shoulderLine.y + dir.y*armReach + perp.y*7*s
  };
  const bowCenter={x:bowHand.x,y:bowHand.y};
  const bowSize=77*s;
  const bowTop={x:bowCenter.x+perp.x*bowSize,y:bowCenter.y+perp.y*bowSize};
  const bowBottom={x:bowCenter.x-perp.x*bowSize,y:bowCenter.y-perp.y*bowSize};
  const tension=clamp(state.speed/170,0,1);
  const drawBack=23*s + tension*7*s;
  const stringHand={
    x:bowCenter.x - dir.x*drawBack - perp.x*3*s,
    y:bowCenter.y - dir.y*drawBack + perp.y*10*s
  };
  return {st,s,a,dir,perp,baseX,baseY,shoulderLine,bowHand,bowCenter,bowTop,bowBottom,stringHand};
}
function arrowNock(){const m=avatarLayoutMetrics(); return avatarArrowAnchor(m, state.angle);} // mano que sostiene la cola de la flecha

function drawAvatarHat(kind,x,y,scale,st){
  if(kind==="alien") return;
  ctx.save();
  if(kind==="human"){
    ctx.fillStyle=st.hat;
    ctx.beginPath();
    ctx.ellipse(x,y+3*scale,26*scale,7*scale,0,0,Math.PI*2);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(x-16*scale,y+4*scale);
    ctx.quadraticCurveTo(x-10*scale,y-14*scale,x+6*scale,y-16*scale);
    ctx.quadraticCurveTo(x+18*scale,y-9*scale,x+15*scale,y+4*scale);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle=st.hatBand;
    ctx.fillRect(x-12*scale,y-2*scale,21*scale,4*scale);
    ctx.strokeStyle=st.feather; ctx.lineWidth=2.2*scale;
    ctx.beginPath(); ctx.moveTo(x+5*scale,y-14*scale); ctx.quadraticCurveTo(x+15*scale,y-28*scale,x+22*scale,y-14*scale); ctx.stroke();
  } else if(kind==="woman"){
    ctx.fillStyle=st.hat;
    ctx.beginPath(); ctx.ellipse(x,y+4*scale,25*scale,7*scale,0,0,Math.PI*2); ctx.fill();
    ctx.beginPath();
    ctx.moveTo(x-13*scale,y+4*scale);
    ctx.quadraticCurveTo(x-2*scale,y-18*scale,x+14*scale,y-12*scale);
    ctx.quadraticCurveTo(x+18*scale,y-2*scale,x+11*scale,y+6*scale);
    ctx.closePath(); ctx.fill();
    ctx.fillStyle=st.hatBand; ctx.fillRect(x-10*scale,y-1*scale,18*scale,4*scale);
    ctx.strokeStyle=st.feather; ctx.lineWidth=2*scale; ctx.beginPath(); ctx.moveTo(x+8*scale,y-9*scale); ctx.quadraticCurveTo(x+18*scale,y-20*scale,x+24*scale,y-3*scale); ctx.stroke();
  } else if(kind==="alien"){
    ctx.fillStyle=st.hat;
    ctx.beginPath(); ctx.ellipse(x+2*scale,y-4*scale,19*scale,12*scale,0,0,Math.PI*2); ctx.fill();
    ctx.fillStyle="rgba(236,252,203,.25)"; ctx.beginPath(); ctx.ellipse(x+1*scale,y-6*scale,13*scale,8*scale,0,0,Math.PI*2); ctx.fill();
    ctx.strokeStyle=st.accent; ctx.lineWidth=2*scale; ctx.beginPath(); ctx.moveTo(x-8*scale,y-15*scale); ctx.lineTo(x-14*scale,y-28*scale); ctx.moveTo(x+11*scale,y-15*scale); ctx.lineTo(x+16*scale,y-28*scale); ctx.stroke();
    ctx.fillStyle=st.feather; ctx.beginPath(); ctx.arc(x-14*scale,y-28*scale,3*scale,0,Math.PI*2); ctx.arc(x+16*scale,y-28*scale,3*scale,0,Math.PI*2); ctx.fill();
  } else if(kind==="dwarf"){
    ctx.fillStyle=st.hat;
    ctx.beginPath(); ctx.ellipse(x,y+4*scale,23*scale,7*scale,0,0,Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.moveTo(x-14*scale,y+5*scale); ctx.quadraticCurveTo(x-8*scale,y-17*scale,x+7*scale,y-18*scale); ctx.quadraticCurveTo(x+17*scale,y-10*scale,x+15*scale,y+5*scale); ctx.closePath(); ctx.fill();
    ctx.fillStyle=st.hatBand; ctx.fillRect(x-11*scale,y-1*scale,20*scale,5*scale);
    ctx.fillStyle="#d8c4a8"; ctx.fillRect(x-2*scale,y-2*scale,5*scale,7*scale);
  } else if(kind==="elf"){
    ctx.fillStyle=st.hat;
    ctx.beginPath();
    ctx.moveTo(x-13*scale,y+6*scale);
    ctx.quadraticCurveTo(x-5*scale,y-3*scale,x+4*scale,y-33*scale);
    ctx.quadraticCurveTo(x+20*scale,y-14*scale,x+10*scale,y+8*scale);
    ctx.closePath(); ctx.fill();
    ctx.fillStyle=st.hatBand; ctx.fillRect(x-9*scale,y+1*scale,15*scale,4*scale);
    ctx.strokeStyle=st.feather; ctx.lineWidth=1.8*scale; ctx.beginPath(); ctx.moveTo(x+5*scale,y-26*scale); ctx.quadraticCurveTo(x+18*scale,y-34*scale,x+19*scale,y-20*scale); ctx.stroke();
  }
  ctx.restore();
}

function drawLimbPath(points,width,gradStops){
  const grad = ctx.createLinearGradient(points[0].x,points[0].y,points[points.length-1].x,points[points.length-1].y);
  gradStops.forEach(stop=>grad.addColorStop(stop[0],stop[1]));
  ctx.strokeStyle=grad; ctx.lineWidth=width; ctx.beginPath();
  ctx.moveTo(points[0].x,points[0].y);
  for(let i=1;i<points.length;i++) ctx.lineTo(points[i].x,points[i].y);
  ctx.stroke();
}
function drawArmPath(points,width,stops){
  const g=ctx.createLinearGradient(points[0].x,points[0].y,points[points.length-1].x,points[points.length-1].y);
  stops.forEach(s=>g.addColorStop(s[0],s[1]));
  ctx.strokeStyle=g; ctx.lineWidth=width; ctx.lineCap='round'; ctx.lineJoin='round';
  ctx.beginPath(); ctx.moveTo(points[0].x,points[0].y);
  for(let i=1;i<points.length;i++) ctx.lineTo(points[i].x,points[i].y);
  ctx.stroke();
}
function drawMaleHand(x,y,s,dir,perp,fill='#231a22'){
  const ang=Math.atan2(dir.y,dir.x);
  ctx.save();
  ctx.translate(x,y); ctx.rotate(ang);
  const handGrad=ctx.createLinearGradient(-7*s,-5*s,7*s,6*s);
  handGrad.addColorStop(0,fill); handGrad.addColorStop(.55,fill); handGrad.addColorStop(1,'rgba(0,0,0,.30)');
  ctx.fillStyle=handGrad;
  ctx.beginPath();
  ctx.ellipse(0,0,6.9*s,5.2*s,0,0,Math.PI*2);
  ctx.fill();
  ctx.strokeStyle='rgba(255,229,191,.42)'; ctx.lineWidth=1.05*s;
  for(const yy of [-2.3,-0.4,1.6]){ctx.beginPath();ctx.moveTo(-1.5*s,yy*s);ctx.lineTo(5.2*s,yy*s+0.65*s);ctx.stroke();}
  ctx.fillStyle='rgba(255,255,255,.10)';
  ctx.beginPath(); ctx.ellipse(-1.7*s,-1.5*s,2.8*s,1.8*s,-.2,0,Math.PI*2); ctx.fill();
  ctx.restore();
}
function drawTubeLimb(a,b,c,outerW,innerW,outerStops,innerStops,shine){
  const grad=ctx.createLinearGradient(a.x,a.y,c.x,c.y); outerStops.forEach(s=>grad.addColorStop(s[0],s[1]));
  ctx.strokeStyle=grad; ctx.lineWidth=outerW; ctx.lineCap='round'; ctx.lineJoin='round';
  ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.quadraticCurveTo(b.x,b.y,c.x,c.y); ctx.stroke();
  const grad2=ctx.createLinearGradient(a.x,a.y,c.x,c.y); innerStops.forEach(s=>grad2.addColorStop(s[0],s[1]));
  ctx.strokeStyle=grad2; ctx.lineWidth=innerW;
  ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.quadraticCurveTo(b.x,b.y,c.x,c.y); ctx.stroke();
  if(shine){
    ctx.strokeStyle=shine; ctx.lineWidth=Math.max(1,innerW*.13);
    ctx.beginPath(); ctx.moveTo(a.x-1.2,a.y-1.8); ctx.quadraticCurveTo(b.x-1.8,b.y-2.5,c.x-1.5,c.y-2); ctx.stroke();
  }
}
function drawArmBrace(center,dir,s,w=11){
  const ang=Math.atan2(dir.y,dir.x);
  ctx.save(); ctx.translate(center.x,center.y); ctx.rotate(ang);
  const g=ctx.createLinearGradient(-w*s,0,w*s,0); g.addColorStop(0,'#8b6846'); g.addColorStop(.5,'#d8b07a'); g.addColorStop(1,'#6d4b2d');
  ctx.strokeStyle=g; ctx.lineWidth=2.2*s;
  ctx.beginPath(); ctx.moveTo(-w*s,-6*s); ctx.lineTo(-w*s,6*s); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(w*s,-6*s); ctx.lineTo(w*s,6*s); ctx.stroke();
  ctx.restore();
}
function drawShoulderCap(x,y,rx,ry,rot,s){
  ctx.save();
  ctx.translate(x,y); ctx.rotate(rot);
  const g=ctx.createLinearGradient(-rx, -ry, rx, ry); g.addColorStop(0,'#49506a'); g.addColorStop(.55,'#242c40'); g.addColorStop(1,'#101726');
  ctx.fillStyle=g; ctx.beginPath(); ctx.ellipse(0,0,rx,ry,0,0,Math.PI*2); ctx.fill();
  ctx.strokeStyle='rgba(226,190,137,.80)'; ctx.lineWidth=1.5*s; ctx.stroke();
  ctx.strokeStyle='rgba(227,237,255,.28)'; ctx.lineWidth=1*s; ctx.beginPath(); ctx.arc(-rx*.12,-ry*.08,Math.max(8,rx*.64),Math.PI*1.1,Math.PI*1.75); ctx.stroke();
  ctx.restore();
}
function solveTwoBoneElbow(shoulder,hand,upperLen,foreLen,bendSign=1){
  const dx=hand.x-shoulder.x, dy=hand.y-shoulder.y;
  const raw=Math.hypot(dx,dy) || 1;
  const maxReach=Math.max(upperLen+foreLen-0.6,1);
  const minReach=Math.abs(upperLen-foreLen)+0.6;
  const dist=clamp(raw,minReach,maxReach);
  const ux=dx/raw, uy=dy/raw;
  const a=(upperLen*upperLen - foreLen*foreLen + dist*dist)/(2*dist);
  const h=Math.sqrt(Math.max(upperLen*upperLen - a*a,0));
  const px=shoulder.x + ux*a;
  const py=shoulder.y + uy*a;
  const perpX=-uy, perpY=ux;
  return {x:px + perpX*h*bendSign, y:py + perpY*h*bendSign};
}

function drawDetailedMaleAvatar(st,s,baseX,baseY,bowHand,stringHand,dir,perp){
  const img = avatarImages.hombre;
  const ground = groundY()+6;
  const ratio = (img && img.naturalWidth && img.naturalHeight) ? (img.naturalWidth/img.naturalHeight) : (220/380);
  const spriteH = Math.min(canvas.height*.46, 312);
  const spriteW = spriteH*ratio;
  const sx = baseX - spriteW*.295;
  const sy = ground-spriteH+7;

  ctx.fillStyle='rgba(0,0,0,.18)';
  ctx.beginPath(); ctx.ellipse(sx+spriteW*.48,ground+10,56*s,11*s,0,0,Math.PI*2); ctx.fill();
  if(img && img.complete && img.naturalWidth){
    ctx.save();
    ctx.shadowColor='rgba(0,0,0,.14)'; ctx.shadowBlur=8; ctx.shadowOffsetY=3;
    ctx.drawImage(img,sx,sy,spriteW,spriteH);
    ctx.restore();
  }

  // Los anclajes vuelven a los hombros anatómicos del SVG. Así los brazos
  // quedan unidos al cuerpo y ya no parecen salir del pecho o flotar.
  const svgToCanvas=(x,y)=>({x:sx+(x/220)*spriteW,y:sy+(y/380)*spriteH});
  const rearShoulder=svgToCanvas(78,109);
  const frontShoulder=svgToCanvas(145,110);
  const upperArmLen=20.5*s;
  const foreArmLen=20.5*s;

  // Ambos brazos conservan la misma longitud. El brazo delantero termina justo
  // en la empuñadura del arco; el posterior lleva la mano a la cuerda.
  const rearElbow=solveTwoBoneElbow(rearShoulder,stringHand,upperArmLen,foreArmLen,-1);
  rearElbow.x-=1.5*s; rearElbow.y+=2.5*s;
  const frontElbow=solveTwoBoneElbow(frontShoulder,bowHand,upperArmLen,foreArmLen,1);
  frontElbow.x+=0.8*s; frontElbow.y+=2.8*s;

  drawShoulderCap(rearShoulder.x,rearShoulder.y,12.0*s,8.5*s,.22,s);
  drawShoulderCap(frontShoulder.x,frontShoulder.y,12.6*s,8.7*s,-.12,s);

  drawTubeLimb(rearShoulder,
    {x:(rearShoulder.x+rearElbow.x)/2,y:(rearShoulder.y+rearElbow.y)/2},rearElbow,
    12.8*s,7.9*s,
    [[0,'#4b5878'],[.55,'#2c3855'],[1,'#182136']],
    [[0,'#354464'],[.55,'#202b46'],[1,'#11182a']],
    'rgba(235,242,255,.18)');
  drawTubeLimb(rearElbow,
    {x:(rearElbow.x+stringHand.x)/2,y:(rearElbow.y+stringHand.y)/2},stringHand,
    10.0*s,6.0*s,
    [[0,'#61432f'],[.55,'#3b2a20'],[1,'#20161a']],
    [[0,'#33263a'],[.6,'#211a2c'],[1,'#100d16']],
    'rgba(248,227,195,.12)');
  drawArmBrace({x:(rearElbow.x+stringHand.x)/2,y:(rearElbow.y+stringHand.y)/2},dir,s,5.6);
  drawMaleHand(stringHand.x,stringHand.y,s,dir,perp,'#201519');

  drawTubeLimb(frontShoulder,
    {x:(frontShoulder.x+frontElbow.x)/2,y:(frontShoulder.y+frontElbow.y)/2},frontElbow,
    12.8*s,7.9*s,
    [[0,'#536487'],[.52,'#35466c'],[1,'#1f2b47']],
    [[0,'#3e5078'],[.58,'#293a5e'],[1,'#15213a']],
    'rgba(229,238,255,.20)');
  drawTubeLimb(frontElbow,
    {x:(frontElbow.x+bowHand.x)/2,y:(frontElbow.y+bowHand.y)/2},bowHand,
    10.1*s,6.0*s,
    [[0,'#71503a'],[.5,'#4b3528'],[1,'#2d211a']],
    [[0,'#40527a'],[.55,'#293858'],[1,'#151d31']],
    'rgba(229,238,255,.16)');
  drawArmBrace({x:(frontElbow.x+bowHand.x)/2,y:(frontElbow.y+bowHand.y)/2},dir,s,5.8);
  drawMaleHand(bowHand.x,bowHand.y,s,dir,perp,'#162033');
  // Empuñadura visible: confirma que la mano izquierda está apoyada en el arco.
  ctx.save();
  ctx.translate(bowHand.x,bowHand.y);
  ctx.rotate(Math.atan2(perp.y,perp.x));
  const grip=ctx.createLinearGradient(-7*s,0,7*s,0);
  grip.addColorStop(0,'#3a2417'); grip.addColorStop(.5,'#8b5a34'); grip.addColorStop(1,'#2b190f');
  ctx.fillStyle=grip; ctx.beginPath(); ctx.roundRect(-5.2*s,-10*s,10.4*s,20*s,4*s); ctx.fill();
  ctx.strokeStyle='rgba(244,211,157,.5)'; ctx.lineWidth=1.2*s; ctx.stroke();
  ctx.restore();

  // Detalle decorativo: broche central del peto para reforzar el acabado visual.
  ctx.save();
  const clasp=ctx.createLinearGradient(frontShoulder.x-12*s,frontShoulder.y+16*s,frontShoulder.x+12*s,frontShoulder.y+27*s);
  clasp.addColorStop(0,'rgba(245,214,154,.95)'); clasp.addColorStop(.55,'rgba(170,118,54,.98)'); clasp.addColorStop(1,'rgba(92,59,27,.98)');
  ctx.fillStyle=clasp; ctx.beginPath(); ctx.ellipse((rearShoulder.x+frontShoulder.x)/2,(rearShoulder.y+frontShoulder.y)/2+25*s,8*s,5.4*s,0,0,Math.PI*2); ctx.fill();
  ctx.strokeStyle='rgba(255,242,210,.55)'; ctx.lineWidth=1.2*s; ctx.stroke();
  ctx.restore();

  // Refuerzo visual de las articulaciones para eliminar quiebres o brazos flotantes.
  ctx.save();
  ctx.fillStyle='#293858';
  ctx.beginPath(); ctx.arc(frontElbow.x,frontElbow.y,5.2*s,0,Math.PI*2); ctx.fill();
  ctx.fillStyle='#211a2c';
  ctx.beginPath(); ctx.arc(rearElbow.x,rearElbow.y,5.2*s,0,Math.PI*2); ctx.fill();
  ctx.restore();
}
function drawArrowGraphic(x,y,angle,length=34,alpha=1){
  const len = length;
  const shaftHalf = Math.max(1.1, len*0.028);
  const headLen = len*0.22;
  const fletchLen = len*0.18;
  const fletchHeight = Math.max(3.5, len*0.085);
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.translate(x,y);
  ctx.rotate(angle);

  const shaft = ctx.createLinearGradient(-len,0,len,0);
  shaft.addColorStop(0,'#61381d');
  shaft.addColorStop(.35,'#9b6130');
  shaft.addColorStop(.65,'#7a471f');
  shaft.addColorStop(1,'#4c2915');
  ctx.strokeStyle = shaft;
  ctx.lineCap = 'round';
  ctx.lineWidth = shaftHalf*2;
  ctx.beginPath();
  ctx.moveTo(-len*0.82,0);
  ctx.lineTo(len*0.70,0);
  ctx.stroke();

  ctx.strokeStyle = 'rgba(35,18,10,.45)';
  ctx.lineWidth = Math.max(0.7, shaftHalf*0.75);
  ctx.beginPath();
  ctx.moveTo(-len*0.80,-shaftHalf*0.55);
  ctx.lineTo(len*0.68,-shaftHalf*0.55);
  ctx.stroke();

  const head = ctx.createLinearGradient(len*0.54,-headLen*0.15,len*0.98,headLen*0.15);
  head.addColorStop(0,'#cfd6df');
  head.addColorStop(.55,'#7b8693');
  head.addColorStop(1,'#e8edf2');
  ctx.fillStyle = head;
  ctx.beginPath();
  ctx.moveTo(len*0.98,0);
  ctx.lineTo(len*0.68,-headLen*0.30);
  ctx.lineTo(len*0.74,0);
  ctx.lineTo(len*0.68,headLen*0.30);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = 'rgba(42,47,54,.7)';
  ctx.lineWidth = Math.max(0.6, len*0.015);
  ctx.stroke();

  const feather = ctx.createLinearGradient(-len*1.03,0,-len*0.70,0);
  feather.addColorStop(0,'#3a2417');
  feather.addColorStop(.4,'#8f5622');
  feather.addColorStop(1,'#d08a3a');
  ctx.fillStyle = feather;
  [[-1, -len*0.76], [1, -len*0.76], [-1, -len*0.92]].forEach(([sign,base])=>{
    ctx.beginPath();
    ctx.moveTo(base,0);
    ctx.lineTo(base - fletchLen, sign*fletchHeight);
    ctx.lineTo(base - fletchLen*0.42, sign*fletchHeight*0.16);
    ctx.closePath();
    ctx.fill();
  });
  ctx.strokeStyle = 'rgba(59,30,11,.55)';
  ctx.lineWidth = Math.max(0.5, len*0.012);
  [[-1, -len*0.76], [1, -len*0.76], [-1, -len*0.92]].forEach(([sign,base])=>{
    ctx.beginPath();
    ctx.moveTo(base,0);
    ctx.lineTo(base - fletchLen*0.92, sign*fletchHeight*0.88);
    ctx.stroke();
  });
  ctx.restore();
}
function drawBowString(metrics=avatarLayoutMetrics(), angle=state.angle, pulled=false){
  const guide = avatarArrowGuide(metrics, angle);
  const origin = guide.origin || guide.launch;
  const ux = Math.cos(guide.visualAngle);
  const uy = Math.sin(guide.visualAngle);
  const perp = {x:-uy, y:ux};
  const limbLen = metrics.drawHeight * 0.205;
  const top = {x: origin.x + perp.x*limbLen, y: origin.y + perp.y*limbLen};
  const bottom = {x: origin.x - perp.x*limbLen, y: origin.y - perp.y*limbLen};
  const pull = pulled ? metrics.drawWidth*0.036 : metrics.drawWidth*0.012;
  const mid = {x: origin.x - ux*pull, y: origin.y - uy*pull};
  ctx.save();
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.strokeStyle = 'rgba(111, 90, 60, 0.82)';
  ctx.lineWidth = Math.max(0.95, metrics.drawWidth*0.0042);
  ctx.beginPath();
  ctx.moveTo(top.x, top.y);
  ctx.lineTo(mid.x, mid.y);
  ctx.lineTo(bottom.x, bottom.y);
  ctx.stroke();
  ctx.restore();
}
function drawAvatar(showLoadedArrow=state.arrowLoaded){
  const m = avatarLayoutMetrics();
  const {img, gY, drawWidth, drawHeight, x, y} = m;
  ctx.save();
  ctx.shadowColor = "rgba(0,0,0,.18)";
  ctx.shadowBlur = 14;
  ctx.shadowOffsetY = 8;
  ctx.fillStyle = "rgba(0,0,0,.13)";
  ctx.beginPath();
  ctx.ellipse(x + drawWidth*0.45, gY + 8, drawWidth*0.34, 16, 0, 0, Math.PI*2);
  ctx.fill();
  ctx.shadowBlur = 0;
  ctx.shadowOffsetY = 0;

  // Se dibuja un único fotograma por vez. Ya no se mezclan dos sprites con
  // alpha porque eso producía un arquero semitransparente y una sensación de
  // doble imagen. La continuidad ahora depende de las 13 secuencias ideales.
  if(img && img.complete){
    if(m.spriteMeta?.frameIndex !== null && m.spriteMeta?.frameIndex !== undefined){
      const sx=m.spriteMeta.frameIndex*m.spriteMeta.frameWidth;
      ctx.drawImage(img,sx,0,m.spriteMeta.frameWidth,m.spriteMeta.frameHeight,x,y,drawWidth,drawHeight);
    }else{
      ctx.drawImage(img, x, y, drawWidth, drawHeight);
    }
  }else{
    const fallback = avatarImages[ACTIVE_AVATAR];
    if(fallback && fallback.complete) ctx.drawImage(fallback, x, y, drawWidth, drawHeight);
    else { ctx.fillStyle = "#d9e5f2"; ctx.fillRect(x+18, y+30, drawWidth*0.55, drawHeight*0.72); }
  }

  if(showLoadedArrow && (!state.animating || state.avatarPrepActive)){
    const guide = avatarArrowGuide(m, state.angle);
    drawFlightArrow(guide.launch, guide.visualAngle, 0.92, 1);
  }
  ctx.restore();
}
function drawFlightArrow(p,angle,scale=1,alpha=1){
  // El punto p representa la mano/nock que sostiene la cola de la flecha.
  // Se convierte al centro visual de la flecha para que la cola quede anclada en la mano del avatar.
  const len = 38*scale;
  const anchorOffset = len*0.82;
  const cx = p.x + Math.cos(angle)*anchorOffset;
  const cy = p.y + Math.sin(angle)*anchorOffset;
  drawArrowGraphic(cx, cy, angle, len, alpha);
}
function drawTrajectoryReference(path, currentIdx, preview=false){
  if(!path.length) return;
  ctx.save();
  ctx.setLineDash(preview ? [14,10] : [12,9]);
  ctx.strokeStyle = preview ? "rgba(255,255,255,.84)" : "rgba(255,255,255,.72)";
  ctx.lineWidth = preview ? 5.0 : 4.2;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.beginPath();
  ctx.moveTo(path[0].x,path[0].y);
  path.forEach(p=>ctx.lineTo(p.x,p.y));
  ctx.stroke();
  ctx.setLineDash([]);

  // Segmento inicial sólido para que la guía apunte en la misma dirección en
  // la que el arquero sostiene la flecha antes de iniciar la parábola.
  const p0 = path[0];
  const p1 = path[Math.min(3, path.length-1)] || p0;
  ctx.strokeStyle = 'rgba(255,255,255,.92)';
  ctx.lineWidth = 3.2;
  ctx.beginPath();
  ctx.moveTo(p0.x,p0.y);
  ctx.lineTo(p1.x,p1.y);
  ctx.stroke();

  ctx.fillStyle = 'rgba(255,255,255,.95)';
  ctx.beginPath();
  ctx.arc(p0.x, p0.y, preview ? 3.6 : 3.0, 0, Math.PI*2);
  ctx.fill();
  ctx.restore();
}
function previewPath(){
  // La guía de trayectoria ya no se muestra durante la fase de apuntado.
  // Solo aparece durante el disparo real de la flecha.
  return [];
}
function drawScene(path=[],arrowPoint=null,arrowAngle=0,showLoadedArrow=state.arrowLoaded, currentIdx=null){
  drawBackground();
  drawTarget();
  // Primero se dibuja el arquero y luego la guía. De esta forma el punto de
  // salida de la parábola se ve claramente en la mano/flecha y no queda oculto
  // detrás del cuerpo del avatar.
  drawAvatar(showLoadedArrow);
  const isPreview = !path.length && !arrowPoint;
  const displayPath = path.length ? path : previewPath();
  if(displayPath.length) drawTrajectoryReference(displayPath, path.length ? currentIdx : null, isPreview);
  if(arrowPoint) drawFlightArrow(arrowPoint,arrowAngle,0.9,1);
}
function computePath(){
  const o=arrowNock();
  const theta=state.angle*Math.PI/180;
  const pxPerMeter = distanceScale();
  const vx = state.speed*Math.cos(theta);
  const vy = state.speed*Math.sin(theta);
  const pts=[];
  let impact=null;
  for(let t=0;t<=6;t+=0.02){
    const x=o.x + vx*pxPerMeter*t;
    const y=o.y - vy*pxPerMeter*t + 0.5*g*pxPerMeter*t*t;
    if(x>canvas.width+60 || y>groundY()+90) break;
    const point={x,y,t};
    pts.push(point);
    if(state.target && x>=state.target.x){ impact=point; break; }
  }
  if(!impact) impact=pts[pts.length-1]||o;
  return {pts,impact};
}
function classifyImpact(impact){const t=state.target,dx=impact.x-t.x,dy=impact.y-t.y,radial=Math.sqrt(dx*dx+dy*dy);if(radial<=t.radius*.17)return{hit:true,center:true,points:1,radial,label:"Centro"};if(radial<=t.radius)return{hit:true,center:false,points:.5,radial,label:"Borde"};return{hit:false,center:false,points:0,radial,label:"Sin impacto"};}
function shotSuggestion(impact){const t=state.target,rec=recommendedSpeed();if(impact.x<t.x-t.radius)return"La flecha no alcanzó la distancia: aumenta la velocidad o sube el ángulo.";if(impact.y>t.y+t.radius)return"La flecha llegó baja: aumenta velocidad o ángulo.";if(impact.y<t.y-t.radius)return"La flecha pasó alta: baja el ángulo o reduce la velocidad.";if(rec&&state.speed<rec-5)return`Prueba una velocidad cercana a ${Math.round(rec)} m/s.`;return"Ajusta ligeramente y conserva una velocidad cercana a la guía.";}
function updateInstantSuggestion(){if(!state.target||!els.message)return;els.message.textContent=`Listo para disparar · Ángulo ${state.angle}° · Velocidad ${state.speed} m/s`;}
function animateShot(path,impact,classification){
  state.animating=true;
  state.shotVisualProgress=0;
  const totalFrames=Math.max(150, Math.round(path.length*3.4));
  let frameIndex=0;
  const frame=()=>{
    const progress=clamp(frameIndex/totalFrames,0,1);
    state.shotVisualProgress = progress;
    const idx=Math.min(path.length-1,Math.floor(progress*Math.max(1,path.length-1)));
    const visiblePath = path.slice(0, idx+1);
    const p=path[idx]||impact;
    const prev=path[Math.max(0,idx-2)]||p;
    const a=Math.atan2(p.y-prev.y,p.x-prev.x);
    drawScene(visiblePath,p,a,false,idx);
    frameIndex++;
    if(frameIndex<=totalFrames) requestAnimationFrame(frame);
    else {
      drawScene(path,impact,a,false,path.length-1);
      setTimeout(()=>{ state.shotVisualProgress=0; state.animating=false; afterShot(impact,classification); }, 320);
    }
  };
  frame();
}
function afterShot(impact,cl){
  state.shotVisualProgress=0;
  state.arrows=Math.max(0,state.arrows-1);
  state.shots.push({time:new Date().toLocaleString('es-CO'),world:state.world+1,worldName:currentWorld().name,angle:state.angle,speed:state.speed,distance:state.target?.distance||0,height:state.target?heightMeters():0,result:cl.label,points:cl.points,radial:Number(cl.radial||0).toFixed(1)});
  if(!cl.hit){
    state.worldFails++;
    state.challengeFails++;
    updateLabels();
    if(els.message)els.message.textContent=`Tiro fallido. ${shotSuggestion(impact)} Penalización: -0.10 en la nota del mundo.`;
    logEvent('tiro fallido',`${currentWorld().name}: ángulo ${state.angle}°, velocidad ${state.speed} m/s`);
    drawScene([],null,0,false);
    if(state.arrows<=0)endGame("Te quedaste sin flechas antes de completar la ruta.");
    else setTimeout(()=>{state.arrowLoaded=false;updateInstantSuggestion();drawScene();},360);
    return;
  }
  state.shotPoints=clamp(state.shotPoints+cl.points,0,currentWorld().goal);
  updateLabels();
  if(els.message)els.message.textContent=`${cl.label}: +${cl.points} punto(s) de tiro. ${state.shotPoints>=currentWorld().goal?`Reto de tiro superado: responde la pregunta ${state.sequenceStep+1} de 4.`:"Nuevo blanco generado para el siguiente tiro."}`;
  logEvent('tiro exitoso',`${currentWorld().name}: ${cl.label}, ${cl.points} punto(s)`);
  if(state.shotPoints>=currentWorld().goal){drawScene([],null,0,false);setTimeout(openQuestion,550);}else{drawScene([],null,0,false);setTimeout(()=>{newTarget();updateInstantSuggestion();drawScene();},650);}
}
function shoot(){
  if(state.animating||!state.started||!state.target||!els.announcement.classList.contains("hidden"))return;
  if(state.arrows<=0){endGame("Te quedaste sin flechas.");return;}
  const {pts,impact}=computePath(),cl=classifyImpact(impact);
  state.arrowLoaded=false;
  state.animating=true;
  playAvatarPreparation(state.avatar, state.angle, seq=>{
    state.arrowLoaded=false;
    animateShot(pts,impact,cl);
    const tail = [...(seq?.follow||[])];
    if(tail.length){
      let idx=0, tick=0;
      const followAnim = ()=>{
        if(state.animating){ requestAnimationFrame(followAnim); return; }
        const frame = tail[Math.min(idx, tail.length-1)];
        state.avatarFramePath = frame.path;
        drawScene([],null,0,false);
        tick++;
        if(tick >= (frame.duration || 7)){
          tick = 0;
          idx++;
          if(idx >= tail.length){ state.avatarFramePath = ''; drawScene(); return; }
        }
        requestAnimationFrame(followAnim);
      };
      requestAnimationFrame(followAnim);
    }
  });
}
function typesetMath(root){
  const target = root || els.dialog;
  if(!target || !window.MathJax || !MathJax.typesetPromise) return;
  try{
    if(MathJax.typesetClear) MathJax.typesetClear([target]);
    MathJax.typesetPromise([target]).catch(err=>console.warn("MathJax render error", err));
  }catch(err){
    console.warn("MathJax render error", err);
  }
}


/* ===== v10: Vista gráfica dinámica tipo GeoGebra para preguntas del banco HTML ===== */
const dynamicGraphInstances = {};
function dgFmt(n){ if(!Number.isFinite(n)) return ''; if(Math.abs(n)<1e-9)n=0; return Number.isInteger(n)?String(n):n.toFixed(2); }
function dgEscape(s){return String(s).replace(/[&<>\"]/g, m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]||m));}
function dgFval(kind,p,x){
  if(kind==='linear') return p.a*x+p.b;
  if(kind==='quadratic') return (p.a??1)*Math.pow(x-p.h,2)+p.k;
  if(kind==='abs') return Math.abs(x-p.h)+p.k;
  if(kind==='piecewise') return x < (p.cut??0) ? p.m1*x+p.b1 : p.m2*x+p.b2;
  if(kind==='rational') return p.a/(x-p.h)+p.k;
  if(kind==='sqrt') return x>=p.h ? Math.sqrt(x-p.h)+p.k : NaN;
  if(kind==='exp') return (p.c??1)*Math.pow(p.a,x)+p.k;
  if(kind==='log') return x>p.h ? Math.log(x-p.h)/Math.log(p.a)+p.k : NaN;
  return NaN;
}
function dgCurves(g){
  const k=g.kind,p=g.params||{};
  if(k==='inverseLinear') return [{fn:x=>p.a*x+p.b, cls:'dg-curve1', label:'f'},{fn:x=>(x-p.b)/p.a, cls:'dg-curve2', label:'f^{-1}'},{fn:x=>x, cls:'dg-curve3', label:'y=x'}];
  if(k==='expLogPair') return [{fn:x=>Math.pow(p.a,x), cls:'dg-curve1', label:'a^x'},{fn:x=>x>0?Math.log(x)/Math.log(p.a):NaN, cls:'dg-curve2', label:'log_a x'},{fn:x=>x, cls:'dg-curve3', label:'y=x'}];
  if(k==='mixed') return [{fn:x=>Math.pow(2,x), cls:'dg-curve1', label:'2^x'},{fn:x=>x>0?Math.log(x)/Math.log(2):NaN, cls:'dg-curve2', label:'log_2 x'},{fn:x=>Math.abs(x-1)-2, cls:'dg-curve3', label:'|x-1|-2'},{fn:x=>(x+1)*(x+1)-3, cls:'dg-curve2', label:'(x+1)^2-3'}];
  return [{fn:x=>dgFval(k,p,x), cls:'dg-curve1', label:'f'}];
}
class DynamicGraphView{
  constructor(svg, q){this.svg=svg;this.q=q;this.params=JSON.parse(JSON.stringify(q.dynamicGraph?.params||{}));this.kind=q.dynamicGraph?.kind||'linear';this.xMark=q.dynamicGraph?.xMark??0;this.cx=0;this.cy=0;this.scale=38;this.showGrid=true;this.showAxes=true;this.trace=true;this.showSpecial=true;this.clickPoints=[];this.dragging=false;this.last=null;this.initEvents();this.render();}
  W(){return this.svg.clientWidth||560} H(){return this.svg.clientHeight||360}
  sx(x){return this.W()/2+(x-this.cx)*this.scale} sy(y){return this.H()/2-(y-this.cy)*this.scale} wx(px){return (px-this.W()/2)/this.scale+this.cx} wy(py){return -(py-this.H()/2)/this.scale+this.cy}
  mouse(e){const r=this.svg.getBoundingClientRect();return{x:e.clientX-r.left,y:e.clientY-r.top};}
  setParam(n,v){this.params[n]=Number(v); if(n==='x') this.xMark=Number(v); this.render();}
  zoom(f){this.scale=Math.max(12,Math.min(130,this.scale*f));this.render();}
  pan(dx,dy){this.cx+=dx;this.cy+=dy;this.render();}
  reset(){this.cx=0;this.cy=0;this.scale=38;this.clickPoints=[];this.render();}
  toggle(name){this[name]=!this[name];this.render();}
  initEvents(){
    this.svg.addEventListener('wheel', e=>{e.preventDefault();const m=this.mouse(e),before={x:this.wx(m.x),y:this.wy(m.y)};this.scale*=e.deltaY<0?1.15:1/1.15;this.scale=Math.max(12,Math.min(130,this.scale));const after={x:this.wx(m.x),y:this.wy(m.y)};this.cx+=before.x-after.x;this.cy+=before.y-after.y;this.render();},{passive:false});
    this.svg.addEventListener('pointerdown', e=>{this.dragging=true;this.last=this.mouse(e);try{this.svg.setPointerCapture(e.pointerId)}catch(_){}});
    this.svg.addEventListener('pointermove', e=>{const m=this.mouse(e);const coord=this.svg.closest('.dynamic-graph-card')?.querySelector('.dg-coord');if(coord)coord.textContent=`x=${dgFmt(this.wx(m.x))}, y=${dgFmt(this.wy(m.y))}`;if(this.dragging&&this.last){this.cx-=(m.x-this.last.x)/this.scale;this.cy+=(m.y-this.last.y)/this.scale;this.last=m;this.render();}});
    this.svg.addEventListener('pointerup', e=>{const m=this.mouse(e);if(this.dragging&&this.last&&Math.hypot(m.x-this.last.x,m.y-this.last.y)<3){this.clickPoints.push({x:this.wx(m.x),y:this.wy(m.y)});}this.dragging=false;this.render();});
    this.svg.addEventListener('pointerleave',()=>{this.dragging=false;});
  }
  addLine(x1,y1,x2,y2,cls='dg-gridline'){return `<line class="${cls}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/>`;}
  point(x,y,label,cls){return `<circle class="${cls}" cx="${this.sx(x)}" cy="${this.sy(y)}" r="5"/><text class="dg-point-label" x="${this.sx(x)+7}" y="${this.sy(y)-7}">${dgEscape(label)}</text>`;}
  pathFor(fn,xmin,xmax){let d='',open=false;const N=420;for(let i=0;i<=N;i++){const x=xmin+(xmax-xmin)*i/N,y=fn(x);if(!Number.isFinite(y)||Math.abs(y)>1e4){open=false;continue;}const px=this.sx(x),py=this.sy(y);if(py<-2000||py>this.H()+2000){open=false;continue;}d+=(open?'L':'M')+px.toFixed(1)+' '+py.toFixed(1)+' ';open=true;}return d;}
  specialPoints(){const k=this.kind,p=this.params,pts=[];if(k==='linear'){pts.push({x:0,y:p.b,t:'corte y'});if(p.a!==0)pts.push({x:-p.b/p.a,y:0,t:'corte x'});}if(k==='quadratic')pts.push({x:p.h,y:p.k,t:'vértice'});if(k==='abs'||k==='sqrt')pts.push({x:p.h,y:p.k,t:k==='abs'?'vértice':'inicio'});if(k==='exp')pts.push({x:0,y:(p.c??1)+p.k,t:'corte y'});if(k==='log')pts.push({x:p.h+1,y:p.k,t:'punto base'});return pts;}
  render(){const W=this.W(),H=this.H(),xmin=this.wx(0),xmax=this.wx(W),ymin=this.wy(H),ymax=this.wy(0);let out='';
    if(this.showGrid){for(let x=Math.floor(xmin);x<=Math.ceil(xmax);x++){out+=this.addLine(this.sx(x),0,this.sx(x),H);if(x!==0&&this.scale>25)out+=`<text class="dg-ticktext" x="${this.sx(x)+2}" y="${this.sy(0)+12}">${x}</text>`;}for(let y=Math.floor(ymin);y<=Math.ceil(ymax);y++){out+=this.addLine(0,this.sy(y),W,this.sy(y));if(y!==0&&this.scale>25)out+=`<text class="dg-ticktext" x="${this.sx(0)+4}" y="${this.sy(y)-3}">${y}</text>`;}}
    if(this.showAxes){out+=this.addLine(0,this.sy(0),W,this.sy(0),'dg-axis');out+=this.addLine(this.sx(0),0,this.sx(0),H,'dg-axis');out+=`<text class="dg-ticktext" x="${W-15}" y="${this.sy(0)-5}">x</text><text class="dg-ticktext" x="${this.sx(0)+5}" y="12">y</text>`;}
    const k=this.kind,p=this.params;let curves=dgCurves({kind:k,params:p});
    if(k==='piecewise'){const cut=p.cut??0,eps=1e-3,left=x=>p.m1*x+p.b1,right=x=>p.m2*x+p.b2;out+=`<path class="dg-curve1" d="${this.pathFor(left,xmin,Math.min(cut-eps,xmax))}"/>`;out+=`<path class="dg-curve1" d="${this.pathFor(right,Math.max(cut,xmin),xmax)}"/>`;if(this.showSpecial){const yl=left(cut),yr=right(cut);if(Number.isFinite(yl))out+=this.point(cut,yl,`limite izquierdo: (${dgFmt(cut)}, ${dgFmt(yl)})`,'dg-openmark');if(Number.isFinite(yr))out+=this.point(cut,yr,`f(${dgFmt(cut)})=${dgFmt(yr)}`,'dg-closedmark');}curves=[{fn:x=>x<cut?left(x):right(x),cls:'dg-curve1',label:'f'}];}
    else{curves.forEach(c=>{out+=`<path class="${c.cls}" d="${this.pathFor(c.fn,xmin,xmax)}"/>`;});}
    if(this.showSpecial){if(k==='rational'){out+=this.addLine(this.sx(p.h),0,this.sx(p.h),H,'dg-asym');out+=this.addLine(0,this.sy(p.k),W,this.sy(p.k),'dg-asym');}if(k==='log')out+=this.addLine(this.sx(p.h),0,this.sx(p.h),H,'dg-asym');if(k==='exp')out+=this.addLine(0,this.sy(p.k),W,this.sy(p.k),'dg-asym');if(k!=='piecewise')this.specialPoints().forEach(pt=>{if(Number.isFinite(pt.x)&&Number.isFinite(pt.y))out+=this.point(pt.x,pt.y,pt.t,'dg-mark');});}
    if(this.trace){curves.slice(0,1).forEach(c=>{const y=c.fn(this.xMark);if(Number.isFinite(y)){if(k!=='piecewise')out+=this.addLine(this.sx(this.xMark),this.sy(0),this.sx(this.xMark),this.sy(y),'dg-asym');out+=this.point(this.xMark,y,`(${dgFmt(this.xMark)}, ${dgFmt(y)})`,'dg-mark');}});}this.clickPoints.forEach((pt,i)=>out+=this.point(pt.x,pt.y,`P${i+1}=(${dgFmt(pt.x)},${dgFmt(pt.y)})`,'dg-clickpoint'));this.svg.innerHTML=out;}
}
function dynamicGraphHTML(q){
  const controls=(q.dynamicControls||[]).map(c=>`<label>${dgEscape(c.name)}</label><div><input type="range" min="${c.min}" max="${c.max}" step="${c.step}" value="${c.value}" oninput="updateDynamicSlider(${q.num}, '${dgEscape(c.name)}', this.value)"><span class="dg-val" id="dg-val-${q.num}-${dgEscape(c.name)}">${c.value}</span></div>`).join('');
  return `<section class="dynamic-graph-card"><div class="dg-toolbar"><button type="button" onclick="dynamicGraphAct(${q.num}, 'zoomIn')">Zoom +</button><button type="button" onclick="dynamicGraphAct(${q.num}, 'zoomOut')">Zoom -</button><button type="button" onclick="dynamicGraphAct(${q.num}, 'left')">←</button><button type="button" onclick="dynamicGraphAct(${q.num}, 'right')">→</button><button type="button" onclick="dynamicGraphAct(${q.num}, 'up')">↑</button><button type="button" onclick="dynamicGraphAct(${q.num}, 'down')">↓</button><button type="button" onclick="dynamicGraphAct(${q.num}, 'grid')">Cuadrícula</button><button type="button" onclick="dynamicGraphAct(${q.num}, 'axes')">Ejes</button><button type="button" onclick="dynamicGraphAct(${q.num}, 'trace')">Rastro</button><button type="button" onclick="dynamicGraphAct(${q.num}, 'special')">Puntos clave</button><button type="button" class="dg-reset" onclick="dynamicGraphAct(${q.num}, 'reset')">Reset</button><span class="dg-coord">x=0, y=0</span></div><svg class="dynamic-svgbox" id="dynamic-svg-${q.num}" aria-label="Vista gráfica dinámica"></svg><div class="dynamic-control-panel">${controls}</div><p class="dynamic-help"><strong>Ayudas:</strong> rueda del mouse para zoom, arrastre para desplazar la vista y clic para resaltar puntos. En funciones por partes se usan puntos abiertos y cerrados, sin segmentos verticales en los saltos.</p></section>`;
}
function initDynamicGraph(q){
  if(!q.dynamicGraph) return;
  setTimeout(()=>{const svg=document.getElementById(`dynamic-svg-${q.num}`);if(svg){dynamicGraphInstances[q.num]=new DynamicGraphView(svg,q);}},60);
}
function updateDynamicSlider(num,name,value){const inst=dynamicGraphInstances[num];const v=document.getElementById(`dg-val-${num}-${name}`);if(v)v.textContent=value;if(inst)inst.setParam(name,value);}
function dynamicGraphAct(num,act){const g=dynamicGraphInstances[num];if(!g)return;if(act==='zoomIn')g.zoom(1.2);if(act==='zoomOut')g.zoom(1/1.2);if(act==='left')g.pan(-.8,0);if(act==='right')g.pan(.8,0);if(act==='up')g.pan(0,.8);if(act==='down')g.pan(0,-.8);if(act==='grid')g.toggle('showGrid');if(act==='axes')g.toggle('showAxes');if(act==='trace')g.toggle('trace');if(act==='special')g.toggle('showSpecial');if(act==='reset')g.reset();}

function visualCanvasSetup(){
  const canvas=els.qVisualCanvas; if(!canvas) return null;
  const rect=canvas.getBoundingClientRect();
  const width=Math.max(320,Math.round(rect.width||canvas.clientWidth||640));
  const height=Math.max(240,Math.round(rect.height||canvas.clientHeight||420));
  const dpr=window.devicePixelRatio||1;
  canvas.width=Math.round(width*dpr); canvas.height=Math.round(height*dpr);
  const ctx=canvas.getContext('2d'); ctx.setTransform(dpr,0,0,dpr,0,0);
  return {canvas,ctx,w:width,h:height};
}
function drawVisualBackground(ctx,w,h){
  const g=ctx.createLinearGradient(0,0,w,h); g.addColorStop(0,'#07152f'); g.addColorStop(1,'#0a2246');
  ctx.fillStyle=g; ctx.fillRect(0,0,w,h);
  ctx.strokeStyle='rgba(89,190,255,.12)'; ctx.lineWidth=1;
  for(let x=0;x<w;x+=24){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,h);ctx.stroke();}
  for(let y=0;y<h;y+=24){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(w,y);ctx.stroke();}
}
function cleanVisualText(text){
  let s=String(text||'');
  if(!s) return '';
  s=s.replace(/\\dfrac{([^{}]+)}{([^{}]+)}/g,'($1)/($2)');
  s=s.replace(/\\sqrt[3]{([^{}]+)}/g,'cbrt($1)');
  s=s.replace(/\\sqrt{([^{}]+)}/g,'sqrt($1)');
  s=s.replace(/\\sin/g,'sin').replace(/\\cos/g,'cos').replace(/\\pi/g,'π');
  s=s.replace(/\\left|\\right/g,'');
  s=s.replace(/\\/g,'');
  s=s.replace(/[{}]/g,'');
  s=s.replace(/s+/g,' ').trim();
  return s;
}
function drawTitle(ctx,w,title,subtitle){
  const rawTitle=String(title||'');
  const formulaLike=/\\|\dfrac|\sqrt|\sin|\cos|\pi|\frac|[fgh]\(x\)|=/.test(rawTitle);
  title=formulaLike?'Visualización matemática':cleanVisualText(title);
  subtitle=cleanVisualText(subtitle);
  ctx.fillStyle='#dff7ff'; ctx.font='700 20px Arial'; ctx.fillText(title||'Visualización matemática',18,28);
  if(subtitle){ctx.fillStyle='rgba(223,247,255,.85)'; ctx.font='14px Arial'; wrapCanvasText(ctx,subtitle,18,50,w-36,18);}
}
function wrapCanvasText(ctx,text,x,y,maxWidth,lineHeight){
  const words=String(text||'').split(/\s+/); let line=''; let cy=y;
  for(const word of words){ const test=(line?line+' ':'')+word; if(ctx.measureText(test).width>maxWidth && line){ ctx.fillText(line,x,cy); line=word; cy+=lineHeight; } else line=test; }
  if(line) ctx.fillText(line,x,cy); return cy;
}
function roundRect(ctx,x,y,w,h,r,fill,stroke){ ctx.beginPath(); ctx.moveTo(x+r,y); ctx.arcTo(x+w,y,x+w,y+h,r); ctx.arcTo(x+w,y+h,x,y+h,r); ctx.arcTo(x,y+h,x,y,r); ctx.arcTo(x,y,x+w,y,r); ctx.closePath(); if(fill) ctx.fill(); if(stroke) ctx.stroke(); }

function visualMathMarkup(q){
  return '';
}

function renderQuestionVisual(q){
  if(!els.qVisualCanvas || !els.qVisualImage || !els.visualCaption) return;
  if(els.visualMathTitle){
    const m=visualMathMarkup(q);
    els.visualMathTitle.innerHTML=''; els.visualMathTitle.classList.add('hidden');
  }
  els.visualCaption.textContent = q?.generatedVisual?.caption || (q?.image ? 'GRÁFICA DE APOYO' : 'LECTURA DEL SISTEMA');
  if(q?.image){
    els.qVisualImage.src=q.image; els.qVisualImage.classList.remove('hidden'); els.qVisualCanvas.classList.add('hidden');
    if(els.visualMathTitle) typesetMath(els.visualMathTitle);
    return;
  }
  els.qVisualImage.classList.add('hidden'); els.qVisualCanvas.classList.remove('hidden');
  const prep=visualCanvasSetup(); if(!prep) return; const {ctx,w,h}=prep;
  drawVisualBackground(ctx,w,h);
  if(q?.generatedVisual){ drawGeneratedVisualCanvas(ctx,w,h,q.generatedVisual); if(els.visualMathTitle) typesetMath(els.visualMathTitle); return; }
  drawTitle(ctx,w,'Visualización matemática','Analiza el enunciado y usa la pista si es necesario.');
  if(els.visualMathTitle) typesetMath(els.visualMathTitle);
}
function drawGeneratedVisualCanvas(ctx,w,h,v){
  if(v.type==='graph') return drawGraphVisual(ctx,w,h,v);
  if(v.type==='range') return drawRangeVisual(ctx,w,h,v);
  if(v.type==='pointTransform') return drawPointTransformVisual(ctx,w,h,v);
  if(v.type==='numberLine') return drawNumberLineVisual(ctx,w,h,v);
  if(v.type==='flow') return drawFlowVisual(ctx,w,h,v);
  if(v.type==='dualFlow') return drawDualFlowVisual(ctx,w,h,v);
  if(v.type==='table') return drawTableVisual(ctx,w,h,v);
  drawTitle(ctx,w,v.title||'Visualización',v.caption||'');
}
function graphProjector(w,h,range){
  const plot={x:64,y:84,w:w-90,h:h-120};
  const xMin=range?.xMin ?? -6, xMax=range?.xMax ?? 6, yMin=range?.yMin ?? -6, yMax=range?.yMax ?? 6;
  const sx=x=>plot.x+(x-xMin)/(xMax-xMin)*plot.w;
  const sy=y=>plot.y+plot.h-(y-yMin)/(yMax-yMin)*plot.h;
  return {plot,xMin,xMax,yMin,yMax,sx,sy};
}
function drawGraphAxes(ctx,p){
  ctx.strokeStyle='rgba(170,220,255,.25)'; ctx.lineWidth=1;
  for(let x=Math.ceil(p.xMin); x<=Math.floor(p.xMax); x++){ const px=p.sx(x); ctx.beginPath(); ctx.moveTo(px,p.plot.y); ctx.lineTo(px,p.plot.y+p.plot.h); ctx.stroke(); if(x!==0){ctx.fillStyle='rgba(230,245,255,.7)'; ctx.font='11px Arial'; ctx.fillText(String(x),px+2,p.sy(0)+12);} }
  for(let y=Math.ceil(p.yMin); y<=Math.floor(p.yMax); y++){ const py=p.sy(y); ctx.beginPath(); ctx.moveTo(p.plot.x,py); ctx.lineTo(p.plot.x+p.plot.w,py); ctx.stroke(); if(y!==0){ctx.fillStyle='rgba(230,245,255,.7)'; ctx.font='11px Arial'; ctx.fillText(String(y),p.sx(0)+6,py-4);} }
  ctx.strokeStyle='rgba(255,255,255,.7)'; ctx.lineWidth=1.6;
  ctx.beginPath(); ctx.moveTo(p.plot.x,p.sy(0)); ctx.lineTo(p.plot.x+p.plot.w,p.sy(0)); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(p.sx(0),p.plot.y); ctx.lineTo(p.sx(0),p.plot.y+p.plot.h); ctx.stroke();
}
function drawGraphCurve(ctx,p,curve){
  ctx.strokeStyle=curve.color||'#7be0ff'; ctx.lineWidth=2.4; ctx.beginPath(); let started=false;
  for(let i=0;i<=500;i++){ const x=p.xMin+(p.xMax-p.xMin)*i/500; let y; try{ y=curve.fn(x);}catch(e){y=NaN;} if(!Number.isFinite(y)||Math.abs(y)>1e6){ started=false; continue; } const px=p.sx(x), py=p.sy(y); if(py<p.plot.y-500||py>p.plot.y+p.plot.h+500){started=false; continue;} if(!started){ctx.moveTo(px,py); started=true;} else ctx.lineTo(px,py); }
  ctx.stroke();
}
function drawGraphVisual(ctx,w,h,v){
  drawTitle(ctx,w,v.title||'Gráfica',v.subtitle||''); const p=graphProjector(w,h,v.range||{}); drawGraphAxes(ctx,p);
  (v.asymptotes||[]).forEach(a=>{ ctx.strokeStyle=a.color||'#ffcf6c'; ctx.lineWidth=1.6; ctx.setLineDash([8,6]); ctx.beginPath(); if(Number.isFinite(a.x)){const px=p.sx(a.x); ctx.moveTo(px,p.plot.y); ctx.lineTo(px,p.plot.y+p.plot.h);} if(Number.isFinite(a.y)){const py=p.sy(a.y); ctx.moveTo(p.plot.x,py); ctx.lineTo(p.plot.x+p.plot.w,py);} ctx.stroke(); ctx.setLineDash([]); });
  (v.curves||[]).forEach(c=>drawGraphCurve(ctx,p,c));
  (v.points||[]).forEach(pt=>{ ctx.fillStyle=pt.color||'#ffcf6c'; ctx.beginPath(); ctx.arc(p.sx(pt.x),p.sy(pt.y),5,0,Math.PI*2); ctx.fill(); if(pt.label){ctx.fillStyle='#ffffff'; ctx.font='12px Arial'; ctx.fillText(pt.label,p.sx(pt.x)+7,p.sy(pt.y)-8);} });
  (v.annotations||[]).forEach(a=>{ ctx.fillStyle=a.color||'#dff7ff'; ctx.font='12px Arial'; wrapCanvasText(ctx,a.text,p.sx(a.x)+4,p.sy(a.y),140,14); });
  let lx=p.plot.x+8, ly=p.plot.y+14; (v.curves||[]).slice(0,4).forEach(c=>{ ctx.fillStyle=c.color||'#7be0ff'; ctx.fillRect(lx,ly-8,16,3); ctx.fillStyle='#e9faff'; ctx.font='12px Arial'; ctx.fillText(c.label||'curva',lx+22,ly); ly+=16; });
}
function drawRangeVisual(ctx,w,h,v){
  drawTitle(ctx,w,v.title||'Transformación del rango','Compara el rango original y el nuevo rango.');
  const from=v.from||[0,1], to=v.to||[0,1]; const a=from[0], b=from[1], c=to[0], d=to[1];
  const leftX=w*0.30, rightX=w*0.72, top=110, bottom=h-80; const globalMin=Math.min(a,b,c,d)-1, globalMax=Math.max(a,b,c,d)+1;
  const sy=val=>bottom-(val-globalMin)/(globalMax-globalMin)*(bottom-top);
  ctx.strokeStyle='#67d9ff'; ctx.lineWidth=7; ctx.beginPath(); ctx.moveTo(leftX,sy(a)); ctx.lineTo(leftX,sy(b)); ctx.stroke();
  ctx.strokeStyle='#89ffaf'; ctx.beginPath(); ctx.moveTo(rightX,sy(c)); ctx.lineTo(rightX,sy(d)); ctx.stroke();
  [[leftX,a,'mín'],[leftX,b,'máx'],[rightX,c,'nuevo mín'],[rightX,d,'nuevo máx']].forEach(function(item){ const x=item[0], val=item[1], label=item[2]; ctx.fillStyle='#fff'; ctx.beginPath(); ctx.arc(x,sy(val),6,0,Math.PI*2); ctx.fill(); ctx.font='13px Arial'; ctx.fillText(label+': '+val,x+12,sy(val)-8); });
  ctx.fillStyle='#67d9ff'; ctx.font='700 16px Arial'; ctx.fillText('Rango de f',leftX-35,top-18); ctx.fillStyle='#89ffaf'; ctx.fillText('Rango de h',rightX-35,top-18);
  ctx.strokeStyle='rgba(255,255,255,.5)'; ctx.setLineDash([8,6]); ctx.beginPath(); ctx.moveTo(leftX+16,(top+bottom)/2); ctx.lineTo(rightX-16,(top+bottom)/2); ctx.stroke(); ctx.setLineDash([]);
  ctx.fillStyle='#ffcf6c'; ctx.font='15px Arial'; ctx.fillText('Transformación vertical',w*0.43,(top+bottom)/2 - 10);
}
function drawPointTransformVisual(ctx,w,h,v){
  drawTitle(ctx,w,v.title||'Transformación de un punto','El punto azul pertenece a f y el verde a la transformación.');
  const xs=[(v.from||[0,0])[0],(v.to||[0,0])[0]], ys=[(v.from||[0,0])[1],(v.to||[0,0])[1]]; const pad=3;
  const range={xMin:Math.min.apply(null,xs)-pad,xMax:Math.max.apply(null,xs)+pad,yMin:Math.min.apply(null,ys)-pad,yMax:Math.max.apply(null,ys)+pad}; const p=graphProjector(w,h,range); drawGraphAxes(ctx,p);
  const x1=(v.from||[0,0])[0], y1=(v.from||[0,0])[1], x2=(v.to||[0,0])[0], y2=(v.to||[0,0])[1];
  ctx.strokeStyle='rgba(255,255,255,.55)'; ctx.lineWidth=2; ctx.setLineDash([6,6]); ctx.beginPath(); ctx.moveTo(p.sx(x1),p.sy(y1)); ctx.lineTo(p.sx(x2),p.sy(y2)); ctx.stroke(); ctx.setLineDash([]);
  ctx.fillStyle='#67d9ff'; ctx.beginPath(); ctx.arc(p.sx(x1),p.sy(y1),6,0,Math.PI*2); ctx.fill(); ctx.fillStyle='#fff'; ctx.font='13px Arial'; ctx.fillText('f: ('+x1+', '+y1+')',p.sx(x1)+8,p.sy(y1)-10);
  ctx.fillStyle='#89ffaf'; ctx.beginPath(); ctx.arc(p.sx(x2),p.sy(y2),6,0,Math.PI*2); ctx.fill(); ctx.fillStyle='#fff'; ctx.fillText('h: ('+x2+', '+y2+')',p.sx(x2)+8,p.sy(y2)-10);
}
function drawNumberLineVisual(ctx,w,h,v){
  drawTitle(ctx,w,v.title||'Recta numérica',v.spec?.note||'');
  const spec=v.spec||{}; const min=Number.isFinite(spec.min)?spec.min:-5, max=Number.isFinite(spec.max)?spec.max:5; const y=h*0.58; const x1=70, x2=w-70; const sx=x=>x1+(x-min)/(max-min)*(x2-x1);
  ctx.strokeStyle='#fff'; ctx.lineWidth=3; ctx.beginPath(); ctx.moveTo(x1,y); ctx.lineTo(x2,y); ctx.stroke();
  for(let k=Math.ceil(min);k<=Math.floor(max);k++){ const px=sx(k); ctx.strokeStyle='rgba(255,255,255,.6)'; ctx.lineWidth=1.2; ctx.beginPath(); ctx.moveTo(px,y-10); ctx.lineTo(px,y+10); ctx.stroke(); ctx.fillStyle='rgba(255,255,255,.8)'; ctx.font='12px Arial'; ctx.fillText(String(k),px-4,y+28);} 
  (spec.segments||[]).forEach(function(seg){ const a=Number.isFinite(seg.a)?seg.a:min, b=Number.isFinite(seg.b)?seg.b:max; ctx.strokeStyle=seg.color||'#89ffaf'; ctx.lineWidth=8; ctx.beginPath(); ctx.moveTo(sx(a),y); ctx.lineTo(sx(b),y); ctx.stroke(); });
  (spec.points||[]).forEach(function(pt){ const px=sx(pt.x); ctx.strokeStyle=pt.color||'#ffcf6c'; ctx.fillStyle=pt.open?'#07152f':(pt.color||'#ffcf6c'); ctx.lineWidth=3; ctx.beginPath(); ctx.arc(px,y,7,0,Math.PI*2); ctx.fill(); ctx.stroke(); ctx.fillStyle='#fff'; ctx.font='13px Arial'; wrapCanvasText(ctx,pt.label||String(pt.x),px-20,y-18,80,14); });
}
function drawFlowVisual(ctx,w,h,v){
  drawTitle(ctx,w,v.title||'Proceso',v.note||''); const steps=v.steps||[]; const boxW=Math.min(150,(w-80)/Math.max(1,steps.length)-18), boxH=54, y=h*0.58; let x=30;
  steps.forEach(function(step,i){ ctx.fillStyle='rgba(15,40,78,.92)'; roundRect(ctx,x,y-boxH/2,boxW,boxH,12,true,false); ctx.strokeStyle=i===steps.length-1?'#89ffaf':'#67d9ff'; ctx.lineWidth=2; roundRect(ctx,x,y-boxH/2,boxW,boxH,12,false,true); ctx.fillStyle='#eef9ff'; ctx.font='13px Arial'; wrapCanvasText(ctx,step,x+10,y-4,boxW-18,15); if(i<steps.length-1){ ctx.strokeStyle='#ffcf6c'; ctx.lineWidth=2; ctx.beginPath(); ctx.moveTo(x+boxW+8,y); ctx.lineTo(x+boxW+28,y); ctx.stroke(); ctx.beginPath(); ctx.moveTo(x+boxW+28,y); ctx.lineTo(x+boxW+22,y-5); ctx.lineTo(x+boxW+22,y+5); ctx.closePath(); ctx.fillStyle='#ffcf6c'; ctx.fill(); } x+=boxW+36; });
}
function drawDualFlowVisual(ctx,w,h,v){
  drawTitle(ctx,w,v.title||'Composición','Compara las dos cadenas de transformación.'); const chains=v.chains||[]; const rowYs=[h*0.44,h*0.70];
  chains.forEach(function(steps,row){ const boxW=Math.min(150,(w-80)/Math.max(1,steps.length)-18), boxH=50, y=rowYs[row]||h*0.55; let x=30; steps.forEach(function(step,i){ ctx.fillStyle='rgba(15,40,78,.92)'; roundRect(ctx,x,y-boxH/2,boxW,boxH,12,true,false); ctx.strokeStyle=row===0?'#67d9ff':'#89ffaf'; ctx.lineWidth=2; roundRect(ctx,x,y-boxH/2,boxW,boxH,12,false,true); ctx.fillStyle='#eef9ff'; ctx.font='12px Arial'; wrapCanvasText(ctx,step,x+10,y-3,boxW-18,14); if(i<steps.length-1){ ctx.strokeStyle='#ffcf6c'; ctx.lineWidth=2; ctx.beginPath(); ctx.moveTo(x+boxW+8,y); ctx.lineTo(x+boxW+28,y); ctx.stroke(); ctx.beginPath(); ctx.moveTo(x+boxW+28,y); ctx.lineTo(x+boxW+22,y-5); ctx.lineTo(x+boxW+22,y+5); ctx.closePath(); ctx.fillStyle='#ffcf6c'; ctx.fill(); } x+=boxW+36; }); });
}
function drawTableVisual(ctx,w,h,v){
  drawTitle(ctx,w,v.title||'Tabla','Sigue la composición fila por fila.'); const headers=v.headers||[]; const rows=v.rows||[]; const startX=40,startY=120, tableW=w-80,rowH=40,colW=tableW/Math.max(1,headers.length);
  ctx.fillStyle='rgba(10,35,70,.95)'; roundRect(ctx,startX,startY,tableW,rowH*(rows.length+1),14,true,false);
  ctx.strokeStyle='#67d9ff'; ctx.lineWidth=2; roundRect(ctx,startX,startY,tableW,rowH*(rows.length+1),14,false,true);
  headers.forEach(function(hTxt,i){ ctx.fillStyle='#67d9ff'; ctx.font='700 14px Arial'; ctx.fillText(hTxt,startX+i*colW+12,startY+25); });
  rows.forEach(function(row,r){ row.forEach(function(cell,c){ const x=startX+c*colW, y=startY+(r+1)*rowH; ctx.strokeStyle='rgba(255,255,255,.15)'; ctx.strokeRect(x,y,colW,rowH); ctx.fillStyle='#f2fbff'; ctx.font='13px Arial'; ctx.fillText(String(cell),x+12,y+24); }); });
}
window.addEventListener('resize',()=>{ if(state.currentQuestion && els.dialog?.open){ try{ renderQuestionVisual(state.currentQuestion); }catch(e){} } });

function openQuestion(){
  Object.keys(dynamicGraphInstances).forEach(k=>delete dynamicGraphInstances[k]);
  state.answered=false;
  const q=state.currentQuestion || instantiateQuestionVariant(currentQuestion());
  state.currentQuestion=q;
  const role=currentMicroRole();
  renderSequenceProgress();
  els.dialog.classList.toggle("graph-question", Boolean(q.image || q.dynamicGraph || q.generatedVisual));
  els.qType.textContent=`Reto ${state.sequenceStep+1} de 4 · ${role.name} · ${q.difficulty} · ${q.type}`;
  if(els.qCounter) els.qCounter.textContent=`RETO ${state.sequenceStep+1} / 4`;
  if(els.qValue) els.qValue.textContent=`+${possibleChallengeGrade().toFixed(2)}`;
  els.qTitle.textContent=q.title;
  els.hintBox.classList.add("hidden");
  els.hintBox.textContent="";
  els.feedback.className="feedback hidden";
  els.feedback.replaceChildren();
  els.btnContinue.classList.add("hidden");
  els.btnContinue.textContent="CONTINUAR";
  if(els.btnHint) els.btnHint.classList.remove("hidden");
  setFeedbackButton(false,"RETROALIMENTACIÓN");
  if(els.btnSubmit){
    els.btnSubmit.disabled=false;
    els.btnSubmit.classList.remove("hidden");
    els.btnSubmit.textContent="Responder";
  }
  els.qBody.innerHTML = q.prompt ? `<p class="question-prompt">${escapeHTML(q.prompt)}</p>` : "";
  if(q.dynamicGraph){
    els.qBody.innerHTML += dynamicGraphHTML(q);
  }
  state.questionStartedAt=Date.now();
  state.currentOptionOrder=[];
  if(q.mode==="text") els.qBody.innerHTML+=`<input type="text" name="answerText" autocomplete="off" placeholder="Escribe tu respuesta" required>`;
  else if(q.mode==="textarea") els.qBody.innerHTML+=`<textarea name="answerText" placeholder="Escribe una respuesta breve con conceptos clave" required></textarea>`;
  else if(q.mode==="number") els.qBody.innerHTML+=`<input type="text" name="answerText" inputmode="decimal" autocomplete="off" placeholder="Escribe el valor numérico" required>`;
  else {
    state.currentOptionOrder=Array.from({length:q.options.length},(_,i)=>i);
    state.currentOptionOrder.forEach((origIdx,i)=>els.qBody.innerHTML+=`<label class="option"><input type="radio" name="answer" value="${i}" required> <span><b>${String.fromCharCode(65+i)}.</b> ${escapeHTML(q.options[origIdx])}</span></label>`);
  }
  els.dialog.showModal();
  renderQuestionVisual(q);
  initDynamicGraph(q);
  typesetMath(els.dialog);
}

function setFeedbackButton(enabled,label){
  if(!els.btnToggleFeedback) return;
  els.btnToggleFeedback.disabled=!enabled;
  if(label) els.btnToggleFeedback.textContent=label;
}
function buildFeedbackDetails(q,correct,grade,selectedText,correctText){
  const wrap=document.createDocumentFragment();
  const title=document.createElement('strong');
  title.className='fb-title';
  title.textContent=correct ? 'Retroalimentación del reto: respuesta correcta.' : 'Retroalimentación del reto: respuesta incorrecta.';
  wrap.append(title);
  const lines=[];
  if(correct) lines.push(`Ganaste ${grade.toFixed(2)} puntos en este reto.`);
  else lines.push('Debes repetir el reto de tiro antes de volver a responder esta misma pregunta.');
  if(selectedText) lines.push(`Tu respuesta: ${selectedText}`);
  if(correctText) lines.push(`Respuesta correcta: ${correctText}`);
  if(q.feedback) lines.push(q.feedback);
  if(q.hint) lines.push(`Pista clave: ${q.hint}`);
  lines.forEach(text=>{ const p=document.createElement('p'); p.className='fb-line'; p.textContent=text; wrap.append(p); });
  return wrap;
}
function revealFeedback(open=true){
  if(!els.feedback) return;
  els.feedback.classList.toggle('hidden',!open);
  setFeedbackButton(true, open ? 'OCULTAR RETROALIMENTACIÓN' : 'VER RETROALIMENTACIÓN');
  if(open){ typesetMath(els.feedback); try{els.feedback.scrollIntoView({behavior:'smooth',block:'nearest'});}catch(_e){} }
}

function validateCurrentAnswer(){
  const q=state.currentQuestion;
  if(!q) return {valid:false,message:"No se encontró la pregunta activa."};
  const data=new FormData(els.form);
  if(q.mode==="number"||q.mode==="text"||q.mode==="textarea"){
    const value=String(data.get("answerText")||"").trim();
    if(!value) return {valid:false,message:"Escribe una respuesta antes de continuar."};
  }else if(data.get("answer")===null){
    return {valid:false,message:"Selecciona una de las opciones antes de responder."};
  }
  return {valid:true,message:""};
}
function showAnswerValidation(message){
  els.feedback.className="feedback bad";
  els.feedback.replaceChildren();
  const strong=document.createElement("strong");
  strong.textContent="Falta completar la respuesta.";
  els.feedback.append(strong,document.createTextNode(` ${message}`));
  els.feedback.classList.remove("hidden");
  try{els.feedback.scrollIntoView({behavior:"smooth",block:"nearest"});}catch(_e){}
}
function checkAnswer(){
  const q=state.currentQuestion;
  const data=new FormData(els.form);
  if(q.mode==="number"){
    const raw=String(data.get("answerText")||"").replace(",",".");
    const val=Number(raw);
    return Number.isFinite(val) && Math.abs(val-Number(q.numericAnswer)) <= (q.tolerance ?? 0.01);
  }
  if(q.mode==="text"||q.mode==="textarea"){
    const text=normalizeText(data.get("answerText"));
    const alternatives=(q.alternatives||[]).map(normalizeText);
    if(alternatives.includes(text))return true;
    return (q.keywords||[]).every(k=>text.includes(normalizeText(k)));
  }
  const raw=data.get("answer");
  if(raw===null) return false;
  const displayIdx=Number(raw);
  return state.currentOptionOrder[displayIdx]===q.answer;
}
function submitAnswer(e){
  if(e){e.preventDefault();e.stopPropagation();}
  if(state.answered) return;
  const validation=validateCurrentAnswer();
  if(!validation.valid){showAnswerValidation(validation.message);return;}
  const q = state.currentQuestion;
  const correct = checkAnswer();
  const selectedText=selectedOptionText(q);
  const correctText=correctAnswerText(q);
  const gradeBefore=possibleChallengeGrade();
  els.feedback.replaceChildren();
  let grade = 0;
  if(correct){
    grade = gradeBefore;
    state.correctAnswers++;
    state.totalScore = clamp(state.totalScore + grade, 0, 5);
    try{window.SCORMBridge?.saveScore?.(finalScore(),state.sessionSeconds);}catch(error){console.warn('SCORM:',error);}
    state.worldScore = clamp(state.worldScore + grade, 0, 1);
    els.feedback.className = "feedback good hidden";
    els.btnContinue.textContent = state.sequenceStep<3 ? `Continuar al reto ${state.sequenceStep+2} de 4` : (state.world >= worlds.length-1 ? "Ver resultado final" : "Completar mundo y avanzar");
  }else{
    state.wrongAttempts++;
    state.challengeWrong++;
    state.shotPoints = 0;
    els.feedback.className = "feedback bad hidden";
    els.btnContinue.textContent = `Reintentar reto ${state.sequenceStep+1} de 4`;
  }
  els.feedback.append(buildFeedbackDetails(q,correct,grade,selectedText,correctText));
  const duration=Math.max(0,Math.round((Date.now()-(state.questionStartedAt||Date.now()))/1000));
  const optionOrder=state.currentOptionOrder && state.currentOptionOrder.length?state.currentOptionOrder:((q.options||[]).map((_,i)=>i));
  const displayedOptions=(q.options||[]).length?optionOrder.map(i=>q.options[i]):[];
  const correctOption=(q.options||[]).length?q.options[q.answer]:correctText;
  state.questionHistory.push({time:new Date().toLocaleString('es-CO'),world:state.world+1,worldName:currentWorld().name,microRole:currentMicroRole().name,sequenceStep:state.sequenceStep+1,title:q.title,type:q.type,category:categoryFromQuestion(q),topic:topicFromQuestion(q),prompt:q.prompt,hint:q.hint,correct,selected:selectedText,correctAnswer:correctText,correctOption,options:displayedOptions,grade:correct?gradeBefore:0,feedback:q.feedback,duration});
  logEvent(correct?'respuesta correcta':'respuesta incorrecta',q.title);
  state.answered = true;
  updateLabels();
  els.feedback.classList.remove("hidden");
  els.btnContinue.classList.remove("hidden");
  if(correct){
    els.btnContinue.textContent = state.sequenceStep<3 ? "CONTINUAR AL SIGUIENTE RETO" : (state.world >= worlds.length-1 ? "VER RESULTADO FINAL" : "CONTINUAR AL SIGUIENTE MUNDO");
  }else{
    els.btnContinue.textContent = "CONTINUAR Y REINTENTAR";
  }
  if(els.btnHint) els.btnHint.classList.remove("hidden");
  setFeedbackButton(true,"OCULTAR RETROALIMENTACIÓN");
  if(els.btnSubmit){
    els.btnSubmit.disabled=true;
    els.btnSubmit.classList.add("hidden");
  }
  els.qBody.querySelectorAll('input,textarea').forEach(control=>control.disabled=true);
  typesetMath(els.feedback);
  requestAnimationFrame(()=>{
    try{els.feedback.scrollIntoView({behavior:"smooth",block:"nearest"});}catch(_e){}
  });
}
function setupMicroChallenge(showAnnouncement=true,isRetry=false){
  state.shotPoints=0;state.angle=0;state.speed=0;if(!isRetry)state.currentQuestion=null;state.avatar=ACTIVE_AVATAR;newTarget();updateLabels();drawScene();
  const role=currentMicroRole();
  if(showAnnouncement){
    els.announceTitle.textContent=`${currentWorld().name} · Reto ${state.sequenceStep+1} de 4`;
    els.announceText.textContent=`${role.name}: ${role.description} Completa ${currentWorld().goal} punto(s) de tiro para desbloquear la pregunta. Tema: ${currentWorld().topic}.`;
    els.announcement.classList.remove("hidden");
  }else if(els.message){
    els.message.textContent=isRetry?`Reintento del reto ${state.sequenceStep+1} de 4. Completa el tiro para responder nuevamente.`:`Reto ${state.sequenceStep+1} de 4: ${role.name}. Completa el desafío de tiro.`;
  }
}
function continueGame(){
  const correct=els.feedback.classList.contains("good");els.dialog.close();
  if(correct){
    if(state.sequenceStep<3){state.sequenceStep++;state.challengeFails=0;state.challengeWrong=0;setupMicroChallenge(true,false);return;}
    state.world++;
    if(state.world>=worlds.length){endGame(`Ruta completada: 20 retos matemáticos superados. Nota final: ${finalScore().toFixed(2)} / 5.00.`);return;}
    startWorld(true);
  }else setupMicroChallenge(false,true);
}
function startWorld(showAnnouncement=true){
  state.sequenceStep=0;state.worldScore=0;state.worldFails=0;state.challengeFails=0;state.challengeWrong=0;
  setupMicroChallenge(showAnnouncement,false);
}
function endGame(text){
  if(state.finalReportDeliveryStarted) return;
  allowSafeNavigation();
  state.started=false;
  state.fullscreenRequired=false;
  state.endedAt=new Date().toLocaleString('es-CO');
  stopSessionTimer();
  document.body.classList.remove('quiz-secure-active','game-active','fullscreen-paused','integrity-paused');
  $('#fullscreenBlock')?.classList.add('hidden');
  if(els.message) els.message.textContent=text;
  logEvent('fin de partida',text);
  drawScene();
  try{window.SCORMBridge?.finish?.(finalScore(),finalScore()>=3?'passed':'failed',state.sessionSeconds);}catch(error){console.warn('SCORM:',error);}
  deliverFinalReportAutomatically();
}
let pendingSceneFrame=0;
function scheduleSceneDraw(){
  if(pendingSceneFrame) return;
  pendingSceneFrame=requestAnimationFrame(()=>{pendingSceneFrame=0;drawScene();});
}
function syncControlUI(){
  if(els.angle) els.angle.value=String(state.angle);
  if(els.speed) els.speed.value=String(state.speed);
}
function adjustAngle(delta){if(!state.started||state.animating)return;state.angle=clamp(state.angle+delta,ANGLE_MIN,ANGLE_MAX);syncControlUI();updateLabels();updateInstantSuggestion();scheduleSceneDraw();}
function adjustSpeed(delta){if(!state.started||state.animating)return;state.speed=clamp(state.speed+delta,0,170);syncControlUI();updateLabels();updateInstantSuggestion();scheduleSceneDraw();}
function startGame(){
  if(els.accessCode.value.trim()!=="CRG25"){els.accessError.classList.remove("hidden");els.accessCode.focus();return;}
  els.accessError.classList.add("hidden");
  const selected=document.querySelector('input[name="avatar"]:checked');
  state.avatar=ACTIVE_AVATAR;
  updateAvatarPresentation();
  state.playerName=(els.playerName?.value||"Equipo 1").trim().replace(/\s+/g,' ')||"Equipo 1";
  state.groupName="Cálculo diferencial";
  state.started=true;state.fullscreenRequired=true;state.fullscreenRecoveryRequired=true;state.fullscreenRecoveryReason='Activa la pantalla completa para comenzar la partida.';state.securityGateRequired=false;state.lastSecurityReason='';state.quizAnnulled=false;state.annulReason='';state.annulledAt=null;state.finalReportDeliveryStarted=false;state.finalReportDownloaded=false;state.lastSecurityAttemptAt=0;state.ignoreSecurityUntil=Date.now()+1200;document.body.classList.remove('quiz-annulled');document.body.classList.add('quiz-secure-active','game-active');state.world=0;state.totalScore=0;state.arrows=80;state.wrongAttempts=0;state.correctAnswers=0;state.worldFails=0;state.sequenceStep=0;state.worldScore=0;state.challengeFails=0;state.challengeWrong=0;state.shots=[];state.questionHistory=[];state.events=[];state.security=securityDefaults();state.securityPenalty=0;state.securityEvents=[];state.securityPaused=false;state.securityDisqualified=false;state.securityLastAt=0;const __securityBlock=$("#fullscreenBlock");if(__securityBlock){__securityBlock.classList.remove('security-annulled');}const __resume=$("#resumeFullscreenBtn");if(__resume){__resume.disabled=false;__resume.classList.remove('hidden');__resume.textContent='Regresar y continuar';}const __footer=$("#securityGateFooter");if(__footer)__footer.textContent='Se bloquean clic derecho, copiar, cortar, pegar, guardar, imprimir, recargar, ver código fuente, captura de pantalla y los atajos usuales de herramientas de desarrollo.';resetQuestionQueues();prepareWorldSequences();state.startedAt=new Date().toLocaleString('es-CO');state.endedAt=null;
  els.startScreen.classList.add("hidden");els.gameShell.classList.remove("hidden");
  try{document.activeElement?.blur?.();}catch(_e){}
  requestAnimationFrame(()=>{try{canvas.focus({preventScroll:true});}catch(_e){canvas.focus();}});
  resumeFullScreenFlow(false);
  startSessionTimer();logEvent('inicio de partida',`${state.playerName} · ${state.groupName}`);
  try{window.SCORMBridge?.startAttempt?.();window.SCORMBridge?.saveScore?.(0,0);}catch(error){console.warn('SCORM:',error);}
  updateSecurityCounters();announceSecurityMessage('🛡️ Protección de integridad activa · 0/5 incidencias');resizeCanvas();startWorld(true);
}
let resizeTimer=0;
function syncResponsiveViewport(){
  const viewportHeight=Math.max(320,Math.round(window.visualViewport?.height||window.innerHeight||720));
  const viewportWidth=Math.max(320,Math.round(window.visualViewport?.width||window.innerWidth||1280));
  document.documentElement.style.setProperty('--app-height',`${viewportHeight}px`);
  document.documentElement.style.setProperty('--app-width',`${viewportWidth}px`);
  document.body.classList.toggle('compact-device',viewportWidth<760 || viewportHeight<560);
  document.body.classList.toggle('portrait-device',viewportHeight>viewportWidth);
}
function resizeCanvas(){
  clearTimeout(resizeTimer);
  resizeTimer=setTimeout(()=>{
    syncResponsiveViewport();
    const rect=canvas.getBoundingClientRect();
    const cssWidth=Math.max(320,Math.round(rect.width||window.innerWidth||1280));
    const cssHeight=Math.max(300,Math.round(rect.height||Math.max(360,(window.innerHeight||720)-110)));
    let ratio=Math.min(Math.max(window.devicePixelRatio||1,1),2);
    const maxBackingPixels=5200000;
    if(cssWidth*cssHeight*ratio*ratio>maxBackingPixels){
      ratio=Math.max(1,Math.sqrt(maxBackingPixels/(cssWidth*cssHeight)));
    }
    const nextW=Math.max(320,Math.round(cssWidth*ratio));
    const nextH=Math.max(300,Math.round(cssHeight*ratio));
    if(canvas.width!==nextW || canvas.height!==nextH){
      canvas.width=nextW;
      canvas.height=nextH;
      ctx.setTransform(1,0,0,1,0,0);
    }
    if(state.target) state.target.x=distToX(state.target.distance);
    scheduleSceneDraw();
  },60);
}

// Bloqueos de Conquista Integral: primera incidencia sin descuento, incidencias 2–4 con −0.05 y quinta incidencia con nota 0.
initSecurityGuards();
$("#btnStart").addEventListener("click",startGame);
$("#btnReport")?.addEventListener("click",()=>openReport(false));
$("#btnFinish")?.addEventListener("click",()=>endGame(`Partida finalizada manualmente. Nota final: ${finalScore().toFixed(2)} / 5.00.`));
$("#btnCloseReport")?.addEventListener("click",()=>els.reportDialog?.close());
$("#btnDownloadHtml")?.addEventListener("click",downloadReportHTML);els.accessCode.addEventListener("keydown",e=>{if(e.key==="Enter")startGame();});$("#btnShoot").addEventListener("click",shoot);$("#btnReset").addEventListener("click",startGame);$("#btnExitFullscreen").addEventListener("click",resumeFullScreenFlow);$("#btnGuide").addEventListener("click",()=>$("#guideDialog").showModal());$("#btnAnnounceStart").addEventListener("click",()=>{els.announcement.classList.add("hidden");updateInstantSuggestion();drawScene();});els.btnHint.addEventListener("click",()=>{
  els.hintBox.textContent = state.currentQuestion?.hint || "";
  els.hintBox.classList.remove("hidden");
  typesetMath(els.hintBox);
  try{els.hintBox.scrollIntoView({behavior:'smooth',block:'nearest'});}catch(_e){}
});
els.btnToggleFeedback?.addEventListener('click',()=>{
  if(els.btnToggleFeedback.disabled) return;
  const willOpen=els.feedback.classList.contains('hidden');
  revealFeedback(willOpen);
});
// El envío se controla por JavaScript. Esto evita que method="dialog" cierre o
// intercepte el formulario antes de mostrar la retroalimentación.
els.form.addEventListener("submit",submitAnswer);
els.btnSubmit?.addEventListener("click",submitAnswer);
els.btnContinue.addEventListener("click",continueGame);
els.form.addEventListener("keydown",e=>{
  if(e.key==="Enter" && !e.shiftKey && String(e.target?.tagName||"").toUpperCase()!=="TEXTAREA"){
    e.preventDefault();
    submitAnswer(e);
  }
});
els.angle?.addEventListener("input",e=>{if(!state.started||state.animating)return;state.angle=clamp(Number(e.target.value)||0,ANGLE_MIN,ANGLE_MAX);updateLabels();updateInstantSuggestion();scheduleSceneDraw();});
els.speed?.addEventListener("input",e=>{if(!state.started||state.animating)return;state.speed=clamp(Number(e.target.value)||0,0,170);updateLabels();updateInstantSuggestion();scheduleSceneDraw();});
const gameplayCodes=new Set(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"]);
function handleGameplayKey(e){
  if(!gameplayCodes.has(e.code)) return;
  if(!state.started || document.querySelector("dialog[open]")) return;
  const active=document.activeElement;
  const tag=String(active?.tagName||"").toUpperCase();
  const editable=active?.isContentEditable || ["INPUT","TEXTAREA","SELECT","BUTTON"].includes(tag);
  const hiddenStartField=editable && els.startScreen?.classList.contains("hidden");
  if(editable && !hiddenStartField && active!==canvas) return;
  e.preventDefault();
  e.stopPropagation();
  if(typeof e.stopImmediatePropagation==="function") e.stopImmediatePropagation();
  if(hiddenStartField){try{active.blur();canvas.focus({preventScroll:true});}catch(_e){}}
  const step=e.shiftKey?5:1;
  if(e.code==="ArrowUp") adjustAngle(step);
  else if(e.code==="ArrowDown") adjustAngle(-step);
  else if(e.code==="ArrowRight") adjustSpeed(step*2);
  else if(e.code==="ArrowLeft") adjustSpeed(-step*2);
  else if(e.code==="Space" && !e.repeat) shoot();
}
document.addEventListener("keydown",handleGameplayKey,{capture:true,passive:false});
canvas.addEventListener("pointerdown",()=>{try{canvas.focus({preventScroll:true});}catch(_e){canvas.focus();}});
window.addEventListener("resize",resizeCanvas,{passive:true});
window.addEventListener("orientationchange",()=>setTimeout(resizeCanvas,180),{passive:true});
window.visualViewport?.addEventListener("resize",resizeCanvas,{passive:true});
window.visualViewport?.addEventListener("scroll",resizeCanvas,{passive:true});
if(typeof ResizeObserver!=="undefined"){
  const gameResizeObserver=new ResizeObserver(()=>resizeCanvas());
  gameResizeObserver.observe(canvas);
  if(els.gameShell) gameResizeObserver.observe(els.gameShell);
}
syncResponsiveViewport();


document.querySelectorAll('input[name="avatar"]').forEach(el=>el.addEventListener('change',e=>{ state.avatar=ACTIVE_AVATAR; updateAvatarPresentation(); scheduleSceneDraw(); }));
updateAvatarPresentation();
