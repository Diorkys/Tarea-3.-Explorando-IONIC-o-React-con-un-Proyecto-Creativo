import React, { useState } from 'react';
import { 
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent, 
  IonItem, IonLabel, IonInput, IonCard, IonCardContent 
} from '@ionic/react';
import './TablaMultiplicar.css';

const TablaMultiplicar: React.FC = () => {
  const [numero, setNumero] = useState<number | ''>('');
  const [resultado, setResultado] = useState<string[]>([]);

  const generarTabla = () => {
    if (numero === '' || numero < 1 || numero > 13) {
        setResultado(["Ingrese un número entre 1 y 13."]);
        return;
      }
      
    
    const tabla = [];
    for (let i = 1; i <= 13; i++) {
        tabla.push(`${numero} × ${i} = ${numero * i}`);
      }      
    setResultado(tabla);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Tabla de Multiplicar</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <div className="container">
          <IonCard className="multiplicar-card">
            <IonCardContent>

              <h2 className="card-title">Tabla de Multiplicar</h2>

              {/* Entrada de Número */}
              <IonItem className="input-item">
                <IonLabel position="stacked" className="input-label">Número (1 - 13)</IonLabel>
                <IonInput 
                  type="number"
                  value={numero} 
                  min="1"
                  max="12"
                  onIonChange={(e) => setNumero(e.detail.value ? parseInt(e.detail.value, 10) : '')}
                  className="input-field"
                />
              </IonItem>

              {/* Botón de Generar Tabla */}
              <button className="generate-button" onClick={generarTabla}>
             Generar
              </button>

              {/* Mostrar el resultado */}
              {resultado.length > 0 && (
                <div className="result-section">
                  <h3 className="result-title">Resultado</h3>
                  <div className="result-box">
                    {resultado.map((linea, index) => (
                      <p key={index}>{linea}</p>
                    ))}
                  </div>
                </div>
              )}

            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default TablaMultiplicar;
