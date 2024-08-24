import React, { useState, useEffect, useCallback } from 'react';
import { useRoutes, useNavigate } from 'react-router-dom';
import ShowCreators from './pages/ShowCreators';
import ViewCreator from './pages/ViewCreator';
import EditCreator from './pages/EditCreator';
import AddCreator from './pages/AddCreator';
import supabase from './client';

function App() {
  const [creators, setCreators] = useState([]);
  const navigate = useNavigate();

 
  const fetchCreators = useCallback(async () => {
    const { data } = await supabase
      .from('creators')
      .select('*');

    
      setCreators(data);
      }, []);

  useEffect(() => {
    fetchCreators();
  }, [fetchCreators]);

 
  const handleEditCreator = async (id, updatedCreator) => {
    const { data} = await supabase
      .from('creators')
      .update(updatedCreator)
      .eq('id', id);
      fetchCreators(); 
      navigate('/'); 
    
  };


  const handleAddCreator = async (newCreator) => {
    const { data} = await supabase
      .from('creators')
      .insert([newCreator]);

      fetchCreators(); 
      navigate('/'); 

  };


  const handleDeleteCreator = async (id) => {
    const { data } = await supabase
      .from('creators')
      .delete()
      .eq('id', id);
      
      fetchCreators(); 
      navigate('/'); 
  };

  const routes = useRoutes([
    { path: '/', element: <ShowCreators creators={creators} /> },
    { path: '/creator/:id', element: <ViewCreator /> },
    { path: '/edit/:id', element: <EditCreator onEditCreator={handleEditCreator} onDeleteCreator={handleDeleteCreator} /> },
    { path: '/add', element: <AddCreator onAddCreator={handleAddCreator} /> },
  ]);

  return routes;
}

export default App;
