import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Sumadora from './pages/Sumadora';
import Traductor from './pages/Traductor'; 
import TablaMultiplicar from './pages/TablaMultiplicar'; 
import ExperienciaPersonal from './pages/ExperienciaPersonal'; 

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import '@ionic/react/css/palettes/dark.system.css';
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>

      {/* Barra de navegación superior */}
      <IonHeader>
        <IonToolbar>
          <IonTitle>Mi App React</IonTitle>
          <IonButtons slot="end">
            <IonButton routerLink="/home">Página Principal</IonButton>
            <IonButton routerLink="/sumadora">Sumadora</IonButton>
            <IonButton routerLink="/traductor">Traductor</IonButton>
            <IonButton routerLink="/tabla-multiplicar">Tabla</IonButton>
            <IonButton routerLink="/experiencia-personal">Experiencia</IonButton>  {/* 👈 AGREGADO */}
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      {/* Contenido de las páginas */}
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/sumadora">
          <Sumadora />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/traductor">
          <Traductor />
        </Route>
        <Route exact path="/tabla-multiplicar">
          <TablaMultiplicar />
        </Route>
        <Route exact path="/experiencia-personal">  
          <ExperienciaPersonal />  {/* 👈 AGREGADO */}
        </Route>
      </IonRouterOutlet>
      
    </IonReactRouter>
  </IonApp>
);

export default App;
