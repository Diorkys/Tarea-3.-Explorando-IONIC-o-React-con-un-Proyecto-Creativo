import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent } from '@ionic/react';
import './ExperienciaPersonal.css';

const ExperienciaPersonal: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Experiencia Personal</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <div className="container">
          <IonCard className="experience-card">
            <IonCardContent>
              <h2 className="card-title">Mi Experiencia con Ionic y React</h2>

              {/* Video de YouTube */}
              <div className="video-container">
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/Y5RQrumwlN8"
                  title="Experiencia con Ionic y React"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <p className="experience-text">
                En este video explico mi experiencia al realizar esta tarea, los desafíos que enfrenté y también lo que aprendí durante el proceso.
              </p>
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ExperienciaPersonal;
