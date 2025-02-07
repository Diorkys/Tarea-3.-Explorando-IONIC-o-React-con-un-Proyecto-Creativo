import React, { useState } from 'react';
import { 
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent, 
  IonItem, IonLabel, IonInput, IonCard, IonCardContent 
} from '@ionic/react';
import './Sumadora.css';

const Sumadora: React.FC = () => {
  const [numero1, setNumero1] = useState<number>(0);
  const [numero2, setNumero2] = useState<number>(0);
  const [resultado, setResultado] = useState<number | null>(null);

  const manejarSuma = () => {
    setResultado(numero1 + numero2);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Sumadora</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <div className="container">
          <IonCard className="sumadora-card">
            <IonCardContent>
              
              <h2 className="card-title">Sumadora</h2>

              {/* Entrada de Número 1 */}
              <IonItem className="input-item">
                <IonLabel position="stacked" className="input-label">Número 1</IonLabel>
                <IonInput 
                  type="number"
                  value={numero1} 
                  onIonChange={(e) => setNumero1(Number(e.detail.value!))}
                  className="input-field"
                />
              </IonItem>

              {/* Entrada de Número 2 */}
              <IonItem className="input-item">
                <IonLabel position="stacked" className="input-label">Número 2</IonLabel>
                <IonInput 
                  type="number"
                  value={numero2} 
                  onIonChange={(e) => setNumero2(Number(e.detail.value!))}
                  className="input-field"
                />
              </IonItem>

              {/* Botón de Sumar */}
              <button className="sum-button" onClick={manejarSuma}>
             Sumar
              </button>

              {/* Mostrar el resultado con título resaltado */}
              {resultado !== null && (
                <div className="result-section">
                  <h3 className="result-title">Resultado</h3>
                  <div className="result-box">
                    {resultado}
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

export default Sumadora;
