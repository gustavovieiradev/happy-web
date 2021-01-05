import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { MapContainer, Marker, TileLayer, useMapEvents } from 'react-leaflet';
import { FiPlus } from 'react-icons/fi';

import '../styles/pages/create-orphanage.css';
import Sidebar from '../components/Sidebar';
import { LeafletMouseEvent } from 'leaflet';
import mapIcon from '../utils/mapIcon';
import api from '../services/api';
import { useHistory } from 'react-router-dom';

export default function OrphanagesMap() {
  const history = useHistory();
  const [position, setPosition] = useState({latitude: 0, longitude: 0});
  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [instructions, setInstructions] = useState('');
  const [opening_hours, setOpeningHours] = useState('');
  const [open_on_weekends, setOpenWeekends] = useState(true);
  const [images, setImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  const Markers = () => {
    useMapEvents({
      click(event: LeafletMouseEvent) {                           
        const { lat, lng } = event.latlng;
        setPosition({
          latitude: lat,
          longitude: lng
        });
      },            
    });

    return (
      <>
        {position.latitude !== 0 ? 
          <Marker interactive={false} icon={mapIcon} position={[position.latitude, position.longitude]} />
        : null}
      </>
    )
  }

  const handleSubmit = useCallback(async (event: FormEvent) => {
    event.preventDefault();

    const {latitude, longitude} = position;

    const data = new FormData();

    data.append('name', name);
    data.append('about', about);
    data.append('latitude', latitude.toString());
    data.append('longitude', longitude.toString());
    data.append('instructions', instructions);
    data.append('opening_hours', opening_hours);
    data.append('open_on_weekends', String(open_on_weekends));
    
    images.forEach(image => {
      data.append('images', image);
    });

    await api.post('orphanages', data);
    alert('Cadastro realizado com sucesso!');
    history.push('/app');

  }, [position, about, name, instructions, opening_hours, open_on_weekends, images, history]);

  const handleSelectImages = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      return;
    }

    const selectedImages = Array.from(event.target.files);

    setImages(selectedImages);

    const selectedImagesPreview = selectedImages.map(image => {
      return URL.createObjectURL(image);
    })

    setPreviewImages(selectedImagesPreview);

  }, [])

  return (
    <div id="page-create-orphanage">
      <Sidebar />

      <main>
        <form className="create-orphanage-form" onSubmit={handleSubmit}>
          <fieldset>
            <legend>Dados</legend>

            <MapContainer
              center={[-15.8431217,-47.8723847]}
              zoom={15}
              style={{ width: '100%', height: 280 }}
            >
              <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
              {/* <Marker interactive={false} icon={mapIcon} position={[-22.8037431,-47.5062772]} /> */}
              <Markers />
            </MapContainer>

            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input id="name" value={name} onChange={event => setName(event.target.value)} />
            </div>

            <div className="input-block">
              <label htmlFor="about">Sobre <span>Máximo de 300 caracteres</span></label>
              <textarea id="about" maxLength={300} onChange={event => setAbout(event.target.value)} value={about} />
            </div>

            <div className="input-block">
              <label htmlFor="images">Fotos</label>

              <div className="images-container">
                {previewImages.map(image => (
                  <img key={image} src={image} alt={name} />
                ))}
                <label className="new-image" htmlFor="image[]">
                  <FiPlus size={24} color="#15b6d6" />
                </label>
              </div>
              <input type="file" id="image[]" multiple onChange={handleSelectImages} />

            </div>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <div className="input-block">
              <label htmlFor="instructions">Instruções</label>
              <textarea id="instructions" onChange={event => setInstructions(event.target.value)} value={instructions}/>
            </div>

            <div className="input-block">
              <label htmlFor="opening_hours">Horário de funcionamento</label>
              <input id="opening_hours" value={opening_hours} onChange={event => setOpeningHours(event.target.value)} />
            </div>

            <div className="input-block">
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <div className="button-select">
                <button type="button" className={open_on_weekends ? 'active' : ''} onClick={() => setOpenWeekends(true)}>Sim</button>
                <button type="button" className={!open_on_weekends ? 'active' : ''} onClick={() => setOpenWeekends(false)}>Não</button>
              </div>
            </div>
          </fieldset>

          <button className="confirm-button" type="submit">
            Confirmar
          </button>
        </form>
      </main>
    </div>
  );
}