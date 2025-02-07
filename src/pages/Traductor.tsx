import React, { useState } from 'react';
import { 
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent, 
  IonItem, IonLabel, IonInput, IonCard, IonCardContent 
} from '@ionic/react';
import './TablaMultiplicar.css'; 

const numeroALetras = (num: number): string => {
  const unidades = ['Cero', 'Uno', 'Dos', 'Tres', 'Cuatro', 'Cinco', 'Seis', 'Siete', 'Ocho', 'Nueve'];
  const especiales = ['Diez', 'Once', 'Doce', 'Trece', 'Catorce', 'Quince', 'Dieciséis', 'Diecisiete', 'Dieciocho', 'Diecinueve'];
  const decenas = ['', '', 'Veinte', 'Treinta', 'Cuarenta', 'Cincuenta', 'Sesenta', 'Setenta', 'Ochenta', 'Noventa'];
  const centenas = ['', 'Ciento', 'Doscientos', 'Trescientos', 'Cuatrocientos', 'Quinientos', 'Seiscientos', 'Setecientos', 'Ochocientos', 'Novecientos'];

  if (num === 100) return 'Cien';
  if (num === 1000) return 'Mil';
  if (num < 10) return unidades[num];
  if (num < 20) return especiales[num - 10];
  if (num < 100) return num % 10 === 0 ? decenas[num / 10] : `${decenas[Math.floor(num / 10)]} y ${unidades[num % 10]}`;

  if (num < 200) return `Ciento ${numeroALetras(num % 100)}`;

  if (num < 1000) {
    if (num % 100 === 0) return centenas[num / 100];
    return `${centenas[Math.floor(num / 100)]} ${numeroALetras(num % 100)}`.trim();
  }

  return 'Número fuera de rango';
};

const Traductor: React.FC = () => {
  const [numero, setNumero] = useState<number | ''>('');
  const [resultado, setResultado] = useState<string[]>([]);

  const manejarTraduccion = () => {
    if (numero === '' || numero < 1 || numero > 1000) {
      setResultado(["Ingrese un número entre 1 y 1000."]);
      return;
    }
    setResultado([numeroALetras(Number(numero))]);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Traductor de Números</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <div className="container">
          <IonCard className="multiplicar-card">
            <IonCardContent>

              <h2 className="card-title">Traductor de Números</h2>

              {/* Entrada de Número */}
              <IonItem className="input-item">
                <IonLabel position="stacked" className="input-label">Número (1 - 1000)</IonLabel>
                <IonInput 
                  type="number"
                  value={numero} 
                  min="1"
                  max="1000"
                  onIonChange={(e) => setNumero(e.detail.value ? parseInt(e.detail.value, 10) : '')}
                  className="input-field"
                />
              </IonItem>

              {/* Botón de Traducir */}
              <button className="generate-button" onClick={manejarTraduccion}>
             Traducir
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

export default Traductor;
