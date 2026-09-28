import "./app.css";
import "./style.css";

function App() {
  return (
    <>
      {/* ----- Aufgabe 1 ----- */}
      <button>Button 1</button>
      <button style={{fontSize: "20px", backgroundColor: "red"}}>Button 2</button>
      {/* 1.1) Erklärung: Ich habe cursor: pointer gewählt, weil der Zeigefinger zeigt: "Hier kann man klicken".
                          Der Mauszeiger ändert sich im Browser tatsächlich, wenn ich über den Button fahre. */}
      {/* 1.5) Erklärung: Button 2 wird von der button-Regel in style.css und von seinem eigenen style-Attribut erfasst.
                          Der Hintergrund ist rot, denn was direkt im Element steht (Inline-Style), gewinnt gegen die CSS-Datei.
                          Die Schriftgrösse 20px kommt ebenfalls vom Inline-Style. Die Schriftfarbe kommt weiter aus style.css,
                          weil der Inline-Style dafür nichts festlegt. Nur Eigenschaften, die sich wirklich widersprechen, werden überschrieben. */}

      {/* ----- Aufgabe 2 ----- */}
      <div id="Elternelement" style={{display: "flex", flexDirection: "row", width: "500px", border: "2px dashed grey",
        justifyContent: "space-between"}}>
        <div id="Kind_1"></div>
        <div id="Kind_2"></div>
        <div id="Kind_3"></div>
        <span id="Kind_4">Span</span>
      </div>
      {/* 2.3) Erklärung: Beim Span werden Rahmen und Hintergrundfarbe angezeigt, Höhe und Breite dagegen ignoriert.
                          Das Span ist ein Inline-Element: Es ist nur so gross wie sein Inhalt und steht in der Textzeile.
                          Ein div ist ein Block-Element, nimmt eine ganze Zeile ein und übernimmt Höhe und Breite.
                          Ohne Text im Span bleibt nur der Rahmen als schmaler Strich sichtbar. */}
      {/* 3.1) Erklärung: Die Kinder sind jetzt neben und nicht mehr unter einenander.
                          Die Höhe und Breite des Rahmens (in .css definiert) wird jetzt auch auf das Span-Objekt angewendet, da sie durch die Flex-Box automatisch zu Blöcken werden */}
      {/* 3.2) Erklärung: justifyContent:
                          "left" --> alle Boxen im Elternelement linksbündig, kleben aneinander
                          "right"--> alle Boxen im Elternelement rechtsbündig, kleben aneinander
                          "center" --> alle Boxen im Elternelement in der Mitte, kleben aneinander
                          "space-around" --> alle Boxen im Elternelement haben den selben Abstand von einander und den halben Abstand vom Rand
                          "space-between" --> alle Boxen im Elternelement haben den selben Abstand von einander und kleben am Rand */}
    </>
  );
}

export default App;
