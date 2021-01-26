import { IonBackButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { useHistory } from 'react-router';

const Details: React.FC = () => {
    let history = useHistory();
    let data: any = history.location.state;
    
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Details</IonTitle>
                    <IonButtons slot="start">
                        <IonBackButton />
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                {typeof data !== "undefined" ?
                
                    <IonGrid>
                        <IonRow>
                            <IonCol className="ion-text-right">Name:</IonCol>
                            <IonCol>{data.data.name}</IonCol>
                            <IonCol></IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol className="ion-text-right">Email:</IonCol>
                            <IonCol> {data.data.email}</IonCol>
                            <IonCol></IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol className="ion-text-right">Phone:</IonCol>
                            <IonCol>{data.data.phone}</IonCol>
                            <IonCol></IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol className="ion-text-right">Username:</IonCol>
                            <IonCol>{data.data.username}</IonCol>
                            <IonCol></IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol className="ion-text-right">Website:</IonCol>
                            <IonCol>{data.data.website}</IonCol>
                            <IonCol></IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol className="ion-text-right">Company:</IonCol>
                            <IonCol>{data.data.company.name}</IonCol>
                            <IonCol></IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol className="ion-text-right">Address</IonCol>
                            <IonCol>{data.data.address.suite}, {data.data.address.street}, {data.data.address.city}, {data.data.address.zipcode}</IonCol>
                            <IonCol></IonCol>
                        </IonRow>
                    </IonGrid>
                : "" }
            </IonContent>
        </IonPage>
    );
}

export default Details;