import { 
  IonCol, 
  IonContent, 
  IonGrid, 
  IonHeader, 
  IonItem, 
  IonLabel, 
  IonList,
  IonPage, 
  IonRow, 
  IonTitle, 
  IonToolbar
} from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { getData } from '../service/util';
import './Home.css';

const Home: React.FC = () => {

  const [data, setData] = useState([]);
  let history = useHistory();

  useEffect(() => {
    getData().then((response: any) => {
      if (response.request.response) {
        setData(JSON.parse(response.request.response));
      }
    })
  }, [])
    
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>List of Names</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol></IonCol>
            <IonCol>
              <IonList>
                {typeof data !== "undefined" ?
                  data.map((item: any, key: any) => {
                      return (
                        <IonItem 
                          key={`data-${key}`}
                          onClick={() => {
                           history.push({
                             pathname: "/details",
                             state: {
                               data: item
                             }
                           }) 
                          }}
                          >
                          <IonLabel>{item.name}</IonLabel>
                        </IonItem>
                      )
                    })
                  : "" 
                }
                
              </IonList>
            </IonCol>
            <IonCol></IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
