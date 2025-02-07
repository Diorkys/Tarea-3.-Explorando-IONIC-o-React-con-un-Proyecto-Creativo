import React from 'react';
import { 
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent 
} from '@ionic/react';
import './Home.css';

const PaginaPrincipal: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Página Principal</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <div className="container">
          <IonCard className="profile-card">
            <IonCardContent>
              
              <h2 className="card-title">Perfil</h2>

              {/* Imagen de perfil */}
              <img 
                src="public\assets\img\foto2x2.png" 
                alt="Perfil" 
                className="profile-image"
              />

              {/* Información Personal */}
              <p className="profile-info"><strong>Nombre:</strong> Diorkys Cabrera Del Rosario</p>
              <p className="profile-info"><strong>Matrícula:</strong> 2022-2115</p>
              <p className="profile-info"><strong>Correo:</strong> diorkys0204@gmail.com</p>
              <p className="profile-info"><strong>Carrera:</strong> Desarrollo de Software</p>
              <p className="profile-info"><strong>Materia:</strong> Desarrollo de Aplicaciones Móviles</p>
              <p className="profile-info"><strong>Maestro: </strong>Amadís Suárez Genao</p>

            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PaginaPrincipal;
