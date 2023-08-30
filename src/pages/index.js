import { useContext, useEffect, useState } from "react";
import NotesCards from "@/Components/NotesCards";
import NavBarHome from "@/Components/NavBarHome";
import { firestore } from "@/Lib/Firebase";
import { UserContext } from "@/Lib/UserContext";



export default function Home() {
  const[ notesData, setNotesData ] = useState( null );
  const { user } = useContext( UserContext );

  const fetchingData = async ( email ) => {
    try{

        const apiResponse = await firestore.collection( 'AllNotes' ).doc( email ).collection('notes').get();
        const notesArray = [];
        apiResponse.docs.map( note => {
          const { title, body } = note.data();
          const id = note.id;

          notesArray.push( { 
            title, 
            body, 
            id 
          } );
        })

        setNotesData( notesArray );

    } catch ( error ){
      console.log( 'error', error );
    }
  }
  useEffect( ()=> {
    if( user ){
      fetchingData( user.email );
    } else {
      setNotesData( null );
    }
  }, [ user ])
  return (
    < >
        <NavBarHome />
        <div className="container d-flex justify-content-center flex-wrap">
        {
          notesData ? 
            <NotesCards notes = { notesData } />
          :
            <h3 className="display-4"> Login </h3>
        }
        </div>
        
    </>
  )
}